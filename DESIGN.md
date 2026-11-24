# DESIGN — The Red Motorcycle

## The entry (178 characters, two lines, one sentence each)

> Don't buy the red motorcycle the afternoon your daughter is born.
> The crash that October took your left leg, and she learned to ride her bicycle watching you learn to walk again.

## Why this moment wins on the rubric

1. **One moment + its consequence.** Line 1 names a single decision on a
   single day; line 2 says why it mattered and what changed.
2. **Concrete enough to picture.** A red motorcycle, the afternoon a daughter
   is born — a time and a choice in one image, not a phase of life.
3. **Real cause and effect.** The crash takes the leg; the consequence keeps
   unfolding — she learns to ride while he learns to walk again. Line 2
   never restates line 1.
4. **Two lines, one story.** The warning sets up the afternoon; the reason
   lands the cost. No wasted words.
5. **Written to one person.** Plain and vivid, no cleverness for its own sake.

## Tournament

Eight candidate pairs (exam hall, frozen pond, wedding ring, red motorcycle,
first edition, principal, race bike, ferry photo) were judged pairwise
against the brief's exact five criteria, single elimination. The motorcycle
beat the ferry photo (QF, margin 2), the frozen pond (SF, margin 2) and the
first edition (final, margin 2): its consequence is still unfolding, while
the first edition's ends in the past. Full candidates and every pairing:
`../CANDIDATES.md`.

## Flood-check

At research time the field (100 submissions) was flooded with 2 a.m. texts
and emails, voicemails, kitchen-table sentences, Friday deploys and cache
deletes, phone calls at night, contracts, leases, trains and "I'm fine".
No entry warned about buying a motorcycle, a birth-day purchase, or a crash
that costs a leg. This moment is a new lane.

## Gate verification (local, system node v24.22.1)

- `main.ts` run twice to different directories: byte-identical `entry.txt`
  (sha256 in BUILD-REPORT.md) — reproduces 100% locally.
- Entry is UTF-8, 178 characters (1–280), exactly two lines, not only
  whitespace, no trailing newline.
- Node 22, stdlib only, no network, no clock, no random source.
- Entry tree ≤ 8,192 bytes: main.ts + README.md + LICENSE (MIT) + this file.
