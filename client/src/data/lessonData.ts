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
  practice: {
    accepts: string[];
    hint: string;
    example: string;
  };
};

export const conversationPatterns: ConversationPattern[] = [
  { id: "name", title: "Hỏi tên", question: "Comment tu t'appelles ?", answer: "Je m'appelle [prénom].", note: "Bạn bè dùng tu; lịch sự dùng Comment vous vous appelez ? / Je m'appelle…", practice: { accepts: ["je m'appelle"], hint: "Bắt đầu bằng Je m'appelle…, sau đó thay bằng tên của bạn.", example: "Je m'appelle Claire." } },
  { id: "age", title: "Hỏi tuổi", question: "Tu as quel âge ?", answer: "J'ai [nombre] ans.", note: "Dùng avoir, không dùng être: J'ai 23 ans.", practice: { accepts: ["j'ai"], hint: "Dùng avoir: J'ai + số + ans.", example: "J'ai 23 ans." } },
  { id: "nationality", title: "Hỏi quốc tịch", question: "Tu es de quelle nationalité ?", answer: "Je suis [nationalité].", note: "Ví dụ: Je suis suisse. Je suis japonaise.", practice: { accepts: ["je suis"], hint: "Bắt đầu bằng Je suis…, rồi chọn quốc tịch phù hợp.", example: "Je suis vietnamienne." } },
  { id: "origin", title: "Hỏi quê quán", question: "Tu viens d'où ?", answer: "Je viens de / du / d'[pays].", note: "Ví dụ: Je viens du Japon. Je viens d'Italie.", practice: { accepts: ["je viens de", "je viens du", "je viens d'"], hint: "Chọn de / du / d' theo tên đất nước.", example: "Je viens du Vietnam." } },
  { id: "home", title: "Hỏi nơi ở", question: "Tu habites où ?", answer: "J'habite à [ville] / en [pays].", note: "Ví dụ: J'habite à Lyon. J'habite en France.", practice: { accepts: ["j'habite a", "j'habite en", "j'habite au", "j'habite aux"], hint: "Dùng à + thành phố; en / au / aux + đất nước.", example: "J'habite à Hanoï." } },
  { id: "likes", title: "Hỏi sở thích", question: "Tu aimes la musique ?", answer: "Oui, j'aime la musique. / Non, je n'aime pas la musique.", note: "Sau aimer, thường dùng mạo từ xác định: le, la, l', les.", practice: { accepts: ["oui j'aime", "non je n'aime pas"], hint: "Có thể trả lời khẳng định hoặc phủ định, nhưng nhớ dùng mạo từ.", example: "Oui, j'aime la musique." } },
  { id: "likes-list", title: "Hỏi thích gì", question: "Tu aimes quoi ?", answer: "J'aime le cinéma, l'art et les langues.", note: "Liệt kê các sở thích bằng et ở mục cuối.", practice: { accepts: ["j'aime"], hint: "Bắt đầu bằng J'aime…, rồi liệt kê điều bạn thích.", example: "J'aime le cinéma et les langues." } },
  { id: "job", title: "Hỏi nghề nghiệp", question: "Tu fais quel métier ?", answer: "Je suis [métier]. / Je travaille dans [lieu].", note: "Ví dụ: Je suis informaticienne. Je travaille dans un bureau.", practice: { accepts: ["je suis", "je travaille"], hint: "Nói nghề bằng Je suis… hoặc nơi làm việc bằng Je travaille dans…", example: "Je suis étudiante." } },
  { id: "status", title: "Hỏi tình trạng gia đình", question: "Tu es marié(e) ?", answer: "Oui, je suis marié(e). / Non, je suis célibataire.", note: "Thay đổi đuôi giống khi cần: marié / mariée.", practice: { accepts: ["oui je suis", "non je suis"], hint: "Trả lời Oui / Non, rồi dùng je suis…", example: "Non, je suis célibataire." } },
  { id: "documents", title: "Hỏi giấy tờ", question: "Quels documents avez-vous ?", answer: "J'ai un passeport et une carte d'identité.", note: "Trong ngữ cảnh hành chính, dùng vous lịch sự.", practice: { accepts: ["j'ai"], hint: "Liệt kê giấy tờ sau J'ai…", example: "J'ai un passeport et une carte d'identité." } },
  { id: "address", title: "Hỏi địa chỉ", question: "Quelle est votre adresse ?", answer: "J'habite au numéro [x], rue [nom], à [ville].", note: "Dùng votre và vous khi giao tiếp trang trọng.", practice: { accepts: ["j'habite"], hint: "Bắt đầu bằng J'habite…, sau đó đi từ số nhà đến thành phố.", example: "J'habite au numéro 12, rue des Fleurs, à Lyon." } },
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

export const placeRules = [
  { preposition: "à", label: "tên thành phố", example: "à Berlin · à New York · à Tokyo" },
  { preposition: "au", label: "quốc gia giống đực", example: "au Canada · au Japon · au Portugal" },
  { preposition: "en", label: "quốc gia giống cái / nguyên âm", example: "en France · en Italie · en Allemagne" },
  { preposition: "aux", label: "quốc gia số nhiều", example: "aux États-Unis" },
];

export type NationalityPlace = {
  nationality: string;
  country: string;
  countryPreposition: string;
  city: string;
};

export const nationalityPlaces: NationalityPlace[] = [
  { nationality: "allemand / allemande", country: "Allemagne", countryPreposition: "en", city: "Berlin" },
  { nationality: "américain / américaine", country: "États-Unis", countryPreposition: "aux", city: "New York" },
  { nationality: "anglais / anglaise", country: "Angleterre", countryPreposition: "en", city: "Londres" },
  { nationality: "belge", country: "Belgique", countryPreposition: "en", city: "Bruxelles" },
  { nationality: "canadien / canadienne", country: "Canada", countryPreposition: "au", city: "Montréal" },
  { nationality: "chinois / chinoise", country: "Chine", countryPreposition: "en", city: "Pékin" },
  { nationality: "colombien / colombienne", country: "Colombie", countryPreposition: "en", city: "Bogota" },
  { nationality: "danois / danoise", country: "Danemark", countryPreposition: "au", city: "Copenhague" },
  { nationality: "espagnol / espagnole", country: "Espagne", countryPreposition: "en", city: "Madrid" },
  { nationality: "européen / européenne", country: "Europe", countryPreposition: "en", city: "Strasbourg" },
  { nationality: "français / française", country: "France", countryPreposition: "en", city: "Toulouse" },
  { nationality: "grec / grecque", country: "Grèce", countryPreposition: "en", city: "Athènes" },
  { nationality: "italien / italienne", country: "Italie", countryPreposition: "en", city: "Venise" },
  { nationality: "japonais / japonaise", country: "Japon", countryPreposition: "au", city: "Tokyo" },
  { nationality: "malien / malienne", country: "Mali", countryPreposition: "au", city: "Bamako" },
  { nationality: "mexicain / mexicaine", country: "Mexique", countryPreposition: "au", city: "Acapulco" },
  { nationality: "norvégien / norvégienne", country: "Norvège", countryPreposition: "en", city: "Oslo" },
  { nationality: "portugais / portugaise", country: "Portugal", countryPreposition: "au", city: "Lisbonne" },
  { nationality: "suisse", country: "Suisse", countryPreposition: "en", city: "Lausanne" },
];

export type PlaceExercise = {
  id: string;
  before: string;
  place: string;
  answer: "à" | "au" | "en" | "aux";
  note: string;
};

export const placeExercises: PlaceExercise[] = [
  { id: "berlin", before: "J'habite", place: "Berlin", answer: "à", note: "Berlin là thành phố, dùng à." },
  { id: "usa", before: "Elle habite", place: "États-Unis", answer: "aux", note: "États-Unis là quốc gia số nhiều, dùng aux." },
  { id: "canada", before: "Il habite", place: "Canada", answer: "au", note: "Canada là quốc gia giống đực, dùng au." },
  { id: "italie", before: "Nous habitons", place: "Italie", answer: "en", note: "Italie là quốc gia giống cái, dùng en." },
  { id: "tokyo", before: "Tu habites", place: "Tokyo", answer: "à", note: "Tokyo là thành phố, dùng à." },
  { id: "portugal", before: "Vous habitez", place: "Portugal", answer: "au", note: "Portugal là quốc gia giống đực, dùng au." },
  { id: "france", before: "Je travaille", place: "France", answer: "en", note: "France là quốc gia giống cái, dùng en." },
  { id: "newyork", before: "Ils habitent", place: "New York", answer: "à", note: "New York là thành phố, dùng à." },
];

export const questionWords = [
  { word: "Quel / Quelle / Quels / Quelles", meaning: "nào, cái nào", example: "Quel âge ? · Quelle adresse ? · Quels pays ? · Quelles photos ?" },
  { word: "Combien", meaning: "bao nhiêu", example: "Combien ça coûte ?" },
  { word: "Où", meaning: "ở đâu", example: "Tu habites où ?" },
  { word: "Quand", meaning: "khi nào", example: "Quand travailles-tu ?" },
  { word: "Pourquoi", meaning: "tại sao", example: "Pourquoi tu aimes le croissant ?" },
  { word: "Comment", meaning: "như thế nào", example: "Comment vous appelez-vous ?" },
  { word: "Que / Qu'est-ce que / Quoi", meaning: "cái gì", example: "Que fais-tu ? · Qu'est-ce que tu achètes ? · Tu achètes quoi ?" },
];

export const questionForms = [
  { title: "Cách 1 · Ngữ điệu", formula: "Tu es vietnamien ?", note: "Đảo giọng lên ở cuối câu. Phù hợp hội thoại thân mật.", example: "Tu habites où ?" },
  { title: "Cách 2 · Est-ce que", formula: "Est-ce que tu es vietnamien ?", note: "Thêm est-ce que trước câu trần thuật. Dễ dùng, trung tính.", example: "Où est-ce que tu habites ?" },
  { title: "Cách 3 · Đảo ngữ", formula: "Es-tu vietnamien ?", note: "Động từ đứng trước chủ ngữ. Văn phong trang trọng hơn.", example: "Où habites-tu ?" },
];

export const questionExamples = [
  { topic: "aimer", casual: "Tu aimes quoi ?", neutral: "Qu'est-ce que tu aimes ?", formal: "Qu'aimes-tu ?" },
  { topic: "acheter", casual: "Tu achètes quoi ?", neutral: "Qu'est-ce que tu achètes ?", formal: "Qu'achètes-tu ?" },
  { topic: "travailler", casual: "Tu travailles quand ?", neutral: "Quand est-ce que tu travailles ?", formal: "Quand travailles-tu ?" },
  { topic: "s'appeler", casual: "Tu t'appelles comment ?", neutral: "Comment est-ce que tu t'appelles ?", formal: "Comment t'appelles-tu ?" },
];

export type QuestionExercise = {
  id: string;
  before: string;
  after: string;
  answer: string;
  note: string;
};

export const questionExercises: QuestionExercise[] = [
  { id: "where-casual", before: "Tu habites", after: "?", answer: "où", note: "Đặt où sau động từ trong câu hỏi bằng ngữ điệu." },
  { id: "when-inversion", before: "", after: "travailles-tu ?", answer: "quand", note: "Từ để hỏi đứng đầu trong cấu trúc đảo ngữ." },
  { id: "what-casual", before: "Tu achètes", after: "?", answer: "quoi", note: "Quoi thường đứng sau động từ trong hội thoại thân mật." },
  { id: "age", before: "", after: "âge as-tu ?", answer: "quel", note: "Âge là danh từ giống đực số ít: quel âge." },
  { id: "photos", before: "", after: "photos avez-vous ?", answer: "quelles", note: "Photos là giống cái số nhiều: quelles photos." },
  { id: "how-much", before: "", after: "ça coûte ?", answer: "combien", note: "Combien dùng để hỏi số lượng hoặc giá tiền." },
  { id: "why", before: "", after: "tu aimes le croissant ?", answer: "pourquoi", note: "Pourquoi dùng để hỏi nguyên nhân." },
  { id: "how", before: "", after: "vous appelez-vous ?", answer: "comment", note: "Comment dùng để hỏi cách thức hoặc tên." },
];
