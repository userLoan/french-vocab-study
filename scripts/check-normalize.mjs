const normalize = (value) =>
  value
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s*\/\s*/g, "/")
    .replace(/\s+/g, " ")
    .trim();

const answerSource = "colombien / colombienne";
const acceptedAnswers = [answerSource, ...answerSource.split(/\s*\/\s*/)]
  .flatMap((answer) => [answer, answer.replace("(e)", ""), answer.replace("(e)", "e")]);

const attempts = [
  "colombien / colombienne",
  "colombien/colombienne",
  "colombien /colombienne",
  "colombien/ colombienne",
  "  colombien / colombienne  ",
  "colombien",
  "colombienne",
];

const failedAttempts = attempts.filter((attempt) => !acceptedAnswers.some((answer) => normalize(attempt) === normalize(answer)));

if (failedAttempts.length) {
  console.error(`Các biến thể chưa được chấp nhận: ${failedAttempts.join(", ")}`);
  process.exit(1);
}

console.log(`Đã chấp nhận ${attempts.length} biến thể: ${attempts.join(" | ")}`);
