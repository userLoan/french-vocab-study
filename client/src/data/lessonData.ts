/**
 * Carnet de Provence content reminder: group vocabulary as an inviting study notebook.
 * The entries below were transcribed and normalized from the learner-provided course materials.
 */

export type ArticleExercise = {
  id: string;
  subject: string;
  article: "le" | "la" | "l'" | "les";
  noun: string;
  fullSentence: string;
  vietnamese: string;
  cue: string;
};

export const articleExercises: ArticleExercise[] = [
  { id: "cafe", subject: "J'aime", article: "le", noun: "café", fullSentence: "J'aime le café.", vietnamese: "Tôi thích cà phê.", cue: "danh từ giống đực, số ít" },
  { id: "musique", subject: "Tu aimes", article: "la", noun: "musique", fullSentence: "Tu aimes la musique ?", vietnamese: "Bạn thích âm nhạc không?", cue: "danh từ giống cái, số ít" },
  { id: "espagne", subject: "Il aime", article: "l'", noun: "Espagne", fullSentence: "Il aime l'Espagne.", vietnamese: "Anh ấy thích Tây Ban Nha.", cue: "bắt đầu bằng nguyên âm" },
  { id: "langues", subject: "Nous aimons", article: "les", noun: "langues", fullSentence: "Nous aimons les langues.", vietnamese: "Chúng tôi thích các ngôn ngữ.", cue: "danh từ số nhiều" },
  { id: "chocolat", subject: "Elle aime", article: "le", noun: "chocolat", fullSentence: "Elle aime le chocolat.", vietnamese: "Cô ấy thích sô-cô-la.", cue: "danh từ giống đực, số ít" },
  { id: "histoire", subject: "J'aime aussi", article: "l'", noun: "histoire", fullSentence: "J'aime aussi l'histoire.", vietnamese: "Tôi cũng thích lịch sử.", cue: "h muet → dùng l'" },
  { id: "cinema", subject: "J'aime", article: "le", noun: "cinéma", fullSentence: "J'aime le cinéma.", vietnamese: "Tôi thích điện ảnh.", cue: "danh từ giống đực, số ít" },
  { id: "art", subject: "J'aime", article: "l'", noun: "art", fullSentence: "J'aime l'art.", vietnamese: "Tôi thích nghệ thuật.", cue: "bắt đầu bằng nguyên âm" },
  { id: "sport", subject: "Elle aime", article: "le", noun: "sport", fullSentence: "Elle aime le sport.", vietnamese: "Cô ấy thích thể thao.", cue: "danh từ giống đực, số ít" },
];

export const articleNotes = [
  { article: "le", label: "giống đực · số ít", example: "le café · le chocolat · le cinéma", note: "Dùng trước danh từ giống đực số ít." },
  { article: "la", label: "giống cái · số ít", example: "la musique", note: "Dùng trước danh từ giống cái số ít." },
  { article: "l'", label: "nguyên âm / h muet", example: "l'Espagne · l'histoire · l'art", note: "Rút gọn le/la khi từ sau bắt đầu bằng nguyên âm hoặc h muet." },
  { article: "les", label: "số nhiều", example: "les langues", note: "Dùng cho mọi danh từ số nhiều." },
];

export type ConversationPattern = {
  id: string;
  title: string;
  question: string;
  answer: string;
  note: string;
};

export const conversationPatterns: ConversationPattern[] = [
  { id: "name", title: "Hỏi tên", question: "Comment tu t'appelles ?", answer: "Je m'appelle [prénom].", note: "Bạn bè dùng tu; lịch sự dùng Comment vous vous appelez ? / Je m'appelle…" },
  { id: "age", title: "Hỏi tuổi", question: "Tu as quel âge ?", answer: "J'ai [nombre] ans.", note: "Dùng avoir, không dùng être: J'ai 23 ans." },
  { id: "nationality", title: "Hỏi quốc tịch", question: "Tu es de quelle nationalité ?", answer: "Je suis [nationalité].", note: "Ví dụ: Je suis suisse. Je suis japonaise." },
  { id: "origin", title: "Hỏi quê quán", question: "Tu viens d'où ?", answer: "Je viens de / du / d'[pays].", note: "Ví dụ: Je viens du Japon. Je viens d'Italie." },
  { id: "home", title: "Hỏi nơi ở", question: "Tu habites où ?", answer: "J'habite à [ville] / en [pays].", note: "Ví dụ: J'habite à Lyon. J'habite en France." },
  { id: "likes", title: "Hỏi sở thích", question: "Tu aimes la musique ?", answer: "Oui, j'aime la musique. / Non, je n'aime pas la musique.", note: "Sau aimer, thường dùng mạo từ xác định: le, la, l', les." },
  { id: "likes-list", title: "Hỏi thích gì", question: "Tu aimes quoi ?", answer: "J'aime le cinéma, l'art et les langues.", note: "Liệt kê các sở thích bằng et ở mục cuối." },
  { id: "job", title: "Hỏi nghề nghiệp", question: "Tu fais quel métier ?", answer: "Je suis [métier]. / Je travaille dans [lieu].", note: "Ví dụ: Je suis informaticienne. Je travaille dans un bureau." },
  { id: "status", title: "Hỏi tình trạng gia đình", question: "Tu es marié(e) ?", answer: "Oui, je suis marié(e). / Non, je suis célibataire.", note: "Thay đổi đuôi giống khi cần: marié / mariée." },
  { id: "documents", title: "Hỏi giấy tờ", question: "Quels documents avez-vous ?", answer: "J'ai un passeport et une carte d'identité.", note: "Trong ngữ cảnh hành chính, dùng vous lịch sự." },
  { id: "address", title: "Hỏi địa chỉ", question: "Quelle est votre adresse ?", answer: "J'habite au numéro [x], rue [nom], à [ville].", note: "Dùng votre và vous khi giao tiếp trang trọng." },
];

