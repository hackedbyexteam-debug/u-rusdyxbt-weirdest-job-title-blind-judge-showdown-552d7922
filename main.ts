// Weirdest Job Title: Blind Judge Showdown — final entry.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) is a weird job title, a few words naming an odd job, and loses
// to any weirder job title; (2) stranger than ordinary work — a job nobody
// has heard of, or one with a gloriously odd twist; (3) funny, with a twist
// that lands on the first read; (4) sounds like a real job rather than a
// random word salad, specific enough to picture the person doing it;
// (5) reads instantly, short enough to take in at a glance.
//
// Candidates:
//  1. "Senior Apologiser for Elevators That Stop Between Floors"
//  2. "Professional Queue Stander for People Who Hate Queues"
//  3. "Chief Mourner for Funerals With No Relatives"
//  4. "Iceberg Relocation Consultant"
//  5. "Full-Time Listener to Complaints About the Weather"
//  6. "Official Taster of Airline Food Nobody Eats"
//  7. "Pigeon Traffic Controller, Central Station"
//  8. "Senior Inspector of Hotel Pillows, Second Floor Only"
//  9. "Professional Sleeper for Mattress Showrooms"
// 10. "Pet Psychic for Cats Who Refuse to Come Home"
// 11. "Moonlight Tester for Streetlamps That Flicker"
// 12. "Chief Officer of Lost Left Socks"
// 13. "Underwater Basket Weaving Instructor"
// 14. "Professional Apologiser to Geese"
//
// Rejected as modal (the field's centre): #13 (underwater basket weaving
// is a known meme, not a fresh title), #9 (professional sleeper / mattress
// tester is the stock "weird job" listicle entry), #2 (queue stander is a
// real gig-economy job, barely weirder than ordinary work).
// Rejected on C2/C4 (not strange enough, or not a real-sounding job):
// #4 (weird but no joke — an iceberg consultant is odd, not funny),
// #5 (a listener is ordinary work with a dull twist), #11 (poetic, but
// "moonlight tester" reads as word salad, not a job you can picture),
// #14 (funny image, but apologising to geese is a gag, not a job).
// Rejected on C3 (twist does not land on the first read): #6 (the joke
// needs a second beat — airline food is a tired target), #10 (pet psychic
// is a familiar trope; the cat twist is the second joke, not the first).
//
// Why #3 wins:
// - Criterion 1: a few words naming an odd job — a mourner, a chief of them.
// - Criterion 2: stranger than ordinary work. Professional mourners are
//   real, but mourning at funerals WITH NO RELATIVES is a job nobody has
//   heard of — the twist is in the qualifier, not the job.
// - Criterion 3: funny on the first read, darkly: the mourner is hired
//   precisely because nobody else will grieve, so the grief itself is
//   the product.
// - Criterion 4: sounds like a real job, specific enough to picture the
//   person doing it — a lone figure in black at an empty funeral, paid
//   to cry. The title keeps its job shape (Chief + Mourner) and adds one
//   specific circumstance.
// - Criterion 5: reads instantly, 44 characters, one glance.
//   Concrete nouns: "Funerals", "Relatives" — the whole joke turns on
//   the absence of relatives.
// Runner-up #8 (Senior Inspector of Hotel Pillows, Second Floor Only)
// loses on C2: the twist ("Second Floor Only") is arbitrary rather than
// meaningful — it is odd for no reason, while #3's twist IS the job.
// Runner-up #1 (elevator apologiser) loses on C5: 60 characters, and the
// joke takes a full clause to land. Runner-up #12 (Lost Left Socks)
// loses on C4: lost socks are a familiar joke, and no one can picture
// the job behind the title.
//
// Gate: 44 characters (limit 1-60), one line, UTF-8. No trailing newline
// in the entry: the gate counts characters, and the title reads cleanest
// as exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Chief Mourner for Funerals With No Relatives`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
