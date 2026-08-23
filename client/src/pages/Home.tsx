/**
 * Carnet de Provence design reminder: editorial scrapbook composition with paper texture,
 * indigo ink hierarchy, mustard annotation tags, and intentionally generous reading space.
 */
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  Check,
  ChevronRight,
  Languages,
  Layers,
  MessageCircle,
  Menu,
  RotateCcw,
  Stamp,
  X,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { articleExercises, articleNotes, conversationPatterns, nationalityPlaces, placeExercises, placeRules, quelForms, questionExamples, questionExercises, questionForms, questionWords, vocabularyGroups, type VocabularyEntry } from "@/data/lessonData";
import { pronouns, verbs, type Pronoun, type Verb } from "@/data/verbs";

type Mode = "overview" | "flashcards" | "conjugation" | "articles" | "places" | "questions" | "notebook" | "vocabulary";
type VocabularyLanguage = "french" | "vietnamese" | "english";
type VocabularyDirection = "french-to-vietnamese" | "vietnamese-to-french" | "french-to-english" | "english-to-french";
type VocabularyStudyEntry = VocabularyEntry & { group: string; key: string };
type ReviewVocabularyRecord = { key: string; mistakes: number; lastMissedAt: number };

const REVIEW_VOCABULARY_STORAGE_KEY = "carnet-review-vocabulary-v1";

const vocabularyDirectionOptions: ReadonlyArray<{
  id: VocabularyDirection;
  label: string;
  promptLanguage: VocabularyLanguage;
  answerLanguage: VocabularyLanguage;
  promptLabel: string;
  answerLabel: string;
  placeholder: string;
}> = [
  { id: "french-to-vietnamese", label: "PHÁP → VIỆT", promptLanguage: "french", answerLanguage: "vietnamese", promptLabel: "TỪ TIẾNG PHÁP", answerLabel: "NHẬP NGHĨA TIẾNG VIỆT", placeholder: "Gõ nghĩa tiếng Việt" },
  { id: "vietnamese-to-french", label: "VIỆT → PHÁP", promptLanguage: "vietnamese", answerLanguage: "french", promptLabel: "NGHĨA TIẾNG VIỆT", answerLabel: "NHẬP TỪ TIẾNG PHÁP", placeholder: "Gõ từ tiếng Pháp" },
  { id: "french-to-english", label: "PHÁP → ANH", promptLanguage: "french", answerLanguage: "english", promptLabel: "TỪ TIẾNG PHÁP", answerLabel: "NHẬP NGHĨA TIẾNG ANH", placeholder: "Gõ nghĩa tiếng Anh" },
  { id: "english-to-french", label: "ANH → PHÁP", promptLanguage: "english", answerLanguage: "french", promptLabel: "NGHĨA TIẾNG ANH", answerLabel: "NHẬP TỪ TIẾNG PHÁP", placeholder: "Gõ từ tiếng Pháp" },
];

const normalize = (value: string) =>
  value
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s*\/\s*/g, "/")
    .replace(/\s+/g, " ")
    .trim();

const activityLabels: Record<Exclude<Mode, "overview">, string> = {
  flashcards: "Flashcards",
  conjugation: "Conjugation",
  articles: "Mạo từ",
  places: "Quốc tịch & nơi chốn",
  questions: "Đặt câu hỏi",
  notebook: "Sổ tay câu",
  vocabulary: "Học từ vựng",
};

const conjugationCases = verbs.flatMap((verb) => pronouns.map((pronoun) => ({ verb, pronoun })));

