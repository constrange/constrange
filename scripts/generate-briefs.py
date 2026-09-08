#!/usr/bin/env python3
"""Generate conversational spoken briefs for the homepage studio."""

import asyncio
import re
from pathlib import Path

from edge_tts import Communicate

ROOT = Path(__file__).resolve().parents[1]
DATA = (ROOT / "src" / "site-data.ts").read_text(encoding="utf-8")
OUT = ROOT / "public" / "audio"

# Ava multilingual is a newer conversational model. Sonia (the previous voice)
# is an older newsreader neural and reads like a machine.
VOICE = "en-US-AvaMultilingualNeural"
RATE = "-2%"
PITCH = "+0Hz"


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
    # US multilingual voice: keep British meaning, avoid letter-by-letter readings.
    text = re.sub(r"\bprogrammes\b", "programs", text)
    text = re.sub(r"\bprogramme\b", "program", text)
    text = re.sub(r"\bsummarise\b", "summarize", text)
    text = re.sub(r"\s*[—–]\s*", ", ", text)
    return text.strip()


async def one(item_id: str, text: str) -> None:
    path = OUT / f"{item_id}.mp3"
    spoken = for_speech(text)
    communicate = Communicate(spoken, VOICE, rate=RATE, pitch=PITCH, proxy=None)
    await communicate.save(str(path))
    print(f"wrote {path.name} ({path.stat().st_size:,} bytes) — {spoken}")


async def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for item_id, text in briefs():
        await one(item_id, text)
        await asyncio.sleep(0.35)


if __name__ == "__main__":
    asyncio.run(main())
