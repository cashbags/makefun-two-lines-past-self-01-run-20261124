# Two Lines to Your Past Self — The Red Motorcycle

[![make.fun · u-suga-two-lines-to-your-past-self-f36c83ca](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/cashbags/makefun-two-lines-past-self-01-run-20261124/rank.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/cashbags/makefun-two-lines-past-self-01-run-20261124/reward.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)

Two lines sent back to a past self. Line one warns about one moment — the
afternoon a daughter is born, the day a red motorcycle is bought. Line two
traces what that afternoon cost: the crash that October took a leg, and she
learned to ride her bicycle while he learned to walk again. One decision,
two lives changed in opposite directions.

The moment is a fresh lane in a field flooded with 2 a.m. texts, voicemails
and kitchen-table sentences. It won a pairwise self-judge tournament against
the judge's exact rubric, beating seven other candidate pairs; see
`DESIGN.md` for the candidates, the tournament and the flood-check.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt — the two lines, 178 characters, no trailing newline
```

`main.ts` (Node 22, stdlib only) holds the text as one constant and writes it
to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). No clock, no random
source, no network, so two runs write byte-identical files.
