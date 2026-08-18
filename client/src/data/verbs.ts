/**
 * Data snapshot from the shared Google Sheet.
 * Each record keeps the present-tense conjugation forms used by every study mode.
 */
export const pronouns = ["Je", "Tu", "Il / Elle / On", "Nous", "Vous", "Ils / Elles"] as const;

export type Pronoun = (typeof pronouns)[number];

export type Verb = {
  id: string;
  infinitive: string;
  meaning: string;
  english: string;
  forms: Record<Pronoun, string>;
  group: "Quotidien" | "Actions" | "Communication" | "Essentiels";
  note?: string;
};

const forms = (
  je: string,
  tu: string,
  il: string,
  nous: string,
  vous: string,
  ils: string,
): Record<Pronoun, string> => ({
  Je: je,
  Tu: tu,
  "Il / Elle / On": il,
  Nous: nous,
  Vous: vous,
  "Ils / Elles": ils,
});

export const verbs: Verb[] = [
  { id: "se-lever", infinitive: "se lever", meaning: "thức dậy", english: "get up", forms: forms("me lève", "te lèves", "se lève", "nous levons", "vous levez", "se lèvent"), group: "Quotidien", note: "Động từ phản thân · đổi âm ở je/tu/il/ils" },
  { id: "se-promener", infinitive: "se promener", meaning: "đi dạo", english: "take a walk", forms: forms("me promène", "te promènes", "se promène", "nous promenons", "vous promenez", "se promènent"), group: "Quotidien", note: "Động từ phản thân · đổi âm" },
  { id: "se-reveiller", infinitive: "se réveiller", meaning: "tỉnh dậy", english: "wake up", forms: forms("me réveille", "te réveilles", "se réveille", "nous réveillons", "vous réveillez", "se réveillent"), group: "Quotidien" },
  { id: "se-laver", infinitive: "se laver", meaning: "tắm rửa", english: "wash oneself", forms: forms("me lave", "te laves", "se lave", "nous lavons", "vous lavez", "se lavent"), group: "Quotidien" },
  { id: "se-coucher", infinitive: "se coucher", meaning: "đi ngủ", english: "go to bed", forms: forms("me couche", "te couches", "se couche", "nous couchons", "vous couchez", "se couchent"), group: "Quotidien" },
  { id: "s-habiller", infinitive: "s'habiller", meaning: "mặc quần áo", english: "get dressed", forms: forms("m'habille", "t'habilles", "s'habille", "nous habillons", "vous habillez", "s'habillent"), group: "Quotidien" },
  { id: "se-depecher", infinitive: "se dépêcher", meaning: "vội vàng", english: "hurry", forms: forms("me dépêche", "te dépêches", "se dépêche", "nous dépêchons", "vous dépêchez", "se dépêchent"), group: "Quotidien" },
  { id: "se-maquiller", infinitive: "se maquiller", meaning: "trang điểm", english: "put on makeup", forms: forms("me maquille", "te maquilles", "se maquille", "nous maquillons", "vous maquillez", "se maquillent"), group: "Quotidien" },
  { id: "visiter", infinitive: "visiter", meaning: "tham quan", english: "visit", forms: forms("visite", "visites", "visite", "visitons", "visitez", "visitent"), group: "Actions" },
  { id: "se-marier", infinitive: "se marier", meaning: "kết hôn", english: "get married", forms: forms("me marie", "te maries", "se marie", "nous marions", "vous mariez", "se marient"), group: "Quotidien" },
  { id: "s-appeler", infinitive: "s'appeler", meaning: "tên là", english: "be called", forms: forms("m'appelle", "t'appelles", "s'appelle", "nous appelons", "vous appelez", "s'appellent"), group: "Communication", note: "Động từ phản thân · gấp phụ âm" },
  { id: "manger", infinitive: "manger", meaning: "ăn", english: "eat", forms: forms("mange", "manges", "mange", "mangeons", "mangez", "mangent"), group: "Quotidien", note: "Giữ âm mềm ở nous" },
  { id: "commencer", infinitive: "commencer", meaning: "bắt đầu", english: "begin", forms: forms("commence", "commences", "commence", "commençons", "commencez", "commencent"), group: "Actions", note: "Ç ở nous" },
  { id: "acheter", infinitive: "acheter", meaning: "mua", english: "buy", forms: forms("achète", "achètes", "achète", "achetons", "achetez", "achètent"), group: "Actions", note: "Đổi e → è" },
  { id: "appeler", infinitive: "appeler", meaning: "gọi", english: "call", forms: forms("appelle", "appelles", "appelle", "appelons", "appelez", "appellent"), group: "Communication", note: "Gấp phụ âm l" },
  { id: "jeter", infinitive: "jeter", meaning: "ném", english: "throw", forms: forms("jette", "jettes", "jette", "jetons", "jetez", "jettent"), group: "Actions", note: "Gấp phụ âm t" },
  { id: "preferer", infinitive: "préférer", meaning: "thích hơn", english: "prefer", forms: forms("préfère", "préfères", "préfère", "préférons", "préférez", "préfèrent"), group: "Actions", note: "Đổi é → è" },
  { id: "esperer", infinitive: "espérer", meaning: "hy vọng", english: "hope", forms: forms("espère", "espères", "espère", "espérons", "espérez", "espèrent"), group: "Actions", note: "Đổi é → è" },
  { id: "repeter", infinitive: "répéter", meaning: "lặp lại", english: "repeat", forms: forms("répète", "répètes", "répète", "répétons", "répétez", "répètent"), group: "Actions", note: "Đổi é → è" },
  { id: "payer", infinitive: "payer", meaning: "trả tiền", english: "pay", forms: forms("paie", "paies", "paie", "payons", "payez", "paient"), group: "Actions", note: "y → i có thể gặp ở một số ngôi" },
  { id: "essayer", infinitive: "essayer", meaning: "thử", english: "try", forms: forms("essaie", "essaies", "essaie", "essayons", "essayez", "essaient"), group: "Actions", note: "y → i ở một số ngôi" },
  { id: "envoyer", infinitive: "envoyer", meaning: "gửi", english: "send", forms: forms("envoie", "envoies", "envoie", "envoyons", "envoyez", "envoient"), group: "Communication", note: "y → i ở một số ngôi" },
  { id: "nettoyer", infinitive: "nettoyer", meaning: "lau dọn", english: "clean", forms: forms("nettoie", "nettoies", "nettoie", "nettoyons", "nettoyez", "nettoient"), group: "Quotidien", note: "y → i ở một số ngôi" },
  { id: "travailler", infinitive: "travailler", meaning: "làm việc", english: "work", forms: forms("travaille", "travailles", "travaille", "travaillons", "travaillez", "travaillent"), group: "Actions" },
  { id: "parler", infinitive: "parler", meaning: "nói", english: "speak", forms: forms("parle", "parles", "parle", "parlons", "parlez", "parlent"), group: "Communication" },
  { id: "regarder", infinitive: "regarder", meaning: "xem", english: "watch", forms: forms("regarde", "regardes", "regarde", "regardons", "regardez", "regardent"), group: "Actions" },
  { id: "ecouter", infinitive: "écouter", meaning: "nghe", english: "listen", forms: forms("écoute", "écoutes", "écoute", "écoutons", "écoutez", "écoutent"), group: "Communication" },
  { id: "chanter", infinitive: "chanter", meaning: "hát", english: "sing", forms: forms("chante", "chantes", "chante", "chantons", "chantez", "chantent"), group: "Actions" },
  { id: "danser", infinitive: "danser", meaning: "nhảy múa", english: "dance", forms: forms("danse", "danses", "danse", "dansons", "dansez", "dansent"), group: "Actions" },
  { id: "jouer", infinitive: "jouer", meaning: "chơi", english: "play", forms: forms("joue", "joues", "joue", "jouons", "jouez", "jouent"), group: "Actions" },
  { id: "etudier", infinitive: "étudier", meaning: "học", english: "study", forms: forms("étudie", "étudies", "étudie", "étudions", "étudiez", "étudient"), group: "Actions" },
  { id: "aider", infinitive: "aider", meaning: "giúp đỡ", english: "help", forms: forms("aide", "aides", "aide", "aidons", "aidez", "aident"), group: "Actions" },
  { id: "chercher", infinitive: "chercher", meaning: "tìm kiếm", english: "look for", forms: forms("cherche", "cherches", "cherche", "cherchons", "cherchez", "cherchent"), group: "Actions" },
  { id: "trouver", infinitive: "trouver", meaning: "tìm thấy", english: "find", forms: forms("trouve", "trouves", "trouve", "trouvons", "trouvez", "trouvent"), group: "Actions" },
  { id: "donner", infinitive: "donner", meaning: "cho", english: "give", forms: forms("donne", "donnes", "donne", "donnons", "donnez", "donnent"), group: "Actions" },
  { id: "montrer", infinitive: "montrer", meaning: "chỉ cho xem", english: "show", forms: forms("montre", "montres", "montre", "montrons", "montrez", "montrent"), group: "Communication" },
  { id: "demander", infinitive: "demander", meaning: "hỏi", english: "ask", forms: forms("demande", "demandes", "demande", "demandons", "demandez", "demandent"), group: "Communication" },
  { id: "rester", infinitive: "rester", meaning: "ở lại", english: "stay", forms: forms("reste", "restes", "reste", "restons", "restez", "restent"), group: "Actions" },
  { id: "arriver", infinitive: "arriver", meaning: "đến", english: "arrive", forms: forms("arrive", "arrives", "arrive", "arrivons", "arrivez", "arrivent"), group: "Actions" },
  { id: "entrer", infinitive: "entrer", meaning: "vào", english: "enter", forms: forms("entre", "entres", "entre", "entrons", "entrez", "entrent"), group: "Actions" },
  { id: "etre", infinitive: "être", meaning: "là", english: "to be", forms: forms("suis", "es", "est", "sommes", "êtes", "sont"), group: "Essentiels", note: "Động từ bất quy tắc" },
  { id: "avoir", infinitive: "avoir", meaning: "có", english: "to have", forms: forms("ai", "as", "a", "avons", "avez", "ont"), group: "Essentiels", note: "Động từ bất quy tắc" },
];

export const sheetSource = {
  label: "Google Sheets · 42 động từ",
  url: "https://docs.google.com/spreadsheets/d/15tNSpN9JDVMX6nCtpVKrNfILfCw_FzFH-8vb13OSytQ/edit?gid=261937435",
};