const navGroups = [
  {
    id: "vocabulary",
    label: "Từ vựng",
    icon: Layers,
    items: [
      { id: "flashcards" as const, label: "Flashcards", icon: Layers },
      { id: "vocabulary" as const, label: "Luyện từ", icon: Bookmark },
    ],
  },
  {
    id: "grammar",
    label: "Ngữ pháp",
    icon: Stamp,
    items: [
      { id: "conjugation" as const, label: "Chia động từ", icon: Languages },
      { id: "articles" as const, label: "Mạo từ", icon: Stamp },
      { id: "places" as const, label: "Quốc tịch & nơi chốn", icon: Languages },
    ],
  },
  {
    id: "communication",
    label: "Giao tiếp",
    icon: MessageCircle,
    items: [
      { id: "questions" as const, label: "Đặt câu hỏi", icon: MessageCircle },
      { id: "notebook" as const, label: "Sổ tay câu", icon: Bookmark },
    ],
  },
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
  const [location, navigate] = useLocation();
  const [mode, setMode] = useState<Mode>(() => (window.location.pathname.startsWith("/vocabulary") ? "vocabulary" : "overview"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flashBack, setFlashBack] = useState(false);
  const [known, setKnown] = useState(0);
  const [review, setReview] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [conjugationIndex, setConjugationIndex] = useState(0);
  const [conjugationAnswer, setConjugationAnswer] = useState("");
  const [articleIndex, setArticleIndex] = useState(0);
  const [articleAnswer, setArticleAnswer] = useState("");
  const [conversationIndex, setConversationIndex] = useState(0);
  const [conversationAnswer, setConversationAnswer] = useState("");
  const [vocabularyIndex, setVocabularyIndex] = useState(0);
  const [vocabularyDirection, setVocabularyDirection] = useState<VocabularyDirection>("french-to-vietnamese");
  const [vocabularyAnswer, setVocabularyAnswer] = useState("");
  const [vocabularyFeedback, setVocabularyFeedback] = useState<{ isCorrect: boolean; expected: string } | null>(null);
  const [reviewVocabularyRecords, setReviewVocabularyRecords] = useState<ReviewVocabularyRecord[]>(() => {
    try {
      const stored = window.localStorage.getItem(REVIEW_VOCABULARY_STORAGE_KEY);
      const parsed: unknown = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (item): item is ReviewVocabularyRecord =>
          typeof item === "object" && item !== null &&
          typeof item.key === "string" &&
          typeof item.mistakes === "number" &&
          typeof item.lastMissedAt === "number",
      );
    } catch {
      return [];
    }
  });
  const [placeIndex, setPlaceIndex] = useState(0);
  const [placeAnswer, setPlaceAnswer] = useState("");
  const [placeFeedback, setPlaceFeedback] = useState<{ isCorrect: boolean; expected: string; note: string } | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionAnswer, setQuestionAnswer] = useState("");
  const [questionFeedback, setQuestionFeedback] = useState<{ isCorrect: boolean; expected: string; note: string } | null>(null);

  const conjugationCase = conjugationCases[conjugationIndex % conjugationCases.length];
  const conjugationVerb = conjugationCase.verb;
  const conjugationPronoun = conjugationCase.pronoun;
  const conjugationQuestionNumber = (conjugationIndex % conjugationCases.length) + 1;
  const articleExercise = articleExercises[articleIndex % articleExercises.length];
  const conversationPattern = conversationPatterns[conversationIndex % conversationPatterns.length];
  const vocabularyTopic = location.match(/^\/vocabulary\/([^/]+)$/)?.[1] ?? null;
  const isReviewVocabularyRoute = vocabularyTopic === "review";
  const selectedVocabularyGroup = vocabularyTopic && !isReviewVocabularyRoute ? vocabularyGroups.find((group) => group.id === vocabularyTopic) : undefined;
  const allVocabularyEntries = useMemo<VocabularyStudyEntry[]>(
    () => vocabularyGroups.flatMap((group) => group.entries.map((entry) => ({ ...entry, group: group.title, key: `${group.id}::${entry.french}` }))),
    [],
  );
  const flashcardEntries = allVocabularyEntries;
  const flashcardEntry = flashcardEntries[activeIndex % flashcardEntries.length];
  const reviewVocabularyEntries = useMemo(() => {
    const records = new Map(reviewVocabularyRecords.map((record) => [record.key, record]));
    return allVocabularyEntries
      .filter((entry) => records.has(entry.key))
      .sort((first, second) => {
        const firstRecord = records.get(first.key)!;
        const secondRecord = records.get(second.key)!;
        return secondRecord.mistakes - firstRecord.mistakes || secondRecord.lastMissedAt - firstRecord.lastMissedAt;
      });
  }, [allVocabularyEntries, reviewVocabularyRecords]);
  const vocabularyTopicLabel = isReviewVocabularyRoute ? "Từ cần ôn" : selectedVocabularyGroup?.title ?? "Tất cả chủ đề";
  const vocabularyEntries: VocabularyStudyEntry[] = isReviewVocabularyRoute
    ? reviewVocabularyEntries
    : (selectedVocabularyGroup ? [selectedVocabularyGroup] : vocabularyGroups).flatMap((group) => group.entries.map((entry) => ({ ...entry, group: group.title, key: `${group.id}::${entry.french}` })));
  const vocabularyEntry = vocabularyEntries.length > 0 ? vocabularyEntries[vocabularyIndex % vocabularyEntries.length] : undefined;
  const activeVocabularyDirection = vocabularyDirectionOptions.find((option) => option.id === vocabularyDirection) ?? vocabularyDirectionOptions[0];
  const vocabularyPrompt = vocabularyEntry?.[activeVocabularyDirection.promptLanguage] ?? "";
  const vocabularyExpected = vocabularyEntry?.[activeVocabularyDirection.answerLanguage] ?? "";
  const placeExercise = placeExercises[placeIndex % placeExercises.length];
  const questionExercise = questionExercises[questionIndex % questionExercises.length];
  const completed = known + review + correct;
  const sessionTarget = 12;
  const progress = Math.min(100, Math.round((completed / sessionTarget) * 100));
  const todayDate = useMemo(
    () => new Intl.DateTimeFormat("vi-VN", { weekday: "long", day: "numeric", month: "long" }).format(new Date()),
    [],
  );

  useEffect(() => {
    if (location.startsWith("/vocabulary")) {
      setMode("vocabulary");
    } else if (mode === "vocabulary") {
      setMode("overview");
    }
  }, [location, mode]);

  useEffect(() => {
    window.localStorage.setItem(REVIEW_VOCABULARY_STORAGE_KEY, JSON.stringify(reviewVocabularyRecords));
  }, [reviewVocabularyRecords]);

  const changeMode = (nextMode: Mode) => {
    navigate(nextMode === "vocabulary" ? "/vocabulary" : "/");
    setMode(nextMode);
    setMobileOpen(false);
  };

  const nextFlash = () => {
    setActiveIndex((value) => (value + 1) % flashcardEntries.length);
    setFlashBack(false);
  };

  const markFlash = (status: "known" | "review") => {
    if (status === "known") setKnown((value) => value + 1);
    else setReview((value) => value + 1);
    nextFlash();
  };

  const nextVocabulary = () => {
    if (vocabularyEntries.length === 0) return;
    setVocabularyIndex((value) => (value + 1) % vocabularyEntries.length);
    setVocabularyAnswer("");
  };

  const changeVocabularyDirection = (direction: VocabularyDirection) => {
    setVocabularyDirection(direction);
    setVocabularyAnswer("");
    setVocabularyFeedback(null);
  };

  const prepareVocabularyTopic = () => {
    setVocabularyIndex(0);
    setVocabularyAnswer("");
    setVocabularyFeedback(null);
  };

  const addVocabularyToReview = (entry: VocabularyStudyEntry) => {
    setReviewVocabularyRecords((records) => {
      const existing = records.find((record) => record.key === entry.key);
      if (!existing) return [...records, { key: entry.key, mistakes: 1, lastMissedAt: Date.now() }];
      return records.map((record) => record.key === entry.key
        ? { ...record, mistakes: record.mistakes + 1, lastMissedAt: Date.now() }
        : record,
      );
    });
  };

  const removeVocabularyFromReview = (entry: VocabularyStudyEntry) => {
    setReviewVocabularyRecords((records) => records.filter((record) => record.key !== entry.key));
  };

  const checkVocabulary = (event: FormEvent) => {
    event.preventDefault();
    if (!vocabularyEntry) return;
    const answerSource = vocabularyEntry[activeVocabularyDirection.answerLanguage];
    const acceptedAnswers = [answerSource, ...answerSource.split(/\s*\/\s*/)]
      .flatMap((answer) => [answer, answer.replace("(e)", ""), answer.replace("(e)", "e")]);
    const isCorrect = acceptedAnswers.some((answer) => normalize(vocabularyAnswer) === normalize(answer));
    if (isCorrect) {
      setCorrect((value) => value + 1);
      if (isReviewVocabularyRoute) removeVocabularyFromReview(vocabularyEntry);
    } else {
      setReview((value) => value + 1);
      addVocabularyToReview(vocabularyEntry);
    }
    setVocabularyFeedback({ isCorrect, expected: vocabularyExpected });
    setVocabularyAnswer("");
    if (!isReviewVocabularyRoute || !isCorrect) nextVocabulary();
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

  const checkArticle = (event: FormEvent) => {
    event.preventDefault();
    const isCorrect = normalize(articleAnswer) === normalize(articleExercise.article);
    if (isCorrect) setCorrect((value) => value + 1);
    setArticleIndex((value) => (value + 1) % articleExercises.length);
    setArticleAnswer("");
  };

  const checkPlace = (event: FormEvent) => {
    event.preventDefault();
    const isCorrect = normalize(placeAnswer) === normalize(placeExercise.answer);
    if (isCorrect) setCorrect((value) => value + 1);
    else setReview((value) => value + 1);
    setPlaceFeedback({ isCorrect, expected: placeExercise.answer, note: placeExercise.note });
    setPlaceIndex((value) => (value + 1) % placeExercises.length);
    setPlaceAnswer("");
  };

  const checkQuestion = (event: FormEvent) => {
    event.preventDefault();
    const isCorrect = normalize(questionAnswer) === normalize(questionExercise.answer);
    if (isCorrect) setCorrect((value) => value + 1);
    else setReview((value) => value + 1);
    setQuestionFeedback({ isCorrect, expected: questionExercise.answer, note: questionExercise.note });
    setQuestionIndex((value) => (value + 1) % questionExercises.length);
    setQuestionAnswer("");
  };

  const checkConversation = (event: FormEvent) => {
    event.preventDefault();
    const answer = normalize(conversationAnswer);
    const isCorrect = conversationPattern.practice.accepts.some((opening) => answer.startsWith(normalize(opening)));
    if (isCorrect) setCorrect((value) => value + 1);
    setConversationIndex((value) => (value + 1) % conversationPatterns.length);
    setConversationAnswer("");
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
            <button className={`nav-item ${mode === "overview" ? "nav-item--active" : ""}`} onClick={() => changeMode("overview")}>
              <BookOpen size={19} strokeWidth={1.8} />
              <span>Bàn học</span>
              {mode === "overview" && <ChevronRight size={16} />}
            </button>
            {navGroups.map((group) => {
              const GroupIcon = group.icon;
              const isActiveGroup = group.items.some((item) => item.id === mode);

              return (
                <details className={`nav-group ${isActiveGroup ? "nav-group--active" : ""}`} key={group.id} open={isActiveGroup}>
                  <summary>
                    <span className="nav-group-label"><GroupIcon size={17} strokeWidth={1.8} />{group.label}</span>
                    <ChevronRight size={15} />
                  </summary>
                  <div className="nav-group-items">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button key={item.id} className={`nav-subitem ${mode === item.id ? "nav-subitem--active" : ""}`} onClick={() => changeMode(item.id)}>
                          <Icon size={15} strokeWidth={1.8} />
                          <span>{item.label}</span>
                          {mode === item.id && <span className="nav-subitem-dot" aria-hidden="true" />}
                        </button>
                      );
                    })}
                  </div>
                </details>
              );
            })}
          </div>
        </nav>

      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="topbar-date">{todayDate}</p>
            <p className="topbar-greeting">Bonjour, mình học tiếp nhé.</p>
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
                    <button className="primary-button" onClick={() => changeMode("articles")}>
                      Luyện aimer với le · la
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <div className="hero-visual" aria-hidden="true">
                    <img src="/manus-storage/carnet-hero-desk_48646ec8.jpg" alt="" />
                    <span className="hero-stamp">bonjour</span>
                    <span className="hero-photo-caption">page 01 · notes du matin</span>
                  </div>
                </div>

                <div className="quick-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">MỞ MỘT TỜ GIẤY</p>
                      <h2>Chọn một nhịp học cho hôm nay</h2>
                    </div>
                    <span>{verbs.length} động từ · {vocabularyGroups.length} chủ đề từ vựng</span>
                  </div>
                  <div className="mode-grid">
                    <button className="mode-card mode-card--blue" onClick={() => changeMode("flashcards")}>
                      <Layers size={24} />
                      <strong>Flashcards</strong>
                      <span>Tất cả từ và nghĩa</span>
                      <ArrowRight size={18} />
                    </button>
                    <button className="mode-card mode-card--cream" onClick={() => changeMode("conjugation")}>
                      <Languages size={24} />
                      <strong>Conjugation</strong>
                      <span>Điền đúng ngôi hiện tại</span>
                      <ArrowRight size={18} />
                    </button>
                    <button className="mode-card mode-card--article" onClick={() => changeMode("articles")}>
                      <Stamp size={24} />
                      <strong>Mạo từ</strong>
                      <span>le · la · l' · les với aimer</span>
                      <ArrowRight size={18} />
                    </button>
                    <button className="mode-card mode-card--places" onClick={() => changeMode("places")}>
                      <Languages size={24} />
                      <strong>Quốc tịch</strong>
                      <span>à · au · en · aux với nơi chốn</span>
                      <ArrowRight size={18} />
                    </button>
                    <button className="mode-card mode-card--questions" onClick={() => changeMode("questions")}>
                      <MessageCircle size={24} />
                      <strong>Đặt câu hỏi</strong>
                      <span>Quel, où, quand, pourquoi…</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </section>
            )}

            {mode === "flashcards" && (
              <section className="flashcard-view">
                <ModeHeader eyebrow="NHẬN MẶT TỪ" title="Flashcards" description={`Toàn bộ ${flashcardEntries.length} từ vựng — lật thẻ, đọc to và tự đánh giá độ nhớ của bạn.`} number="01" />
                <div className="flashcard-layout flashcard-layout--solo">
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
                        <PaperLabel tone="navy">{flashcardEntry.group}</PaperLabel>
                        <p className="flashcard-index">{String(activeIndex + 1).padStart(2, "0")} / {String(flashcardEntries.length).padStart(2, "0")}</p>
                        <div>
                          <h2>{flashcardEntry.french}</h2>
                          <p className="flashcard-topic">Từ vựng theo chủ đề</p>
                        </div>
                        <span className="flip-prompt"><RotateCcw size={15} /> Chạm để lật · Enter để sang thẻ</span>
                      </div>
                      <div className="flashcard-face flashcard-face--back">
                        <PaperLabel tone="sage">NGHĨA</PaperLabel>
                        <div>
                          <p className="meaning-vietnamese">{flashcardEntry.vietnamese}</p>
                          <p className="meaning-english">{flashcardEntry.english}</p>
                        </div>
                        {flashcardEntry.note && <p className="grammar-note">{flashcardEntry.note}</p>}
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
                </div>
              </section>
            )}

            {mode === "vocabulary" && !selectedVocabularyGroup && !isReviewVocabularyRoute && (
              <section className="vocabulary-topic-index">
                <ModeHeader eyebrow="KHO TỪ VỰNG" title="Học theo chủ đề" description="Chọn một tờ học, gọi nghĩa trước rồi tự gõ đáp án. Enter sẽ đưa bạn sang từ kế tiếp." number="07" />
                <div className="topic-route-list" aria-label="Danh sách chủ đề từ vựng">
                  <Link className="topic-route-row topic-route-row--review" href="/vocabulary/review" onClick={prepareVocabularyTopic}>
                    <span className="topic-route-review-icon"><RotateCcw size={23} strokeWidth={1.8} /></span>
                    <span className="topic-route-copy">
                      <strong>Từ cần ôn</strong>
                      <small>{reviewVocabularyEntries.length > 0 ? `${reviewVocabularyEntries.length} từ đã trả lời sai — luyện lại để gỡ dấu mực đỏ.` : "Chưa có từ cần ôn — các từ trả lời sai sẽ được lưu ở đây."}</small>
                    </span>
                    <ChevronRight size={22} aria-hidden="true" />
                  </Link>
                  {vocabularyGroups.map((group, index) => (
                    <Link className="topic-route-row" href={`/vocabulary/${group.id}`} key={group.id} onClick={prepareVocabularyTopic}>
                      <span className="topic-route-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="topic-route-copy">
                        <strong>{group.title}</strong>
                        <small>{group.caption} · {group.entries.length} từ</small>
                      </span>
                      <ChevronRight size={22} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {mode === "vocabulary" && isReviewVocabularyRoute && !vocabularyEntry && (
              <section className="vocabulary-topic-index vocabulary-review-empty">
                <Link className="topic-back-link" href="/vocabulary" onClick={prepareVocabularyTopic}>
                  <ArrowLeft size={16} /> Tất cả chủ đề
                </Link>
                <ModeHeader eyebrow="ÔN LẠI" title="Từ cần ôn" description="Chưa có từ nào trong danh sách. Khi trả lời sai ở bất kỳ chủ đề nào, từ đó sẽ được lưu trên thiết bị này để bạn quay lại luyện riêng." number="08" />
                <div className="review-empty-note">
                  <RotateCcw size={26} />
                  <p>Trả lời sai một từ để tạo danh sách ôn tập đầu tiên.</p>
                </div>
              </section>
            )}

            {mode === "vocabulary" && vocabularyEntry && (selectedVocabularyGroup || isReviewVocabularyRoute) && (
              <section className="flashcard-view vocabulary-study-view">
                <Link className="topic-back-link" href="/vocabulary" onClick={prepareVocabularyTopic}>
                  <ArrowLeft size={16} /> Tất cả chủ đề
                </Link>
                <ModeHeader eyebrow={isReviewVocabularyRoute ? "ÔN LẠI" : "KHO TỪ VỰNG"} title={vocabularyTopicLabel} description={isReviewVocabularyRoute ? "Những từ đã trả lời sai được lưu trên thiết bị này. Trả lời đúng để gỡ chúng khỏi danh sách." : `${selectedVocabularyGroup?.caption} Chọn chiều học, gọi nghĩa trước rồi nhấn Enter để ghi thêm một dấu mực.`} number={isReviewVocabularyRoute ? "08" : "07"} />
                <div className="flashcard-layout">
                  <form className="vocabulary-recall-card" onSubmit={checkVocabulary}>
                    <div className="vocabulary-recall-top">
                      <PaperLabel tone="navy">{vocabularyEntry.group}</PaperLabel>
                      <span>{String(vocabularyIndex + 1).padStart(2, "0")} / {String(vocabularyEntries.length).padStart(2, "0")}</span>
                    </div>
                    <div className="vocabulary-direction" aria-label="Chọn chiều học">
                      {vocabularyDirectionOptions.map((option) => (
                        <button type="button" className={vocabularyDirection === option.id ? "is-active" : ""} onClick={() => changeVocabularyDirection(option.id)} key={option.id}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                    <div className="vocabulary-prompt">
                      <span>{activeVocabularyDirection.promptLabel}</span>
                      <h2>{vocabularyPrompt}</h2>
                      {vocabularyEntry.note && <small>{vocabularyEntry.note}</small>}
                    </div>
                    <label className="vocabulary-answer">
                      <span>{activeVocabularyDirection.answerLabel}</span>
                      <input
                        autoFocus
                        aria-label={`${activeVocabularyDirection.answerLabel.toLocaleLowerCase("vi-VN")} cho ${vocabularyPrompt}`}
                        value={vocabularyAnswer}
                        onChange={(event) => setVocabularyAnswer(event.target.value)}
                        placeholder={activeVocabularyDirection.placeholder}
                      />
                    </label>
                    <div className="vocabulary-submit-row">
                      <button className="primary-button" type="submit">Kiểm tra & tiếp <ArrowRight size={18} /></button>
                      <span>Nhấn Enter để chấm và sang mục mới</span>
                    </div>
                  </form>
                  <aside className="flashcard-side-note vocabulary-study-note">
                    <div>
                      <PaperLabel tone="mustard">PHẢN HỒI</PaperLabel>
                      {vocabularyFeedback ? (
                        <>
                          <p className={vocabularyFeedback.isCorrect ? "vocabulary-feedback vocabulary-feedback--correct" : "vocabulary-feedback vocabulary-feedback--review"}>
                            {vocabularyFeedback.isCorrect ? "Đúng rồi — tiếp tục giữ nhịp." : `Cần ôn lại. Đáp án: ${vocabularyFeedback.expected}`}
                          </p>
                          <span>{vocabularyEntries.length} {isReviewVocabularyRoute ? "từ cần ôn trong danh sách." : `mục trong chủ đề ${vocabularyTopicLabel.toLowerCase()}.`}</span>
                        </>
                      ) : (
                        <>
                          <p>Chọn một chiều học, thử gọi nghĩa trước rồi gõ đáp án. Dấu tiếng Pháp vẫn được chấp nhận.</p>
                          <span>{vocabularyEntries.length} {isReviewVocabularyRoute ? "từ cần ôn trong danh sách." : `mục trong chủ đề ${vocabularyTopicLabel.toLowerCase()}.`}</span>
                        </>
                      )}
                    </div>
                  </aside>
                </div>
              </section>
            )}

            {mode === "conjugation" && (
              <section className="exercise-view">
                <ModeHeader eyebrow="THÌ HIỆN TẠI" title="Conjugation" description="Luyện lần lượt 42 động từ × 6 ngôi = 252 câu; Enter chuyển sang câu kế tiếp." number="02" />
                <div className="exercise-layout">
                  <form className="exercise-card" onSubmit={checkConjugation}>
                    <div className="exercise-card-top">
                      <div>
                        <PaperLabel tone="navy">VERBE</PaperLabel>
                        <h2>{conjugationVerb.infinitive}</h2>
                        <VerbMeta verb={conjugationVerb} />
                      </div>
                      <span className="question-count">{conjugationQuestionNumber} / {conjugationCases.length}</span>
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
                      <button className="primary-button" type="submit">Sang câu kế <ArrowRight size={18} /></button>
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

            {mode === "articles" && (
              <section className="article-view">
                <ModeHeader eyebrow="AIMER + MẠO TỪ" title="Điền mạo từ" description="Chọn le, la, l' hoặc les. Nhấn Enter để lưu đáp án và chuyển ngay sang câu mới." number="03" />
                <div className="article-layout">
                  <form className="article-card" onSubmit={checkArticle}>
                    <div className="article-card-top">
                      <div>
                        <PaperLabel tone="mustard">CÂU {String(articleIndex + 1).padStart(2, "0")}</PaperLabel>
                        <p>Điền mạo từ xác định vào chỗ trống.</p>
                      </div>
                      <span className="article-count">{articleIndex + 1} / {articleExercises.length}</span>
                    </div>
                    <div className="article-sentence" aria-label="Câu điền mạo từ">
                      <span>{articleExercise.subject}</span>
                      <input
                        autoFocus
                        aria-label={`Mạo từ trước từ ${articleExercise.noun}`}
                        value={articleAnswer}
                        onChange={(event) => setArticleAnswer(event.target.value)}
                        placeholder="?"
                      />
                      <span>{articleExercise.noun}.</span>
                    </div>
                    <div className="article-support">
                      <span className="article-cue">Gợi ý: {articleExercise.cue}</span>
                      <span>{articleExercise.vietnamese}</span>
                    </div>
                    <button className="primary-button" type="submit">Câu tiếp theo <ArrowRight size={18} /></button>
                  </form>

                  <aside className="article-rulebook">
                    <div className="rulebook-heading">
                      <PaperLabel tone="navy">NHỚ NHANH</PaperLabel>
                      <p>Mạo từ xác định</p>
                    </div>
                    {articleNotes.map((rule) => (
                      <div className="article-rule" key={rule.article}>
                        <strong>{rule.article}</strong>
                        <div>
                          <span>{rule.label}</span>
                        </div>
                      </div>
                    ))}
                  </aside>
                </div>
              </section>
            )}

            {mode === "places" && (
              <section className="places-view">
                <ModeHeader eyebrow="QUỐC TỊCH & NƠI CHỐN" title="Tôi sống ở đâu?" description="Nối quốc tịch với đất nước, thành phố và giới từ phù hợp. Nhấn Enter để chấm, rồi sang câu tiếp theo." number="04" />
                <section className="place-practice">
                  <form className="place-recall-card" onSubmit={checkPlace}>
                    <div className="place-recall-top">
                      <PaperLabel tone="navy">LUYỆN GIỚI TỪ</PaperLabel>
                      <span>{String(placeIndex + 1).padStart(2, "0")} / {String(placeExercises.length).padStart(2, "0")}</span>
                    </div>
                    <p className="place-prompt-label">Điền giới từ chỉ nơi chốn:</p>
                    <div className="place-sentence">
                      <span>{placeExercise.before}</span>
                      <input
                        autoFocus
                        aria-label={`Giới từ trước ${placeExercise.place}`}
                        value={placeAnswer}
                        onChange={(event) => setPlaceAnswer(event.target.value)}
                        placeholder="?"
                      />
                      <span>{placeExercise.place}.</span>
                    </div>
                    <div className="place-submit-row">
                      <button className="primary-button" type="submit">Kiểm tra & tiếp <ArrowRight size={18} /></button>
                      <span>à · au · en · aux</span>
                    </div>
                  </form>
                  <aside className="place-feedback-card">
                    <PaperLabel tone="mustard">{placeFeedback ? "PHẢN HỒI" : "GỢI Ý GIỚI TỪ"}</PaperLabel>
                    {placeFeedback ? (
                      <>
                        <p className={placeFeedback.isCorrect ? "place-feedback place-feedback--correct" : "place-feedback place-feedback--review"}>
                          {placeFeedback.isCorrect ? "Đúng rồi — bạn đã chọn đúng giới từ." : `Đáp án: ${placeFeedback.expected}`}
                        </p>
                        <span>{placeFeedback.note}</span>
                      </>
                    ) : (
                      <>
                        <p>Thành phố dùng <em>à</em>. Quốc gia giống cái hoặc bắt đầu bằng nguyên âm dùng <em>en</em>; giống đực dùng <em>au</em>; số nhiều dùng <em>aux</em>.</p>
                        <span>Điền à, au, en hoặc aux, rồi nhấn Enter để kiểm tra.</span>
                      </>
                    )}
                  </aside>
                </section>

                <section className="place-rule-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">NHỚ NHANH</p>
                      <h2>Bốn giới từ cần thuộc</h2>
                    </div>
                    <span>với habiter · aller · travailler</span>
                  </div>
                  <div className="place-rule-grid">
                    {placeRules.map((rule) => (
                      <article className="place-rule-card" key={rule.preposition}>
                        <strong>{rule.preposition}</strong>
                        <span>{rule.label}</span>
                        <p>{rule.example}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="nationality-ledger-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">THAM CHIẾU</p>
                      <h2>Quốc tịch, quốc gia, thành phố</h2>
                    </div>
                    <span>{nationalityPlaces.length} dòng để ôn</span>
                  </div>
                  <div className="nationality-ledger">
                    <div className="nationality-ledger-head"><span>IL / ELLE EST…</span><span>IL / ELLE HABITE…</span><span>THÀNH PHỐ</span></div>
                    {nationalityPlaces.map((entry) => (
                      <div className="nationality-ledger-row" key={entry.country}>
                        <strong>{entry.nationality}</strong>
                        <span><em>{entry.countryPreposition}</em> {entry.country}</span>
                        <span><em>à</em> {entry.city}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </section>
            )}

            {mode === "questions" && (
              <section className="questions-view">
                <ModeHeader eyebrow="CÁCH ĐẶT CÂU HỎI" title="Hỏi sao cho tự nhiên?" description="Nhận diện từ để hỏi, chọn một trong ba cấu trúc và luyện phản xạ ngay trong câu." number="05" />
                <section className="question-practice">
                  <form className="question-recall-card" onSubmit={checkQuestion}>
                    <div className="question-recall-top">
                      <PaperLabel tone="navy">LUYỆN TỪ ĐỂ HỎI</PaperLabel>
                      <span>{String(questionIndex + 1).padStart(2, "0")} / {String(questionExercises.length).padStart(2, "0")}</span>
                    </div>
                    <p className="question-prompt-label">Điền từ để hỏi phù hợp:</p>
                    <div className="question-sentence">
                      {questionExercise.before && <span>{questionExercise.before}</span>}
                      <input
                        autoFocus
                        aria-label={`Từ để hỏi trong câu: ${questionExercise.before} ... ${questionExercise.after}`}
                        value={questionAnswer}
                        onChange={(event) => setQuestionAnswer(event.target.value)}
                        placeholder="?"
                      />
                      <span>{questionExercise.after}</span>
                    </div>
                    <div className="question-submit-row">
                      <button className="primary-button" type="submit">Kiểm tra & tiếp <ArrowRight size={18} /></button>
                      <span>Nhấn Enter để chấm và sang câu mới</span>
                    </div>
                  </form>
                  <aside className="question-feedback-card">
                    <PaperLabel tone="mustard">PHẢN HỒI</PaperLabel>
                    {questionFeedback ? (
                      <>
                        <p className={questionFeedback.isCorrect ? "question-feedback question-feedback--correct" : "question-feedback question-feedback--review"}>
                          {questionFeedback.isCorrect ? "Chính xác — giữ nhịp hỏi đáp này." : `Đáp án: ${questionFeedback.expected}`}
                        </p>
                        <span>{questionFeedback.note}</span>
                      </>
                    ) : (
                      <>
                        <p>Nhìn vị trí trống: đầu câu, sau động từ hay trước danh từ?</p>
                        <span>Gõ một từ để hỏi, rồi nhấn Enter.</span>
                      </>
                    )}
                  </aside>
                </section>

                <section className="question-word-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">TỪ ĐỂ HỎI</p>
                      <h2>Những từ nên nhớ</h2>
                    </div>
                    <span>{questionWords.length} nhóm từ</span>
                  </div>
                  <div className="question-word-grid">
                    {questionWords.map((item) => (
                      <article className="question-word-card" key={item.word}>
                        <strong>{item.word}</strong>
                        <span>{item.meaning}</span>
                        <p>{item.example}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="quel-agreement-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">QUEL / QUELLE</p>
                      <h2>Chọn theo giống và số của danh từ</h2>
                    </div>
                    <span>4 dạng</span>
                  </div>
                  <div className="quel-agreement-grid">
                    {quelForms.map((item) => (
                      <article className="quel-agreement-card" key={item.form}>
                        <strong>{item.form}</strong>
                        <span>{item.agreement}</span>
                        <p>{item.example}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="question-form-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">BA CÁCH HỎI</p>
                      <h2>Cùng một ý, ba nhịp điệu</h2>
                    </div>
                    <span>từ thân mật đến trang trọng</span>
                  </div>
                  <div className="question-form-grid">
                    {questionForms.map((form) => (
                      <article className="question-form-card" key={form.title}>
                        <PaperLabel tone="sage">{form.title}</PaperLabel>
                        <h3>{form.formula}</h3>
                        <p>{form.note}</p>
                        <strong>{form.example}</strong>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="question-examples-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">THỬ BIẾN ĐỔI</p>
                      <h2>Hỏi cùng một điều theo ba cách</h2>
                    </div>
                  </div>
                  <div className="question-example-list">
                    {questionExamples.map((example) => (
                      <article className="question-example-row" key={example.topic}>
                        <strong>{example.topic}</strong>
                        <span>{example.casual}</span>
                        <span>{example.neutral}</span>
                        <span>{example.formal}</span>
                      </article>
                    ))}
                  </div>
                </section>
              </section>
            )}

            {mode === "notebook" && (
              <section className="notebook-view">
                <ModeHeader eyebrow="NÓI & HIỂU" title="Sổ tay câu" description="Tự trả lời trước, rồi dùng sổ tay để kiểm tra mẫu câu. Nhấn Enter để chuyển ngay sang câu tiếp theo." number="06" />
                <section className="conversation-practice">
                  <div className="practice-heading">
                    <div>
                      <PaperLabel tone="mustard">LUYỆN PHẢN XẠ</PaperLabel>
                      <h2>Nghe câu hỏi, tự trả lời</h2>
                    </div>
                    <span>{String(conversationIndex + 1).padStart(2, "0")} / {String(conversationPatterns.length).padStart(2, "0")}</span>
                  </div>
                  <div className="conversation-drill-layout">
                    <form className="conversation-drill" onSubmit={checkConversation}>
                      <PaperLabel tone="sage">{conversationPattern.title}</PaperLabel>
                      <div className="drill-question">
                        <span>HỎI</span>
                        <p>{conversationPattern.question}</p>
                      </div>
                      <label className="drill-answer">
                        <span>BẠN TRẢ LỜI</span>
                        <input
                          autoFocus
                          aria-label={`Câu trả lời cho: ${conversationPattern.question}`}
                          value={conversationAnswer}
                          onChange={(event) => setConversationAnswer(event.target.value)}
                          placeholder="Gõ câu trả lời bằng tiếng Pháp"
                        />
                      </label>
                      <div className="drill-actions">
                        <button className="primary-button" type="submit">Câu tiếp <ArrowRight size={18} /></button>
                        <span>Nhấn Enter để chuyển tiếp</span>
                      </div>
                    </form>
                    <aside className="conversation-model">
                      <PaperLabel tone="navy">MẪU GỢI Ý</PaperLabel>
                      <p>{conversationPattern.practice.hint}</p>
                      <details>
                        <summary>Xem một câu trả lời mẫu <ChevronRight size={15} /></summary>
                        <strong>{conversationPattern.practice.example}</strong>
                      </details>
                    </aside>
                  </div>
                </section>
                <section className="conversation-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">HỎI & TRẢ LỜI</p>
                      <h2>Những câu nên nhớ ngay</h2>
                    </div>
                    <span>{conversationPatterns.length} mẫu đối thoại</span>
                  </div>
                  <div className="conversation-grid">
                    {conversationPatterns.map((pattern) => (
                      <article className="conversation-card" key={pattern.id}>
                        <PaperLabel tone={pattern.id === "likes" || pattern.id === "likes-list" ? "mustard" : "sage"}>{pattern.title}</PaperLabel>
                        <div className="conversation-turn">
                          <span>HỎI</span>
                          <p>{pattern.question}</p>
                        </div>
                        <div className="conversation-turn conversation-turn--answer">
                          <span>ĐÁP</span>
                          <p>{pattern.answer}</p>
                        </div>
                        <p className="conversation-note">{pattern.note}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="lexicon-section">
                  <div className="section-heading">
                    <div>
                      <p className="section-kicker">KHO TỪ VỰNG</p>
                    </div>
                    <span>{vocabularyGroups.reduce((total, group) => total + group.entries.length, 0)} mục đã ghi chú</span>
                  </div>
                  <div className="lexicon-list">
                    {vocabularyGroups.map((group, index) => (
                      <details className="lexicon-group" key={group.id} open={index < 2}>
                        <summary>
                          <span className="lexicon-number">0{index + 1}</span>
                          <span><strong>{group.title}</strong><small>{group.caption}</small></span>
                          <ChevronRight size={18} />
                        </summary>
                        <div className="vocabulary-grid">
                          {group.entries.map((entry) => (
                            <article className="vocabulary-entry" key={entry.french}>
                              <strong>{entry.french}</strong>
                              <span>{entry.vietnamese}</span>
                              <span className="vocabulary-entry-english">EN · {entry.english}</span>
                              {entry.note && <small>{entry.note}</small>}
                            </article>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
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
              <p>{mode === "overview" ? "Năm phút, một dấu mực mới — đủ để một từ ở lại lâu hơn." : "Đi chậm một nhịp, để từ ở lại lâu hơn."}</p>
              <button onClick={() => changeMode(mode === "overview" ? "flashcards" : "overview")}>
                {mode === "overview" ? "Lật thẻ đầu tiên" : "Về bàn học"}
                <ArrowRight size={16} />
              </button>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}
