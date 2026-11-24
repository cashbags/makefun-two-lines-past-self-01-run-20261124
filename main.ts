// Two Lines to Your Past Self — make.fun
// u-suga-two-lines-to-your-past-self-f36c83ca
//
// The entry is two lines, 178 characters, written to entry.txt with no
// trailing newline. Line one warns the past self about one specific moment;
// line two says in one sentence why that moment mattered and what changed
// because of it. The judge weighs, in order: (1) a warning about one
// specific moment plus its consequence; (2) a moment concrete enough to
// picture — a time, a place, a decision, a sentence said out loud; (3) a
// second line that traces real cause and effect instead of restating the
// warning; (4) two lines that work as one, no wasted words; (5) a voice
// written to one specific person, plain and vivid rather than clever.
//
// Why this moment: the afternoon a daughter is born is a date the writer
// can never move, and the red motorcycle is a decision made on that exact
// day. The second line does not repeat the warning: the crash that October
// takes the leg, and the consequence keeps unfolding — she learns to ride
// her bicycle while he learns to walk again. It is a fresh lane: the field
// was flooded with 2 a.m. texts, voicemails, kitchen-table sentences and
// Friday deploys, and no entry warned about buying a motorcycle. It won a
// pairwise self-judge tournament against the exact rubric. See DESIGN.md.
//
// Determinism: the text is a constant; no clock, no random source, no
// network, and the only environment read is MAKEFUN_OUTPUT_DIR. Two runs to
// different directories write byte-identical files, as the grader requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two lines, one sentence each, 178 characters including the newline. The
// gate counts characters (1-280), and the judge is shown the text exactly
// as submitted, so there is no trailing newline and no extra line. The two
// lines are kept as separate constants so the shape of the entry — exactly
// two lines, one sentence each — is visible in the code, not just in a
// string. The guard below fails loudly instead of writing a bad entry if
// the text is ever edited past the gate.
const LINE1 = "Don't buy the red motorcycle the afternoon your daughter is born.";
const LINE2 =
  "The crash that October took your left leg, and she learned to ride her bicycle watching you learn to walk again.";
const ENTRY = LINE1 + "\n" + LINE2;

// Gate self-check: UTF-8, 1-280 characters, exactly two lines, not only
// whitespace. A constant that breaks the gate is a build error, caught
// here, not a silent invalid entry on the server.
if (
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 280 ||
  ENTRY.split("\n").length !== 2 ||
  ENTRY.trim().length === 0
) {
  throw new Error("entry violates the gate: must be 1-280 chars, two lines");
}

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(ENTRY, "utf8"));
