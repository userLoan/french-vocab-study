const F = s => `<span class="fr" tabindex="0">${s}</span>`;

const UNITS = [
{
 id:"tong1", date:"24/10", name:"Tổng hợp: cách miêu tả & expressions hay dùng", src:"Ôn tổng hợp Buổi 2 → Tuần 10",
 links:[["Buổi 2","https://www.canva.com/d/kvH6x57dx1-_ghM"],["Buổi 3","https://www.canva.com/d/DUi4Ao1gLgmhdbc"],["Buổi 8","https://www.canva.com/d/QZqIASx6izmOT0r"],["Buổi 9","https://www.canva.com/d/DjnuW-PHvypkXK6"],["BT tự học tuần 10","https://www.canva.com/d/JK8hWLudRA-K_e4"]],
 notes:[
  {k:1,h:"1 · Bảng tổng: mình đang nói về cái gì?",html:`<p class="lead">Trước khi nói, hỏi mình: đang nói về <b>cái gì</b>? Mỗi chủ đề có một khung cố định.</p>
  <div class="tbl"><table><tr><th></th><th>Chủ đề</th><th>Khung chính</th><th>Ví dụ</th></tr>
  <tr><td class="ic">🌦️</td><td>Thời tiết<br><small>điểm 2</small></td><td><b>il fait</b> · il y a</td><td>${F("Il fait froid.")}</td></tr>
  <tr><td class="ic">🕗</td><td>Thời gian<br><small>điểm 3</small></td><td><b>il est</b> + giờ</td><td>${F("Il est huit heures.")}</td></tr>
  <tr><td class="ic">🙋</td><td>Người<br><small>điểm 4</small></td><td><b>avoir</b> + tuổi</td><td>${F("J'ai 25 ans.")}</td></tr>
  <tr><td class="ic">💼</td><td>Nghề nghiệp<br><small>điểm 5</small></td><td><b>être</b> + nghề</td><td>${F("Je suis informaticienne.")}</td></tr>
  <tr><td class="ic">🫀</td><td>Cơ thể, cảm xúc<br><small>điểm 6</small></td><td><b>avoir</b> faim · <b>être</b> triste</td><td>${F("J'ai froid.")}</td></tr>
  <tr><td class="ic">📍</td><td>Nơi chốn<br><small>điểm 7</small></td><td><b>il y a</b></td><td>${F("Il y a un lit.")}</td></tr>
  <tr><td class="ic">💬</td><td>Ý kiến<br><small>điểm 8</small></td><td><b>avoir</b> raison</td><td>${F("Tu as raison.")}</td></tr></table></div>
  <h4 class="sub-h">Mẹo nhớ: être hay avoir?</h4>
  <div class="tbl"><table><tr><th>être = "là", đang ở trạng thái</th><th>avoir = "có"</th></tr>
  <tr><td>nghề: ${F("Je suis médecin.")}</td><td>tuổi: ${F("J'ai 25 ans.")}</td></tr>
  <tr><td>tính cách: ${F("Il est sérieux.")}</td><td>đói, lạnh: ${F("J'ai faim.")}</td></tr>
  <tr><td>cảm xúc: ${F("Je suis triste.")}</td><td>đau: ${F("J'ai mal au dos.")}</td></tr>
  <tr><td>quốc tịch: ${F("Je suis vietnamienne.")}</td><td>có lý: ${F("Tu as raison.")}</td></tr></table></div>
  <p class="tip">Ba chữ <b>il</b> "giả" (không chỉ ai): ${F("il fait")} thời tiết · ${F("il est")} giờ · ${F("il y a")} có. Giống ${F("il faut")} ở Tuần 10.</p>`},

  {k:1,h:"2 · Thời tiết",html:`<p class="lead">Tính từ → <b>il fait</b> · Danh từ → <b>il y a</b> · Mưa, tuyết → <b>il + động từ</b></p>
  <p>Hỏi: ${F("Quel temps fait-il ?")}</p>
  <div class="tbl"><table>
  <tr class="grp"><th colspan="3">IL FAIT + tính từ</th></tr>
  <tr><td class="ic">☀️</td><td>${F("Il fait beau.")}</td><td class="vi">trời đẹp</td></tr>
  <tr><td class="ic">🌥️</td><td>${F("Il fait mauvais.")}</td><td class="vi">trời xấu</td></tr>
  <tr><td class="ic">🥵</td><td>${F("Il fait chaud.")}</td><td class="vi">trời nóng</td></tr>
  <tr><td class="ic">🥶</td><td>${F("Il fait froid.")}</td><td class="vi">trời lạnh</td></tr>
  <tr><td class="ic">🌡️</td><td>${F("Il fait 30 degrés.")}</td><td class="vi">trời 30 độ</td></tr>
  <tr class="grp"><th colspan="3">IL + động từ</th></tr>
  <tr><td class="ic">🌧️</td><td>${F("Il pleut.")}</td><td class="vi">trời mưa (pleuvoir)</td></tr>
  <tr><td class="ic">❄️</td><td>${F("Il neige.")}</td><td class="vi">tuyết rơi (neiger)</td></tr>
  <tr class="grp"><th colspan="3">IL Y A + du / de la / des + danh từ</th></tr>
  <tr><td class="ic">💨</td><td>${F("Il y a du vent.")}</td><td class="vi">có gió</td></tr>
  <tr><td class="ic">🌞</td><td>${F("Il y a du soleil.")}</td><td class="vi">có nắng</td></tr>
  <tr><td class="ic">☁️</td><td>${F("Il y a des nuages.")}</td><td class="vi">có mây</td></tr>
  <tr><td class="ic">🌫️</td><td>${F("Il y a du brouillard.")}</td><td class="vi">có sương mù</td></tr>
  <tr class="grp"><th colspan="3">C'EST + mùa / nhận xét</th></tr>
  <tr><td class="ic">🍂</td><td>${F("C'est l'automne.")}</td><td class="vi">đang là mùa thu</td></tr>
  <tr><td class="ic">😌</td><td>${F("C'est agréable.")}</td><td class="vi">dễ chịu quá</td></tr></table></div>
  <div class="tbl"><table class="vs"><tr><th>✗ Đừng nói</th><th>✓ Nói</th><th>Vì sao</th></tr>
  <tr><td><s>Il fait du vent.</s></td><td>${F("Il y a du vent.")}</td><td>gió là danh từ (câu bên trái chỉ gặp trong văn nói)</td></tr>
  <tr><td><s>C'est froid aujourd'hui.</s></td><td>${F("Il fait froid aujourd'hui.")}</td><td>thời tiết dùng il fait</td></tr></table></div>
  <h4 class="sub-h">Đổi thì</h4><div class="tbl"><table><tr><th></th><th>Mưa</th><th>Trời đẹp</th></tr>
  <tr><td>Bây giờ</td><td>${F("Il pleut.")}</td><td>${F("Il fait beau.")}</td></tr>
  <tr><td>Sắp tới (Buổi 7)</td><td>${F("Il va pleuvoir.")}</td><td>${F("Il va faire beau.")}</td></tr>
  <tr><td>Hôm qua (Buổi 9)</td><td>${F("Il a plu.")}</td><td>${F("Il a fait beau.")}</td></tr></table></div>
  <p class="tip">Trời lạnh: ${F("Il fait froid.")} Còn <b>em</b> thấy lạnh: ${F("J'ai froid.")} (điểm 6).</p>`},

  {k:1,h:"3 · Thời gian: giờ, ngày, tháng, năm, mùa",html:`<p class="lead">Giờ → <b>il est</b> · Ngày, thứ → <b>on est / c'est</b></p>
  <div class="tbl"><table><tr><th></th><th>Hỏi</th><th>Trả lời</th></tr>
  <tr><td class="ic">🕗</td><td>${F("Quelle heure est-il ?")}</td><td>${F("Il est huit heures.")}</td></tr>
  <tr><td class="ic">📅</td><td>${F("On est le combien ?")}</td><td>${F("On est le 25 octobre.")}</td></tr>
  <tr><td class="ic">🗓️</td><td>${F("On est quel jour ?")}</td><td>${F("On est samedi.")}</td></tr>
  <tr><td class="ic">🍂</td><td>${F("On est en quelle saison ?")}</td><td>${F("On est en automne.")}</td></tr></table></div>
  <p class="tip">${F("on est")} = ${F("nous sommes")} = ${F("c'est")} khi nói ngày. Riêng giờ chỉ dùng <b>il est</b>: <s>C'est huit heures</s>.</p>
  <h4 class="sub-h">"Khi nào?": mỗi loại một giới từ</h4>
  <div class="tbl"><table>
  <tr class="grp"><th colspan="3">LE: có số ngày, hoặc lặp lại mỗi tuần</th></tr>
  <tr><td>ngày cụ thể</td><td>${F("le 24 octobre")}</td><td class="vi">ngày 24/10</td></tr>
  <tr><td>mùng 1</td><td>${F("le premier octobre")}</td><td class="vi">không nói le un</td></tr>
  <tr><td>mỗi thứ</td><td>${F("le samedi")}</td><td class="vi">mỗi thứ Bảy</td></tr>
  <tr><td>mỗi buổi</td><td>${F("le mardi soir")}</td><td class="vi">mỗi tối thứ Ba</td></tr>
  <tr class="grp"><th colspan="3">KHÔNG MẠO TỪ: thứ của tuần này</th></tr>
  <tr><td>lần này</td><td>${F("samedi")}</td><td class="vi">thứ Bảy này</td></tr>
  <tr class="grp"><th colspan="3">EN: tháng, năm, mùa</th></tr>
  <tr><td>tháng</td><td>${F("en octobre")}</td><td class="vi">vào tháng 10</td></tr>
  <tr><td>năm</td><td>${F("en 2026")}</td><td class="vi">vào năm 2026</td></tr>
  <tr><td>mùa</td><td>${F("en été · en automne · en hiver")}</td><td class="vi">mùa hè, thu, đông</td></tr>
  <tr class="grp"><th colspan="3">AU: ngoại lệ duy nhất</th></tr>
  <tr><td>mùa xuân</td><td>${F("au printemps")}</td><td class="vi">vào mùa xuân</td></tr>
  <tr class="grp"><th colspan="3">À: giờ</th></tr>
  <tr><td>giờ</td><td>${F("à huit heures")}</td><td class="vi">lúc 8 giờ</td></tr></table></div>
  <p class="tip">Mẹo nhớ: <b>số ngày → le</b> · <b>tháng, năm, mùa → en</b> · <b>giờ → à</b> · xuân → <b>au</b>.</p>`},

  {k:1,h:"4 · Người: thông tin, ngoại hình, cân nặng",html:`<p class="lead">Tuổi → <b>avoir</b> · Quốc tịch, tính cách → <b>être</b></p>
  <h4 class="sub-h">Thông tin cá nhân</h4><div class="tbl"><table><tr><th></th><th>Khung</th><th>Ví dụ</th></tr>
  <tr><td class="ic">🏷️</td><td><b>s'appeler</b></td><td>${F("Je m'appelle Loan.")}</td></tr>
  <tr><td class="ic">🎂</td><td><b>avoir</b> + số + <b>ans</b></td><td>${F("J'ai 25 ans.")}</td></tr>
  <tr><td class="ic">🏠</td><td><b>habiter à</b> + thành phố</td><td>${F("J'habite à Hanoï.")}</td></tr>
  <tr><td class="ic">🇻🇳</td><td><b>être</b> + quốc tịch</td><td>${F("Je suis vietnamienne.")}</td></tr></table></div>
  <div class="tbl"><table class="vs"><tr><th>✗ Đừng nói</th><th>✓ Nói</th><th>Vì sao</th></tr>
  <tr><td><s>Je suis 25 ans.</s></td><td>${F("J'ai 25 ans.")}</td><td>tuổi dùng avoir</td></tr>
  <tr><td><s>J'ai 25.</s></td><td>${F("J'ai 25 ans.")}</td><td>luôn có chữ ans</td></tr>
  <tr><td><s>Je suis Vietnamienne.</s></td><td>${F("Je suis vietnamienne.")}</td><td>tính từ quốc tịch viết thường</td></tr></table></div>
  <h4 class="sub-h">Ngoại hình & tính cách</h4><div class="tbl"><table><tr><th>Khung</th><th>Dùng cho</th><th>Ví dụ</th></tr>
  <tr><td><b>être</b> + tính từ</td><td>dáng người</td><td>${F("Il est grand.")}</td></tr>
  <tr><td><b>être</b> + tính từ</td><td>tính cách</td><td>${F("Elle est sympa.")}</td></tr>
  <tr><td><b>avoir</b> les cheveux…</td><td>tóc</td><td>${F("Elle a les cheveux longs.")}</td></tr>
  <tr><td><b>avoir</b> les yeux…</td><td>mắt</td><td>${F("Il a les yeux noirs.")}</td></tr>
  <tr><td><b>porter</b></td><td>quần áo, kính</td><td>${F("Il porte des lunettes.")}</td></tr></table></div>
  <p>Tính từ đổi theo người (Buổi 7):</p>
  <div class="tbl"><table><tr><th>Nam</th><th>Nữ</th><th>Quy tắc</th></tr>
  <tr><td>${F("grand")}</td><td>${F("grand<b class='end'>e</b>")}</td><td>thêm e</td></tr>
  <tr><td>${F("sérieu<b class='end'>x</b>")}</td><td>${F("sérieu<b class='end'>se</b>")}</td><td>-x → -se</td></tr>
  <tr><td>${F("beau")}</td><td>${F("<b class='end'>belle</b>")}</td><td>học thuộc</td></tr>
  <tr><td>${F("sympa")}</td><td>${F("sympa")}</td><td>đuôi -a, -e: không đổi</td></tr></table></div>
  <h4 class="sub-h">Cân nặng & chiều cao</h4><div class="tbl"><table><tr><th></th><th>Hỏi</th><th>Trả lời</th></tr>
  <tr><td class="ic">⚖️</td><td>${F("Vous pesez combien ?")}</td><td>${F("Je pèse 60 kilos.")}</td></tr>
  <tr><td class="ic">📏</td><td>${F("Vous mesurez combien ?")}</td><td>${F("Je mesure 1,68 m.")}</td></tr></table></div>
  <p>Cách hỏi trang trọng hơn: ${F("Quel est votre poids ?")} / ${F("Quelle est votre taille ?")}</p>
  <p><b>peser</b> (nặng): thêm dấu <b class="end">è</b> khi đuôi câm, giống acheter</p>
  <div class="conj"><span>${F("je p<b class='end'>è</b>se")}</span><span>${F("nous pesons")}</span><span>${F("tu p<b class='end'>è</b>ses")}</span><span>${F("vous pesez")}</span><span>${F("il p<b class='end'>è</b>se")}</span><span>${F("ils p<b class='end'>è</b>sent")}</span></div>
  <ul><li><b>mesurer</b> (cao): chia như động từ -er thường.</li>
  <li>${F("le poids")} giống đực → <b>quel</b>; ${F("la taille")} giống cái → <b>quelle</b>.</li>
  <li>1,68 m đọc là ${F("un mètre soixante-huit")} (người Pháp dùng dấu phẩy).</li>
  <li>${F("la taille")} còn nghĩa là cỡ quần áo: ${F("Vous faites quelle taille ?")}</li></ul>`},

  {k:1,h:"5 · Nghề nghiệp (và Il est hay C'est?)",html:`<p class="lead">être + nghề: <b>KHÔNG</b> mạo từ · c'est + un / une + nghề: <b>CÓ</b> mạo từ</p>
  <div class="tbl"><table><tr><th>Muốn nói</th><th>Khung</th><th>Ví dụ</th></tr>
  <tr><td>Tôi làm nghề gì</td><td><b>Je suis</b> + nghề</td><td>${F("Je suis informaticienne.")}</td></tr>
  <tr><td>Người kia làm nghề gì</td><td><b>Il / Elle est</b> + nghề</td><td>${F("Elle est ingénieure.")}</td></tr>
  <tr><td>"Đây là một…"</td><td><b>C'est un / une</b> + nghề</td><td>${F("C'est un informaticien.")}</td></tr>
  <tr><td>Làm với vai trò</td><td><b>travailler comme</b></td><td>${F("Je travaille comme développeur.")}</td></tr></table></div>
  <div class="tbl"><table class="vs"><tr><th>✗ Đừng nói</th><th>✓ Nói</th><th>Vì sao</th></tr>
  <tr><td><s>Je suis un ingénieur.</s></td><td>${F("Je suis ingénieur.")}</td><td>tiếng Anh có "an", tiếng Pháp bỏ</td></tr>
  <tr><td><s>Elle est une informaticienne.</s></td><td>${F("C'est une informaticienne.")}</td><td>có une thì phải dùng c'est</td></tr></table></div>
  <h4 class="sub-h">Đổi sang giống cái</h4>
  <div class="tbl"><table><tr><th>Đuôi</th><th>Nam</th><th>Nữ</th></tr>
  <tr><td>-ien → -ienne</td><td>${F("informatic<b class='end'>ien</b>")}</td><td>${F("informatic<b class='end'>ienne</b>")}</td></tr>
  <tr><td></td><td>${F("mécanic<b class='end'>ien</b>")}</td><td>${F("mécanic<b class='end'>ienne</b>")}</td></tr>
  <tr><td>-eur → -euse</td><td>${F("vend<b class='end'>eur</b>")}</td><td>${F("vend<b class='end'>euse</b>")}</td></tr>
  <tr><td></td><td>${F("dans<b class='end'>eur</b>")}</td><td>${F("dans<b class='end'>euse</b>")}</td></tr>
  <tr><td>-teur → -trice</td><td>${F("direc<b class='end'>teur</b>")}</td><td>${F("direc<b class='end'>trice</b>")}</td></tr>
  <tr><td></td><td>${F("agricul<b class='end'>teur</b>")}</td><td>${F("agricul<b class='end'>trice</b>")}</td></tr>
  <tr><td>-er → -ère</td><td>${F("boulang<b class='end'>er</b>")}</td><td>${F("boulang<b class='end'>ère</b>")}</td></tr>
  <tr><td></td><td>${F("bouch<b class='end'>er</b>")}</td><td>${F("bouch<b class='end'>ère</b>")}</td></tr>
  <tr><td>-e: không đổi</td><td>${F("le secrétaire")}</td><td>${F("la secrétaire")}</td></tr></table></div>
  <h4 class="sub-h">Nghề nào, làm ở đâu?</h4>
  <div class="tbl"><table><tr><th></th><th>Nghề</th><th>Nơi làm việc</th></tr>
  <tr><td class="ic">🛍️</td><td>${F("Elle est vendeuse.")}</td><td>${F("Elle travaille dans un magasin.")}</td></tr>
  <tr><td class="ic">⚖️</td><td>${F("Il est avocat.")}</td><td>${F("Il travaille dans un cabinet.")}</td></tr>
  <tr><td class="ic">🔧</td><td>${F("Il est mécanicien.")}</td><td>${F("Il travaille dans un garage.")}</td></tr></table></div>
  <h4 class="sub-h">Il est hay C'est?</h4><div class="tbl"><table><tr><th>Phía sau là</th><th>Dùng</th><th>Ví dụ</th></tr>
  <tr><td>tính từ (về một người)</td><td><b>il / elle est</b></td><td>${F("Il est grand.")}</td></tr>
  <tr><td>nghề, không mạo từ</td><td><b>il / elle est</b></td><td>${F("Elle est médecin.")}</td></tr>
  <tr><td>un / une / mon… + danh từ</td><td><b>c'est</b></td><td>${F("C'est mon collègue.")}</td></tr>
  <tr><td>tên riêng</td><td><b>c'est</b></td><td>${F("C'est Pierre.")}</td></tr>
  <tr><td>nhận xét chung (việc đó, cái đó)</td><td><b>c'est</b></td><td>${F("C'est difficile.")}</td></tr></table></div>
  <div class="tbl"><table><tr><th>${F("Il est sympa.")}</th><th>${F("C'est sympa.")}</th></tr>
  <tr><td>👤 anh ấy dễ thương</td><td>🏠 việc đó / chỗ đó dễ thương</td></tr></table></div>`},

  {k:1,h:"6 · Cơ thể, cảm xúc & sức khỏe",html:`<p class="lead">Cảm xúc → <b>être</b> / se sentir · Đói, lạnh, đau, bệnh → <b>avoir</b></p>
  <h4 class="sub-h">Cảm xúc</h4><p>Hỏi: ${F("Ça va ?")} · ${F("Comment tu te sens ?")}</p>
  <div class="tbl"><table>
  <tr class="grp"><th colspan="3">🙂 TÍCH CỰC</th></tr>
  <tr><td class="ic">😊</td><td>${F("Je me sens bien.")}</td><td class="vi">tôi thấy khỏe, dễ chịu</td></tr>
  <tr><td class="ic">💪</td><td>${F("Je suis en pleine forme.")}</td><td class="vi">tôi rất sung sức</td></tr>
  <tr><td class="ic">😄</td><td>${F("Je suis content(e).")}</td><td class="vi">tôi vui</td></tr>
  <tr><td class="ic">🥰</td><td>${F("Je suis heureux / heureuse.")}</td><td class="vi">tôi hạnh phúc</td></tr>
  <tr><td class="ic">😌</td><td>${F("C'est agréable.")}</td><td class="vi">dễ chịu quá</td></tr>
  <tr><td class="ic">🧊</td><td>${F("Ça fait du bien !")}</td><td class="vi">thấy khá hơn hẳn (sau khi uống nước mát, tắm…)</td></tr>
  <tr class="grp"><th colspan="3">🙁 TIÊU CỰC</th></tr>
  <tr><td class="ic">😟</td><td>${F("Je suis inquiet / inquiète.")}</td><td class="vi">tôi lo lắng</td></tr>
  <tr><td class="ic">😩</td><td>${F("Je suis fatigué(e).")}</td><td class="vi">tôi mệt</td></tr>
  <tr><td class="ic">😣</td><td>${F("Je suis stressé(e).")}</td><td class="vi">tôi căng thẳng</td></tr>
  <tr><td class="ic">😢</td><td>${F("Je suis triste.")}</td><td class="vi">tôi buồn</td></tr>
  <tr><td class="ic">😞</td><td>${F("Je suis malheureux / malheureuse.")}</td><td class="vi">tôi khổ sở</td></tr></table></div>
  <p class="tip">${F("Je suis content(e) pour toi !")} = mừng cho bạn, khi bạn báo tin vui.</p>
  <p><b>Khung 1 · être + tính từ:</b> đổi đuôi khi người nói là nữ</p>
  <div class="tbl"><table><tr><th>Nam</th><th>Nữ</th></tr>
  <tr><td>${F("heureu<b class='end'>x</b>")}</td><td>${F("heureu<b class='end'>se</b>")}</td></tr>
  <tr><td>${F("malheureu<b class='end'>x</b>")}</td><td>${F("malheureu<b class='end'>se</b>")}</td></tr>
  <tr><td>${F("inqui<b class='end'>et</b>")}</td><td>${F("inqui<b class='end'>ète</b>")}</td></tr>
  <tr><td>${F("content")}</td><td>${F("content<b class='end'>e</b>")}</td></tr>
  <tr><td>${F("triste")}</td><td>${F("triste")} (không đổi)</td></tr></table></div>
  <p><b>Khung 2 · se sentir</b> (phản thân, Buổi 2) + bien / mal / tính từ</p>
  <div class="conj"><span>${F("je me sens")}</span><span>${F("nous nous sentons")}</span><span>${F("tu te sens")}</span><span>${F("vous vous sentez")}</span><span>${F("il se sent")}</span><span>${F("ils se sentent")}</span></div>
  <h4 class="sub-h">Lạnh: il fait, j'ai hay c'est?</h4><p>Cùng chữ "lạnh", khung đổi theo <b>cái gì</b> lạnh:</p>
  <div class="tbl"><table>
  <tr><td class="ic">🌨️</td><td>Trời lạnh</td><td><b>il fait</b></td><td>${F("Il fait froid.")}</td></tr>
  <tr><td class="ic">🥶</td><td>Tôi thấy lạnh</td><td><b>avoir</b></td><td>${F("J'ai froid.")}</td></tr>
  <tr><td class="ic">☕</td><td>Đồ vật lạnh</td><td><b>être</b></td><td>${F("Le café est froid.")}</td></tr></table></div>
  <h4 class="sub-h">Cảm giác cơ thể đi với avoir</h4>
  <div class="cards">
  <div class="card"><span class="ic">🍽️</span>${F("avoir faim")}<small>đói</small></div>
  <div class="card"><span class="ic">🥤</span>${F("avoir soif")}<small>khát</small></div>
  <div class="card"><span class="ic">🥶</span>${F("avoir froid")}<small>thấy lạnh</small></div>
  <div class="card"><span class="ic">🥵</span>${F("avoir chaud")}<small>thấy nóng</small></div>
  <div class="card"><span class="ic">😴</span>${F("avoir sommeil")}<small>buồn ngủ</small></div>
  <div class="card"><span class="ic">😱</span>${F("avoir peur")}<small>sợ</small></div>
  <div class="card"><span class="ic">🤕</span>${F("avoir mal à")}<small>đau (+ bộ phận), Tuần 10</small></div></div>
  <div class="tbl"><table class="vs"><tr><th>✗ Đừng nói</th><th>✓ Nói</th><th>Vì sao</th></tr>
  <tr><td><s>Je suis froid.</s></td><td>${F("J'ai froid.")}</td><td>je suis froid = tôi lạnh lùng!</td></tr>
  <tr><td><s>J'ai fatigué.</s></td><td>${F("Je suis fatiguée.")}</td><td>mệt, ốm vẫn dùng être</td></tr></table></div>
  <h4 class="sub-h">Ở chỗ bác sĩ</h4><div class="tbl"><table><tr><th>👩‍⚕️ Bác sĩ hỏi</th><th>🤒 Bệnh nhân trả lời</th></tr>
  <tr><td>${F("Qu'est-ce qui vous arrive ?")}<br><small>có chuyện gì vậy?</small></td><td>${F("Je suis malade.")}<br><small>tôi bị ốm</small></td></tr>
  <tr><td>${F("Vous vous sentez comment ?")}<br><small>anh/chị thấy thế nào?</small></td><td>${F("J'ai un rhume.")}<br><small>tôi bị cảm</small></td></tr>
  <tr><td>${F("Vous avez encore de la fièvre ?")}<br><small>vẫn còn sốt không?</small></td><td>${F("J'ai 39 °C.")}<br><small>tôi sốt 39 độ</small></td></tr>
  <tr><td>${F("Où avez-vous mal ?")}<br><small>đau ở đâu?</small></td><td>${F("J'ai mal à la tête.")}<br><small>tôi đau đầu</small></td></tr></table></div>
  <p><b>avoir mal</b> + à la / à l' / au / aux:</p>
  <div class="conj"><span>${F("à la tête")} đầu</span><span>${F("au dos")} lưng</span><span>${F("à l'oreille")} tai</span><span>${F("aux yeux")} mắt</span></div>
  <p class="tip">Bệnh gần như luôn dùng <b>avoir</b>; chỉ ${F("Je suis malade.")} dùng être. Hội thoại đầy đủ: mục Hội thoại → <b>Đi khám bác sĩ</b>.</p>`},

  {k:1,h:"7 · Nơi chốn: ở đâu, có gì",html:`<p class="lead">Có cái gì ở đâu → <b>il y a</b> (không đổi dù số ít hay số nhiều)</p>
  <div class="tbl"><table>
  <tr><td class="ic">🛏️</td><td>${F("Il y a un lit dans la chambre.")}</td><td class="vi">trong phòng có một cái giường</td></tr>
  <tr><td class="ic">🎓</td><td>${F("Il y a des étudiants dans l'amphi.")}</td><td class="vi">có sinh viên trong giảng đường</td></tr>
  <tr><td class="ic">☕</td><td>${F("Dans mon bureau, il y a une machine à café.")}</td><td class="vi">văn phòng tôi có máy pha cà phê</td></tr></table></div>
  <div class="tbl"><table><tr><th>Khẳng định</th><th>Phủ định: un / une / des → de</th></tr>
  <tr><td>${F("Il y a une cantine.")}</td><td>${F("Il n'y a pas de cantine.")}</td></tr>
  <tr><td>${F("Il y a un ascenseur.")}</td><td>${F("Il n'y a pas d'ascenseur.")}</td></tr></table></div>
  <p class="tip">Đừng nhầm: ${F("il y a deux jours")} = cách đây hai ngày (BTVN buổi 9).</p>
  <h4 class="sub-h">Sống, làm, đi: giới từ nào?</h4>
  <div class="tbl"><table><tr><th>Trước</th><th>Dùng</th><th>Ví dụ</th></tr>
  <tr><td>thành phố</td><td><b>à</b></td><td>${F("J'habite à Hanoï.")}</td></tr>
  <tr><td>khu vực, nơi cụ thể</td><td><b>dans</b></td><td>${F("Je travaille dans un bureau.")}</td></tr>
  <tr><td>nơi chốn (le)</td><td><b>au</b></td><td>${F("Je vais au bureau.")}</td></tr>
  <tr><td>người</td><td><b>chez</b></td><td>${F("Je vais chez le médecin.")}</td></tr></table></div>`},

  {k:1,h:"8 · Ý kiến: đồng ý và không đồng ý",html:`<p class="lead">raison / tort → <b>avoir</b> · d'accord → <b>être</b></p>
  <div class="tbl"><table><tr><th>✓ Đồng ý</th><th>✗ Không đồng ý</th></tr>
  <tr><td>${F("Tu as raison.")}<br><small>bạn nói đúng</small></td><td>${F("Tu as tort.")}<br><small>bạn sai rồi</small></td></tr>
  <tr><td>${F("C'est vrai.")}<br><small>đúng vậy</small></td><td>${F("C'est faux.")}<br><small>sai rồi</small></td></tr>
  <tr><td>${F("Je suis d'accord.")}<br><small>tôi đồng ý</small></td><td>${F("Je ne suis pas d'accord.")}<br><small>tôi không đồng ý</small></td></tr></table></div>
  <p>Thêm "với ai" (đại từ nhấn mạnh, Tuần 4):</p>
  <div class="conj"><span>${F("avec toi")} bạn bè</span><span>${F("avec vous")} lịch sự</span><span>${F("avec lui")} với anh ấy</span><span>${F("avec elle")} với cô ấy</span></div>
  <div class="tbl"><table class="vs"><tr><th>✗ Đừng nói</th><th>✓ Nói</th><th>Vì sao</th></tr>
  <tr><td><s>Tu es raison.</s></td><td>${F("Tu as raison.")}</td><td>tiếng Anh "you are", tiếng Pháp dùng avoir</td></tr>
  <tr><td><s>Je ne suis d'accord pas.</s></td><td>${F("Je ne suis pas d'accord.")}</td><td>ne … pas kẹp động từ</td></tr></table></div>
  <p class="tip">${F("D'accord !")} đứng một mình = OK, được.</p>`},

  {h:"9 · Ghép tất cả: một đoạn miêu tả",html:`<p class="lead">Đọc to từng đoạn, rồi tự viết lại đoạn của em.</p>
  <div class="story">
  <b class="tag">🙋 GIỚI THIỆU · điểm 4, 5</b>
  <p>${F("Je m'appelle Loan. J'ai 25 ans. Je suis vietnamienne et j'habite à Hanoï. Je suis informaticienne : je travaille dans un bureau. Mon collègue s'appelle Minh. C'est un développeur très sérieux. Il est grand et il a les cheveux courts.")}</p>
  <b class="tag">🌦️ HÔM NAY · điểm 2, 3</b>
  <p>${F("Aujourd'hui, on est le 24 octobre. Il est huit heures du matin. C'est l'automne : il fait frais et il y a du vent. Hier, il a plu. Le mardi soir, j'apprends le français.")}</p>
  <b class="tag">🫀 CẢM XÚC & Ý KIẾN · điểm 4, 6, 8</b>
  <p>${F("Je mesure 1,60 m et je pèse 50 kilos. Cette semaine, je suis un peu stressée, mais aujourd'hui je me sens bien : je suis en forme ! Mon collègue dit : « Le français, c'est difficile. » Je ne suis pas d'accord avec lui. C'est faux : c'est agréable !")}</p></div>
  <p class="tip">Đổi tên, tuổi, nghề và thời tiết hôm nay thành của em, rồi dán vào mục Viết để luyện.</p>`}
 ],
 fixes:[
  ["Il fait du vent.","Il y a du vent.","khung chuẩn: danh từ → il y a, tính từ → il fait (il fait du vent chỉ gặp trong văn nói)"],
  ["C'est froid aujourd'hui.","Il fait froid aujourd'hui.","thời tiết dùng il fait"],
  ["Il pleut hier.","Il a plu hier.","chuyện hôm qua dùng passé composé: pleuvoir → il a plu"],
  ["C'est huit heures.","Il est huit heures.","giờ luôn dùng il est"],
  ["dans octobre / en le 25 octobre","en octobre / le 25 octobre","tháng → en; ngày có số → le"],
  ["en printemps","au printemps","mùa xuân là ngoại lệ: au"],
  ["Le un octobre","Le premier octobre","mùng 1 dùng premier"],
  ["Je suis 25 ans.","J'ai 25 ans.","tuổi dùng avoir"],
  ["Elle a 28.","Elle a 28 ans.","luôn có chữ ans"],
  ["Je suis Vietnamienne.","Je suis vietnamienne.","quốc tịch là tính từ thì viết thường"],
  ["Je suis 60 kilos. / Je suis 1,68 m.","Je pèse 60 kilos. / Je mesure 1,68 m.","cân nặng dùng peser, chiều cao dùng mesurer"],
  ["Quel est votre taille ?","Quelle est votre taille ?","la taille giống cái → quelle"],
  ["Je suis un ingénieur.","Je suis ingénieur. / C'est un ingénieur.","sau je suis / il est, nghề không có mạo từ"],
  ["Elle est une informaticienne.","Elle est informaticienne. / C'est une informaticienne.","có un / une thì dùng c'est"],
  ["Je suis froid.","J'ai froid.","cảm giác cơ thể dùng avoir; je suis froid = tôi lạnh lùng"],
  ["Je sens bien.","Je me sens bien.","se sentir là động từ phản thân"],
  ["Elle est heureux.","Elle est heureuse.","-eux → -euse khi là nữ"],
  ["J'habite en Hanoï.","J'habite à Hanoï.","à + thành phố"],
  ["Tu es raison.","Tu as raison.","raison / tort đi với avoir"],
  ["Je suis accord.","Je suis d'accord.","luôn có d': être d'accord"],
  ["Je ne suis d'accord pas.","Je ne suis pas d'accord.","ne … pas kẹp động từ suis"]
 ],
 ex:[
  {t:"m",q:"Trời hôm nay có gió. Câu nào chuẩn nhất?",o:["Il fait du vent.","Il y a du vent.","C'est du vent."],a:1,w:"le vent là danh từ → il y a + du."},
  {t:"f",q:"Thời tiết: Il ___ beau aujourd'hui.",a:["fait"]},
  {t:"f",q:"Thời tiết: Il ___ des nuages.",a:["y a"]},
  {t:"f",q:"Dịch: \"Trời mưa.\"",a:["il pleut"]},
  {t:"f",q:"Dịch: \"Trời sắp mưa.\" (tương lai gần)",a:["il va pleuvoir"]},
  {t:"f",q:"Dịch: \"Hôm qua trời đẹp.\" (passé composé)",a:["hier il a fait beau","il a fait beau hier"]},
  {t:"f",q:"Dịch: \"Hôm qua trời mưa.\" (passé composé của pleuvoir)",a:["hier il a plu","il a plu hier"]},
  {t:"f",q:"Dịch: \"Trời 30 độ.\"",a:["il fait 30 degrés","il fait trente degrés"]},
  {t:"f",q:"Dịch: \"Mùa đông, trời lạnh.\"",a:["en hiver, il fait froid","en hiver il fait froid","l'hiver, il fait froid"]},
  {t:"f",q:"Dịch: \"Hôm nay là ngày 25 tháng 10.\"",a:["aujourd'hui on est le 25 octobre","aujourd'hui nous sommes le 25 octobre","aujourd'hui c'est le 25 octobre","on est le 25 octobre aujourd'hui","nous sommes le 25 octobre aujourd'hui","c'est le 25 octobre aujourd'hui","aujourd'hui on est le vingt-cinq octobre","aujourd'hui nous sommes le vingt-cinq octobre","aujourd'hui c'est le vingt-cinq octobre"]},
  {t:"f",q:"Giờ: ___ huit heures. (bây giờ là 8 giờ)",a:["il est"]},
  {t:"f",q:"Giới từ: Je suis née ___ octobre.",a:["en"]},
  {t:"f",q:"Giới từ: Je suis née ___ 2001.",a:["en"]},
  {t:"f",q:"Giới từ: Le cours commence ___ dix heures.",a:["à"]},
  {t:"f",q:"Giới từ: ___ printemps, il fait doux.",a:["au"]},
  {t:"f",q:"Giới từ: ___ été, je vais à la mer.",a:["en"]},
  {t:"f",q:"Dịch: \"ngày mùng 1 tháng 11\"",a:["le premier novembre","le 1er novembre"]},
  {t:"m",q:"\"Thứ Bảy này tôi rảnh\" là:",o:["Le samedi, je suis libre.","Samedi, je suis libre.","En samedi, je suis libre."],a:1,w:"Không mạo từ = lần này. Le samedi = mỗi thứ Bảy."},
  {t:"f",q:"Dịch: \"Mỗi tối thứ Ba, tôi học tiếng Pháp.\"",a:["le mardi soir, j'apprends le français","le mardi soir, j'étudie le français","tous les mardis soir, j'apprends le français","tous les mardis soirs, j'apprends le français","tous les mardis soir, j'étudie le français","j'apprends le français le mardi soir","j'étudie le français le mardi soir"]},
  {t:"f",q:"Dịch: \"Tôi tên là Loan.\"",a:["je m'appelle loan"]},
  {t:"f",q:"Dịch: \"Cô ấy 28 tuổi.\"",a:["elle a 28 ans","elle a vingt-huit ans"]},
  {t:"f",q:"Dịch: \"Tôi là người Việt Nam.\" (nữ)",a:["je suis vietnamienne"]},
  {t:"f",q:"Dịch: \"Anh ấy cao và nghiêm túc.\"",a:["il est grand et sérieux"]},
  {t:"f",q:"Dịch: \"Cô ấy tóc dài.\" (avoir)",a:["elle a les cheveux longs"]},
  {t:"m",q:"Câu nào <b>sai</b>?",o:["J'ai 30 ans.","Je suis 30 ans.","Il a 30 ans."],a:1,w:"Tuổi luôn dùng avoir."},
  {t:"f",q:"Dịch: \"Tôi nặng 60 kí.\"",a:["je pèse 60 kg","je pèse 60 kilos","je pèse soixante kilos"]},
  {t:"f",q:"Dịch: \"Tôi cao 1 mét 68.\"",a:["je mesure 1,68 m","je mesure 1 mètre 68","je mesure un mètre soixante-huit","je mesure 1m68"]},
  {t:"f",q:"Hỏi lịch sự: \"Anh/chị nặng bao nhiêu?\" (peser)",a:["vous pesez combien","combien pesez-vous","combien vous pesez"]},
  {t:"f",q:"Điền: ___ est votre taille ?",a:["quelle"]},
  {t:"f",q:"Dịch: \"Tôi là lập trình viên.\"",a:["je suis développeur","je suis développeuse","je suis programmeur","je suis programmeuse","je suis informaticien","je suis informaticienne"]},
  {t:"m",q:"Câu nào <b>đúng</b>?",o:["Elle est une médecin.","Elle est médecin.","C'est médecin."],a:1,w:"il / elle est + nghề không mạo từ; có mạo từ thì dùng c'est."},
  {t:"f",q:"Điền <b>Il est</b> hoặc <b>C'est</b>: ___ un bon professeur.",a:["c'est"]},
  {t:"f",q:"Điền <b>Il est</b> hoặc <b>C'est</b>: ___ professeur de maths.",a:["il est"]},
  {t:"f",q:"Điền <b>Il est</b> hoặc <b>C'est</b>: ___ mon collègue.",a:["c'est"]},
  {t:"f",q:"Điền <b>Il est</b> hoặc <b>C'est</b>: Ce film ? ___ génial !",a:["c'est"]},
  {t:"f",q:"Giống cái: Il est vendeur. → Elle est ___.",a:["vendeuse"]},
  {t:"f",q:"Giống cái: Il est directeur. → Elle est ___.",a:["directrice"]},
  {t:"f",q:"Giống cái: Il est boulanger. → Elle est ___.",a:["boulangère"]},
  {t:"f",q:"Giống cái: Il est mécanicien. → Elle est ___.",a:["mécanicienne"]},
  {t:"f",q:"Dịch: \"Tôi làm việc với vai trò thư ký.\" (comme)",a:["je travaille comme secrétaire"]},
  {t:"f",q:"Dịch: \"Cô ấy là người bán hàng, cô ấy làm việc trong một cửa hàng.\"",a:["elle est vendeuse, elle travaille dans un magasin","elle est vendeuse et elle travaille dans un magasin"]},
  {t:"m",q:"\"Tôi thấy lạnh\" là:",o:["Il fait froid.","Je suis froid.","J'ai froid."],a:2,w:"Cảm giác cơ thể dùng avoir. Je suis froid = tôi lạnh lùng."},
  {t:"f",q:"Dịch: \"Tôi đói.\"",a:["j'ai faim"]},
  {t:"f",q:"Dịch: \"Tôi thấy khỏe.\" (se sentir)",a:["je me sens bien"]},
  {t:"f",q:"Dịch: \"Tôi đang rất sung sức.\" (forme)",a:["je suis en pleine forme","je suis en forme"]},
  {t:"f",q:"Dịch: \"Tôi mừng cho bạn!\" (content, người nói là nữ)",a:["je suis contente pour toi","je suis heureuse pour toi"]},
  {t:"f",q:"Dịch: \"Cô ấy lo lắng.\"",a:["elle est inquiète"]},
  {t:"f",q:"Dịch: \"Anh ấy buồn.\"",a:["il est triste","il est malheureux"]},
  {t:"f",q:"Giống cái: Il est heureux. → Elle est ___.",a:["heureuse"]},
  {t:"f",q:"se sentir: Vous vous ___ comment ?",a:["sentez"]},
  {t:"m",q:"Sau khi uống một cốc nước mát, em nói:",o:["Ça fait du bien !","Je suis inquiète.","Tu as tort."],a:0,w:"Ça fait du bien = dễ chịu quá, thấy khá hơn."},
  {t:"f",q:"Bác sĩ hỏi: \"Có chuyện gì vậy?\"",a:["qu'est-ce qui vous arrive"]},
  {t:"f",q:"Dịch: \"Anh/chị vẫn còn sốt không?\"",a:["vous avez encore de la fièvre","est-ce que vous avez encore de la fièvre","avez-vous encore de la fièvre"]},
  {t:"f",q:"Dịch: \"Tôi bị cảm.\"",a:["j'ai un rhume"]},
  {t:"f",q:"Dịch: \"Tôi đau tai.\" (l'oreille)",a:["j'ai mal à l'oreille"]},
  {t:"f",q:"Dịch: \"Tôi làm việc ở Hà Nội.\"",a:["je travaille à hanoï","je travaille à hanoi"]},
  {t:"f",q:"Dịch: \"Trong phòng có một cái giường.\"",a:["il y a un lit dans la chambre","dans la chambre, il y a un lit"]},
  {t:"f",q:"Dịch: \"Không có căng tin.\" (la cantine)",a:["il n'y a pas de cantine"]},
  {t:"f",q:"Dịch: \"Bạn nói đúng.\" (tu)",a:["tu as raison"]},
  {t:"f",q:"Dịch: \"Anh ấy sai rồi.\" (avoir)",a:["il a tort"]},
  {t:"f",q:"Dịch: \"Tôi không đồng ý với bạn.\" (tu)",a:["je ne suis pas d'accord avec toi"]},
  {t:"m",q:"Câu nào <b>đúng</b>?",o:["Tu es raison.","Tu as raison.","Tu fais raison."],a:1,w:"avoir raison / avoir tort."},
  {t:"m",q:"\"C'est faux\" nghĩa là:",o:["Sai rồi.","Đúng vậy.","Tôi đồng ý."],a:0,w:"vrai ≠ faux."}
 ]
},
{
 id:"t10", date:"14/10", name:"Đại từ y · il faut · devoir · cấm đoán", src:"BT tự học tuần 10",
 links:[["BT tự học tuần 10","https://www.canva.com/d/JK8hWLudRA-K_e4"]],
 notes:[
  {k:1,h:"1 · Đại từ y = \"ở đó, chỗ đó\"",html:`<p><b>y</b> thay cho một <b>nơi chốn</b> đã nhắc tới (à / au / chez / dans / en / sur + nơi), để khỏi lặp lại.</p>
  <ul><li>${F("Tu vas au cinéma ce soir ?")} → ${F("Oui, j'y vais.")}</li>
  <li>${F("Elle travaille à l'hôpital ?")} → ${F("Oui, elle y travaille.")}</li>
  <li>${F("Ton médecin habite à Lyon ?")} → ${F("Oui, il y habite.")}</li></ul>
  <p class="tip">y đứng <b>TRƯỚC động từ</b>: <s>Je travaille y</s> → ${F("J'y travaille.")} Trước nguyên âm, je → j'.</p>`},
  {k:1,h:"2 · y trong câu phủ định và các thì",html:`<div class="tbl"><table>
  <tr><td>Phủ định</td><td>ne + y + V + pas</td><td>${F("Non, je n'y vais pas.")}</td></tr>
  <tr><td>Passé composé</td><td>y + trợ động từ</td><td>${F("J'y suis allée hier.")}</td></tr>
  <tr><td>aller / vouloir / pouvoir + V</td><td>y đứng trước V nguyên thể</td><td>${F("Je vais y aller demain.")}</td></tr></table></div>
  <p class="tip">Câu trả lời của em đều đúng: ${F("Oui, ils y vont. / Non, ils n'y vont pas.")} · ${F("Non, je n'y travaille pas.")}</p>`},
  {k:1,h:"3 · Il faut + V nguyên thể",html:`<p><b>Il faut</b> = cần, phải, nên (nói chung, cho mọi người). <b>Il ne faut pas</b> = không được.</p>
  <ul><li>${F("Il faut porter une serviette.")}</li><li>${F("Il faut prendre rendez-vous chez le médecin.")}</li><li>${F("Il ne faut pas manger dans la salle.")}</li></ul>
  <p class="tip">Đây là cấu trúc vô nhân xưng: chủ ngữ luôn là <b>il</b>, không đổi thành je, nous, vous. <s>Je faut</s>. Muốn nói \"tôi phải\" thì dùng devoir.</p>`},
  {k:1,h:"4 · devoir (phải) + V nguyên thể",html:`<p>${F("je dois, tu dois, il doit, nous devons, vous devez, ils doivent")}</p>
  <p>${F("Je dois prendre rendez-vous.")} ${F("Vous devez arriver à l'heure.")}</p>
  <div class="tbl"><table><tr><th></th><th>il faut</th><th>devoir</th></tr>
  <tr><td>Chủ ngữ</td><td>luôn là il (chung chung)</td><td>người cụ thể: je, tu, nous…</td></tr>
  <tr><td>Ví dụ</td><td>${F("Il faut dormir huit heures.")}</td><td>${F("Je dois dormir plus.")}</td></tr></table></div>
  <p class="tip">Phân từ quá khứ của devoir là ${F("dû")} (có dấu mũ): ${F("J'ai dû partir.")}</p>`},
  {k:1,h:"5 · Cấm đoán & yêu cầu (nội quy, biển báo)",html:`<h4 class="sub-h">Cấm</h4><div class="tbl"><table>
  <tr><td>${F("Il est interdit de")} + V</td><td>cấm</td><td>${F("Il est interdit de faire des barbecues.")}</td></tr>
  <tr><td>${F("Interdiction de")} + V</td><td>cấm (thông báo)</td><td>${F("Interdiction de fumer ou de vapoter dans l'ascenseur.")}</td></tr>
  <tr><td>${F("Défense de")} + V</td><td>cấm (biển báo)</td><td>${F("Défense de marcher sur la pelouse.")}</td></tr>
  <tr><td>${F("Ne pas")} + V</td><td>không được</td><td>${F("Ne pas laisser votre vélo dans les couloirs.")}</td></tr>
  <tr><td>${F("Il ne faut pas")} + V</td><td>không được</td><td>${F("Il ne faut pas courir.")}</td></tr></table></div>
  <h4 class="sub-h">Yêu cầu, nhắc nhở</h4><div class="tbl"><table>
  <tr><td>${F("Merci de")} + V</td><td>vui lòng</td><td>${F("Merci de fermer la porte d'entrée.")}</td></tr>
  <tr><td>${F("Prière de")} + V</td><td>đề nghị, xin vui lòng (trang trọng)</td><td>${F("Prière de trier vos déchets.")}</td></tr>
  <tr><td>${F("Attention à")} + N</td><td>chú ý, cẩn thận với</td><td>${F("Attention au bruit !")}</td></tr>
  <tr><td>V nguyên thể</td><td>hướng dẫn ngắn</td><td>${F("Tenir les chiens en laisse.")}</td></tr>
  <tr><td>Mệnh lệnh (vous)</td><td>yêu cầu trực tiếp</td><td>${F("Respectez vos voisins !")}</td></tr>
  <tr><td>${F("Il est important de")} + V</td><td>điều quan trọng là</td><td>${F("Il est important de boire de l'eau.")}</td></tr></table></div>
  <p class="tip">Sau interdit de, interdiction de, défense de, merci de, prière de luôn là động từ nguyên thể; trước nguyên âm de → d'. Attention à + le = <b>au</b> (${F("attention au bruit")}). Phủ định của nguyên thể: <b>ne pas</b> đứng liền nhau, trước động từ.</p>
  <h4 class="sub-h">Từ trong nội quy tòa nhà</h4><div class="tbl"><table>
  <tr><td>${F("le règlement intérieur")}</td><td>nội quy</td></tr>
  <tr><td>${F("l'immeuble")}</td><td>tòa nhà chung cư</td></tr>
  <tr><td>${F("fermer la porte d'entrée")}</td><td>đóng cửa ra vào</td></tr>
  <tr><td>${F("faire des barbecues")}</td><td>nướng thịt ngoài trời</td></tr>
  <tr><td>${F("le bruit")}</td><td>tiếng ồn</td></tr>
  <tr><td>${F("le hall")} · ${F("les escaliers")}</td><td>sảnh · cầu thang</td></tr>
  <tr><td>${F("respecter ses voisins")}</td><td>tôn trọng hàng xóm</td></tr>
  <tr><td>${F("fumer")} · ${F("vapoter")}</td><td>hút thuốc · hút thuốc lá điện tử</td></tr>
  <tr><td>${F("l'ascenseur")}</td><td>thang máy</td></tr>
  <tr><td>${F("les parties communes")}</td><td>khu vực chung</td></tr>
  <tr><td>${F("tenir un chien en laisse")}</td><td>dắt chó bằng dây</td></tr>
  <tr><td>${F("la pelouse")}</td><td>bãi cỏ</td></tr>
  <tr><td>${F("la résidence")}</td><td>khu nhà ở</td></tr>
  <tr><td>${F("laisser")}</td><td>để lại</td></tr>
  <tr><td>${F("le vélo")} · ${F("les couloirs")}</td><td>xe đạp · hành lang</td></tr>
  <tr><td>${F("trier ses déchets")}</td><td>phân loại rác</td></tr></table></div>`},
  {h:"6 · Nói về sức khỏe (bài diễn đàn)",html:`<ul>
  <li>${F("J'ai mal au dos.")} · ${F("J'ai mal à la tête.")} · ${F("J'ai mal aux yeux.")} (à + le = au, à + les = aux)</li>
  <li>${F("Je prends rendez-vous chez le spécialiste du dos.")} (chez + người, không thêm à)</li>
  <li>${F("Je suis fatiguée et stressée.")} · ${F("J'ai des problèmes de sommeil.")}</li>
  <li>${F("Je ne veux pas prendre de médicaments.")}</li>
  <li>${F("Je fais des exercices de respiration.")} · ${F("respirer par le nez et par la bouche")}</li>
  <li>${F("Je me sens bien !")} · ${F("Enfin une solution !")}</li></ul>`},
  {h:"7 · C'était = It was",html:`<p>Trong video em gặp nhiều chữ <b>était</b>: đó là être ở thì Imparfait (chưa học). Tạm hiểu như was / were.</p>
  <p>${F("C'était cool.")} · ${F("C'était trop bien.")} · ${F("On était ensemble.")}</p>`},
  {h:"8 · Nhiệm vụ trong BT tự học",html:`<ul><li>Đọc và nghe các bài, đánh dấu chỗ chia ở <b>passé composé</b>, dịch bài, học expressions trong khung.</li>
  <li>Trả lời câu hỏi bằng đại từ <b>y</b>; điền <b>devoir</b> hoặc <b>il faut</b>.</li>
  <li>Dịch nội quy phòng gym (il faut, il ne faut pas, il est interdit de).</li>
  <li>Từ vựng: 2 chương trong sách Essentiel. Các từ in đậm đã có trong mục Từ vựng → <b>Du lịch & thiên nhiên</b>; câu trong khung \"Pour communiquer\" ở mục Hội thoại → <b>Du lịch</b>.</li>
  <li>Xem video Easy French: lập list 10 câu passé composé và 10 expressions hay.</li></ul>
  <p class="tip">Link audio nằm trên bảng Canva BT tự học tuần 10.</p>`}
 ],
 fixes:[
  ["Je travaille y.","J'y travaille.","y đứng trước động từ"],
  ["Jonathan prendre rendez-vous chez à spécialiste","Jonathan prend rendez-vous chez le spécialiste.","chia động từ (prend); chez + le + người, không dùng à"],
  ["parce que il a mal au dos","parce qu'il a mal au dos","que + nguyên âm → qu'"],
  ["Je faut prendre rendez-vous.","Il faut prendre rendez-vous. / Je dois prendre rendez-vous.","il faut không đổi chủ ngữ; muốn có \"je\" thì dùng devoir"],
  ["J'ai mal à le dos.","J'ai mal au dos.","à + le = au"],
  ["Il est interdit fumer.","Il est interdit de fumer.","sau interdit cần de"]
 ],
 ex:[
  {t:"f",q:"Trả lời bằng <b>y</b>: Tu vas au cinéma ce soir ? – Oui, ___",a:["j'y vais"]},
  {t:"f",q:"Trả lời bằng <b>y</b>: Il travaille à l'hôpital ? – Non, ___",a:["il n'y travaille pas"]},
  {t:"f",q:"Trả lời bằng <b>y</b>: Elle est chez le médecin ? – Oui, ___",a:["elle y est"]},
  {t:"f",q:"Trả lời bằng <b>y</b>: Ils vont à la piscine ? – Non, ___",a:["ils n'y vont pas"]},
  {t:"f",q:"Trả lời bằng <b>y</b>: Vous habitez à Hanoï ? – Oui, nous ___ habitons.",a:["y"]},
  {t:"f",q:"Dịch: \"Tôi làm việc ở đó.\"",a:["j'y travaille"]},
  {t:"f",q:"Dịch: \"Ngày mai tôi sẽ đến đó.\" (aller, tương lai gần)",a:["demain je vais y aller","je vais y aller demain"]},
  {t:"m",q:"Câu nào đặt <b>y</b> đúng chỗ?",o:["Je vais y aller.","J'y vais aller.","Je vais aller y."],a:0,w:"Với aller + V, y đứng trước động từ nguyên thể."},
  {t:"f",q:"devoir: Je ___ partir à 7 heures.",a:["dois"]},
  {t:"f",q:"devoir: Nous ___ prendre rendez-vous.",a:["devons"]},
  {t:"f",q:"devoir: Vous ___ arriver à l'heure.",a:["devez"]},
  {t:"f",q:"devoir: Les enfants ___ dormir tôt.",a:["doivent"]},
  {t:"f",q:"Điền <b>Il faut</b> hoặc dạng của <b>devoir</b>: ___ porter une serviette à la salle de sport.",a:["il faut"]},
  {t:"f",q:"Điền <b>Il faut</b> hoặc dạng của <b>devoir</b>: Jonathan a mal au dos. Il ___ voir un spécialiste.",a:["doit"]},
  {t:"f",q:"Điền <b>Il faut</b> hoặc dạng của <b>devoir</b>: Tu ___ te reposer, tu es fatiguée.",a:["dois"]},
  {t:"f",q:"Dịch (nội quy): \"Cấm hút thuốc.\" (dùng il est interdit)",a:["il est interdit de fumer"]},
  {t:"f",q:"Dịch (nội quy): \"Không được chạy.\" (dùng il faut)",a:["il ne faut pas courir"]},
  {t:"f",q:"Dịch: \"Vui lòng làm bài tập đúng giờ.\" (dùng merci de)",a:["merci de faire les devoirs à l'heure","merci de faire vos devoirs à l'heure"]},
  {t:"m",q:"Câu nào <b>sai</b>?",o:["Il faut dormir huit heures.","Je faut dormir huit heures.","Je dois dormir huit heures."],a:1,w:"il faut luôn giữ chủ ngữ il."},
  {t:"f",q:"J'ai mal ___ dos.",a:["au"]},
  {t:"f",q:"Sophie a mal ___ tête.",a:["à la"]},
  {t:"f",q:"J'ai mal ___ yeux.",a:["aux"]},
  {t:"f",q:"Nội quy: ___ fermer la porte d'entrée. (vui lòng)",a:["merci de"]},
  {t:"f",q:"Nội quy: ___ trier vos déchets. (đề nghị, trang trọng)",a:["prière de"]},
  {t:"f",q:"Nội quy: ___ bruit ! (chú ý tiếng ồn)",a:["attention au"]},
  {t:"f",q:"Nội quy: ___ marcher sur la pelouse. (biển báo cấm, bắt đầu bằng D)",a:["défense de"]},
  {t:"f",q:"Nội quy: ___ fumer dans l'ascenseur. (danh từ \"sự cấm\")",a:["interdiction de"]},
  {t:"f",q:"Viết dạng phủ định nguyên thể: ___ laisser votre vélo dans les couloirs.",a:["ne pas"]},
  {t:"f",q:"Dịch: \"Tôn trọng hàng xóm của các bạn!\" (mệnh lệnh vous)",a:["respectez vos voisins"]},
  {t:"f",q:"Dịch: \"phân loại rác\"",a:["trier ses déchets","trier vos déchets","trier les déchets"]},
  {t:"f",q:"Dịch: \"khu vực chung\" (trong tòa nhà)",a:["les parties communes"]},
  {t:"f",q:"Dịch: \"dắt chó bằng dây\" (tenir…)",a:["tenir les chiens en laisse","tenir un chien en laisse","tenir le chien en laisse"]},
  {t:"m",q:"Câu nào <b>sai</b>?",o:["Défense de fumer.","Interdiction de fumer.","Défense fumer."],a:2,w:"Sau défense / interdiction cần de + V nguyên thể."},
  {t:"m",q:"\"C'était trop bien\" nghĩa là:",o:["Hôm nay rất tốt.","Lúc đó thật tuyệt.","Sẽ rất tuyệt."],a:1,w:"était = être ở quá khứ (was)."}
 ]
},
{
 id:"b9h", date:"11/10", name:"Vị trí đồ vật & luyện passé composé", src:"BTVN sau buổi 9",
 links:[["BTVN sau buổi 9","https://www.canva.com/d/EF5PsQBg4D6KpIf"]],
 notes:[
  {k:1,h:"1 · Phủ định & câu hỏi",html:`<p>ne … pas <b>bọc quanh trợ động từ</b>, Vpp đứng sau:</p>
  <ul><li>${F("Elle n'a pas déménagé à Lyon.")}</li><li>${F("Je ne suis pas sortie hier soir.")}</li>
  <li>${F("Ce matin, je n'ai pas mangé de pain.")} (phủ định: du → de)</li></ul>
  <p>Hỏi: ${F("Tu as fini tes devoirs ?")} = ${F("As-tu fini tes devoirs ?")} · ${F("Tu as mangé quoi ce matin ?")} = ${F("Qu'est-ce que tu as mangé ?")}</p>`},
  {k:1,h:"2 · Mốc thời gian quá khứ",html:`<p>${F("hier")} · ${F("hier soir")} · ${F("ce matin")} · ${F("la semaine dernière")} · ${F("le mois dernier")} · ${F("l'année dernière")} · ${F("il y a deux jours")} · ${F("pendant trois heures")}</p>
  <p class="tip">${F("hier")} = hôm qua ≠ ${F("l'hiver")} = mùa đông. ${F("la semaine dernière")} = tuần trước ≠ ${F("la dernière semaine")} = tuần cuối cùng.</p>`},
  {h:"3 · Vị trí đồ vật trong phòng",html:`<p>${F("sur")} trên · ${F("sous")} dưới · ${F("dans")} trong · ${F("devant")} trước · ${F("derrière")} sau · ${F("entre")} giữa · ${F("à côté de")} bên cạnh · ${F("en face de")} đối diện · ${F("à gauche de")} / ${F("à droite de")} bên trái / phải</p>
  <p>Bài thử thách của em: ${F("Dans ma chambre, il y a un écran externe et un ordinateur sur la table. En face de la table, il y a un lit avec beaucoup de peluches.")}</p>
  <p class="tip">de + le = du: ${F("à côté du lit")}, ${F("à gauche de l'entrée")}.</p>`},
  {h:"4 · Anti-Alzheimer: ôn tần suất & đi chơi",html:`<ul><li>${F("Sabrina se maquille rarement.")}</li><li>${F("Le mercredi, je vais au cinéma.")}</li>
  <li>${F("Nous faisons les courses tous les samedis.")}</li><li>${F("Je bricole parfois.")}</li><li>${F("Albert se lève souvent à six heures.")}</li></ul>
  <p>Đi chơi: ${F("un concert")}, ${F("une pièce de théâtre")}, ${F("une exposition")}, ${F("le cinéma")}</p>`},
  {h:"5 · Nhiệm vụ trong BTVN",html:`<ul><li>Nghe, đọc transcription, đánh dấu giới từ chỉ vị trí; sắp xếp đồ vật trong phòng khách.</li>
  <li>Nghe và phân biệt câu ở quá khứ / hiện tại.</li><li>Mỗi ngày chia khoảng 20 câu passé composé (Linguino): Vpp là gì, avoir hay être, có hợp giống số không.</li>
  <li>Luyện cấu trúc cấm đoán – yêu cầu.</li><li>Từ vựng: 2 chương trong sách Essentiel, đã có trong mục Từ vựng → <b>Sức khỏe & bệnh tật</b>.</li>
  <li>Xem tập 6 Extra French và video house tour: 10 từ mới, 3 câu hay, thu âm gửi cô.</li></ul>`}
 ],
 fixes:[
  ["vous avons trouvé un appartement","vous avez trouvé un appartement","vous đi với avez"],
  ["devoir → deçu","devoir → dû","Vpp của devoir là dû (có dấu mũ)"],
  ["t'as cherché","tu as cherché","t'as chỉ dùng khi nói; khi viết bài dùng tu as"],
  ["un lit avec beaucoup peluches","un lit avec beaucoup de peluches","beaucoup + de + N"],
  ["dans ma chambre, c'est une armoire","dans ma chambre, il y a une armoire","\"có\" (there is) dùng il y a"],
  ["le mercredi je vais au cinéme","Le mercredi, je vais au cinéma.","cinéma (é, a)"],
  ["la tapis","le tapis","tapis là danh từ giống đực"],
 ],
 ex:[
{t:"f",q:"Passé composé: Tu ___ un logement. <i>· chercher</i>",a:["as cherché"]},
  {t:"f",q:"Passé composé: Nous ___ un appartement. <i>· trouver</i>",a:["avons trouvé"]},
  {t:"f",q:"Passé composé: Ils ___ un lave-linge. <i>· acheter</i>",a:["ont acheté"]},
  {t:"f",q:"Passé composé: J'___ une maison. <i>· visiter</i>",a:["ai visité"]},
  {t:"f",q:"Passé composé: Vous ___ hier soir ? <i>· travailler</i>",a:["avez travaillé"]},
  {t:"f",q:"Passé composé: Tu ___ tes clés ! <i>· oublier</i>",a:["as oublié"]},
  {t:"f",q:"Participe passé của <b>devoir</b>",a:["dû"]},
  {t:"f",q:"Phủ định: Elle a déménagé à Lyon. → ___",a:["elle n'a pas déménagé à lyon"]},
  {t:"m",q:"\"Hôm qua tôi đã gặp một người Pháp.\"",o:["Hiver, j'ai rencontré un Français.","Hier, j'ai rencontré un Français.","Hier, je rencontre un Français."],a:1},
  {t:"f",q:"Le chat est ___ la table. (dưới)",a:["sous"]},
  {t:"f",q:"L'ordinateur est ___ la table. (trên)",a:["sur"]},
  {t:"f",q:"Le lit est ___ la table. (đối diện)",a:["en face de"]},
  {t:"f",q:"La lampe est ___ lit. (bên cạnh)",a:["à côté du"]}
 ]
},
{
 id:"b9", date:"08/10", name:"Passé composé & kể chuyện đã xảy ra", src:"Buổi 9",
 links:[["Buổi 9","https://www.canva.com/d/DjnuW-PHvypkXK6"]],
 notes:[
  {k:1,h:"Passé composé với avoir: động từ thường",html:`<h4 class="sub-h">Công thức: trợ động từ + phân từ quá khứ</h4><p>Công thức: <b>avoir / être</b> (chia ở hiện tại) + <b>participe passé</b> (động từ chính ở dạng quá khứ).</p>
  <div class="tbl"><table><tr><th>Đuôi</th><th>Nguyên thể</th><th>Participe passé</th></tr>
  <tr><td>-er → <b>-é</b></td><td>parler · manger · travailler · chercher · étudier</td><td>${F("parlé")} · ${F("mangé")} · ${F("travaillé")} · ${F("cherché")} · ${F("étudié")}</td></tr>
  <tr><td>-ir → <b>-i</b></td><td>finir · choisir</td><td>${F("fini")} · ${F("choisi")}</td></tr></table></div>
  <p class="tip">Không để nguyên thể: ${F("j'ai parlé")}, không phải <s>j'ai parler</s>.</p><h4 class="sub-h">avoir + participe passé</h4><div class="tbl"><table><tr><th></th><th>finir</th></tr>
  <tr><td>je / j'</td><td>${F("j'ai fini")}</td></tr><tr><td>tu</td><td>${F("tu as fini")}</td></tr><tr><td>il / elle</td><td>${F("il a fini")}</td></tr>
  <tr><td>nous</td><td>${F("nous avons fini")}</td></tr><tr><td>vous</td><td>${F("vous avez fini")}</td></tr><tr><td>ils / elles</td><td>${F("ils ont fini")}</td></tr></table></div>
  <p>${F("J'ai fini mes devoirs.")} ${F("Hier soir, j'ai étudié pendant trois heures.")} ${F("Elle a déménagé.")} ${F("Nous avons cherché un appartement.")} ${F("Vous avez travaillé.")}</p><h4 class="sub-h">Phủ định và câu hỏi</h4><p>${F("Ce matin, j'ai mangé du pain.")} → ${F("Ce matin, je n'ai pas mangé de pain.")}</p>
  <p><b>ne … pas</b> bao quanh <b>trợ động từ</b> (<b>n'ai pas</b> mangé). Sau phủ định, <b>du / de la / des → de</b>.</p>
  <p>Câu hỏi: ${F("Tu as fini tes devoirs ?")} · ${F("As-tu fini tes devoirs ?")} · nói thân mật: ${F("Ce matin, t'as mangé quoi ?")}</p><h4 class="sub-h">Từ chỉ thời gian đã qua</h4><ul><li>${F("hier")}: hôm qua · ${F("hier soir")}: tối qua · ${F("ce matin")}: sáng nay</li>
  <li>${F("la semaine dernière")}: tuần trước · ${F("le mois dernier")}: tháng trước</li>
  <li>${F("la dernière semaine")}: tuần <b>cuối cùng</b> · ${F("le dernier jour")}: ngày cuối cùng</li>
  <li>${F("l'hiver")}: mùa đông (đừng nhầm với <b>hier</b>)</li></ul>
  <p class="tip">${F("dernier")} <b>sau</b> danh từ = "trước" (tuần trước); <b>trước</b> danh từ = "cuối cùng".</p>
  <p>${F("Hier, j'ai rencontré un Français, mais je n'ai pas parlé en français avec lui.")} (un Français = nam, une Française = nữ.)</p>
  <p>${F("chercher")}: tìm kiếm · ${F("trouver")}: tìm thấy · ${F("oublier")}: quên · ${F("rencontrer")}: gặp (lần đầu)</p><h4 class="sub-h">venir de + V = vừa mới</h4><p>${F("je viens de + V")}: tôi <b>vừa mới</b> làm gì. Chia <b>venir</b>: ${F("viens, viens, vient, venons, venez, viennent")}; động từ sau <b>de</b> để nguyên thể.</p>
  <p>${F("Je viens de déménager.")} ${F("Elle vient de finir ses devoirs.")} ${F("Nous venons de manger.")}</p>`},
  {k:1,h:"Passé composé với être: La Maison d'Être, phản thân, naître",html:`<h4 class="sub-h">Động từ đi với être: La Maison d'Être</h4><p>Ngoài động từ phản thân, có nhóm <b>động từ chỉ chuyển động hoặc thay đổi trạng thái</b> dùng <b>être</b> ở passé composé (bảng "La Maison d'Être" và ngọn đồi vẽ tay của thầy).</p>
  <div class="tbl"><table><tr><th>Nguyên thể</th><th>Participe</th><th>Nghĩa</th><th>Ví dụ trên bảng</th></tr>
  <tr><td>${F("aller")}</td><td>${F("allé")}</td><td>đi</td><td>${F("Elles sont allées en France.")}</td></tr>
  <tr><td>${F("venir")}</td><td>${F("venu")}</td><td>đến</td><td>${F("Il est venu de Lille.")}</td></tr>
  <tr><td>${F("devenir")}</td><td>${F("devenu")}</td><td>trở thành</td><td>${F("Elle est devenue esprit.")}</td></tr>
  <tr><td>${F("revenir")}</td><td>${F("revenu")}</td><td>trở lại</td><td></td></tr>
  <tr><td>${F("arriver")}</td><td>${F("arrivé")}</td><td>đến nơi</td><td>${F("Elle est arrivée.")}</td></tr>
  <tr><td>${F("partir")}</td><td>${F("parti")}</td><td>rời đi</td><td>${F("Elle est partie.")}</td></tr>
  <tr><td>${F("entrer / rentrer")}</td><td>${F("entré / rentré")}</td><td>đi vào / về nhà</td><td>${F("Elle est entrée.")}</td></tr>
  <tr><td>${F("sortir")}</td><td>${F("sorti")}</td><td>đi ra</td><td>${F("Il est sorti.")}</td></tr>
  <tr><td>${F("monter")}</td><td>${F("monté")}</td><td>đi lên</td><td>${F("Il est monté.")}</td></tr>
  <tr><td>${F("descendre")}</td><td>${F("descendu")}</td><td>đi xuống</td><td>${F("Elle est descendue.")}</td></tr>
  <tr><td>${F("passer")}</td><td>${F("passé")}</td><td>đi ngang qua</td><td>${F("Il est passé.")}</td></tr>
  <tr><td>${F("rester")}</td><td>${F("resté")}</td><td>ở lại</td><td>${F("Ils sont restés.")}</td></tr>
  <tr><td>${F("retourner")}</td><td>${F("retourné")}</td><td>quay lại</td><td>${F("Il est retourné.")}</td></tr>
  <tr><td>${F("tomber")}</td><td>${F("tombé")}</td><td>ngã</td><td>${F("Elle est tombée.")}</td></tr>
  <tr><td>${F("naître")}</td><td>${F("né")}</td><td>sinh ra</td><td>${F("Elle est née en 1905.")}</td></tr>
  <tr><td>${F("mourir")}</td><td>${F("mort")}</td><td>chết</td><td>${F("Ils sont morts en 1944.")}</td></tr></table></div>
  <p><b>Phân từ hợp giống và số với chủ ngữ</b>: ${F("elle est entrée")}, ${F("ils sont restés")}, ${F("elles sont allées")}, ${F("ils sont morts")}.</p>
  <p class="tip">Nét chữ xanh <b>re-</b> trên bảng: động từ có tiền tố <b>re-</b> cũng dùng être (${F("revenir")}, ${F("rentrer")}, ${F("remonter")}…). Mẹo nhớ 16 động từ: <b>DR &amp; MRS VANDERTRAMP</b> (Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Retourner, Tomber, Rentrer, Arriver, Mourir, Partir). <i>Passer</i> có trên hình nhưng không nằm trong câu này.</p>
  <p>Phủ định: ${F("Elle n'est pas partie.")} (ne … pas bao quanh <b>est</b>).</p><h4 class="sub-h">Động từ phản thân và naître</h4><p>Động từ phản thân dùng <b>être</b>. Phân từ phải <b>hợp giống và số với chủ ngữ</b> (thêm <b>e</b> cho nữ, <b>s</b> cho số nhiều).</p>
  <div class="tbl"><table><tr><th></th><th>se lever</th></tr>
  <tr><td>je</td><td>${F("je me suis levé")} (nam) · ${F("je me suis levée")} (nữ)</td></tr>
  <tr><td>tu</td><td>${F("tu t'es levé(e)")}</td></tr>
  <tr><td>il / elle</td><td>${F("il s'est levé")} · ${F("elle s'est levée")}</td></tr>
  <tr><td>nous</td><td>${F("nous nous sommes levé(e)s")}</td></tr>
  <tr><td>vous</td><td>${F("vous vous êtes levé(e)(s)")}</td></tr>
  <tr><td>ils / elles</td><td>${F("ils se sont levés")} · ${F("elles se sont levées")}</td></tr></table></div>
  <p>${F("Je me suis levée à 6 h ce matin.")} ${F("Je suis né(e) en 1990.")}</p>`},
  {k:1,h:"Phân từ quá khứ bất quy tắc",html:`<p>Phân từ quá khứ bất quy tắc, chia theo đuôi. Nhóm -u có nhiều từ nhất.</p><h4 class="sub-h">Đuôi -u</h4><div class="tbl"><table><tr><td>pouvoir</td><td>pu</td></tr><tr><td>vouloir</td><td>voulu</td></tr><tr><td>voir</td><td>vu (đã thấy)</td></tr><tr><td>devoir</td><td>dû</td></tr><tr><td>savoir</td><td>su (đã biết)</td></tr><tr><td>recevoir</td><td>reçu</td></tr><tr><td>tenir</td><td>tenu</td></tr><tr><td>croire</td><td>cru</td></tr><tr><td>perdre</td><td>perdu</td></tr><tr><td>lire</td><td>lu (đã đọc)</td></tr><tr><td>boire</td><td>bu (đã uống)</td></tr><tr><td>venir</td><td>venu</td></tr><tr><td>vivre</td><td>vécu</td></tr></table></div><h4 class="sub-h">Đuôi -is</h4><div class="tbl"><table><tr><td>mettre</td><td>mis</td></tr><tr><td>prendre</td><td>pris</td></tr><tr><td>comprendre</td><td>compris</td></tr><tr><td>apprendre</td><td>appris</td></tr><tr><td>asseoir</td><td>assis</td></tr></table></div><p class="tip">Các từ ghép với <b>prendre</b> (comprendre, apprendre) đổi giống hệt.</p><h4 class="sub-h">Đuôi -ert (-ouvert)</h4><div class="tbl"><table><tr><td>ouvrir</td><td>ouvert</td></tr><tr><td>offrir</td><td>offert</td></tr><tr><td>souffrir</td><td>souffert</td></tr><tr><td>découvrir</td><td>découvert</td></tr></table></div><p class="tip">Động từ <b>-vrir / -frir</b> đều thành <b>-vert / -fert</b>.</p><h4 class="sub-h">Đuôi -t</h4><div class="tbl"><table><tr><td>conduire</td><td>conduit</td></tr><tr><td>construire</td><td>construit</td></tr><tr><td>produire</td><td>produit</td></tr><tr><td>traduire</td><td>traduit</td></tr><tr><td>dire</td><td>dit</td></tr></table></div><p class="tip">Động từ <b>-duire</b> đều thành <b>-duit</b>. <b>dire → dit</b> là ngoại lệ hay gặp.</p><h4 class="sub-h">Đặc biệt</h4><div class="tbl"><table><tr><td>être</td><td>été</td></tr><tr><td>avoir</td><td>eu</td></tr><tr><td>faire</td><td>fait</td></tr><tr><td>naître</td><td>né (Je suis né en 1990.)</td></tr><tr><td>mourir</td><td>mort (Ils sont morts en 1944.)</td></tr></table></div>`},
 ],
 fixes:[
  ["j'ai parler","j'ai parlé","Sau avoir là phân từ -é, không phải nguyên thể"],
  ["j'ai finir","j'ai fini","-ir → -i"],
  ["je me suis levé à 6 h (nữ)","je me suis levée à 6 h","Với être, phân từ hợp giống với chủ ngữ"],
  ["je n'ai pas mangé du pain","je n'ai pas mangé de pain","Sau phủ định: du / de la / des → de"],
  ["je ne pas ai mangé","je n'ai pas mangé","ne … pas bao quanh trợ động từ"],
  ["la semaine dernier","la semaine dernière","semaine giống cái nên dernière"],
  ["hiver, j'ai rencontré un Français","hier, j'ai rencontré un Français","hier = hôm qua, hiver = mùa đông"],
  ["j'ai allé au cinéma","je suis allé(e) au cinéma","aller dùng être (La Maison d'Être)"],
  ["elle est parti","elle est partie","être: phân từ hợp giống với chủ ngữ"],
  ["ils sont arrivé","ils sont arrivés","chủ ngữ số nhiều: thêm -s"]
 ],
 ex:[
  {t:"f",q:"Phân từ của <b>voir</b>:",a:["vu"]},
  {t:"f",q:"Phân từ của <b>boire</b>:",a:["bu"]},
  {t:"f",q:"Phân từ của <b>prendre</b>:",a:["pris"]},
  {t:"f",q:"Phân từ của <b>mettre</b>:",a:["mis"]},
  {t:"f",q:"Phân từ của <b>ouvrir</b>:",a:["ouvert"]},
  {t:"f",q:"Phân từ của <b>dire</b>:",a:["dit"]},
  {t:"f",q:"Phân từ của <b>faire</b>:",a:["fait"]},
  {t:"f",q:"Phân từ của <b>être</b>:",a:["été"]},
  {t:"f",q:"Phân từ của <b>vouloir</b>:",a:["voulu"]},
  {t:"f",q:"Phân từ của <b>mourir</b>:",a:["mort"]},
  {t:"f",q:"Hier soir, j'(étudier) ___ pendant trois heures.",a:["ai étudié"]},
  {t:"f",q:"Ce matin, nous (manger) ___ du pain.",a:["avons mangé"]},
  {t:"f",q:"Elle (déménager) ___ la semaine dernière.",a:["a déménagé"]},
  {t:"f",q:"Tu (oublier) ___ tes devoirs ?",a:["as oublié"]},
  {t:"f",q:"Nous (chercher) ___ un appartement.",a:["avons cherché"]},
  {t:"f",q:"Vous (travailler) ___ hier ?",a:["avez travaillé"]},
  {t:"f",q:"Ils (parler) ___ en français.",a:["ont parlé"]},
  {t:"f",q:"Hier, j'(rencontrer) ___ un Français.",a:["ai rencontré"]},
  {t:"f",q:"J'(finir) ___ mes devoirs.",a:["ai fini"]},
  {t:"f",q:"Tu (finir) ___ tes devoirs ?",a:["as fini"]},
  {t:"f",q:"Nous (choisir) ___ un cadeau.",a:["avons choisi"]},
  {t:"f",q:"Ils (finir) ___ à midi.",a:["ont fini"]},
  {t:"f",q:"Vous (finir) ___ le travail ?",a:["avez fini"]},
  {t:"f",q:"Ce matin, je (ne pas manger) ___ de pain.",a:["n'ai pas mangé"]},
  {t:"f",q:"Hier, nous (ne pas travailler) ___.",a:["n'avons pas travaillé"]},
  {t:"f",q:"Elle (ne pas finir) ___ ses devoirs.",a:["n'a pas fini"]},
  {t:"f",q:"Hier, j'ai rencontré un Français, mais je (ne pas parler) ___ en français avec lui.",a:["n'ai pas parlé"]},
  {t:"f",q:"Ce matin, je (se lever) ___ à 6 h. <span class='muted small'>(nam)</span>",a:["me suis levé"]},
  {t:"f",q:"Ce matin, je (se lever) ___ à 6 h. <span class='muted small'>(nữ)</span>",a:["me suis levée"]},
  {t:"f",q:"Tu (se lever) ___ à quelle heure ce matin ? <span class='muted small'>(nữ)</span>",a:["t'es levée"]},
  {t:"f",q:"Il (se lever) ___ à 7 h.",a:["s'est levé"]},
  {t:"f",q:"Elle (se lever) ___ à 7 h.",a:["s'est levée"]},
  {t:"f",q:"Nous (se lever) ___ à 6 h. <span class='muted small'>(cả nhóm là nữ)</span>",a:["nous sommes levées"]},
  {t:"f",q:"Ils (se lever) ___ à 6 h.",a:["se sont levés"]},
  {t:"f",q:"Je (naître) ___ en 1990. <span class='muted small'>(nam)</span>",a:["suis né"]},
  {t:"f",q:"Je (naître) ___ en 1990. <span class='muted small'>(nữ)</span>",a:["suis née"]},
  {t:"f",q:"Elle (venir de) ___ finir ses devoirs.",a:["vient de"]},
  {t:"f",q:"Nous (venir de) ___ déménager.",a:["venons de"]},
  {t:"f",q:"Albert se lève ___ à 6 heures. <span class='muted small'>(thường)</span>",a:["souvent"]},
  {t:"f",q:"Je bricole ___. <span class='muted small'>(thỉnh thoảng)</span>",a:["parfois"]},
  {t:"f",q:"Sabrina se maquille ___. <span class='muted small'>(hiếm khi)</span>",a:["rarement"]},
  {t:"f",q:"Nous faisons les courses ___. <span class='muted small'>(mọi thứ Bảy)</span>",a:["tous les samedis"]},
  {t:"f",q:"Le mercredi, je (aller) ___ au cinéma.",a:["vais"]},
  {t:"f",q:"Elle (sortir) ___ avec ses amis.",a:["sort"]},
  {t:"f",q:"Vous (dormir) ___ bien ?",a:["dormez"]},
  {t:"f",q:"Nous (partir) ___ demain.",a:["partons"]},
  {t:"f",q:"Je (ne pas dormir) ___ ce soir.",a:["ne dors pas"]},
  {t:"f",q:"Ils (sortir) ___ le samedi soir.",a:["sortent"]},
  {t:"f",q:"Défense ___ arriver en retard.",a:["d'"]},
  {t:"f",q:"Hier, je (aller) ___ au marché. <span class='muted small'>(nữ)</span>",a:["suis allée"]},
  {t:"f",q:"Hier, je (aller) ___ au marché. <span class='muted small'>(nam)</span>",a:["suis allé"]},
  {t:"f",q:"Elles (aller) ___ en France.",a:["sont allées"]},
  {t:"f",q:"Il (venir) ___ de Lille.",a:["est venu"]},
  {t:"f",q:"Elle (arriver) ___ à 8 h.",a:["est arrivée"]},
  {t:"f",q:"Ils (arriver) ___ en retard.",a:["sont arrivés"]},
  {t:"f",q:"Elle (partir) ___.",a:["est partie"]},
  {t:"f",q:"Il (sortir) ___ à midi.",a:["est sorti"]},
  {t:"f",q:"Elle (entrer) ___ dans la maison.",a:["est entrée"]},
  {t:"f",q:"Il (monter) ___ au premier étage.",a:["est monté"]},
  {t:"f",q:"Elle (descendre) ___ du bus.",a:["est descendue"]},
  {t:"f",q:"Ils (rester) ___ à la maison.",a:["sont restés"]},
  {t:"f",q:"Il (retourner) ___ à Lille.",a:["est retourné"]},
  {t:"f",q:"Elle (tomber) ___.",a:["est tombée"]},
  {t:"f",q:"Elle (naître) ___ en 1905.",a:["est née"]},
  {t:"f",q:"Ils (mourir) ___ en 1944.",a:["sont morts"]},
  {t:"f",q:"Il (passer) ___ chez moi.",a:["est passé"]},
  {t:"f",q:"Elle (devenir) ___ médecin.",a:["est devenue"]},
  {t:"f",q:"Elle (ne pas partir) ___.",a:["n'est pas partie"]},
  {t:"f",q:"Nous (arriver) ___ hier. <span class='muted small'>(cả nhóm là nữ)</span>",a:["sommes arrivées"]},
  {t:"m",q:"Đâu là cách nói đúng của <b>tuần trước</b>?",o:["la dernière semaine","la semaine dernière","le semaine dernier"],a:1,w:"semaine dernière = tuần trước; la dernière semaine = tuần cuối cùng."},
  {t:"m",q:"Đâu là cách nói đúng của <b>hôm qua</b>?",o:["hiver","hier","hiers"],a:1,w:"hier = hôm qua; l'hiver = mùa đông."},
  {t:"m",q:"Đâu là câu đúng?",o:["J'ai parler anglais.","J'ai parlé anglais.","Je suis parlé anglais."],a:1,w:"avoir + phân từ -é."},
  {t:"m",q:"Đâu là câu đúng? <span class='muted small'>(nói về mình, là nữ)</span>",o:["Je me suis levé à 6 h.","Je me suis levée à 6 h.","Je suis levée à 6 h."],a:1,w:"Phản thân dùng être, phân từ hợp giống: levée."},
  {t:"m",q:"Đâu là câu đúng?",o:["Je n'ai pas mangé du pain.","Je n'ai pas mangé de pain.","Je ne pas ai mangé de pain."],a:1,w:"Sau phủ định: du → de."},
  {t:"m",q:"Đâu là câu đúng?",o:["J'ai allé au cinéma.","Je suis allé au cinéma.","Je suis aller au cinéma."],a:1,w:"aller dùng être, phân từ là allé."},
  {t:"m",q:"Đâu là câu đúng?",o:["Elle est parti.","Elle est partie.","Elle a partie."],a:1,w:"être + phân từ hợp giống: partie."},
  {t:"m",q:"Động từ nào dùng <b>être</b> ở passé composé?",o:["manger","arriver","chercher"],a:1,w:"arriver nằm trong La Maison d'Être. manger và chercher dùng avoir."},
  {t:"m",q:"Ils ___ restés à la maison.",o:["ont","sont","est"],a:1,w:"rester dùng être, chủ ngữ ils nên sont."},
  {t:"m",q:"Merci de ___ les devoirs à l'heure.",o:["faire","fais","fait"],a:0,w:"Sau de là nguyên thể."}
 ]
},
{
 id:"b8h", date:"04/10", name:"Chia động từ ở thì hiện tại", src:"BTVN sau buổi 8",
 links:[["BTVN sau buổi 8","https://www.canva.com/design/DAHXBA5h6B0/IkL5MDYKGwbQcxw_rP2jGA/edit"]],
 notes:[
  {k:1,h:"Nhóm 1: động từ đuôi -er",html:`<p>Bỏ <b>-er</b>, thêm đuôi: <b>-e, -es, -e, -ons, -ez, -ent</b></p><div class="tbl"><table>
  <tr><th></th><th>parler</th><th>habiter</th></tr>
  <tr><td>je / j'</td><td>${F("parle")}</td><td>${F("habite")}</td></tr><tr><td>tu</td><td>${F("parles")}</td><td>${F("habites")}</td></tr>
  <tr><td>il / elle</td><td>${F("parle")}</td><td>${F("habite")}</td></tr><tr><td>nous</td><td>${F("parlons")}</td><td>${F("habitons")}</td></tr>
  <tr><td>vous</td><td>${F("parlez")}</td><td>${F("habitez")}</td></tr><tr><td>ils / elles</td><td>${F("parlent")}</td><td>${F("habitent")}</td></tr></table></div>
  <p class="tip">-e, -es, -ent đều câm: parle, parles, parlent đọc giống nhau. Cùng nhóm trong bài: écouter, regarder, travailler.</p>`},
  {k:1,h:"Nhóm 2: đuôi -ir, số nhiều có -iss-",html:`<p>Bỏ <b>-ir</b>, thêm: <b>-is, -is, -it, -issons, -issez, -issent</b></p><div class="tbl"><table>
  <tr><th></th><th>finir</th><th>choisir</th></tr>
  <tr><td>je</td><td>${F("finis")}</td><td>${F("choisis")}</td></tr><tr><td>tu</td><td>${F("finis")}</td><td>${F("choisis")}</td></tr>
  <tr><td>il / elle</td><td>${F("finit")}</td><td>${F("choisit")}</td></tr><tr><td>nous</td><td>${F("finissons")}</td><td>${F("choisissons")}</td></tr>
  <tr><td>vous</td><td>${F("finissez")}</td><td>${F("choisissez")}</td></tr><tr><td>ils / elles</td><td>${F("finissent")}</td><td>${F("choisissent")}</td></tr></table></div>
  <p class="tip">Cùng nhóm: ${F("réussir")} (thành công, thi đỗ), ${F("remplir")} (điền vào), ${F("grandir")} (lớn lên).</p>`},
  {k:1,h:"dormir · partir · sortir",html:`<p>Số ít bỏ 3 chữ cuối rồi thêm <b>-s, -s, -t</b>. Số nhiều giữ phụ âm (m / t).</p><div class="tbl"><table>
  <tr><th></th><th>dormir</th><th>partir</th><th>sortir</th></tr>
  <tr><td>je</td><td>${F("dors")}</td><td>${F("pars")}</td><td>${F("sors")}</td></tr>
  <tr><td>tu</td><td>${F("dors")}</td><td>${F("pars")}</td><td>${F("sors")}</td></tr>
  <tr><td>il / elle</td><td>${F("dort")}</td><td>${F("part")}</td><td>${F("sort")}</td></tr>
  <tr><td>nous</td><td>${F("dormons")}</td><td>${F("partons")}</td><td>${F("sortons")}</td></tr>
  <tr><td>vous</td><td>${F("dormez")}</td><td>${F("partez")}</td><td>${F("sortez")}</td></tr>
  <tr><td>ils / elles</td><td>${F("dorment")}</td><td>${F("partent")}</td><td>${F("sortent")}</td></tr></table></div>
  <p class="tip">Không chia như nhóm 2: <s>nous partissons</s> → ${F("nous partons")}.</p>`},
  {h:"venir (đến)",html:`<p>${F("je viens, tu viens, il vient, nous venons, vous venez, ils viennent")}</p>
  <p>${F("Pepe vient du Vietnam.")} ${F("Ils viennent chez moi ce week-end.")}</p><p class="tip">ils vie<b>nn</b>ent: gấp đôi n. venir de + V = vừa mới (passé récent).</p>`},
  {k:1,h:"vouloir (muốn) · pouvoir (có thể)",html:`<div class="tbl"><table><tr><th></th><th>vouloir</th><th>pouvoir</th></tr>
  <tr><td>je</td><td>${F("veux")}</td><td>${F("peux")}</td></tr><tr><td>tu</td><td>${F("veux")}</td><td>${F("peux")}</td></tr>
  <tr><td>il / elle</td><td>${F("veut")}</td><td>${F("peut")}</td></tr><tr><td>nous</td><td>${F("voulons")}</td><td>${F("pouvons")}</td></tr>
  <tr><td>vous</td><td>${F("voulez")}</td><td>${F("pouvez")}</td></tr><tr><td>ils / elles</td><td>${F("veulent")}</td><td>${F("peuvent")}</td></tr></table></div>
  <p class="tip">Je / tu kết thúc bằng <b>-x</b>, không phải -s. Sau vouloir, pouvoir là động từ nguyên thể: ${F("Vous pouvez répéter plus lentement ?")}</p>`},
  {h:"descendre (đi xuống, xuống xe)",html:`<p>Động từ đuôi -dre: bỏ -re, thêm <b>-s, -s, (không thêm), -ons, -ez, -ent</b>.</p>
  <p>${F("je descends, tu descends, il descend, nous descendons, vous descendez, ils descendent")}</p>
  <p class="tip">${F("Je descends du bus à la prochaine station.")} Cùng kiểu: attendre, vendre, répondre.</p>`},
  {k:1,h:"être · avoir · aller · faire",html:`<div class="tbl"><table><tr><th></th><th>être</th><th>avoir</th><th>aller</th><th>faire</th></tr>
  <tr><td>je</td><td>${F("suis")}</td><td>${F("ai")}</td><td>${F("vais")}</td><td>${F("fais")}</td></tr>
  <tr><td>tu</td><td>${F("es")}</td><td>${F("as")}</td><td>${F("vas")}</td><td>${F("fais")}</td></tr>
  <tr><td>il / elle</td><td>${F("est")}</td><td>${F("a")}</td><td>${F("va")}</td><td>${F("fait")}</td></tr>
  <tr><td>nous</td><td>${F("sommes")}</td><td>${F("avons")}</td><td>${F("allons")}</td><td>${F("faisons")}</td></tr>
  <tr><td>vous</td><td>${F("êtes")}</td><td>${F("avez")}</td><td>${F("allez")}</td><td>${F("faites")}</td></tr>
  <tr><td>ils / elles</td><td>${F("sont")}</td><td>${F("ont")}</td><td>${F("vont")}</td><td>${F("font")}</td></tr></table></div>
  <p class="tip">Ba động từ có vous không đuôi -ez: ${F("vous êtes")}, ${F("vous faites")}, ${F("vous dites")}.</p>`},
  {h:"prendre (lấy, dùng, đi xe)",html:`<p>${F("je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent")}</p>
  <p>${F("Je prends un café noir sans sucre.")} ${F("Tu prends le métro ou le taxi ?")}</p><p class="tip">ils pre<b>nn</b>ent gấp đôi n. Cùng kiểu: apprendre, comprendre.</p>`},
  {h:"Bài nghe và đọc trong BTVN",html:`<ul><li>Bài nghe 1: trả lời câu hỏi, đánh dấu chỗ có <b>vouloir</b> và động từ phản thân.</li>
  <li>Bài nghe 2: trả lời câu hỏi, đánh dấu chỗ có <b>venir de + V</b> (vừa mới) và <b>aller + V</b> (sắp).</li>
  <li>Đọc và làm câu 2–6; nghe và làm câu 1–4.</li>
  <li>Xem tập 5 Extra French và 2 video có phụ đề: ghi lại ít nhất 10 từ hay mỗi video.</li>
  <li>Chủ đề tiếp theo của sách Edito: <b>nhà cửa</b>.</li></ul>
  <p class="tip">Link audio nằm trên bảng Canva BTVN sau buổi 8.</p>`}
 ],
 fixes:[
  ["nous finons","nous finissons","nhóm 2: số nhiều chèn -iss-"],
  ["nous partissons","nous partons","partir là nhóm 3, không có -iss-"],
  ["je veus · tu peus","je veux · tu peux","vouloir, pouvoir: je / tu đuôi -x"],
  ["ils prenent · ils vienent","ils prennent · ils viennent","gấp đôi n ở ngôi ils"],
  ["vous faisez","vous faites","faire: vous faites (bất quy tắc)"],
  ["il descendt","il descend","động từ -dre: ngôi il không thêm t"]
 ],
 ex:[
  {t:"f",q:"Je (parler) ___ français avec Pepe.",a:["parle"]},
  {t:"f",q:"Nous (habiter) ___ à Hanoï.",a:["habitons"]},
  {t:"f",q:"Ils (écouter) ___ de la musique dans leur chambre.",a:["écoutent"]},
  {t:"f",q:"Tu (regarder) ___ la télévision le soir ?",a:["regardes"]},
  {t:"f",q:"Vous (travailler) ___ dans un bureau ?",a:["travaillez"]},
  {t:"f",q:"Je (choisir) ___ un gâteau au chocolat.",a:["choisis"]},
  {t:"f",q:"Loan (finir) ___ ses devoirs à 22 heures.",a:["finit"]},
  {t:"f",q:"Nous (réussir) ___ l'examen de français.",a:["réussissons"]},
  {t:"f",q:"Vous (remplir) ___ cette fiche d'information, s'il vous plaît.",a:["remplissez"]},
  {t:"f",q:"Les enfants (grandir) ___ très vite.",a:["grandissent"]},
  {t:"f",q:"Les chats de Pepe (dormir) ___ huit heures par nuit.",a:["dorment"]},
  {t:"f",q:"Vous (dormir) ___ bien à l'hôtel ?",a:["dormez"]},
  {t:"f",q:"Pepe (venir) ___ du Vietnam.",a:["vient"]},
  {t:"f",q:"Nous (vouloir) ___ réserver une table pour deux personnes.",a:["voulons"]},
  {t:"f",q:"Ils (venir) ___ chez moi ce week-end.",a:["viennent"]},
  {t:"f",q:"Nous (partir) ___ en vacances demain matin.",a:["partons"]},
  {t:"f",q:"Vous (pouvoir) ___ répéter plus lentement, s'il vous plaît ?",a:["pouvez"]},
  {t:"f",q:"Tu (partir) ___ à quelle heure ?",a:["pars"]},
  {t:"f",q:"Le samedi soir, elle (sortir) ___ avec ses collègues.",a:["sort"]},
  {t:"f",q:"Nous ne (sortir) ___ pas quand il pleut.",a:["sortons"]},
  {t:"f",q:"Je (vouloir) ___ acheter ce livre, s'il vous plaît.",a:["veux"]},
  {t:"f",q:"Tu (pouvoir) ___ m'aider avec cet exercice ?",a:["peux"]},
  {t:"f",q:"Je (descendre) ___ du bus à la prochaine station.",a:["descends"]},
  {t:"f",q:"Vous (descendre) ___ par l'escalier ou par l'ascenseur ?",a:["descendez"]},
  {t:"f",q:"Je (être) ___ étudiant.",a:["suis"]},
  {t:"f",q:"J' (avoir) ___ 20 ans.",a:["ai"]},
  {t:"f",q:"Nous (être) ___ très contents de vous voir.",a:["sommes"]},
  {t:"f",q:"Ils (avoir) ___ une grande maison près de la mer.",a:["ont"]},
  {t:"f",q:"Tu (aller) ___ au cinéma ce soir ?",a:["vas"]},
  {t:"f",q:"Ils ne (pouvoir) ___ pas venir à la fête ce soir.",a:["peuvent"]},
  {t:"f",q:"Comment (aller) ___ -vous aujourd'hui ?",a:["allez"]},
  {t:"f",q:"Elle (faire) ___ du vélo tous les dimanches.",a:["fait"]},
  {t:"f",q:"Nous (faire) ___ la cuisine ensemble.",a:["faisons"]},
  {t:"f",q:"Pepe (vouloir) ___ devenir médecin.",a:["veut"]},
  {t:"f",q:"Je (prendre) ___ un café noir sans sucre.",a:["prends"]},
  {t:"f",q:"Tu (prendre) ___ le métro ou le taxi pour aller au travail ?",a:["prends"]},
  {t:"f",q:"Les touristes (prendre) ___ beaucoup de photos.",a:["prennent"]}
 ]
},
{
 id:"b8", date:"01/10", name:"L'heure, la date & les rendez-vous", src:"Buổi 8",
 links:[["Buổi 8","https://www.canva.com/d/QZqIASx6izmOT0r"]],
 notes:[
  {k:1,h:"1 · Hỏi giờ",html:`<ul>
  <li>${F("Quelle heure est-il ?")} lịch sự, chuẩn</li>
  <li>${F("Il est quelle heure ?")} nói thường</li>
  <li>${F("Vous avez l'heure, s'il vous plaît ?")} hỏi người lạ</li>
  <li>${F("Tu as l'heure ?")} hỏi bạn bè</li></ul>
  <p>Trả lời luôn bắt đầu bằng <b>${F("Il est…")}</b>: ${F("Il est neuf heures.")}</p>
  <p class="tip">Giờ dùng <b>il</b> giả (giống il fait beau), không dùng c'est.</p>`},
  {k:1,h:"2 · heure là danh từ GIỐNG CÁI",html:`<div class="tbl"><table>
  <tr><td>1h</td><td>${F("une heure")}</td><td>không phải <s>un heure</s></td></tr>
  <tr><td>2h</td><td>${F("deux heures")}</td><td>số nhiều thêm -s</td></tr>
  <tr><td>21h</td><td>${F("vingt et une heures")}</td><td>un → une vì heure giống cái</td></tr>
  <tr><td>0h / 12h</td><td>${F("minuit")} / ${F("midi")}</td><td>không thêm heures</td></tr></table></div>
  <p class="tip">Nối âm với heures: ${F("deux heures")} /dø.zœʁ/, ${F("trois heures")} /tʁwa.zœʁ/, ${F("six heures")} /si.zœʁ/, ${F("neuf heures")} /nœ.vœʁ/ (f → v).</p>`},
  {k:1,h:"3 · Cách nói thường (đồng hồ 12h)",html:`<p>Từ phút 1 đến 30: <b>giờ + (et) phút</b>. Từ phút 31: <b>giờ SAU + moins + số phút còn thiếu</b>.</p>
  <div class="tbl"><table>
  <tr><th>Giờ</th><th>Cách nói</th><th>Ghi chú</th></tr>
  <tr><td>9h05</td><td>${F("neuf heures cinq")}</td><td>không cần et</td></tr>
  <tr><td>9h15</td><td>${F("neuf heures et quart")}</td><td>quart = 1/4, có <b>et</b></td></tr>
  <tr><td>9h20</td><td>${F("neuf heures vingt")}</td><td></td></tr>
  <tr><td>9h30</td><td>${F("neuf heures et demie")}</td><td>demie = 1/2, có <b>et</b></td></tr>
  <tr><td>9h40</td><td>${F("dix heures moins vingt")}</td><td>kém 20 → giờ sau</td></tr>
  <tr><td>9h45</td><td>${F("dix heures moins le quart")}</td><td>có <b>le</b>: moins <b>le</b> quart</td></tr>
  <tr><td>9h55</td><td>${F("dix heures moins cinq")}</td><td></td></tr>
  <tr><td>12h30</td><td>${F("midi et demi")} / ${F("midi et demie")}</td><td>sách ngữ pháp: <b>demi</b> (hợp với midi giống đực); người Pháp cũng hay viết <b>demie</b> (ngầm hiểu “heure”), cả hai đều được chấp nhận</td></tr>
  <tr><td>0h15</td><td>${F("minuit et quart")}</td><td></td></tr></table></div>
  <p class="tip">Phân biệt buổi: ${F("du matin")} (sáng) · ${F("de l'après-midi")} (chiều) · ${F("du soir")} (tối). 8h tối = ${F("huit heures du soir")}. Chú ý: ${F("une heure et demie")} (heure cái → demi<b>e</b>) ≠ ${F("midi et demi")}.</p>`},
  {k:1,h:"4 · Cách nói chính thức (đồng hồ 24h)",html:`<p>Dùng cho tàu xe, lịch làm việc, giờ mở cửa, đài TV. Luôn <b>giờ + số phút</b>, không dùng quart, demie, moins:</p>
  <div class="tbl"><table>
  <tr><td>16h20</td><td>${F("seize heures vingt")}</td></tr>
  <tr><td>18h45</td><td>${F("dix-huit heures quarante-cinq")}</td><td>= ${F("sept heures moins le quart du soir")}</td></tr>
  <tr><td>13h30</td><td>${F("treize heures trente")}</td><td>= ${F("une heure et demie de l'après-midi")}</td></tr>
  <tr><td>23h50</td><td>${F("vingt-trois heures cinquante")}</td><td>= ${F("minuit moins dix")}</td></tr></table></div>
  <p class="tip">Viết tắt: 16h20 hoặc 16 h 20 (không dùng dấu hai chấm như tiếng Anh).</p>`},
  {k:1,h:"5 · Giới từ đi với giờ",html:`<div class="tbl"><table>
  <tr><td>${F("à")}</td><td>lúc</td><td>${F("Le cours commence à dix heures.")}</td></tr>
  <tr><td>${F("À quelle heure ?")}</td><td>lúc mấy giờ?</td><td>${F("Tu veux apprendre à quelle heure ?")}</td></tr>
  <tr><td>${F("vers")}</td><td>khoảng, tầm</td><td>${F("J'arrive vers huit heures.")}</td></tr>
  <tr><td>${F("de… à…")}</td><td>từ… đến…</td><td>${F("Je travaille de neuf heures à dix-huit heures.")}</td></tr>
  <tr><td>${F("jusqu'à")}</td><td>cho đến</td><td>${F("La boutique est ouverte jusqu'à vingt heures.")}</td></tr>
  <tr><td>${F("à partir de")}</td><td>kể từ</td><td>${F("Je suis libre à partir de dix-neuf heures.")}</td></tr>
  <tr><td>${F("avant / après")}</td><td>trước / sau</td><td>${F("avant midi")}, ${F("après le dîner")}</td></tr>
  <tr><td>${F("pendant")}</td><td>trong suốt</td><td>${F("pendant une heure")}</td></tr></table></div>
  <p class="tip">${F("à cette heure")} = vào giờ đó (câu của em: ${F("Je vais dormir à cette heure.")})</p><h4 class="sub-h">Trục thời gian: mỗi giới từ là một hình</h4><div class="tl" role="img" aria-label="Trục thời gian từ 6 giờ đến 21 giờ minh họa các giới từ à, vers, de à, à partir de, jusqu'à"><div class="tl-scale"><span style="left:0.0%">6h</span><span style="left:13.3%">8h</span><span style="left:26.7%">10h</span><span style="left:40.0%">12h</span><span style="left:53.3%">14h</span><span style="left:66.7%">16h</span><span style="left:80.0%">18h</span><span style="left:93.3%">20h</span></div><div class="tl-row"><div class="tl-lab"><b>à</b> dix heures<small>một thời điểm</small></div><div class="tl-track"><i class="tl-dot" style="left:26.7%"></i></div></div><div class="tl-row"><div class="tl-lab"><b>vers</b> huit heures<small>khoảng</small></div><div class="tl-track"><i class="tl-zone" style="left:6.300000000000001%;width:14%"></i></div></div><div class="tl-row"><div class="tl-lab"><b>de … à …</b> neuf … dix-huit<small>từ … đến …</small></div><div class="tl-track"><i class="tl-bar" style="left:20.0%;width:60.0%"></i></div></div><div class="tl-row"><div class="tl-lab"><b>à partir de</b> dix-neuf heures<small>vạch xuất phát, kéo dài tiếp</small></div><div class="tl-track"><i class="tl-bar tl-go" style="left:86.7%;width:13.3%"></i></div></div><div class="tl-row"><div class="tl-lab"><b>jusqu'à</b> vingt heures<small>vạch đích</small></div><div class="tl-track"><i class="tl-bar tl-until" style="left:0;width:93.3%"></i><i class="tl-flag" style="left:93.3%"></i></div></div></div><ul><li>${F("Le cours commence à dix heures.")}</li><li>${F("J'arrive vers huit heures.")}</li><li>${F("Je travaille de neuf heures à dix-huit heures.")}</li><li>${F("Je suis libre à partir de dix-neuf heures.")}</li><li>${F("La boutique est ouverte jusqu'à vingt heures.")}</li></ul><p class="tip"><b>à partir de</b>: <b>partir</b> = khởi hành, nên đây là <b>vạch xuất phát</b>, rồi kéo dài tiếp. <b>jusqu'à</b> là <b>vạch đích</b>.</p>`},
  {h:"6 · Đúng giờ, sớm, muộn",html:`<ul>
  <li>${F("être à l'heure")} đúng giờ</li>
  <li>${F("être en avance")} đến sớm · ${F("être en retard")} bị muộn</li>
  <li>${F("Il est tôt.")} còn sớm · ${F("Il est tard.")} muộn rồi</li>
  <li>${F("pile")} / ${F("précises")}: ${F("à huit heures pile")} = đúng 8 giờ</li>
  <li>${F("une demi-heure")} nửa tiếng · ${F("un quart d'heure")} 15 phút · ${F("une heure et demie")} 1 tiếng rưỡi</li>
  <li>${F("une minute")}, ${F("une seconde")}, ${F("un instant")}</li></ul>`},
  {k:1,h:"7 · Nói ngày tháng",html:`<p>Hỏi: ${F("On est le combien aujourd'hui ?")} · ${F("Quelle est la date aujourd'hui ?")} · ${F("On est quel jour ?")}</p>
  <p>Trả lời: <b>${F("On est le…")}</b> / <b>${F("Nous sommes le…")}</b> + thứ + số + tháng + năm</p>
  <ul><li>${F("Aujourd'hui, on est le premier octobre.")} ngày 1 dùng <b>premier</b></li>
  <li>${F("On est le deux octobre.")} các ngày khác dùng số đếm (không dùng deuxième)</li>
  <li>${F("Nous sommes jeudi, le premier octobre deux mille vingt-six.")}</li></ul>
  <p class="tip">Tháng: ${F("en octobre")} = ${F("au mois d'octobre")} (vào tháng 10). Năm: ${F("en deux mille vingt-six")}. Thứ, tháng không viết hoa. Không dùng mạo từ trước tên tháng: ${F("la dernière semaine d'octobre")}.</p>`},
  {k:1,h:"8 · le + thứ: thói quen hay lần này?",html:`<div class="tbl"><table>
  <tr><td>${F("le jeudi")}</td><td><b>mỗi</b> thứ Năm (lặp lại)</td><td>${F("On se retrouve le jeudi.")}</td></tr>
  <tr><td>${F("jeudi")}</td><td>thứ Năm <b>này</b> (một lần)</td><td>${F("On se retrouve jeudi.")}</td></tr>
  <tr><td>${F("ce jeudi")}</td><td>thứ Năm tuần này</td><td>${F("Ce jeudi, je ne peux pas enseigner.")}</td></tr>
  <tr><td>${F("jeudi prochain")}</td><td>thứ Năm tới</td><td></td></tr>
  <tr><td>${F("jeudi dernier")}</td><td>thứ Năm vừa rồi</td><td></td></tr>
  <tr><td>${F("tous les jeudis")}</td><td>tất cả các thứ Năm</td><td>= le jeudi</td></tr></table></div>`},
  {k:1,h:"9 · Mốc thời gian: trước, nay, sau",html:`<div class="tbl"><table>
  <tr><th>Quá khứ</th><th>Hiện tại</th><th>Tương lai</th></tr>
  <tr><td>${F("hier")}</td><td>${F("aujourd'hui")}</td><td>${F("demain")}</td></tr>
  <tr><td>${F("avant-hier")}</td><td></td><td>${F("après-demain")}</td></tr>
  <tr><td>${F("hier soir")}</td><td>${F("ce matin")}, ${F("cet après-midi")}, ${F("ce soir")}</td><td>${F("demain matin")}</td></tr>
  <tr><td>${F("la semaine dernière")}</td><td>${F("cette semaine")}</td><td>${F("la semaine prochaine")}</td></tr>
  <tr><td>${F("le mois dernier")}</td><td>${F("ce mois-ci")}</td><td>${F("le mois prochain")}</td></tr>
  <tr><td>${F("l'année dernière")}</td><td>${F("cette année")}</td><td>${F("l'année prochaine")}</td></tr></table></div>
  <p class="tip"><b>dernier</b> đứng SAU danh từ = vừa qua: ${F("la semaine dernière")} (tuần trước). Đứng TRƯỚC = cuối cùng: ${F("la dernière semaine")} (tuần cuối). ce / cet / cette theo giống: ${F("cet après-midi")} (après-midi bắt đầu bằng nguyên âm).</p>`},
  {h:"10 · Tần suất & khoảng thời gian",html:`<ul>
  <li>${F("tous les jours")} mỗi ngày · ${F("toutes les semaines")} mỗi tuần · ${F("tous les matins")} mỗi sáng</li>
  <li>${F("le matin")}, ${F("le soir")} = vào các buổi sáng / tối (thói quen): ${F("J'aime travailler le soir.")}</li>
  <li>${F("une fois par semaine")} một lần một tuần · ${F("deux fois par jour")}</li>
  <li>${F("dans deux heures")} hai tiếng nữa · ${F("il y a deux heures")} cách đây hai tiếng</li></ul>`},
  {h:"11 · pouvoir (có thể) & vouloir (muốn)",html:`<div class="tbl"><table>
  <tr><th></th><th>pouvoir</th><th>vouloir</th></tr>
  <tr><td>je</td><td>${F("peux")}</td><td>${F("veux")}</td></tr>
  <tr><td>tu</td><td>${F("peux")}</td><td>${F("veux")}</td></tr>
  <tr><td>il / on</td><td>${F("peut")}</td><td>${F("veut")}</td></tr>
  <tr><td>nous</td><td>${F("pouvons")}</td><td>${F("voulons")}</td></tr>
  <tr><td>vous</td><td>${F("pouvez")}</td><td>${F("voulez")}</td></tr>
  <tr><td>ils</td><td>${F("peuvent")}</td><td>${F("veulent")}</td></tr></table></div>
  <p>Theo sau là động từ nguyên thể: ${F("Je peux étudier à dix heures du soir.")} ${F("Je ne veux pas travailler.")}</p>
  <p class="tip">${F("Je voudrais")} = I'd like (lịch sự). Đảo ngữ với je: ${F("Puis-je rester chez moi ?")} (không nói <s>peux-je</s>).</p>`},
  {h:"12 · Rủ rê & hẹn giờ",html:`<ul>
  <li>Rủ: ${F("On peut se retrouver quand ?")} ${F("Dimanche à huit heures, ça te dit ?")} ${F("Tu es libre samedi ?")}</li>
  <li>Đổi lịch: ${F("On peut avoir le cours ce dimanche soir ?")}</li>
  <li>Đồng ý: ${F("D'accord.")} ${F("Ça me va.")} ${F("Avec plaisir !")}</li>
  <li>Từ chối: ${F("Je suis désolée, je ne peux pas.")} ${F("Zut !")} (tiếc ghê / chết thật)</li>
  <li>Đề xuất giờ khác: ${F("Alors, tu veux apprendre à quelle heure ?")}</li>
  <li>Kết thúc: ${F("Bonne soirée, Madame !")}</li></ul>`},
  {h:"13 · La journée de Loan",html:`<p>${F("Je me réveille à six heures et demie.")} ${F("Je me brosse les dents.")} ${F("À sept heures et demie, je vais au travail.")} ${F("À huit heures, j'arrive au bureau et je commence à travailler.")} ${F("Je participe aux réunions avec mes collègues.")} ${F("À dix-neuf heures, je suis à la maison.")} ${F("Je dîne.")} ${F("Je me lave.")} ${F("À vingt et une heures, j'apprends le français.")} ${F("À vingt-trois heures, je continue mon travail chez moi.")} ${F("J'aime travailler le soir.")}</p>
  <p class="tip">aux = à + les. commencer <b>à</b> + V. Động từ phản thân giữ đại từ: je <b>me</b> lave, tu <b>te</b> laves.</p>`},
  {k:1,h:"Năm, tháng, thế kỷ",html:`<p>Một năm = <b>un an</b> = <b>douze mois</b> (m) = 52 semaines = 365 jours. Một thế kỷ = <b>un siècle</b> = cent ans. <b>un trimestre</b> = ba tháng; <b>un semestre</b> = sáu tháng.</p><div class="tbl"><table><tr><td>${F("janvier")}</td><td>${F("février")}</td><td>${F("mars")}</td><td>${F("avril")}</td></tr><tr><td>${F("mai")}</td><td>${F("juin")}</td><td>${F("juillet")}</td><td>${F("août")}</td></tr><tr><td>${F("septembre")}</td><td>${F("octobre")}</td><td>${F("novembre")}</td><td>${F("décembre")}</td></tr></table></div><p class="tip">Tháng không viết hoa. Nói "vào tháng …": <b>en</b> + tháng: ${F("en mars")}, ${F("en décembre")}.</p><p>${F("Tu es né en quelle année ?")} → ${F("Je suis né en 1992.")}</p>`},
  {k:1,h:"Mùa",html:`<div class="tbl"><table><tr><th>Mùa</th><th>Thời gian</th><th>On est …</th><th>C'est …</th></tr><tr><td>${F("le printemps")}</td><td>21/3 – 20/6</td><td>${F("au printemps")}</td><td>${F("c'est le printemps")}</td></tr><tr><td>${F("l'été (m)")}</td><td>21/6 – 20/9</td><td>${F("en été")}</td><td>${F("c'est l'été")}</td></tr><tr><td>${F("l'automne (m)")}</td><td>21/9 – 20/12</td><td>${F("en automne")}</td><td>${F("c'est l'automne")}</td></tr><tr><td>${F("l'hiver (m)")}</td><td>21/12 – 20/3</td><td>${F("en hiver")}</td><td>${F("c'est l'hiver")}</td></tr></table></div><p class="tip">Mùa dùng <b>au</b> (printemps) hoặc <b>en</b> (các mùa còn lại). Hỏi: ${F("On est en quoi ?")} Trả lời: ${F("On est au printemps.")} ${F("Je suis né en hiver, en décembre.")}</p>`},
  {k:1,h:"Ngày trong tuần, hôm qua, hôm nay, ngày mai",html:`<p>Thứ trong tuần không viết hoa: ${F("lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche")}.</p><p>${F("On est quel jour aujourd'hui ?")} → ${F("Aujourd'hui on est mercredi 10 juin.")} hoặc ${F("Aujourd'hui on est le 10 juin.")}</p><div class="tbl"><table><tr><th>avant-hier</th><th>hier</th><th>aujourd'hui</th><th>demain</th><th>après-demain</th></tr><tr><td>lundi 8</td><td>mardi 9</td><td>mercredi 10</td><td>jeudi 11</td><td>vendredi 12</td></tr></table></div><p>${F("lundi dernier")} / ${F("lundi de la semaine dernière")} (thứ Hai tuần trước) · ${F("lundi prochain")} / ${F("lundi de la semaine prochaine")} (thứ Hai tuần sau)</p><p class="tip">Thứ + <b>le</b> = lặp lại (<i>le jeudi</i> = mỗi thứ Năm). Thứ + không le = một lần (<i>jeudi</i> = thứ Năm này).</p>`},
  {k:1,h:"Sinh nhật và ngày trong tháng",html:`<p>${F("Tu es né quel jour ?")} · ${F("C'est quand ton anniversaire ?")} · ${F("Quelle est la date de ton anniversaire ?")}</p><p>${F("Je suis né le 22 mars.")} · ${F("C'est quel jour, le 22 ?")} → ${F("C'est un mercredi.")}</p><p class="tip">Ngày 1 dùng <b>premier</b> (<i>le premier octobre</i>). Từ ngày 2 dùng số đếm (<i>le deux octobre</i>).</p>`},
  {k:1,h:"Ngày, buổi và khoảng thời gian",html:`<p>Một <b>jour</b> = 24 giờ = <b>la nuit</b> + <b>la journée</b>. Một <b>journée</b> = <b>la matinée</b> (8h–12h) + <b>l'après-midi</b> (13h–18h) + <b>la soirée</b> (19h–23h).</p><p>Tần suất định kỳ: ${F("quotidien")} (hằng ngày, ~ tous les jours) · ${F("hebdomadaire")} (hằng tuần) · ${F("mensuel")} (hằng tháng) · ${F("trimestriel / semestriel")} (3 tháng / 6 tháng).</p>`},
  {k:1,h:"Cặp dễ nhầm: an / année, jour / journée, matin / matinée, soir / soirée",html:`<div class="tbl"><table><tr><th>Cặp</th><th>Dùng (giống đực) — một thời điểm / số đếm</th><th>Dùng (giống cái) — khoảng thời gian</th></tr><tr><td><b>an</b> / <b>année</b></td><td>${F("Vous avez quel âge ? J'ai 25 ans.")}</td><td>${F("Tu t'es marié en quelle année ? En 1989.")}</td></tr><tr><td><b>jour</b> / <b>journée</b></td><td>${F("J'ai passé trois jours à Nice.")}</td><td>${F("J'ai passé une très belle journée.")}</td></tr><tr><td><b>matin</b> / <b>matinée</b></td><td>${F("Je passe te voir demain matin, à 10 heures.")}</td><td>${F("Je passe te voir dans la matinée.")}</td></tr><tr><td><b>soir</b> / <b>soirée</b></td><td>${F("Dimanche soir, je ne sors pas.")}</td><td>${F("Je passe la soirée chez moi.")}</td></tr></table></div><p class="tip">Mẹo: có <i>toute la, pendant, cả</i> thì dùng dạng <b>-ée</b> (khoảng thời gian). Chỉ một mốc thì dùng dạng ngắn.</p>`}
 ],
 fixes:[
  ["On peux avoir le cours ?","On peut avoir le cours ?","on chia giống il → peut"],
  ["un heure","une heure","heure là danh từ giống cái"],
  ["la derniere semaine de l'octobre","la dernière semaine d'octobre","không dùng mạo từ trước tên tháng"],
  ["Je suis desolee / Ca te dit / Bonne soiree","Je suis désolée / Ça te dit ? / Bonne soirée","nhớ dấu: é, ç"],
  ["Je dine. Je me reveille.","Je dîne. Je me réveille.","dîner có dấu mũ, réveiller có é"],
  ["21h: Je me reveille pour apprendre le francais.","À 21 heures, j'apprends le français.","21h là buổi tối: không phải \"thức dậy\"; nhớ ç trong français"],
  ["je commence a travailler","je commence à travailler","giới từ à có dấu huyền (a = động từ avoir)"],
  ["cinquante deux · trois cent soixante cinq","cinquante-deux · trois cent soixante-cinq","số ghép dưới 100 có gạch nối"],
  ["deux heures et quart (1h45 = deux heures moins quart)","deux heures moins le quart","moins LE quart, nhưng et quart (không có le)"]
 ],
 ex:[
  {t:"f",q:"Cách nói thường: <b>9h05</b>",a:["neuf heures cinq"]},
  {t:"f",q:"Cách nói thường: <b>9h00</b>",a:["neuf heures"]},
  {t:"f",q:"Cách nói thường: <b>10h30</b>",a:["dix heures et demie","dix heures trente"]},
  {t:"f",q:"Cách nói thường: <b>11h50</b>",a:["midi moins dix","onze heures cinquante"]},
  {t:"f",q:"Cách nói thường: <b>1h15</b>",a:["une heure et quart","une heure quinze"]},
  {t:"f",q:"Cách nói thường: <b>2h45</b>",a:["trois heures moins le quart","deux heures quarante-cinq"]},
  {t:"f",q:"Cách nói thường: <b>7h40</b>",a:["huit heures moins vingt","sept heures quarante"]},
  {t:"f",q:"Cách nói thường: <b>12h30</b> (buổi trưa)",a:["midi et demi","midi et demie","midi trente","douze heures trente"]},
  {t:"f",q:"Cách nói thường: <b>0h15</b>",a:["minuit et quart","minuit quinze","zéro heure quinze"]},
  {t:"f",q:"Cách nói chính thức (24h): <b>16h20</b>",a:["seize heures vingt"]},
  {t:"f",q:"Cách nói chính thức (24h): <b>18h45</b>",a:["dix-huit heures quarante-cinq"]},
  {t:"f",q:"Cách nói chính thức (24h): <b>21h00</b>",a:["vingt et une heures"]},
  {t:"f",q:"Cách nói thường kèm buổi: <b>20h</b>",a:["huit heures du soir"]},
  {t:"f",q:"Cách nói thường kèm buổi: <b>15h</b>",a:["trois heures de l'après-midi"]},
  {t:"m",q:"Đâu là cách nói đúng của <b>1h30</b>?",o:["une heure et demi","une heure et demie","un heure et demie"],a:1,w:"heure giống cái → une, demie."},
  {t:"m",q:"Đâu là cách nói đúng của <b>9h45</b>?",o:["neuf heures moins le quart","dix heures moins quart","dix heures moins le quart"],a:2,w:"Giờ sau + moins le quart."},
  {t:"m",q:"Hỏi giờ một người lạ trên phố:",o:["C'est quelle heure ?","Vous avez l'heure, s'il vous plaît ?","Tu as quelle heure ?"],a:1},
  {t:"f",q:"Giới từ: Le cours commence ___ dix heures.",a:["à"]},
  {t:"f",q:"Giới từ: Je travaille ___ neuf heures ___ dix-huit heures. (gõ: de à)",a:["de à","de ... à","de…à","de, à"]},
  {t:"f",q:"Giới từ (khoảng): J'arrive ___ huit heures.",a:["vers"]},
  {t:"f",q:"Giới từ: La boutique est ouverte ___ vingt heures. (cho đến)",a:["jusqu'à"]},
  {t:"m",q:"\"Chúng ta học vào <b>mỗi</b> thứ Năm.\"",o:["On a cours jeudi.","On a cours le jeudi.","On a cours au jeudi."],a:1,w:"Thêm le trước thứ = lặp lại hằng tuần."},
  {t:"m",q:"\"la semaine dernière\" nghĩa là gì?",o:["tuần cuối cùng của tháng","tuần trước","tuần sau"],a:1},
  {t:"f",q:"Ngày tháng: Hôm nay là ngày 1 tháng 10. → Aujourd'hui, on est ___",a:["le premier octobre"]},
  {t:"f",q:"Ngày tháng: ngày 2 tháng 11 → on est ___",a:["le deux novembre"]},
  {t:"f",q:"Hỏi: \"Hôm nay ngày bao nhiêu?\" (dùng combien)",a:["on est le combien aujourd'hui","on est le combien"]},
  {t:"f",q:"Dịch: chiều nay",a:["cet après-midi"]},
  {t:"f",q:"Dịch: tháng sau",a:["le mois prochain"]},
  {t:"f",q:"Dịch: năm ngoái",a:["l'année dernière"]},
  {t:"f",q:"Dịch: ngày kia",a:["après-demain"]},
  {t:"f",q:"Dịch: đúng giờ (être ___)",a:["à l'heure"]},
  {t:"f",q:"Dịch: nửa tiếng",a:["une demi-heure"]},
  {t:"f",q:"Viết bằng chữ: <b>52</b>",a:["cinquante-deux"]},
  {t:"f",q:"Viết bằng chữ: <b>365</b>",a:["trois cent soixante-cinq"]},
  {t:"f",q:"Chia <i>pouvoir</i>: On ___ se retrouver jeudi ?",a:["peut"]},
  {t:"f",q:"Chia <i>pouvoir</i>: Nous ne ___ pas travailler dimanche.",a:["pouvons"]},
  {t:"f",q:"Chia <i>pouvoir</i>: Ils ___ étudier le soir.",a:["peuvent"]},
  {t:"f",q:"Chia <i>vouloir</i>: Tu ___ apprendre à quelle heure ?",a:["veux"]},
  {t:"f",q:"Chia <i>vouloir</i>: Elles ___ sortir ce soir.",a:["veulent"]},
  {t:"m",q:"Bạn rủ: \"8h, ça te dit ?\" Câu nào là <b>đồng ý</b>?",o:["Zut !","Ça me va.","Je ne peux pas."],a:1},
  {t:"f",q:"Dịch: \"Chúng ta gặp nhau lúc mấy giờ?\"",a:["on se retrouve à quelle heure","à quelle heure on se retrouve","à quelle heure est-ce qu'on se retrouve"]},
  {t:"f",q:"Chia động từ phản thân: Le matin, je ___ (se réveiller) à 6h30.",a:["me réveille"]}
 ]
},
{
 id:"b7", date:"19/09", name:"Futur proche, adjectifs, ce/cet/cette", src:"Buổi 7 + BTVN sau buổi 7",
 links:[["Buổi 7","https://www.canva.com/d/ZrfmQWCIRmuddgw"],["BTVN sau buổi 7","https://www.canva.com/d/A8NV7g6h-VfnW1J"]],
 notes:[
  {k:1,h:"Tương lai gần: aller + V nguyên thể",html:`<p>aller: ${F("vais, vas, va, allons, allez, vont")}</p>
  <p>${F("Je vais finir les devoirs ce soir.")} ${F("Les devoirs vont être difficiles.")}</p>
  <p>Hỏi: ${F("Qu'est-ce qu'on va manger ce soir ?")} = ${F("On va manger quoi ce soir ?")} = ${F("Que va-t-il étudier ?")}</p>`},
  {k:1,h:"Quá khứ gần: venir de + V nguyên thể (vừa mới)",html:`<p>venir: ${F("viens, viens, vient, venons, venez, viennent")}</p>
  <p>${F("Je viens de finir les devoirs.")} ${F("Ils viennent de regarder une série.")} Trước nguyên âm: ${F("Il vient d'aller au cours.")}</p>`},
  {h:"Tính từ: hợp giống & số",html:`<ul>
  <li>Giống cái +e, số nhiều +s: ${F("grand → grande → grands → grandes")}</li>
  <li>${F("blanc → blanche")}, ${F("long → longue")}, ${F("léger → légère")}, ${F("cher → chère")}</li>
  <li>${F("beau → belle, beaux, belles")}. Trước danh từ đực bắt đầu bằng nguyên âm: ${F("un bel homme")}, ${F("un bel ami")}</li>
  <li>Tương tự: ${F("nouveau → nouvelle")} (${F("un nouvel ami")}), ${F("vieux → vieille")}</li></ul>`},
  {h:"Tính từ: vị trí",html:`<p><b>95% đứng SAU</b> danh từ: ${F("un chien intelligent")}, ${F("une robe noire")}</p>
  <p><b>Đứng TRƯỚC</b> (nhớ "BAGS"):</p><ul>
  <li><b>B</b>eauty: beau, joli</li><li><b>A</b>ge: jeune, vieux, nouveau</li>
  <li><b>G</b>oodness: bon, mauvais</li><li><b>S</b>ize: petit, grand</li></ul>
  <p class="tip">${F("un grand chien")} · ${F("une petite enceinte")} · ${F("une bonne idée")}. Tính từ đứng trước danh từ thì nối âm: ${F("un petit ami")}.</p>`},
  {k:1,h:"Tính từ chỉ định (this / these)",html:`<div class="tbl"><table>
  <tr><td>${F("ce")}</td><td>N đực số ít</td><td>${F("ce sac à dos")}</td></tr>
  <tr><td>${F("cet")}</td><td>N đực số ít, bắt đầu bằng nguyên âm hoặc h câm</td><td>${F("cet étui")}, ${F("cet ami")}</td></tr>
  <tr><td>${F("cette")}</td><td>N cái số ít</td><td>${F("cette coque")}</td></tr>
  <tr><td>${F("ces")}</td><td>số nhiều</td><td>${F("ces robes")}</td></tr></table></div>
  <p class="tip">Không có "cettes". <b>ces</b> (này) ≠ <b>ses</b> (của anh ấy/cô ấy), đọc giống nhau. Thêm -ci / -là: ${F("cet ami-là")}</p>`},
  {h:"dormir · sortir · partir (đuôi -ir, nhóm 3)",html:`<p>Số ít bỏ 3 chữ cuối, thêm -s, -s, -t. Số nhiều giữ phụ âm.</p><div class="tbl"><table>
  <tr><th></th><th>dormir (ngủ)</th><th>sortir (ra ngoài)</th><th>partir (rời đi)</th></tr>
  <tr><td>je</td><td>dors</td><td>sors</td><td>pars</td></tr>
  <tr><td>tu</td><td>dors</td><td>sors</td><td>pars</td></tr>
  <tr><td>il</td><td>dort</td><td>sort</td><td>part</td></tr>
  <tr><td>nous</td><td>dormons</td><td>sortons</td><td>partons</td></tr>
  <tr><td>vous</td><td>dormez</td><td>sortez</td><td>partez</td></tr>
  <tr><td>ils</td><td>dorment</td><td>sortent</td><td>partent</td></tr></table></div>`},
  {h:"Quần áo",html:`<p>${F("une robe")} · ${F("une jupe")} · ${F("un pantalon")} · ${F("un jean")} · ${F("une chemise")} · ${F("une cravate")} · ${F("un pull")} · ${F("un costume")} · ${F("une veste en jean")} · ${F("un manteau")} · ${F("des bottes")} · ${F("un chapeau")} · ${F("une ceinture")} · ${F("des lunettes de soleil")} · ${F("un sac à main")} · ${F("des bijoux")}</p>
  <p class="tip">${F("en coton")}, ${F("en cuir")}, ${F("en lin")} (chất liệu). ${F("d'occasion")} = đồ cũ. ${F("Vous faites quelle taille ?")} ${F("Je fais du 38.")}</p>`},
  {h:"Đồ vật & công dụng",html:`<p>${F("Ça sert à quoi ?")} trả lời bằng ${F("Ça sert à téléphoner / à se repérer / à numériser des documents.")}</p>
  <p>${F("une montre connectée")} · ${F("une enceinte")} · ${F("des écouteurs sans fil")} · ${F("une tablette")} · ${F("une batterie externe")} · ${F("une coque de téléphone")} · ${F("un étui")} · ${F("un cadre photo")} · ${F("un cadeau")} · ${F("une cagnotte")}</p>
  <p class="tip">Hình dạng: ${F("carré, rond, rectangulaire")}. ${F("lourd")} ≠ ${F("léger")}.</p>`}
 ],
 fixes:[
  ["des robes longes","des robes longues","long → longue → longues"],
  ["des robe, de costumes, de cravates","des robes, des costumes, des cravates","số nhiều: mạo từ des và danh từ thêm -s"],
  ["de luienettes de soleils","des lunettes de soleil","soleil không thêm s"],
  ["ça cert à téléphoner","ça sert à téléphoner","servir → ça sert"],
  ["elle dort le jour et travailler la nuit","elle dort le jour et travaille la nuit","động từ thứ hai cũng phải chia"],
  ["vous sortir le week-end ?","vous sortez le week-end ?","sortir → vous sortez"],
  ["ton ami pars travailler","ton ami part travailler","ngôi il → part (đuôi -t)"],
  ["je pars 6 h et demie","je pars à 6 h et demie","\"lúc mấy giờ\" cần à"],
  ["vous partiez en voiture ?","vous partez en voiture ?","partiez là thì quá khứ (imparfait)"],
  ["venis, venissons","viens, venons","venir là nhóm 3, không chia như finir"],
  ["acheter cettes robes","acheter ces robes","\"cettes\" không tồn tại"],
  ["Valentin aime le tis et les objects","Valentin aime le tennis et les objets","objet không có c"]
 ],
 ex:[
  {t:"f",q:"___ étui est bleu.",a:["cet"]},
  {t:"f",q:"___ coque de téléphone est rectangulaire.",a:["cette"]},
  {t:"f",q:"___ sac à dos est lourd.",a:["ce"]},
  {t:"f",q:"___ objets connectés sont chers.",a:["ces"]},
  {t:"f",q:"___ homme est élégant.",a:["cet"]},
  {t:"f",q:"Hợp giống số: des robes (long) → des robes ___",a:["longues"]},
  {t:"f",q:"une veste (blanc) → une veste ___",a:["blanche"]},
  {t:"f",q:"un ___ ami (beau)",a:["bel"]},
  {t:"f",q:"des chaussures (gris) → des chaussures ___",a:["grises"]},
  {t:"f",q:"une robe (léger) → une robe ___",a:["légère"]},
  {t:"m",q:"Chọn vị trí đúng:",o:["une enceinte petite","une petite enceinte"],a:1,w:"petit thuộc nhóm Size nên đứng trước."},
  {t:"m",q:"Chọn vị trí đúng:",o:["un intelligent chien","un chien intelligent"],a:1},
  {t:"f",q:"Tương lai gần: Demain, Marine ___ offrir un pull à son mari.",a:["va"]},
  {t:"f",q:"Tương lai gần: En été, vous ___ porter des robes légères.",a:["allez"]},
  {t:"f",q:"Quá khứ gần: Nous ___ faire un jogging. (vừa mới)",a:["venons de"]},
  {t:"f",q:"Quá khứ gần: Il ___ aller au cours de dessin.",a:["vient d'"]},
  {t:"f",q:"Tu ___ (dormir) beaucoup le week-end.",a:["dors"]},
  {t:"f",q:"Vous ___ (sortir) le week-end ?",a:["sortez"]},
  {t:"f",q:"Ils ___ (partir) en vacances.",a:["partent"]},
  {t:"m",q:"\"Une batterie externe, ça sert à…\"",o:["recharger le téléphone","se repérer avec GPS","numériser des documents"],a:0}
 ]
},
{
 id:"t6", date:"10/09", name:"La ville & l'impératif", src:"Tuần 6 + BTVN sau buổi 6",
 links:[["Tuần 6","https://www.canva.com/d/wWfIFwXHHFqApMq"],["BTVN sau buổi 6","https://www.canva.com/d/fWY-qbOr3ZyMrLt"]],
 notes:[
  {k:1,h:"Động từ nhóm 2 (-ir, có -iss-)",html:`<p>finir: ${F("finis, finis, finit, finissons, finissez, finissent")}</p>
  <p>Cùng nhóm: ${F("choisir")}, ${F("grandir")}, ${F("réussir")}, ${F("réfléchir")}, ${F("réunir")}</p>
  <p class="tip">Mẹo: số nhiều chèn thêm <b>-iss-</b>. ${F("Je grandis à Hanoï.")} ${F("Nous choisissons.")}</p>`},
  {h:"prendre & descendre",html:`<p>prendre: ${F("prends, prends, prend, prenons, prenez, prennent")}</p>
  <p>descendre: ${F("descends, descends, descend, descendons, descendez, descendent")}</p>
  <p class="tip">apprendre, comprendre chia giống prendre. ${F("prendre le bus")} = đi xe buýt.</p>`},
  {k:1,h:"Câu mệnh lệnh (Impératif)",html:`<p>Bỏ chủ ngữ, chỉ có 3 ngôi tu / nous / vous.</p>
  <ul><li>${F("Vous mangez ce pain.")} → ${F("Mangez ce pain !")}</li>
  <li>${F("Nous prenons le bus.")} → ${F("Prenons le bus !")}</li>
  <li>Động từ -er (và aller) ở ngôi tu <b>bỏ -s</b>: ${F("Mange !")} ${F("Regarde le plan !")} ${F("Va à l'école !")}</li>
  <li>Động từ khác giữ nguyên -s: ${F("Finis tes exercices !")} ${F("Prends le métro !")}</li>
  <li>être: ${F("Sois calme ! Soyons… Soyez calme !")} · avoir: ${F("aie, ayons, ayez")}</li></ul>`},
  {h:"Chỉ đường",html:`<ul>
  <li>${F("Continuez tout droit jusqu'au carrefour.")} đi thẳng đến ngã tư</li>
  <li>${F("Tournez à gauche / à droite.")}</li>
  <li>${F("Prenez la deuxième rue à gauche.")}</li>
  <li>${F("Traversez le pont.")}</li>
  <li>${F("C'est là, à votre droite.")}</li></ul>
  <p class="tip">${F("une mairie")}, ${F("un pont")}, ${F("un bâtiment")}, ${F("une avenue")}, ${F("un boulevard")}. ${F("une bibliothèque")} = thư viện ≠ ${F("une librairie")} = hiệu sách</p>`},
  {h:"Phương tiện",html:`<p>Ngồi <b>trong</b> xe: <b>en</b> ${F("en bus, en métro, en voiture, en scooter, en tram")}</p>
  <p>Ngồi/đứng <b>trên</b>, đi bộ: <b>à</b> ${F("à pied, à vélo, à trottinette")}</p>
  <p class="tip">${F("le covoiturage")} = đi chung xe. ${F("les heures de pointe")} = giờ cao điểm.</p>`},
  {h:"Trạng từ tần suất (đứng SAU động từ)",html:`<p>${F("toujours")} › ${F("souvent")} › ${F("parfois")} › ${F("rarement")} › ${F("ne… jamais")}</p>
  <p>${F("Je vais souvent au travail en scooter.")}<br>${F("Je ne vais jamais au théâtre.")}</p>`},
  {h:"Từ nối (connecteurs)",html:`<p>${F("et")} · ${F("mais")} · ${F("parce que")} (${F("parce qu'")} trước nguyên âm) · ${F("pour")} + V/N · ${F("avec")} · ${F("sans")} · ${F("alors")} · ${F("donc")}</p>
  <p>${F("J'aime Lyon parce que c'est dynamique.")}</p>`},
  {h:"Nối âm (liaison)",html:`<ul><li><b>Bắt buộc</b>: mạo từ + N ${F("les amis")}, đại từ + V ${F("nous avons")}, tính từ + N ${F("un petit ami")}</li>
  <li><b>Tùy</b>: sau động từ, ví dụ ${F("je suis allé")}</li>
  <li><b>Cấm</b>: sau "et": ${F("et un")} không nối</li></ul>
  <p class="tip">Khi nối, s/x đọc thành /z/, d thành /t/, f thành /v/: ${F("neuf heures")}</p>`}
 ],
 fixes:[
  ["nous choisisssons","nous choisissons","chỉ 2 chữ s: -iss-"],
  ["son quatier · sa rue est calm","son quartier · sa rue est calme","quartier có r; calme có e"],
  ["tu souvent à la bibliothèque","tu vas souvent à la bibliothèque","cần động từ; trạng từ đứng sau động từ"],
  ["(mệnh lệnh) Regarder le plan !","Regarde / Regardez le plan !","mệnh lệnh không dùng nguyên thể"],
  ["(mệnh lệnh, tu) Vas à pied !","Va à pied !","aller ở ngôi tu bỏ -s"]
 ],
 ex:[
  {t:"f",q:"Nous ___ (choisir) le restaurant.",a:["choisissons"]},
  {t:"f",q:"Ils ___ (finir) à 18h.",a:["finissent"]},
  {t:"f",q:"Vous ___ (finir) des exercices.",a:["finissez"]},
  {t:"f",q:"Je ___ (grandir) à Hanoï.",a:["grandis"]},
  {t:"f",q:"Ils ___ (prendre) le métro.",a:["prennent"]},
  {t:"f",q:"Nous ___ (prendre) le bus aujourd'hui.",a:["prenons"]},
  {t:"f",q:"Mệnh lệnh (tu, regarder le plan): ___",a:["regarde le plan"]},
  {t:"f",q:"Mệnh lệnh (nous, prendre le bus): ___",a:["prenons le bus"]},
  {t:"f",q:"Mệnh lệnh (vous, être calme): ___",a:["soyez calme","soyez calmes"]},
  {t:"f",q:"Mệnh lệnh (tu, aller à pied à la gare): ___",a:["va à pied à la gare"]},
  {t:"f",q:"Mệnh lệnh (tu, faire attention dans la rue): ___",a:["fais attention dans la rue"]},
  {t:"f",q:"Je vais au travail ___ scooter.",a:["en"]},
  {t:"f",q:"Je vais à l'école ___ pied.",a:["à"]},
  {t:"f",q:"Sắp xếp: souvent / je / au travail / vais / en bus",a:["je vais souvent au travail en bus"]},
  {t:"f",q:"J'aime Hanoï ___ c'est dynamique.",a:["parce que"]},
  {t:"f",q:"Je prends le bus ___ aller au travail.",a:["pour"]},
  {t:"m",q:"\"une librairie\" là:",o:["thư viện","hiệu sách","tòa thị chính"],a:1},
  {t:"m",q:"\"Đi thẳng đến ngã tư rồi rẽ trái.\"",o:["Tournez tout droit jusqu'au carrefour et continuez à gauche.","Continuez tout droit jusqu'au carrefour et tournez à gauche.","Continuez à droite au carrefour."],a:1},
  {t:"m",q:"Chỗ nào KHÔNG được nối âm?",o:["les amis","nous avons","et un café"],a:2}
 ]
},
{
 id:"t5", date:"03/09", name:"Au marché & au restaurant", src:"Tuần 5 + BTVN sau buổi 4, 5",
 links:[["Tuần 5","https://www.canva.com/d/9opZ7_jiPaehmWq"],["BTVN sau buổi 4","https://www.canva.com/d/AU3_THoX2AX4cXw"],["BTVN sau buổi 5","https://www.canva.com/d/bJvtobhBf3jjMiN"]],
 notes:[
  {h:"aller & faire",html:`<p>aller: ${F("vais, vas, va, allons, allez, vont")}</p><p>faire: ${F("fais, fais, fait, faisons, faites, font")}</p>
  <p>${F("Je fais les courses.")} = đi chợ. ${F("Je vais au supermarché pour faire mes courses.")}</p>`},
  {k:1,h:"à hay chez?",html:`<p><b>à</b> + nơi chốn · <b>chez</b> + người</p><div class="tbl"><table>
  <tr><td>${F("à la boulangerie")}</td><td>${F("chez le boulanger")}</td></tr>
  <tr><td>${F("à la pharmacie")}</td><td>${F("chez le pharmacien")}</td></tr>
  <tr><td>${F("à la poissonnerie")}</td><td>${F("chez la poissonnière")}</td></tr>
  <tr><td>${F("à l'hôpital")}</td><td>${F("chez le médecin")}</td></tr>
  <tr><td>${F("à la maison")}</td><td>${F("chez moi")}, ${F("chez Pepe")}</td></tr></table></div>
  <p class="tip">à + le = <b>au</b> (${F("au marché")}) · à + les = <b>aux</b> (${F("aux caisses automatiques")})</p>`},
  {k:1,h:"Mạo từ bộ phận: một ít, không đếm được",html:`<ul><li>${F("du")} + N đực: ${F("du pain, du lait, du poulet")}</li>
  <li>${F("de la")} + N cái: ${F("de la viande, de la farine")}</li>
  <li>${F("de l'")} + nguyên âm: ${F("de l'eau")}</li>
  <li>${F("des")} + số nhiều: ${F("des pâtes")}</li></ul>
  <p class="tip">${F("Je mange du pain")} (ăn bánh mì nói chung) ≠ ${F("Je mange un pain")} (một ổ)</p>`},
  {k:1,h:"Khi nào chỉ dùng DE",html:`<ul><li>Sau từ chỉ số lượng: ${F("un kilo de pommes")}, ${F("un peu de café")}, ${F("beaucoup de")}</li>
  <li>Trong câu phủ định: ${F("Je mange du pain")} → ${F("Je ne mange pas de pain.")}</li></ul>`},
  {h:"Đi chợ",html:`<ul><li>${F("Vous désirez ?")} bạn cần gì?</li>
  <li>${F("Je voudrais un kilo de pommes.")}</li>
  <li>${F("Vous avez des pêches ?")}</li>
  <li>${F("Ça coûte combien ?")} / ${F("Quel est le prix d'un kilo de pommes ?")}</li>
  <li>${F("C'est tout ?")} hoặc ${F("Ce sera tout ?")}</li>
  <li>${F("Je paie par carte / en espèces.")}</li></ul>
  <p class="tip">${F("avoir faim")} = đói: ${F("J'ai faim.")}</p>`},
  {h:"Cửa hàng & người bán",html:`<div class="tbl"><table>
  <tr><td>${F("la boulangerie")}</td><td>${F("le boulanger")}</td><td>bánh mì</td></tr>
  <tr><td>${F("la boucherie")}</td><td>${F("le boucher")}</td><td>thịt</td></tr>
  <tr><td>${F("la poissonnerie")}</td><td>${F("le poissonnier")}</td><td>cá</td></tr>
  <tr><td>${F("la fromagerie")}</td><td>${F("le fromager")}</td><td>phô mai</td></tr>
  <tr><td>${F("l'épicerie")}</td><td>${F("l'épicier")}</td><td>tạp hóa</td></tr></table></div>`},
  {h:"Au restaurant",html:`<ul>
  <li>${F("Est-ce que je peux voir la carte ?")} (la carte = thực đơn; un menu = suất combo)</li>
  <li>${F("Je vais prendre le plat du jour.")} / ${F("Je voudrais…")}</li>
  <li>${F("J'hésite entre ces deux plats.")}</li>
  <li>${F("Qu'est-ce que vous me conseillez ?")}</li>
  <li>${F("Qu'est-ce qu'il y a dedans ?")} ${F("C'est de la viande ?")}</li>
  <li>${F("Où sont les toilettes ?")}</li>
  <li>${F("Est-ce que je peux payer par carte ?")} ${F("L'addition, s'il vous plaît.")}</li></ul>`},
  {h:"Cụm từ hay (Français authentique)",html:`<p>${F("Il me semble")} · ${F("je suppose que")} · ${F("pas du tout")} (hoàn toàn không) · ${F("du coup")} (thế nên) · ${F("en fait")} (thật ra) · ${F("plein de choses")} · ${F("quotidiennement")} = tous les jours</p>`}
 ],
 fixes:[
  ["formagerie","fromagerie","fro-ma-ge-rie (từ fromage)"],
  ["un kilo des pommes","un kilo de pommes","sau từ chỉ số lượng chỉ dùng de"],
  ["une salade, de tomato, de poivron","des tomates, des poivrons","tomato là tiếng Anh"],
  ["nghe \"six œufs\" thành \"ciseaux\"","six œufs = 6 quả trứng","nối âm: six‿œufs /si-zø/"],
  ["est-ce que je peux voir la cart ?","… la carte ?","carte có e"],
  ["je (vais) prend","je vais prendre / je prends","sau aller dùng nguyên thể"],
  ["c'est de la viende ?","c'est de la viande ?","viande"]
 ],
 ex:[
  {t:"f",q:"Je vais ___ boulangerie.",a:["à la"]},
  {t:"f",q:"J'achète le fromage ___ fromager.",a:["chez le"]},
  {t:"f",q:"Tu vas ___ marché pour acheter les produits frais ?",a:["au"]},
  {t:"f",q:"Pourquoi tu ne vas pas ___ caisses automatiques ?",a:["aux"]},
  {t:"f",q:"Je vais ___ épicerie demain.",a:["à l'"]},
  {t:"f",q:"Pour acheter le poisson, je vais ___ poissonnier.",a:["chez le"]},
  {t:"f",q:"Je mange ___ viande.",a:["de la"]},
  {t:"f",q:"Il y a ___ lait ?",a:["du"]},
  {t:"f",q:"Je voudrais ___ eau, s'il vous plaît.",a:["de l'"]},
  {t:"f",q:"Je ne mange pas ___ pain.",a:["de"]},
  {t:"f",q:"un kilo ___ pommes",a:["de"]},
  {t:"f",q:"J'aime manger ___ pâtes.",a:["des"]},
  {t:"f",q:"Nous ___ (faire) les courses le samedi.",a:["faisons"]},
  {t:"f",q:"Vous ___ (faire) quoi ce soir ?",a:["faites"]},
  {t:"f",q:"Ils ___ (aller) au marché.",a:["vont"]},
  {t:"m",q:"\"Cho tôi xem thực đơn được không?\"",o:["Est-ce que je peux voir le menu ?","Est-ce que je peux voir la carte ?","Je voudrais l'addition."],a:1,w:"la carte = thực đơn; un menu là suất combo."},
  {t:"m",q:"\"Bên trong có gì vậy?\"",o:["Qu'est-ce qu'il y a dedans ?","Qu'est-ce que vous conseillez ?","C'est tout ?"],a:0}
 ]
},
{
 id:"t4", date:"22/08", name:"La famille & les possessifs", src:"Tuần 4 + BTVN sau buổi 3",
 links:[["Tuần 4","https://www.canva.com/d/a7zFNFmlznsbMR2"],["BTVN sau buổi 3","https://www.canva.com/d/1uM3HbnH_kw25WT"]],
 notes:[
  {k:1,h:"Tính từ sở hữu",html:`<div class="tbl"><table>
  <tr><th></th><th>đực</th><th>cái</th><th>nhiều</th></tr>
  <tr><td>của tôi</td><td>${F("mon")}</td><td>${F("ma")}</td><td>${F("mes")}</td></tr>
  <tr><td>của bạn</td><td>${F("ton")}</td><td>${F("ta")}</td><td>${F("tes")}</td></tr>
  <tr><td>của anh/cô ấy</td><td>${F("son")}</td><td>${F("sa")}</td><td>${F("ses")}</td></tr>
  <tr><td>của chúng tôi</td><td colspan="2">${F("notre")}</td><td>${F("nos")}</td></tr>
  <tr><td>của các bạn</td><td colspan="2">${F("votre")}</td><td>${F("vos")}</td></tr>
  <tr><td>của họ</td><td colspan="2">${F("leur")}</td><td>${F("leurs")}</td></tr></table></div>
  <p class="tip">Chia theo <b>vật được sở hữu</b>, không theo người sở hữu: ${F("sa sœur")} = chị của anh ấy. Trước nguyên âm thì ma đổi thành mon: ${F("mon amie")}</p>`},
  {h:"Đại từ nhấn mạnh",html:`<p>${F("moi, toi, lui, elle, nous, vous, eux, elles")}</p>
  <p>${F("Moi, j'aime le sport. Toi, tu détestes le sport.")}<br>${F("chez moi")}, ${F("avec lui")}, ${F("pour eux")}</p>`},
  {k:1,h:"Phủ định: ne … pas + de",html:`<p>un / une / des → <b>de</b> trong câu phủ định:</p>
  <p>${F("J'ai des sœurs.")} → ${F("Je n'ai pas de sœurs.")}<br>${F("Je n'ai pas de frère.")} ${F("Je suis fille unique.")}</p>`},
  {h:"Gia đình",html:`<p>${F("le père")} · ${F("la mère")} · ${F("les parents")} · ${F("le frère")} · ${F("la sœur")} · ${F("le fils")} · ${F("la fille")} · ${F("l'oncle")} · ${F("la tante")} · ${F("le neveu")} · ${F("la nièce")} · ${F("les grands-parents")} · ${F("le mari")} · ${F("la femme")}</p>
  <p>Gọi thân mật: ${F("papa, maman, papi, mamie")}</p>
  <p class="tip">Tình trạng: ${F("célibataire")}, ${F("marié(e)")}, ${F("divorcé(e)")}, ${F("pacsé(e)")}. ${F("petit ami / petite amie")} = người yêu</p>`},
  {h:"habiter à / dans",html:`<p>${F("J'habite à Nice.")} à + thành phố<br>${F("J'habite dans un quartier sympa.")} dans + khu vực cụ thể</p>
  <p class="tip">${F("en allemand")} = bằng tiếng Đức. ${F("commencer à")} + V. ${F("le chat de Pepe")}: de chỉ sở hữu.</p>`},
  {h:"Gộp mạo từ",html:`<p>à + le = ${F("au")} · à + les = ${F("aux")} · de + le = ${F("du")} · de + les = ${F("des")}</p><p class="tip">à la, à l', de la, de l' giữ nguyên.</p>`}
 ],
 fixes:[
  ["j'ai ne pas un frère","je n'ai pas de frère","ne đứng trước động từ, pas đứng sau; un đổi thành de"],
  ["Tu achétes quoi à le supermarché ?","Tu achètes quoi au supermarché ?","è (achète); à + le = au"],
  ["Pourquoi est-ce que tu étudies france ?","Pourquoi est-ce que tu étudies le français ?","tên ngôn ngữ: le français"],
  ["Tu parles très bien francais?","Tu parles très bien français !","ç; đây là câu cảm thán"],
  ["Combien est-ce que tu paies pour le livre ?","… pour ce livre ?","\"cuốn sách này\" dùng ce"],
  ["(bố mẹ hỏi con) Vous vous mariez quand ?","Tu te maries quand ?","nói với con dùng tu"]
 ],
 ex:[
  {t:"f",q:"(je) ___ mère",a:["ma"]},
  {t:"f",q:"(je) ___ amie",a:["mon"]},
  {t:"f",q:"(il) ___ sœur",a:["sa"]},
  {t:"f",q:"(elle) ___ frère",a:["son"]},
  {t:"f",q:"(nous) ___ parents",a:["nos"]},
  {t:"f",q:"(ils) ___ ami",a:["leur"]},
  {t:"f",q:"(ils) ___ amis",a:["leurs"]},
  {t:"f",q:"(vous) ___ nom ?",a:["votre"]},
  {t:"f",q:"___, j'aime le sport. (tôi)",a:["moi"]},
  {t:"f",q:"Je dîne avec Paul et Marc → Je dîne avec ___.",a:["eux"]},
  {t:"f",q:"Phủ định: J'ai des sœurs. → ___",a:["je n'ai pas de sœurs"]},
  {t:"f",q:"Phủ định: J'ai un chat. → ___",a:["je n'ai pas de chat"]},
  {t:"f",q:"J'habite ___ Hanoï.",a:["à"]},
  {t:"f",q:"J'habite ___ un quartier calme.",a:["dans"]},
  {t:"m",q:"\"sa sœur\" có thể nghĩa là:",o:["chỉ: chị của cô ấy","chỉ: chị của anh ấy","cả hai"],a:2,w:"son/sa/ses hợp theo vật được sở hữu (sœur là giống cái)."}
 ]
},
{
 id:"b3", date:"20/08", name:"Poser des questions", src:"Buổi 3",
 links:[["Buổi 3","https://www.canva.com/d/DUi4Ao1gLgmhdbc"]],
 notes:[
  {k:1,h:"Câu hỏi đóng (Oui / Non): 3 cách",html:`<ol><li>Giữ nguyên câu, lên giọng: ${F("Tu es vietnamienne ?")}</li>
  <li>Thêm est-ce que: ${F("Est-ce que tu es vietnamienne ?")}</li>
  <li>Đảo ngữ, có gạch nối: ${F("Es-tu vietnamienne ?")} ${F("Aimez-vous le croissant ?")}</li></ol>`},
  {k:1,h:"Câu hỏi mở: 3 cách",html:`<ol><li>${F("Tu habites où ?")}</li><li>${F("Où est-ce que tu habites ?")}</li><li>${F("Où habites-tu ?")}</li></ol>
  <p class="tip">${F("Tu t'appelles comment ?")} = ${F("Comment est-ce que tu t'appelles ?")} = ${F("Comment t'appelles-tu ?")}</p>`},
  {h:"Từ để hỏi",html:`<p>${F("qui")} ai · ${F("quand")} khi nào · ${F("où")} ở đâu · ${F("pourquoi")} tại sao · ${F("comment")} thế nào · ${F("combien")} bao nhiêu · ${F("quel")} cái nào</p>
  <p><b>"What"</b>: đứng đầu câu dùng <b>Que</b>, đứng sau động từ hoặc đứng một mình dùng <b>quoi</b>:<br>${F("Tu achètes quoi ?")} = ${F("Qu'est-ce que tu achètes ?")} = ${F("Qu'achètes-tu ?")}</p>`},
  {h:"quel / quelle / quels / quelles",html:`<p>Hợp theo danh từ đi sau:</p><p>${F("Quel âge as-tu ?")} · ${F("Quelle est ton adresse ?")} · ${F("Quels sports tu aimes ?")} · ${F("Tu parles quelles langues ?")}</p>`},
  {k:1,h:"Giới từ + nơi chốn",html:`<div class="tbl"><table>
  <tr><td>${F("à")}</td><td>thành phố</td><td>${F("à Paris, à Hanoï")}</td></tr>
  <tr><td>${F("au")}</td><td>nước giống đực</td><td>${F("au Japon, au Vietnam, au Royaume-Uni")}</td></tr>
  <tr><td>${F("en")}</td><td>nước giống cái hoặc bắt đầu bằng nguyên âm</td><td>${F("en France, en Italie")}</td></tr>
  <tr><td>${F("aux")}</td><td>nước số nhiều</td><td>${F("aux États-Unis")}</td></tr></table></div>
  <p class="tip">Năm: ${F("Je suis née en mille neuf cent quatre-vingt-dix-sept.")}</p>`},
  {h:"C'est / Il y a",html:`<p>${F("C'est")} (= ce est) it is · ${F("Ce sont")} they are · ${F("Il y a")} there is / there are</p>
  <p class="tip">Mạo từ không xác định ${F("un, une, des")} · xác định ${F("le, la, l', les")}</p>`}
 ],
 fixes:[
  ["Appelles tu ?","Comment t'appelles-tu ?","đảo ngữ phải có gạch nối và giữ đại từ phản thân"],
  ["Que va il étudier ?","Que va-t-il étudier ?","hai nguyên âm gặp nhau thì chèn -t-"],
  ["Tu étudies où ? (dịch \"Cậu học ở đâu thế?\")","✓ đúng, hoặc Où est-ce que tu étudies ?","cách 1 tự nhiên nhất khi nói"]
 ],
 ex:[
  {t:"f",q:"___ âge as-tu ?",a:["quel"]},
  {t:"f",q:"Tu parles ___ langues ?",a:["quelles"]},
  {t:"f",q:"___ est ton adresse ?",a:["quelle"]},
  {t:"f",q:"Tu aimes ___ sports ?",a:["quels"]},
  {t:"f",q:"J'habite ___ Japon.",a:["au"]},
  {t:"f",q:"Elle travaille ___ France.",a:["en"]},
  {t:"f",q:"Ils vivent ___ États-Unis.",a:["aux"]},
  {t:"f",q:"Je suis ___ Hanoï.",a:["à"]},
  {t:"f",q:"Il habite ___ Italie.",a:["en"]},
  {t:"f",q:"Je suis née ___ 1997.",a:["en"]},
  {t:"f",q:"Đổi sang dạng est-ce que: Tu habites où ?",a:["où est-ce que tu habites"]},
  {t:"f",q:"Đổi sang đảo ngữ: Vous aimez le croissant ?",a:["aimez-vous le croissant"]},
  {t:"f",q:"Đổi sang dạng est-ce que: Tu achètes quoi ?",a:["qu'est-ce que tu achètes"]},
  {t:"m",q:"\"Khi nào bạn bắt đầu đi làm?\"",o:["Tu commences à travailler quand ?","Tu commences travailler quand ?","Quand tu commence à travailler ?"],a:0,w:"commencer à + V nguyên thể; tu commences có -s."}
 ]
},
{
 id:"b2", date:"13/08", name:"Les verbes & se présenter", src:"Buổi 2 + BTVN sau buổi 2",
 links:[["Buổi 2","https://www.canva.com/d/kvH6x57dx1-_ghM"],["BTVN sau buổi 2","https://www.canva.com/d/uDCDNyVoONPr-BO"]],
 notes:[
  {h:"3 nhóm động từ",html:`<p>Nhóm 1: đuôi <b>-er</b> (parler) · Nhóm 2: <b>-ir</b> có -iss- (finir) · Nhóm 3: bất quy tắc (être, avoir, aller, prendre…)</p>`},
  {k:1,h:"Chia động từ -er",html:`<p>Bỏ -er, thêm: <b>-e, -es, -e, -ons, -ez, -ent</b></p>
  <p>${F("je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent")}</p>
  <p class="tip">-e / -es / -ent đều câm nên parle, parles, parlent đọc giống nhau. Trước nguyên âm: ${F("j'aime")}, ${F("j'habite")}</p>`},
  {h:"Biến đổi đặc biệt (*)",html:`<ul><li>g → ge: ${F("nous mangeons")} · c → ç: ${F("nous commençons")}</li>
  <li>e/é → è: ${F("j'achète")}, ${F("je préfère")}, ${F("j'espère")}</li>
  <li>gấp đôi phụ âm: ${F("j'appelle")}, ${F("je jette")}</li>
  <li>y → i: ${F("je paie")}, ${F("j'essaie")}, ${F("j'envoie")}, ${F("je nettoie")}</li></ul>
  <p class="tip">Các biến đổi è / ll / tt / i không áp dụng cho nous, vous: ${F("nous achetons")}, ${F("nous appelons")}</p>`},
  {k:1,h:"Động từ phản thân",html:`<p>${F("me, te, se, nous, vous, se")}</p>
  <p>${F("Je me lève à 7h.")} ${F("Nous nous levons à 7h.")} ${F("Je m'appelle Loan.")} ${F("Vous vous appelez comment ?")}</p>
  <p class="tip">${F("lever")} = nâng lên ≠ ${F("se lever")} = thức dậy</p>`},
  {k:1,h:"être & avoir",html:`<div class="tbl"><table><tr><th></th><th>être</th><th>avoir</th></tr>
  <tr><td>je</td><td>${F("suis")}</td><td>${F("ai")}</td></tr><tr><td>tu</td><td>${F("es")}</td><td>${F("as")}</td></tr>
  <tr><td>il</td><td>${F("est")}</td><td>${F("a")}</td></tr><tr><td>nous</td><td>${F("sommes")}</td><td>${F("avons")}</td></tr>
  <tr><td>vous</td><td>${F("êtes")}</td><td>${F("avez")}</td></tr><tr><td>ils</td><td>${F("sont")}</td><td>${F("ont")}</td></tr></table></div>
  <p class="tip">Tuổi dùng <b>avoir</b>: ${F("J'ai dix-huit ans.")}</p>`},
  {h:"Mạo từ",html:`<p>Xác định: ${F("le")} (đực) · ${F("la")} (cái) · ${F("l'")} (nguyên âm, h câm) · ${F("les")} (nhiều)</p>
  <p>Không xác định: ${F("un")} · ${F("une")} · ${F("des")}</p>
  <p class="tip">ils / elles: chỉ cần có một nam trong nhóm là dùng <b>ils</b>.</p>`},
  {h:"Quốc tịch",html:`<p>${F("vietnamien / vietnamienne")} · ${F("japonais / japonaise")} · ${F("français / française")} · ${F("italien / italienne")} · ${F("chinois / chinoise")} · ${F("allemand / allemande")} · ${F("américain / américaine")}</p>`},
  {h:"Mẫu tự giới thiệu",html:`<p>${F("Salut, je m'appelle Loan. Je suis vietnamienne. J'ai … ans. Je parle français, anglais et vietnamien. Je suis informaticienne. J'habite à Hanoï. J'aime le matcha. Et vous ?")}</p>`}
 ],
 fixes:[
  ["Je suis 18 ans.","J'ai 18 ans.","tuổi dùng avoir"],
  ["nous mangons","nous mangeons","giữ âm /ʒ/ nên thêm e"],
  ["je promène (đi dạo)","je me promène","se promener là động từ phản thân"],
  ["j'achete · j'appele","j'achète · j'appelle","acheter: è · appeler: gấp đôi l"],
  ["Je aime","J'aime","je + nguyên âm viết tắt thành j'"]
 ],
 ex:[
  {t:"f",q:"Nous ___ (manger) à midi.",a:["mangeons"]},
  {t:"f",q:"Nous ___ (commencer) à 8h.",a:["commençons"]},
  {t:"f",q:"J'___ (acheter) du pain.",a:["achète"]},
  {t:"f",q:"Je ___ (payer) par carte.",a:["paie","paye"]},
  {t:"f",q:"Il ___ (préférer) le thé.",a:["préfère"]},
  {t:"f",q:"J'___ (appeler) ma mère.",a:["appelle"]},
  {t:"f",q:"Tu ___ (s'appeler) comment ?",a:["t'appelles"]},
  {t:"f",q:"Nous ___ (se lever) à 7h.",a:["nous levons"]},
  {t:"f",q:"Vous ___ (être) français ?",a:["êtes"]},
  {t:"f",q:"Ils ___ (avoir) sept ans.",a:["ont"]},
  {t:"f",q:"J'aime ___ café.",a:["le"]},
  {t:"f",q:"Il aime ___ Espagne.",a:["l'"]},
  {t:"f",q:"Nous aimons ___ langues.",a:["les"]},
  {t:"f",q:"Elle est (Việt Nam) → Elle est ___.",a:["vietnamienne"]},
  {t:"f",q:"Elle est (Pháp) → Elle est ___.",a:["française"]},
  {t:"m",q:"Nhóm 3 bạn gái và 1 bạn trai → dùng:",o:["elles","ils"],a:1}
 ]
},
{
 id:"b1", date:"07/08", name:"Les nombres, les jours, les mois", src:"BTVN sau buổi 1",
 links:[["BTVN sau buổi 1","https://www.canva.com/d/cToCDUhndEXS7tR"]],
 notes:[
  {h:"Phát âm",html:`<p>Âm mũi: ${F("an / en")} /ɑ̃/ · ${F("on")} /ɔ̃/ · ${F("in / ain / un")} /ɛ̃/. R phát âm ở cuống họng.</p>
  <p class="tip">Phân tích quy tắc khi gặp từ mới: ${F("zéro")}: é đọc /ê/, r đọc /kh/, o đọc /ô/.</p>`},
  {k:1,h:"Số đếm: các mốc khó",html:`<div class="tbl"><table>
  <tr><td>21, 31…61</td><td>${F("vingt et un")}, ${F("soixante et un")}</td></tr>
  <tr><td>70 = 60 + 10</td><td>${F("soixante-dix")}, 71 ${F("soixante et onze")}, 76 ${F("soixante-seize")}</td></tr>
  <tr><td>80 = 4 × 20</td><td>${F("quatre-vingts")}, 81 ${F("quatre-vingt-un")}</td></tr>
  <tr><td>90 = 80 + 10</td><td>${F("quatre-vingt-dix")}, 96 ${F("quatre-vingt-seize")}</td></tr>
  <tr><td>100, 200, 201</td><td>${F("cent")}, ${F("deux cents")}, ${F("deux cent un")}</td></tr>
  <tr><td>1 000, 10<sup>6</sup>, 10<sup>9</sup></td><td>${F("mille")} (không thêm s), ${F("un million")}, ${F("un milliard")}</td></tr></table></div>
  <p class="tip">Số điện thoại đọc theo cặp: 01-23-45-67-89 = ${F("zéro un, vingt-trois, quarante-cinq, soixante-sept, quatre-vingt-neuf")}</p>`},
  {h:"Thứ trong tuần",html:`<p>${F("lundi")} · ${F("mardi")} · ${F("mercredi")} · ${F("jeudi")} · ${F("vendredi")} · ${F("samedi")} · ${F("dimanche")}</p>`},
  {h:"Tháng",html:`<p>${F("janvier")} · ${F("février")} · ${F("mars")} · ${F("avril")} · ${F("mai")} · ${F("juin")} · ${F("juillet")} · ${F("août")} · ${F("septembre")} · ${F("octobre")} · ${F("novembre")} · ${F("décembre")}</p><p class="tip">Thứ và tháng không viết hoa.</p>`}
 ],
 fixes:[
  ["aout","août","có dấu mũ trên u"],
  ["quatre-vingt (80)","quatre-vingts","80 có s; 81 trở đi bỏ s: quatre-vingt-un"]
 ],
 ex:[
  {t:"f",q:"Viết bằng chữ: <b>67</b>",a:["soixante-sept"]},
  {t:"f",q:"<b>71</b>",a:["soixante et onze"]},
  {t:"f",q:"<b>80</b>",a:["quatre-vingts"]},
  {t:"f",q:"<b>96</b>",a:["quatre-vingt-seize"]},
  {t:"f",q:"<b>567</b>",a:["cinq cent soixante-sept"]},
  {t:"f",q:"<b>1997</b>",a:["mille neuf cent quatre-vingt-dix-sept","dix-neuf cent quatre-vingt-dix-sept"]},
  {t:"f",q:"<b>2026</b>",a:["deux mille vingt-six"]},
  {t:"f",q:"Viết ra số: <i>soixante-seize mille quatre cent vingt-huit</i>",a:["76428","76 428","76.428"]},
  {t:"f",q:"Viết ra số: <i>huit cent soixante-dix-neuf mille trois cent cinquante-deux</i>",a:["879352","879 352","879.352"]},
  {t:"f",q:"Thứ Tư = ___",a:["mercredi"]},
  {t:"f",q:"Chủ nhật = ___",a:["dimanche"]},
  {t:"f",q:"Tháng Tám = ___",a:["août"]},
  {t:"f",q:"Tháng Bảy = ___",a:["juillet"]}
 ]
}
];