export type VocabularyGroup = {
  id: string;
  title: string;
  caption: string;
  entries: Array<{ french: string; vietnamese: string; note?: string }>;
};

export const vocabularyGroups: VocabularyGroup[] = [
  {
    id: "likes",
    title: "Sở thích & ngôn ngữ",
    caption: "Từ vựng cho aimer và trò chuyện đầu tiên.",
    entries: [
      { french: "le café", vietnamese: "cà phê" },
      { french: "la musique", vietnamese: "âm nhạc" },
      { french: "le cinéma", vietnamese: "điện ảnh" },
      { french: "l'art", vietnamese: "nghệ thuật" },
      { french: "le sport", vietnamese: "thể thao" },
      { french: "les langues", vietnamese: "các ngôn ngữ" },
      { french: "l'histoire", vietnamese: "lịch sử" },
      { french: "le chocolat", vietnamese: "sô-cô-la" },
      { french: "l'Espagne", vietnamese: "Tây Ban Nha" },
    ],
  },
  {
    id: "identity",
    title: "Thông tin cá nhân & gia đình",
    caption: "Dùng khi giới thiệu bản thân hoặc điền biểu mẫu.",
    entries: [
      { french: "le nom", vietnamese: "họ" },
      { french: "le prénom", vietnamese: "tên" },
      { french: "la date de naissance", vietnamese: "ngày sinh" },
      { french: "le lieu de naissance", vietnamese: "nơi sinh" },
      { french: "le pays de naissance", vietnamese: "nước sinh" },
      { french: "la nationalité", vietnamese: "quốc tịch" },
      { french: "l'état civil", vietnamese: "tình trạng hôn nhân" },
      { french: "célibataire", vietnamese: "độc thân" },
      { french: "marié(e)", vietnamese: "đã kết hôn" },
      { french: "séparé(e)", vietnamese: "ly thân" },
      { french: "divorcé(e)", vietnamese: "đã ly hôn" },
      { french: "veuf / veuve", vietnamese: "góa vợ / góa chồng" },
    ],
  },
  {
    id: "nationalities",
    title: "Quốc tịch, đất nước & thành phố",
    caption: "Dùng với Je suis… / J'habite… / Je viens de…", 
    entries: [
      { french: "allemand / allemande", vietnamese: "người Đức", note: "en Allemagne · Berlin" },
      { french: "américain / américaine", vietnamese: "người Mỹ", note: "aux États-Unis · New York" },
      { french: "anglais / anglaise", vietnamese: "người Anh", note: "en Angleterre · Londres" },
      { french: "belge", vietnamese: "người Bỉ", note: "en Belgique · Bruxelles" },
      { french: "canadien / canadienne", vietnamese: "người Canada", note: "au Canada · Montréal" },
      { french: "chinois / chinoise", vietnamese: "người Trung Quốc", note: "en Chine · Pékin" },
      { french: "colombien / colombienne", vietnamese: "người Colombia", note: "en Colombie · Bogota" },
      { french: "danois / danoise", vietnamese: "người Đan Mạch", note: "au Danemark · Copenhague" },
      { french: "espagnol / espagnole", vietnamese: "người Tây Ban Nha", note: "en Espagne · Madrid" },
      { french: "européen / européenne", vietnamese: "người châu Âu", note: "en Europe · Strasbourg" },
      { french: "français / française", vietnamese: "người Pháp", note: "en France · Toulouse" },
      { french: "grec / grecque", vietnamese: "người Hy Lạp", note: "en Grèce · Athènes" },
      { french: "italien / italienne", vietnamese: "người Ý", note: "en Italie · Venise" },
      { french: "japonais / japonaise", vietnamese: "người Nhật", note: "au Japon · Tokyo" },
      { french: "malien / malienne", vietnamese: "người Mali", note: "au Mali · Bamako" },
      { french: "mexicain / mexicaine", vietnamese: "người Mexico", note: "au Mexique · Acapulco" },
      { french: "norvégien / norvégienne", vietnamese: "người Na Uy", note: "en Norvège · Oslo" },
      { french: "portugais / portugaise", vietnamese: "người Bồ Đào Nha", note: "au Portugal · Lisbonne" },
      { french: "suisse", vietnamese: "người Thụy Sĩ", note: "en Suisse · Lausanne" },
    ],
  },
  {
    id: "jobs",
    title: "Nghề nghiệp & nơi làm việc",
    caption: "Mẫu: Je suis… / Je travaille dans…", 
    entries: [
      { french: "étudiant(e)", vietnamese: "sinh viên", note: "à l'université" },
      { french: "professeur(e)", vietnamese: "giáo viên", note: "dans un lycée / collège" },
      { french: "directeur / directrice", vietnamese: "giám đốc" },
      { french: "vendeur / vendeuse", vietnamese: "nhân viên bán hàng", note: "dans un magasin" },
      { french: "caissier / caissière", vietnamese: "thu ngân", note: "dans un supermarché" },
      { french: "médecin", vietnamese: "bác sĩ", note: "dans un cabinet médical / un hôpital" },
      { french: "dentiste", vietnamese: "nha sĩ", note: "dans un cabinet dentaire" },
      { french: "pharmacien / pharmacienne", vietnamese: "dược sĩ", note: "dans une pharmacie" },
      { french: "infirmier / infirmière", vietnamese: "y tá / điều dưỡng", note: "dans un hôpital / une clinique" },
      { french: "journaliste", vietnamese: "nhà báo", note: "dans un journal, à la radio, à la télévision" },
      { french: "photographe", vietnamese: "nhiếp ảnh gia", note: "dans un atelier" },
      { french: "informaticien / informaticienne", vietnamese: "nhân viên IT", note: "dans un bureau" },
      { french: "ingénieur(e)", vietnamese: "kỹ sư", note: "dans un bureau d'études / une usine" },
      { french: "comptable", vietnamese: "kế toán", note: "dans un bureau, une entreprise" },
      { french: "employé(e)", vietnamese: "nhân viên", note: "dans un bureau, une banque, une entreprise" },
      { french: "coiffeur / coiffeuse", vietnamese: "thợ làm tóc", note: "dans un salon de coiffure" },
      { french: "chanteur / chanteuse", vietnamese: "ca sĩ", note: "dans un cabaret, un théâtre" },
      { french: "danseur / danseuse", vietnamese: "vũ công", note: "à l'opéra, dans un théâtre" },
      { french: "acteur / actrice", vietnamese: "diễn viên", note: "dans un théâtre, sur un plateau de cinéma" },
      { french: "peintre", vietnamese: "họa sĩ", note: "dans un atelier" },
      { french: "architecte", vietnamese: "kiến trúc sư", note: "dans un cabinet d'architecte" },
      { french: "gardien / gardienne", vietnamese: "người gác / bảo vệ", note: "dans un musée, une résidence" },
      { french: "ouvrier / ouvrière", vietnamese: "công nhân", note: "dans une usine, un atelier" },
      { french: "serveur / serveuse", vietnamese: "bồi bàn", note: "dans un restaurant, un bar, un café" },
      { french: "agriculteur / agricultrice", vietnamese: "nông dân", note: "dans une ferme, à la campagne" },
    ],
  },
  {
    id: "daily-documents",
    title: "Địa chỉ & giấy tờ thường ngày",
    caption: "Từ vựng thực hành trong biểu mẫu và đời sống.",
    entries: [
      { french: "le numéro", vietnamese: "số nhà" },
      { french: "la rue", vietnamese: "đường phố" },
      { french: "l'avenue", vietnamese: "đại lộ" },
      { french: "le boulevard", vietnamese: "đại lộ lớn" },
      { french: "la place", vietnamese: "quảng trường" },
      { french: "la route / le chemin", vietnamese: "đường / lối đi" },
      { french: "l'arrondissement", vietnamese: "quận" },
      { french: "le code postal", vietnamese: "mã bưu chính" },
      { french: "la ville / le pays", vietnamese: "thành phố / quốc gia" },
      { french: "un passeport", vietnamese: "hộ chiếu" },
      { french: "un titre de transport", vietnamese: "vé / thẻ đi lại" },
      { french: "une carte d'étudiant(e)", vietnamese: "thẻ sinh viên" },
      { french: "une carte d'identité", vietnamese: "thẻ căn cước" },
      { french: "un permis de conduire", vietnamese: "bằng lái xe" },
      { french: "une carte de bibliothèque", vietnamese: "thẻ thư viện" },
      { french: "la validité", vietnamese: "thời hạn hiệu lực" },
      { french: "la signature", vietnamese: "chữ ký" },
    ],
  },
];
