import { vocabularyEnglish } from "./vocabularyEnglish";

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

export type VocabularyEntry = {
  french: string;
  vietnamese: string;
  english: string;
  note?: string;
};

export type VocabularyGroup = {
  id: string;
  title: string;
  caption: string;
  entries: VocabularyEntry[];
};

type RawVocabularyGroup = Omit<VocabularyGroup, "entries"> & {
  entries: Array<Omit<VocabularyEntry, "english">>;
};

const rawVocabularyGroups: RawVocabularyGroup[] = [
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
    id: "leisure-outings",
    title: "Sở thích, đi chơi & thời gian rảnh",
    caption: "Hoạt động, trò chơi, buổi đi chơi và chương trình văn hóa.",
    entries: [
      { french: "jouer", vietnamese: "chơi" },
      { french: "chanter", vietnamese: "hát" },
      { french: "dessiner", vietnamese: "vẽ" },
      { french: "peindre", vietnamese: "vẽ tranh" },
      { french: "cuisiner", vietnamese: "nấu ăn" },
      { french: "écouter la radio", vietnamese: "nghe đài" },
      { french: "écouter de la musique", vietnamese: "nghe nhạc" },
      { french: "lire", vietnamese: "đọc" },
      { french: "faire de la photographie", vietnamese: "chụp ảnh" },
      { french: "se promener", vietnamese: "đi dạo" },
      { french: "faire une promenade", vietnamese: "đi dạo" },
      { french: "danser", vietnamese: "nhảy múa" },
      { french: "faire la fête", vietnamese: "đi dự tiệc / vui chơi" },
      { french: "visiter un musée", vietnamese: "thăm bảo tàng" },
      { french: "voir une exposition", vietnamese: "xem triển lãm" },
      { french: "voir un spectacle", vietnamese: "xem buổi biểu diễn" },
      { french: "voir une pièce de théâtre", vietnamese: "xem một vở kịch" },
      { french: "voir un film", vietnamese: "xem phim" },
      { french: "voir un concert", vietnamese: "xem / đi nghe hòa nhạc" },
      { french: "les jeux de société", vietnamese: "trò chơi bàn cờ" },
      { french: "les jeux de cartes", vietnamese: "trò chơi bài" },
      { french: "les jeux vidéo", vietnamese: "trò chơi điện tử" },
      { french: "les échecs", vietnamese: "cờ vua" },
      { french: "les dames", vietnamese: "cờ đam" },
      { french: "les dominos", vietnamese: "trò domino" },
      { french: "aller au cinéma", vietnamese: "đi xem phim" },
      { french: "aller au théâtre", vietnamese: "đi xem kịch" },
      { french: "aller au musée", vietnamese: "đi bảo tàng" },
      { french: "aller à un concert", vietnamese: "đi hòa nhạc" },
      { french: "l'opéra", vietnamese: "nhà hát opera / opera" },
      { french: "un salon", vietnamese: "triển lãm / hội chợ" },
      { french: "le cirque", vietnamese: "rạp xiếc" },
      { french: "une salle de spectacle", vietnamese: "khán phòng biểu diễn" },
      { french: "faire du sport", vietnamese: "chơi thể thao" },
      { french: "courir", vietnamese: "chạy" },
      { french: "marcher", vietnamese: "đi bộ" },
      { french: "jouer au tennis", vietnamese: "chơi quần vợt" },
      { french: "jouer au badminton", vietnamese: "chơi cầu lông" },
      { french: "jardiner", vietnamese: "làm vườn" },
      { french: "faire du jardinage", vietnamese: "làm vườn" },
      { french: "bricoler", vietnamese: "sửa chữa / làm đồ thủ công" },
      { french: "faire du bricolage", vietnamese: "làm việc sửa chữa / thủ công" },
      { french: "prendre l'air", vietnamese: "ra ngoài hít thở không khí" },
      { french: "être dehors", vietnamese: "ở ngoài trời" },
      { french: "faire des courses", vietnamese: "đi mua sắm" },
      { french: "aller au marché", vietnamese: "đi chợ" },
      { french: "visiter un quartier", vietnamese: "tham quan một khu phố" },
      { french: "visiter un monument", vietnamese: "tham quan một di tích" },
      { french: "faire la queue", vietnamese: "xếp hàng" },
      { french: "déjeuner au restaurant", vietnamese: "ăn trưa ở nhà hàng" },
      { french: "dîner au restaurant", vietnamese: "ăn tối ở nhà hàng" },
      { french: "faire la grasse matinée", vietnamese: "ngủ nướng" },
      { french: "rendre visite à des amis", vietnamese: "đến thăm bạn bè" },
      { french: "inviter des amis", vietnamese: "mời bạn bè" },
      { french: "recevoir des amis", vietnamese: "tiếp bạn bè tại nhà" },
      { french: "faire la cuisine", vietnamese: "nấu ăn" },
      { french: "rester à la maison", vietnamese: "ở nhà" },
      { french: "se reposer", vietnamese: "nghỉ ngơi" },
      { french: "faire la sieste", vietnamese: "ngủ trưa" },
      { french: "regarder un film", vietnamese: "xem phim" },
      { french: "jouer aux cartes", vietnamese: "chơi bài" },
      { french: "s'occuper des enfants", vietnamese: "chăm sóc trẻ em" },
      { french: "prendre son temps", vietnamese: "thong thả / không vội" },
      { french: "s'amuser", vietnamese: "vui chơi" },
    ],
  },
  {
    id: "identity",
    title: "Thông tin cá nhân & gia đình",
    caption: "Dùng khi giới thiệu bản thân hoặc điền biểu mẫu.",
    entries: [
      { french: "le nom", vietnamese: "họ" },
      { french: "le prénom", vietnamese: "tên" },
      { french: "Nom(s) de famille", vietnamese: "họ theo bố/mẹ" },
      { french: "Nom(s) de jeune fille", vietnamese: "họ thời con gái / họ trước khi kết hôn" },
      { french: "Monsieur", vietnamese: "ông / ngài (cách gọi lịch sự)" },
      { french: "Madame", vietnamese: "bà / cô (cách gọi lịch sự)" },
      { french: "Mademoiselle", vietnamese: "cô (cách gọi truyền thống cho phụ nữ trẻ)" },
      { french: "le sexe", vietnamese: "giới tính", note: "Trên biểu mẫu thường đi kèm lựa chọn masculin / féminin." },
      { french: "masculin", vietnamese: "nam" },
      { french: "féminin", vietnamese: "nữ" },
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
    id: "family-relationships",
    title: "Gia đình, xưng hô & quan hệ",
    caption: "Gọi người thân, nói về quan hệ và các giai đoạn của một cặp đôi.",
    entries: [
      { french: "la famille", vietnamese: "gia đình" },
      { french: "les parents", vietnamese: "cha mẹ" },
      { french: "le père / la mère", vietnamese: "bố / mẹ" },
      { french: "le mari / la femme", vietnamese: "chồng / vợ" },
      { french: "le fils / la fille", vietnamese: "con trai / con gái" },
      { french: "le frère / la sœur", vietnamese: "anh, em trai / chị, em gái" },
      { french: "le grand-père / la grand-mère", vietnamese: "ông / bà" },
      { french: "les grands-parents", vietnamese: "ông bà" },
      { french: "le petit-fils / la petite-fille", vietnamese: "cháu trai / cháu gái" },
      { french: "les petits-enfants", vietnamese: "các cháu" },
      { french: "l'oncle / la tante", vietnamese: "chú, bác, cậu / cô, dì, bác gái" },
      { french: "le cousin / la cousine", vietnamese: "anh, em họ nam / nữ" },
      { french: "le neveu / la nièce", vietnamese: "cháu trai / cháu gái (con của anh chị em)" },
      { french: "le beau-père / la belle-mère", vietnamese: "cha dượng / mẹ kế; bố vợ-chồng / mẹ vợ-chồng", note: "Tùy ngữ cảnh, beau-père / belle-mère có thể chỉ cha mẹ kế hoặc bố mẹ vợ/chồng." },
      { french: "le beau-frère / la belle-sœur", vietnamese: "anh, em rể / chị, em dâu" },
      { french: "le beau-fils / la belle-fille", vietnamese: "con trai riêng / con gái riêng của vợ hoặc chồng" },
      { french: "l'arrière-grand-père / l'arrière-grand-mère", vietnamese: "cụ ông / cụ bà" },
      { french: "l'enfant unique", vietnamese: "con một" },
      { french: "tutoyer", vietnamese: "xưng hô bằng tu" },
      { french: "vouvoyer", vietnamese: "xưng hô bằng vous" },
      { french: "appeler quelqu'un par son prénom", vietnamese: "gọi ai đó bằng tên" },
      { french: "un ami / une amie", vietnamese: "bạn nam / bạn nữ" },
      { french: "un petit ami / une petite amie", vietnamese: "bạn trai / bạn gái" },
      { french: "un compagnon / une compagne", vietnamese: "bạn đời, người đồng hành nam / nữ" },
      { french: "un couple", vietnamese: "một cặp đôi" },
      { french: "se rencontrer", vietnamese: "gặp nhau, làm quen" },
      { french: "sortir ensemble", vietnamese: "hẹn hò" },
      { french: "être en couple", vietnamese: "đang trong một mối quan hệ" },
      { french: "se fiancer", vietnamese: "đính hôn" },
      { french: "être fiancé(e)", vietnamese: "đã đính hôn" },
      { french: "se marier", vietnamese: "kết hôn" },
      { french: "être marié(e)", vietnamese: "đã kết hôn" },
      { french: "vivre en concubinage", vietnamese: "sống chung không kết hôn" },
      { french: "se séparer", vietnamese: "chia tay / ly thân" },
      { french: "divorcer", vietnamese: "ly hôn" },
      { french: "se remarier", vietnamese: "tái hôn" },
      { french: "être célibataire", vietnamese: "độc thân" },
      { french: "être veuf / veuve", vietnamese: "góa vợ / góa chồng" },
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
      { french: "russe", vietnamese: "người Nga", note: "en Russie · Moscou" },
      { french: "suisse", vietnamese: "người Thụy Sĩ", note: "en Suisse · Lausanne" },
      { french: "turc / turque", vietnamese: "người Thổ Nhĩ Kỳ", note: "en Turquie · Ankara" },
      { french: "coréen / coréenne", vietnamese: "người Hàn Quốc", note: "en Corée · Séoul" },
      { french: "étranger / étrangère", vietnamese: "người nước ngoài", note: "Ví dụ: Pour les Français, elle est étrangère." },
      { french: "d'origine", vietnamese: "có nguồn gốc", note: "Ví dụ: Il est d'origine grecque." },
      { french: "venir de", vietnamese: "đến từ", note: "Ví dụ: Il vient de Grèce." },
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
      { french: "l'université", vietnamese: "trường đại học" },
      { french: "un lycée / un collège", vietnamese: "trường trung học phổ thông / trung học cơ sở" },
      { french: "un magasin", vietnamese: "cửa hàng" },
      { french: "un supermarché", vietnamese: "siêu thị" },
      { french: "un cabinet médical / un hôpital", vietnamese: "phòng khám / bệnh viện" },
      { french: "un cabinet dentaire", vietnamese: "phòng khám nha khoa" },
      { french: "une pharmacie", vietnamese: "nhà thuốc" },
      { french: "une clinique", vietnamese: "phòng khám / bệnh viện tư" },
      { french: "un journal", vietnamese: "tòa soạn báo" },
      { french: "la radio / la télévision", vietnamese: "đài phát thanh / truyền hình" },
      { french: "un atelier", vietnamese: "xưởng, phòng làm việc" },
      { french: "un bureau", vietnamese: "văn phòng" },
      { french: "un bureau d'études / une usine", vietnamese: "văn phòng thiết kế, nghiên cứu / nhà máy" },
      { french: "une entreprise", vietnamese: "công ty, doanh nghiệp" },
      { french: "une banque", vietnamese: "ngân hàng" },
      { french: "un salon de coiffure", vietnamese: "tiệm làm tóc" },
      { french: "un cabaret / un théâtre", vietnamese: "quán biểu diễn / nhà hát" },
      { french: "l'opéra", vietnamese: "nhà hát opera" },
      { french: "un plateau de cinéma", vietnamese: "phim trường" },
      { french: "un cabinet d'architecte", vietnamese: "văn phòng kiến trúc sư" },
      { french: "un musée", vietnamese: "bảo tàng" },
      { french: "une résidence", vietnamese: "khu nhà ở" },
      { french: "un restaurant / un bar / un café", vietnamese: "nhà hàng / quán bar / quán cà phê" },
      { french: "une ferme", vietnamese: "nông trại" },
      { french: "la campagne", vietnamese: "vùng nông thôn" },
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

export const vocabularyGroups: VocabularyGroup[] = rawVocabularyGroups.map((group) => ({
  ...group,
  entries: group.entries.map((entry) => {
    const english = vocabularyEnglish[entry.french];
    if (!english) throw new Error(`Thiếu nghĩa tiếng Anh cho mục từ vựng: ${entry.french}`);
    return { ...entry, english };
  }),
}));

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
  { nationality: "russe", country: "Russie", countryPreposition: "en", city: "Moscou" },
  { nationality: "suisse", country: "Suisse", countryPreposition: "en", city: "Lausanne" },
  { nationality: "turc / turque", country: "Turquie", countryPreposition: "en", city: "Ankara" },
  { nationality: "coréen / coréenne", country: "Corée", countryPreposition: "en", city: "Séoul" },
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
  { id: "paris", before: "Tu habites", place: "Paris", answer: "à", note: "Paris là thành phố, dùng à." },
  { id: "lyon", before: "Elle habite", place: "Lyon", answer: "à", note: "Lyon là thành phố, dùng à." },
  { id: "hanoi", before: "J'habite", place: "Hanoï", answer: "à", note: "Hanoï là thành phố, dùng à." },
  { id: "bruxelles", before: "Nous habitons", place: "Bruxelles", answer: "à", note: "Bruxelles là thành phố, dùng à." },
  { id: "madrid", before: "Vous habitez", place: "Madrid", answer: "à", note: "Madrid là thành phố, dùng à." },
  { id: "montreal", before: "Ils habitent", place: "Montréal", answer: "à", note: "Montréal là thành phố, dùng à." },
  { id: "sydney", before: "Tu habites", place: "Sydney", answer: "à", note: "Sydney là thành phố, dùng à." },
  { id: "dakar", before: "Nous habitons", place: "Dakar", answer: "à", note: "Dakar là thành phố, dùng à." },
  { id: "lisbonne", before: "Elle habite", place: "Lisbonne", answer: "à", note: "Lisbonne là thành phố, dùng à." },
  { id: "athenes", before: "J'habite", place: "Athènes", answer: "à", note: "Athènes là thành phố, dùng à." },
  { id: "usa", before: "Elle habite", place: "États-Unis", answer: "aux", note: "États-Unis là quốc gia số nhiều, dùng aux." },
  { id: "pays-bas", before: "Nous habitons", place: "Pays-Bas", answer: "aux", note: "Pays-Bas là quốc gia số nhiều, dùng aux." },
  { id: "philippines", before: "Ils habitent", place: "Philippines", answer: "aux", note: "Philippines là quốc gia số nhiều, dùng aux." },
  { id: "canada", before: "Il habite", place: "Canada", answer: "au", note: "Canada là quốc gia giống đực, dùng au." },
  { id: "japon", before: "Tu habites", place: "Japon", answer: "au", note: "Japon là quốc gia giống đực, dùng au." },
  { id: "vietnam", before: "J'habite", place: "Vietnam", answer: "au", note: "Vietnam là quốc gia giống đực, dùng au." },
  { id: "maroc", before: "Elle habite", place: "Maroc", answer: "au", note: "Maroc là quốc gia giống đực, dùng au." },
  { id: "mexique", before: "Nous habitons", place: "Mexique", answer: "au", note: "Mexique là quốc gia giống đực, dùng au." },
  { id: "bresil", before: "Vous habitez", place: "Brésil", answer: "au", note: "Brésil là quốc gia giống đực, dùng au." },
  { id: "danemark", before: "Ils habitent", place: "Danemark", answer: "au", note: "Danemark là quốc gia giống đực, dùng au." },
  { id: "mali", before: "Tu habites", place: "Mali", answer: "au", note: "Mali là quốc gia giống đực, dùng au." },
  { id: "italie", before: "Nous habitons", place: "Italie", answer: "en", note: "Italie là quốc gia giống cái, dùng en." },
  { id: "belgique", before: "J'habite", place: "Belgique", answer: "en", note: "Belgique là quốc gia giống cái, dùng en." },
  { id: "allemagne", before: "Elle habite", place: "Allemagne", answer: "en", note: "Allemagne là quốc gia giống cái, dùng en." },
  { id: "suisse", before: "Tu habites", place: "Suisse", answer: "en", note: "Suisse là quốc gia giống cái, dùng en." },
  { id: "chine", before: "Nous habitons", place: "Chine", answer: "en", note: "Chine là quốc gia giống cái, dùng en." },
  { id: "norvege", before: "Vous habitez", place: "Norvège", answer: "en", note: "Norvège là quốc gia giống cái, dùng en." },
  { id: "irlande", before: "Ils habitent", place: "Irlande", answer: "en", note: "Irlande bắt đầu bằng nguyên âm, dùng en." },
  { id: "argentine", before: "Tu habites", place: "Argentine", answer: "en", note: "Argentine bắt đầu bằng nguyên âm, dùng en." },
  { id: "australie", before: "Elle habite", place: "Australie", answer: "en", note: "Australie bắt đầu bằng nguyên âm, dùng en." },
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

export const quelForms = [
  { form: "Quel", agreement: "Giống đực · số ít", example: "Quel âge as-tu ?" },
  { form: "Quelle", agreement: "Giống cái · số ít", example: "Quelle adresse est correcte ?" },
  { form: "Quels", agreement: "Giống đực · số nhiều", example: "Quels pays visitez-vous ?" },
  { form: "Quelles", agreement: "Giống cái · số nhiều", example: "Quelles photos aimez-vous ?" },
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
  { id: "address", before: "", after: "adresse est correcte ?", answer: "quelle", note: "Adresse là danh từ giống cái số ít: quelle adresse." },
  { id: "countries", before: "", after: "pays visitez-vous ?", answer: "quels", note: "Pays là danh từ giống đực số nhiều: quels pays." },
  { id: "photos", before: "", after: "photos avez-vous ?", answer: "quelles", note: "Photos là giống cái số nhiều: quelles photos." },
  { id: "how-much", before: "", after: "ça coûte ?", answer: "combien", note: "Combien dùng để hỏi số lượng hoặc giá tiền." },
  { id: "why", before: "", after: "tu aimes le croissant ?", answer: "pourquoi", note: "Pourquoi dùng để hỏi nguyên nhân." },
  { id: "how", before: "", after: "vous appelez-vous ?", answer: "comment", note: "Comment dùng để hỏi cách thức hoặc tên." },
];
