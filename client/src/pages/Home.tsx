/**
 * Carnet de Provence design reminder: editorial scrapbook composition with paper texture,
 * indigo ink hierarchy, mustard annotation tags, and intentionally generous reading space.
 */
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  Check,
  ChevronRight,
  Clock3,
  Languages,
  Layers,
  Menu,
  PenLine,
  RotateCcw,
  Sparkles,
  Stamp,
  Type,
  X,
} from "lucide-react";
import { pronouns, sheetSource, verbs, type Pronoun, type Verb } from "@/data/verbs";

type Mode = "overview" | "flashcards" | "conjugation" | "word" | "meaning";

const normalize = (value: string) =>
  value
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const activityLabels: Record<Exclude<Mode, "overview">, string> = {
  flashcards: "Flashcards",
  conjugation: "Conjugation",
  word: "Điền từ",
  meaning: "Điền nghĩa",
};

const navItems = [
  { id: "overview" as const, label: "Bàn học", icon: BookOpen },
  { id: "flashcards" as const, label: "Flashcards", icon: Layers },
  { id: "conjugation" as const, label: "Conjugation", icon: Languages },
  { id: "word" as const, label: "Điền từ", icon: PenLine },
  { id: "meaning" as const, label: "Điền nghĩa", icon: Type },
];

function PaperLabel({ children, tone = "mustard" }: { children: React.ReactNode; tone?: "mustard" | "sage" | "navy" }) {
  return <span className={`paper-label paper-label--${tone}`}>{children}</span>;
}

function ModeHeader({ eyebrow, title, description, number }: { eyebrow: string; title: string; description: string; number: string }) {
  return (
    <div className="mode-header">
      <div>
        <PaperLabel tone="mustard">{eyebrow}</PaperLabel>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="page-number" aria-label={`Bài ${number}`}>
        {number}
      </span>
    </div>
  );
}

function VerbMeta({ verb }: { verb: Verb }) {
  return (
    <div className="verb-meta">
      <span>{verb.group}</span>
      <span aria-hidden="true">·</span>
      <span>{verb.english}</span>
    </div>
  );
}

