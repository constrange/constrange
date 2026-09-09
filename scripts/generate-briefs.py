#!/usr/bin/env python3
"""Generate conversational spoken briefs for the homepage studio."""

import asyncio
import re
from pathlib import Path

from edge_tts import Communicate

ROOT = Path(__file__).resolve().parents[1]
DATA = (ROOT / "src" / "site-data.ts").read_text(encoding="utf-8")
OUT = ROOT / "public" / "audio"

# Warm British neural voice — slower pace for storytelling, not newsreader delivery.
VOICE = "en-GB-MaisieNeural"
RATE = "-4%"
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
    text = re.sub(r"\s*[—–]\s*", ", ", text)
    text = re.sub(r"\s*—\s*", ", ", text)
    return text.strip()


async def one(item_id: str, text: str) -> None:
    path = OUT / f"{item_id}.mp3"
    spoken = for_speech(text)
    communicate = Communicate(spoken, VOICE, rate=RATE, pitch=PITCH, proxy=None)
    await communicate.save(str(path))
    print(f"wrote {path.name} ({path.stat().st_size:,} bytes)")


async def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for item_id, text in briefs():
        await one(item_id, text)
        await asyncio.sleep(0.35)


if __name__ == "__main__":
    asyncio.run(main())
