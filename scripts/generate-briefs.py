#!/usr/bin/env python3
"""Generate conversational spoken briefs for the homepage studio."""

import asyncio
import re
from pathlib import Path

from edge_tts import Communicate

ROOT = Path(__file__).resolve().parents[1]
DATA = (ROOT / "src" / "site-data.ts").read_text(encoding="utf-8")
OUT = ROOT / "public" / "audio"

# Mature British female — slower, warmer storyteller delivery (not a young voice).
VOICE = "en-GB-SoniaNeural"
RATE = "-12%"
PITCH = "-2Hz"


def briefs():
    blocks = re.findall(
        r'id:\s*"([^"]+)",\s*\n\s*stage:\s*"(?:understand|structure|implement)"[\s\S]*?spoken:\s*\n\s*"([^"]+)"',
        DATA,
    )
    if len(blocks) < 12:
        raise SystemExit(f"Expected 12 briefs, found {len(blocks)}: {[b[0] for b in blocks]}")
    return blocks


def for_speech(text: str) -> str:
    text = text.replace("A.I.", "AI").replace("A.I", "AI")
    text = re.sub(r"\s*[—–]\s*", ", ", text)
    return text.strip()


def to_ssml(text: str) -> str:
    text = for_speech(text)
    text = text.replace("…", '<break time="700ms"/>')
    text = re.sub(r",\s*(ah|oh|hmm)\s*,", r', <break time="280ms"/> \1,', text, flags=re.I)
    text = re.sub(r"^(So|Okay|Ah|Oh)\s*,", r'\1, <break time="320ms"/>', text, flags=re.I)
    sentences = re.split(r"(?<=[.!?])\s+", text)
    body = ' <break time="520ms"/> '.join(s.strip() for s in sentences if s.strip())
    return f'<speak><prosody pitch="-1st">{body}</prosody></speak>'


async def one(item_id: str, text: str) -> None:
    path = OUT / f"{item_id}.mp3"
    ssml = to_ssml(text)
    communicate = Communicate(ssml, VOICE, rate=RATE, pitch=PITCH, proxy=None)
    await communicate.save(str(path))
    print(f"wrote {path.name} ({path.stat().st_size:,} bytes)")


async def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for item_id, text in briefs():
        await one(item_id, text)
        await asyncio.sleep(0.4)


if __name__ == "__main__":
    asyncio.run(main())
