import { mkdirSync, writeFileSync } from "node:fs";

// A painfully honest out-of-office: the sender admits, between us, that
// the auto-reply has done more work all week than they have, then asks
// the reader to bear with them and promises a proper answer once back
// at their desk. The honesty is the confession of a week of idleness;
// the politeness is the warm promise that follows it, so a manager
// reading it sees self-deprecation, not defiance.
const LINE =
  "I'm out of the office until Thursday, and between us, my out-of-office is doing more work than I have all week, so please bear with me and I'll answer properly once I'm back at my desk.";

if (!(1 <= LINE.length && LINE.length <= 200)) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
