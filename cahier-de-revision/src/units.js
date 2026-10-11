const F = s => `<span class="fr" tabindex="0">${s}</span>`;

const UNITS = [
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
  <p>${F("Je me suis levée à 6 h ce matin.")} ${F("Je suis né(e) en 1990.")}</p>`}
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
  <p class="tip">${F("à cette heure")} = vào giờ đó (câu của em: ${F("Je vais dormir à cette heure.")})</p>`},
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
  <p class="tip">aux = à + les. commencer <b>à</b> + V. Động từ phản thân giữ đại từ: je <b>me</b> lave, tu <b>te</b> laves.</p>`}
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