export default function Home() {
  const [mode, setMode] = useState<Mode>("overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flashBack, setFlashBack] = useState(false);
  const [known, setKnown] = useState(0);
  const [review, setReview] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [conjugationIndex, setConjugationIndex] = useState(0);
  const [conjugationAnswer, setConjugationAnswer] = useState("");
  const [wordAnswer, setWordAnswer] = useState("");
  const [meaningAnswer, setMeaningAnswer] = useState("");

  const flashVerb = verbs[activeIndex % verbs.length];
  const conjugationVerb = verbs[(activeIndex + conjugationIndex) % verbs.length];
  const conjugationPronoun = pronouns[conjugationIndex % pronouns.length];
  const wordVerb = verbs[(activeIndex + 7) % verbs.length];
  const meaningVerb = verbs[(activeIndex + 13) % verbs.length];
  const completed = known + review + correct;
  const sessionTarget = 12;
  const progress = Math.min(100, Math.round((completed / sessionTarget) * 100));
  const todayDate = useMemo(
    () => new Intl.DateTimeFormat("vi-VN", { weekday: "long", day: "numeric", month: "long" }).format(new Date()),
    [],
  );

  const changeMode = (nextMode: Mode) => {
    setMode(nextMode);
    setMobileOpen(false);
  };

  const nextFlash = () => {
    setActiveIndex((value) => (value + 1) % verbs.length);
    setFlashBack(false);
  };

  const markFlash = (status: "known" | "review") => {
    if (status === "known") setKnown((value) => value + 1);
    else setReview((value) => value + 1);
    nextFlash();
  };

  const checkConjugation = (event: FormEvent) => {
    event.preventDefault();
    const isCorrect = normalize(conjugationAnswer) === normalize(conjugationVerb.forms[conjugationPronoun]);
    if (isCorrect) setCorrect((value) => value + 1);
    nextConjugation();
  };

  const nextConjugation = () => {
    setConjugationIndex((value) => value + 1);
    setConjugationAnswer("");
  };

  const checkWord = (event: FormEvent) => {
    event.preventDefault();
    const isCorrect = normalize(wordAnswer) === normalize(wordVerb.infinitive);
    if (isCorrect) setCorrect((value) => value + 1);
    nextWord();
  };

  const nextWord = () => {
    setActiveIndex((value) => (value + 1) % verbs.length);
    setWordAnswer("");
  };

  const checkMeaning = (event: FormEvent) => {
    event.preventDefault();
    const accepted = [meaningVerb.meaning, meaningVerb.english];
    const isCorrect = accepted.some((answer) => normalize(meaningAnswer) === normalize(answer));
    if (isCorrect) setCorrect((value) => value + 1);
    nextMeaning();
  };

  const nextMeaning = () => {
    setActiveIndex((value) => (value + 1) % verbs.length);
    setMeaningAnswer("");
  };

  return (
    <main className="app-shell">
      <button className="mobile-menu-toggle" onClick={() => setMobileOpen((open) => !open)} aria-label="Mở điều hướng">
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <aside className={`side-rail ${mobileOpen ? "side-rail--open" : ""}`}>
        <div className="brand-lockup">
          <div className="brand-mark-wrap">
            <img src="/manus-storage/carnet-logo_20208d51.png" alt="Biểu tượng Carnet: mẩu giấy gấp và dấu sắc" className="brand-mark" />
            <span className="brand-bird" aria-hidden="true" />
          </div>
          <div>
            <p className="brand-name">carnet</p>
            <span>FRENCH STUDY</span>
          </div>
        </div>

        <nav aria-label="Chế độ học">
          <p className="rail-caption">BÀN HỌC</p>
          <div className="nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`nav-item ${mode === item.id ? "nav-item--active" : ""}`}
                  onClick={() => changeMode(item.id)}
                >
                  <Icon size={19} strokeWidth={1.8} />
                  <span>{item.label}</span>
                  {mode === item.id && <ChevronRight size={16} />}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="rail-bottom">
          <div className="rail-note">
            <Sparkles size={18} />
            <p>
              Hôm nay, mình học từng từ một.
              <span>{verbs.length} động từ từ bảng của bạn đã sẵn sàng.</span>
            </p>
          </div>
          <a href={sheetSource.url} target="_blank" rel="noreferrer" className="source-link">
            <Bookmark size={15} />
            Dữ liệu từ Sheets
          </a>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="topbar-date">{todayDate}</p>
            <p className="topbar-greeting">Bonjour, mình học tiếp nhé.</p>
          </div>
          <div className="topbar-status">
            <Clock3 size={16} />
            <span>Phiên ngắn · 12 từ</span>
          </div>
        </header>

        <div className="workspace-content">
          <section className="learning-sheet">
            {mode === "overview" && (
              <section className="overview-view">
                <div className="hero-panel">
                  <div className="hero-copy">
                    <PaperLabel tone="mustard">PHIÊN HÔM NAY</PaperLabel>
                    <h1>
                      Một từ nữa,
                      <em className="correction-ink"> thêm một cách</em>
                      <br />
                      để nói bằng tiếng Pháp.
                    </h1>
                    <p>
                      Bạn đang ôn nhóm động từ hiện tại. Chọn một nhịp học ngắn, rõ và lặp lại vừa đủ để nhớ lâu hơn.
                    </p>
                    <button className="primary-button" onClick={() => changeMode("flashcards")}>
                      Bắt đầu với {flashVerb.infinitive}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <div className="hero-visual" aria-hidden="true">
                    <img src="/manus-storage/carnet-hero-desk_48646ec8.jpg" alt="" />
                    <span className="hero-stamp">bonjour</span>
                  </div>
                </div>

                <div className="quick-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">CHỌN CÁCH ÔN</p>
                      <h2>Một nhịp học phù hợp lúc này</h2>
                    </div>
                    <span>{verbs.length} động từ · thì hiện tại</span>
                  </div>
                  <div className="mode-grid">
                    <button className="mode-card mode-card--blue" onClick={() => changeMode("flashcards")}>
                      <Layers size={24} />
                      <strong>Flashcards</strong>
                      <span>Nhận mặt từ và nghĩa</span>
                      <ArrowRight size={18} />
                    </button>
                    <button className="mode-card mode-card--cream" onClick={() => changeMode("conjugation")}>
                      <Languages size={24} />
                      <strong>Conjugation</strong>
                      <span>Điền đúng ngôi hiện tại</span>
                      <ArrowRight size={18} />
                    </button>
                    <button className="mode-card mode-card--sage" onClick={() => changeMode("word")}>
                      <PenLine size={24} />
                      <strong>Điền từ</strong>
                      <span>Gọi đúng động từ tiếng Pháp</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </section>
            )}

            {mode === "flashcards" && (
              <section className="flashcard-view">
                <ModeHeader eyebrow="NHẬN MẶT TỪ" title="Flashcards" description="Lật thẻ, đọc to và tự đánh giá độ nhớ của bạn." number="01" />
                <div className="flashcard-layout">
                  <div className={`flashcard ${flashBack ? "flashcard--back" : ""}`}>
                    <button
                      className="flashcard-main"
                      onClick={() => setFlashBack((value) => !value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          nextFlash();
                        }
                      }}
                      aria-label="Lật flashcard; nhấn Enter để sang thẻ tiếp theo"
                    >
                      <div className="flashcard-corner" />
                      <div className="flashcard-face flashcard-face--front">
                        <PaperLabel tone="navy">{flashVerb.group}</PaperLabel>
                        <p className="flashcard-index">{String(activeIndex + 1).padStart(2, "0")} / {String(verbs.length).padStart(2, "0")}</p>
                        <div>
                          <h2>{flashVerb.infinitive}</h2>
                          <VerbMeta verb={flashVerb} />
                        </div>
                        <span className="flip-prompt"><RotateCcw size={15} /> Chạm để lật · Enter để sang thẻ</span>
                      </div>
                      <div className="flashcard-face flashcard-face--back">
                        <PaperLabel tone="sage">NGHĨA</PaperLabel>
                        <div>
                          <p className="meaning-vietnamese">{flashVerb.meaning}</p>
                          <p className="meaning-english">{flashVerb.english}</p>
                        </div>
                        {flashVerb.note && <p className="grammar-note">{flashVerb.note}</p>}
                        <span className="flip-prompt"><RotateCcw size={15} /> Chạm để xem lại · Enter để sang thẻ</span>
                      </div>
                    </button>
                    <div className="flashcard-actions">
                      <button className="review-button" onClick={() => markFlash("review")}>
                        <RotateCcw size={17} />
                        Cần ôn lại
                      </button>
                      <button className="remember-button" onClick={() => markFlash("known")}>
                        <Check size={18} />
                        Đã nhớ rồi
                      </button>
                    </div>
                  </div>
                  <aside className="flashcard-side-note">
                    <img src="/manus-storage/carnet-flashcards_1d48fdc5.jpg" alt="Thẻ từ vựng trên bàn học" />
                    <div>
                      <PaperLabel tone="mustard">MẸO NHỎ</PaperLabel>
                      <p>Đừng lật ngay. Hãy thử gọi nghĩa trước khi kiểm tra.</p>
                    </div>
                  </aside>
                </div>
              </section>
            )}

            {mode === "conjugation" && (
              <section className="exercise-view">
                <ModeHeader eyebrow="THÌ HIỆN TẠI" title="Conjugation" description="Điền dạng chia thích hợp; Enter sẽ chuyển thẳng sang ngôi kế tiếp." number="02" />
                <div className="exercise-layout">
                  <form className="exercise-card" onSubmit={checkConjugation}>
                    <div className="exercise-card-top">
                      <div>
                        <PaperLabel tone="navy">VERBE</PaperLabel>
                        <h2>{conjugationVerb.infinitive}</h2>
                        <VerbMeta verb={conjugationVerb} />
                      </div>
                      <span className="question-count">{conjugationIndex + 1} / 6</span>
                    </div>
                    <div className="prompt-row">
                      <span className="pronoun-chip">{conjugationPronoun}</span>
                      <span>+</span>
                      <input
                        autoFocus
                        aria-label={`Dạng chia cho ${conjugationPronoun}`}
                        value={conjugationAnswer}
                        onChange={(event) => setConjugationAnswer(event.target.value)}
                        placeholder="điền dạng chia"
                      />
                    </div>
                    <div className="exercise-actions">
                      <button className="primary-button" type="submit">Sang ngôi kế <ArrowRight size={18} /></button>
                      <span>Nhấn Enter để chuyển tiếp</span>
                    </div>
                  </form>

                  <aside className="conjugation-guide">
                    <img src="/manus-storage/carnet-conjugation_848234ab.jpg" alt="Minh họa ghi chú ngữ pháp" />
                    <div className="conjugation-guide-copy">
                      <PaperLabel tone="mustard">BẢNG CHIA</PaperLabel>
                      <div className="forms-list">
                        {pronouns.map((pronoun) => (
                          <div key={pronoun} className={pronoun === conjugationPronoun ? "form-row form-row--active" : "form-row"}>
                            <span>{pronoun}</span>
                            <strong>······</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>
              </section>
            )}

            {mode === "word" && (
              <section className="exercise-view">
                <ModeHeader eyebrow="GỌI TÊN TỪ" title="Điền từ" description="Từ nghĩa tiếng Việt, gọi đúng infinitif tiếng Pháp." number="03" />
                <form className="recall-card" onSubmit={checkWord}>
                  <div className="recall-topline">
                    <PaperLabel tone="sage">TỪ VỰNG</PaperLabel>
                    <span>Viết động từ ở dạng nguyên mẫu</span>
                  </div>
                  <p className="recall-prompt">Từ nào nghĩa là:</p>
                  <h2>“{wordVerb.meaning}”</h2>
                  <p className="recall-english">{wordVerb.english}</p>
                  <div className="recall-answer-row">
                    <input
                      autoFocus
                      aria-label="Động từ tiếng Pháp"
                      value={wordAnswer}
                      onChange={(event) => setWordAnswer(event.target.value)}
                      placeholder="viết bằng tiếng Pháp"
                    />
                    <button className="primary-button" type="submit">Từ tiếp <ArrowRight size={18} /></button>
                  </div>
                </form>
                <div className="hint-strip">
                  <Stamp size={22} />
                  <p><strong>Gợi ý:</strong> Có thể gõ không dấu nếu bàn phím chưa sẵn sàng; hệ thống vẫn chấp nhận.</p>
                </div>
              </section>
            )}

            {mode === "meaning" && (
              <section className="exercise-view">
                <ModeHeader eyebrow="NHỚ NGHĨA" title="Điền nghĩa" description="Bạn đã nhìn ra động từ này chưa? Viết nghĩa Việt hoặc Anh đều được." number="04" />
                <form className="recall-card recall-card--meaning" onSubmit={checkMeaning}>
                  <div className="recall-topline">
                    <PaperLabel tone="navy">FRANÇAIS</PaperLabel>
                    <span>Viết nghĩa bằng tiếng Việt hoặc tiếng Anh</span>
                  </div>
                  <p className="recall-prompt">Động từ này có nghĩa là:</p>
                  <h2 className="french-answer">{meaningVerb.infinitive}</h2>
                  <div className="recall-answer-row">
                    <input
                      autoFocus
                      aria-label="Nghĩa của động từ"
                      value={meaningAnswer}
                      onChange={(event) => setMeaningAnswer(event.target.value)}
                      placeholder="nhập nghĩa bạn nhớ"
                    />
                    <button className="primary-button" type="submit">Từ tiếp <ArrowRight size={18} /></button>
                  </div>
                </form>
                <div className="meaning-cue">
                  <div className="cue-dot" />
                  <div>
                    <p className="section-kicker">NHỚ BẰNG NGỮ CẢNH</p>
                    <p>Hãy thử ghép động từ này với <em>je</em> trước khi kiểm tra nghĩa.</p>
                  </div>
                </div>
              </section>
            )}
          </section>

          <aside className="progress-panel">
              <div className="progress-card ledger-paper">
              <div className="progress-card-top">
                <div>
                  <p className="section-kicker">LỀ SỔ HỌC</p>
                  <h2>Phiên hôm nay</h2>
                </div>
                <div className="progress-seal"><span className="progress-percent">{progress}%</span><small>NHỊP ĐỘ</small></div>
              </div>
              <div className="progress-line"><span style={{ width: `${Math.max(progress, 4)}%` }} /></div>
              <p className="progress-copy">{completed === 0 ? "Chọn thẻ đầu tiên — trí nhớ cũng thích một khởi động tử tế." : `${completed} dấu mực nhỏ trong phiên hôm nay.`}</p>
              <div className="stat-row">
                <div><span>Đã nhớ</span><strong>{known}</strong></div>
                <div><span>Cần ôn</span><strong>{review}</strong></div>
                <div><span>Đúng</span><strong>{correct}</strong></div>
              </div>
            </div>

            <div className="next-card ledger-paper">
              <PaperLabel tone="mustard">ĐANG HỌC</PaperLabel>
              <h3>{mode === "overview" ? "Chọn một chế độ" : activityLabels[mode]}</h3>
              <p>{mode === "overview" ? "5–8 phút. Đủ để một từ ở lại lâu hơn." : "Đi chậm một nhịp, nhớ sâu một chút."}</p>
              <button onClick={() => changeMode(mode === "overview" ? "flashcards" : "overview")}>
                {mode === "overview" ? "Lật thẻ đầu tiên" : "Về bàn học"}
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="tip-card margin-note">
              <Check size={16} />
              <p>Đừng cố nhớ hoàn hảo. Chỉ cần nhận ra từ tốt hơn lần trước.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
