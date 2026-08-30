const DICT = [
  {
    word:"Sisific", aliases:["sisif","sisyphus","munca sisifica","efort sisific"],
    phon:"/si-SI-fic/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Adică ce faci la muncă",
    story:"Sisif a fost un rege al Corintului atât de viclean încât a reușit de două ori să păcălească moartea. Zeii, sătui de aroganța lui, i-au dat o pedeapsă pe măsură: să împingă un bolovan uriaș până în vârful unui munte. Numai că, de fiecare dată când ajungea sus, piatra se rostogolea înapoi la vale. Așa că <strong>„sisific”</strong> descrie orice efort care se repetă la nesfârșit, fără să ducă niciodată undeva — genul de task de la job pe care-l faci luni și-l refaci vineri."
  },
  {
    word:"Kafkian", aliases:["kafka","kafkiana"],
    phon:"/kaf-ki-AN/", tag:"lit", tagLabel:"adjectiv literar",
    book:null,
    images:[],
    why:"Se folosește pentru birocrația care nu are nicio logică.",
    story:"Franz Kafka a scris despre oameni prinși în sisteme absurde: un funcționar arestat fără să afle de ce (Procesul), un om transformat peste noapte în insectă și tratat ca atare de familia lui fără mari explicații (Metamorfoza). <strong>„Kafkian”</strong> a ajuns să descrie orice situație în care logica normală nu se aplică — de obicei o instituție, un formular sau o birocrație care te plimbă de la un ghișeu la altul fără niciun sens aparent."
  },
  {
    word:"Cassandră", aliases:["cassandra","complexul cassandrei"],
    phon:"/ca-SAN-dră/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Folosit pentru cineva care avertizează, dar nu-l crede nimeni.",
    story:"Cassandra a primit de la zeul Apollo darul profeției — putea vedea viitorul cu exactitate. Problema a apărut când l-a refuzat pe Apollo romantic, iar el, jignit, a adăugat o clauză crudă: nimeni n-avea s-o creadă vreodată. Așa că a prezis căderea Troiei, exact așa cum s-a întâmplat, și toată lumea a ignorat-o. Azi numim <strong>„cassandră”</strong> pe oricine avertizează corect despre un dezastru, dar e ignorat până e prea târziu."
  },
  {
    word:"Călcâiul lui Ahile", aliases:["ahile","achilles heel","punctul slab"],
    phon:"/ah-I-le/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Expresie pentru „singurul punct vulnerabil” al cuiva altfel de neatins.",
    story:"Mama lui Ahile l-a scufundat, nou-născut, în râul Styx ca să-l facă invulnerabil. Singura problemă: l-a ținut de călcâi, iar acolo apa n-a ajuns. Ahile a devenit cel mai mare războinic al Troiei — până când o săgeată l-a lovit exact în acel punct. De atunci, <strong>„călcâiul lui Ahile”</strong> descrie slăbiciunea ascunsă a cuiva sau a ceva care, în rest, pare aproape perfect."
  },
  {
    word:"Victorie pirică", aliases:["pyrrhic","pirica","victoria pirica"],
    phon:"/pi-RI-că/", tag:"ist", tagLabel:"referință istorică",
    book:null,
    images:[],
    why:"Pentru orice câștig care te costă mai mult decât dacă ai fi pierdut.",
    story:"Regele Pyrrhus al Epirului a învins armata romană la Ausculum, dar cu pierderi atât de mari încât a exclamat, se spune, că încă o victorie ca asta l-ar lăsa fără armată. Din păcate pentru el, expresia i-a rămas numele legat pe vecie de eșecuri deghizate în succese: <strong>„victorie pirică”</strong> e orice câștig la care costurile depășesc beneficiul — genul de ceartă pe care „o câștigi”, dar rămâi fără prieteni."
  },
  {
    word:"Machiavelic", aliases:["machiavelli","machiavelica"],
    phon:"/ma-kia-ve-LIC/", tag:"ist", tagLabel:"referință istorică",
    book:null,
    images:[],
    why:"Descrie pe cineva dispus să facă orice pentru a-și atinge scopul.",
    story:"Niccolò Machiavelli a scris în secolul XVI „Principele”, un ghid pentru conducători despre cum să obții și să păstrezi puterea — inclusiv prin minciună, manipulare sau cruzime, dacă rezultatul o cere. Ironic, cartea era mai degrabă o analiză rece a realității politice decât un manual de răutate, dar numele lui a rămas sinonim cu <strong>„machiavelic”</strong>: cineva care crede că scopul scuză mijloacele, oricât de murdare ar fi ele."
  },
  {
    word:"Donquijotesc", aliases:["quijotesc","don quijote","donchisotesc"],
    phon:"/don-ki-ho-TESC/", tag:"lit", tagLabel:"adjectiv literar",
    book:null,
    images:[],
    why:"Pentru gesturi idealiste, nobile, dar complet nepractice.",
    story:"Don Quijote, eroul lui Cervantes, a citit atât de multe romane cavalerești încât și-a pierdut contactul cu realitatea și a plecat să lupte cu... mori de vânt, convins că erau uriași răi. <strong>„Donquijotesc”</strong> descrie orice luptă nobilă, plină de idealuri, dar sortită eșecului pentru că adversarul e, de fapt, imaginar sau disproporționat — gen „lupta donquijotescă” a cuiva împotriva birocrației."
  },
  {
    word:"Orwellian", aliases:["orwell","1984","big brother"],
    phon:"/or-VE-li-an/", tag:"lit", tagLabel:"adjectiv literar",
    book:null,
    images:[],
    why:"Se folosește pentru supraveghere și manipulare a limbajului de către putere.",
    story:"George Orwell a imaginat în „1984” o societate condusă de un regim care urmărește fiecare mișcare a cetățenilor și rescrie constant limba și istoria ca să controleze gândirea oamenilor. <strong>„Orwellian”</strong> a devenit eticheta pentru orice situație din realitate care seamănă cu asta: supraveghere excesivă, propagandă sau folosirea unor cuvinte frumoase („restructurare”) pentru lucruri urâte."
  },
  {
    word:"Lapsus freudian", aliases:["freudian slip","freudian","lapsus"],
    phon:"/LAP-sus froy-di-AN/", tag:"ist", tagLabel:"termen psihologic",
    book:null,
    images:[],
    why:"Pentru scăpările verbale care „trădează” ce gândim cu adevărat.",
    story:"Sigmund Freud credea că nimic din ce spunem nu e complet întâmplător — nici măcar greșelile. Când cineva spune un cuvânt greșit, dar acesta dezvăluie un gând ascuns sau o dorință reprimată, i se spune <strong>„lapsus freudian”</strong>. Exemplul clasic, glumit la nesfârșit: cineva care voia să spună „te rog, treci” și a zis „te rog, iubito” — evident, către persoana greșită."
  },
  {
    word:"Cutia Pandorei", aliases:["pandora"],
    phon:"/pan-DO-rei/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Pentru orice decizie mică ce declanșează o avalanșă de probleme.",
    story:"Zeii i-au dat Pandorei, prima femeie din mitologia greacă, un vas sigilat cu instrucțiuni clare: să nu-l deschidă niciodată. Curiozitatea a învins, iar din vas au ieșit toate relele lumii — boală, suferință, invidie — rămânând înăuntru doar speranța. <strong>„A deschide cutia Pandorei”</strong> înseamnă azi să faci un gest aparent minor care declanșează o serie de consecințe pe care nu le mai poți controla."
  },
  {
    word:"Nodul gordian", aliases:["gordian knot","gordian"],
    phon:"/GOR-di-an/", tag:"ist", tagLabel:"referință istorică",
    book:null,
    images:[],
    why:"Pentru soluții radicale la probleme aparent imposibile.",
    story:"O legendă spunea că oricine reușea să dezlege un nod extrem de complicat legat de regele Gordius avea să conducă Asia. Mulți au încercat cu răbdare, fără succes — până a venit Alexandru cel Mare, care pur și simplu l-a tăiat cu sabia. <strong>„A tăia nodul gordian”</strong> înseamnă a rezolva o problemă complicată printr-o soluție radicală și directă, în loc să te chinui cu metode complicate."
  },
  {
    word:"Calul troian", aliases:["trojan horse", "troian"],
    phon:"/tro-I-an/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Pentru orice pericol ascuns într-un dar aparent inofensiv.",
    story:"După zece ani de asediu eșuat al Troiei, grecii au construit un cal uriaș de lemn, l-au umplut cu soldați și l-au lăsat „în dar” la porțile cetății. Troienii, crezând că grecii au renunțat, au tras calul înăuntru drept trofeu — iar noaptea, soldații ascunși au deschis porțile cetății. De aici expresia <strong>„cal troian”</strong>, folosită azi și pentru viruși informatici care se deghizează în programe inofensive."
  },
  {
    word:"Icar", aliases:["icarus", "aripile lui icar"],
    phon:"/I-car/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Pentru ambiția care se prăbușește exact din cauza succesului ei.",
    story:"Tatăl lui Icar, Dedal, a construit pentru amândoi aripi din pene lipite cu ceară, ca să evadeze dintr-o insulă. Sfatul lui a fost simplu: nici prea sus, nici prea jos. Icar, entuziasmat de zbor, a ignorat avertismentul, s-a apropiat prea mult de soare, iar ceara s-a topit. <strong>„A zbura prea aproape de soare ca Icar”</strong> descrie eșecul cauzat exact de excesul de încredere sau ambiție."
  },
  {
    word:"Atingerea lui Midas", aliases:["midas", "regele midas"],
    phon:"/MI-das/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Pentru cineva la care „totul se transformă în succes”.",
    story:"Regele Midas a primit de la zeul Dionysos o dorință: tot ce atingea să se transforme în aur. Entuziasmat inițial, a realizat rapid problema când și mâncarea, și fiica lui s-au transformat în metal la atingere. <strong>„Atingerea lui Midas”</strong> se folosește azi mai ales pozitiv — pentru cineva ale cărui afaceri sau proiecte par să reușească mereu — dar originea ei e, de fapt, un avertisment despre lăcomie."
  },
  {
    word:"Prometeic", aliases:["prometeu","prometheus","focul lui prometeu"],
    phon:"/pro-me-TE-ic/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Pentru descoperiri care schimbă lumea, dar au un preț mare.",
    story:"Prometeu a furat focul de la zei și l-a dat oamenilor, oferindu-le căldură, unelte și tehnologie — dar Zeus l-a pedepsit legându-l de o stâncă, unde un vultur îi mânca ficatul zi de zi, la nesfârșit. <strong>„Prometeic”</strong> descrie orice realizare uriașă, adesea științifică, care aduce progres enorm, dar și un cost sau un risc pe măsură — de la energia nucleară la inteligența artificială."
  },
  {
    word:"Narcisist", aliases:["narcis","narcissus"],
    phon:"/nar-ci-SIST/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    images:[],
    why:"Pentru cineva îndrăgostit iremediabil de propria imagine.",
    story:"Narcis era un tânăr atât de frumos încât respingea pe oricine se îndrăgostea de el. Ca pedeapsă, s-a îndrăgostit la rândul lui de propria reflecție într-un lac, incapabil să se desprindă de ea, până a murit privindu-se. De aici <strong>„narcisist”</strong> — cineva absorbit excesiv de propria imagine și admirație de sine, adesea în detrimentul celor din jur."
  },
  {
    word:"Utopie", aliases:["utopic","thomas more"],
    phon:"/u-to-PI-e/", tag:"lit", tagLabel:"termen literar",
    book:null,
    images:[],
    why:"Pentru o societate „perfectă” care nu poate exista în realitate.",
    story:"Thomas More a scris în 1516 despre o insulă imaginară numită Utopia, o societate organizată perfect, fără sărăcie sau conflicte — numele venind chiar din greacă, „locul care nu există”. Astăzi <strong>„utopie”</strong> descrie orice idee sau plan ideal, dar nerealist, iar opusul ei, <strong>distopia</strong>, descrie o societate ideală doar la prima vedere, de fapt profund opresivă (gândește-te la „1984”)."
  },
    {
    word:"portativ", aliases:["portative"],
    phon:"/por-ta-tIv/", tag:"muzică", tagLabel:"muzică",
    book:"doamnap",
    images:[],
    why:"Detectiv pe portativ",
    story:"De unde și până unde s-a ajuns de la sensul de bază de <i>ușor de purtat</i> (logic, porta-tiv, a purta) la cel de 5 linii paralele și egal depărtate între ele pe care și între care se scriu note muzicale? Nu vom afla niciodată. <br><br>Dar ce știm cu siguranță este că portativul stă la fundația muzicii. Este mijlocul prin care oamenii își pot comunica ideile muzicale. Adică portativele sunt pentru muzicieni ceea ce sunt cărțile pentru scriitori. <br><br> Nu ai cum să fi ajuns la vârsta asta și să nu fi avut vreodată un caiet cu portativ în care să îți dovedești abilitățile de caligrafie a cheii sol sau să îngrămădești pe linii purceluși de cerneală (asta dacă nu ai cumva sub 9 ani, caz în care sunt profund impresionat că folosești acest dicționar). <br><br>La începuturile omenirii, pentru că nu existau aplicații de înregistrat și nici Spotify, cântecele erau învățate pe de rost și transmise pe cale orală. Dacă uitai un cântec, sănătate. Nu-l mai auzeai în veci. <br><br>Mai apoi, au apărut cântările religioase. Călugării trebuiau să memoreze mii de melodii, dar îți dai seama, dacă mintea le juca cumva feste, dezastru infernal. Slujba nu mai era corectă. Așa că au venit cu o șmecherie: desenau deasupra cuvintelor puncte, linii strâmbe și cârlige (pe care le-au denumit <i>neume</i>, nu mă întreba de unde), care le indicau unde trebuie ca vocea să urce și unde să coboare. A mers o vreme, doar că și-au dat seama că și acest sistem avea o mare problemă: nu le zicea și cât de sus sau de jos să se ducă cu vocea. Prin anul 1000, foarte ușor de reținut, un călugăr isteț pe nume Guido d`Arezzo (pronunțat neapărat cu gestul italian din mână) a venit cu o soluție. A desenat o linie roșie căreia i-a atribuit un sunet fix. Notele desenate deasupra însemnau că trebuie cântate mai înalt, iar cele de dedesubt erau cântate mai jos. S-a gândit el mai bine și a mai adăugat trei linii, ca să acopere toate sunetele. Și așa s-a născut portativul. <br><br>Păi stai, o să zici, portativul are 5 linii, nu 4. Corect, doar că a trebuit să mai treacă timpul. Muzicienii au creat noi instrumente, noi melodii, așa că au avut nevoie să extindă portativul și i-au mai adăugat o linie. Ce-i așa complicat? <br><br>De fiecare dată când am șansa să văd un portativ (mă rog, foarte rar și cel mult un caiet vechi de muzică de clasa a V-a de-al stăpânei) rămân absolut fascinat cum muzicienii de pe toată planeta, indiferent ce limbă vorbesc, pot citi niște linii și să audă aceeași melodie. <br><br>O fi amestecat Dumnezeu limbile la Turnul Babel ca să nu se mai înțeleagă proștii între ei, dar sigur le-a făcut cu ochiul artiștilor."
  },
    {
    word:"voluptuos", aliases:["voluptate","voluptăți"],
    phon:"/vo-lup-tu-Os/", tag:"adjectiv", tagLabel:"adjectiv",
    book:"doamnap",
    images:[],
    why:"„tot nu am mai regăsit vreodată...acel altunde voluptuos”",
    story:"Voluptatea este o stare de plăcere extrem de mare. Este ca atunci când îți place ceva atât de mult încât o simți cu tot corpul și te concentrezi pe aceste senzații atât de tare încât nu mai vrei să se termine. E ca atunci când îți înfigi lingurița într-un lava cake perfect și iei din toată ciocolata aia care se prelinge pe margini (inima mea e prea slabă pentru astfel de imagini).<br><br>La câtă voluptate îmi stârnește imaginea unui lava cake, ar trebui ca povestea acestui cuvânt să fie pe măsură. <br><br>Și este. <br><br>Latinii îi ziceau <i>voluptas</i> și l-au ridicat la rang de zeiță. Și cine era această Voluptas, zeiță a plăcerii? Ia să scoatem de la naftalină „Legendele Olimpului” și să dăm la pagina cu Eros și Psyhe. Hm, hm, hm. Să-mi dreg vocea. <br><br>Deci, o știți pe Afrodita, zeița frumuseții. Ea avea un fiu care arăta ca un bebeluș grăsuț și îi plăcea să tragă cu săgeți în oameni ca să se îndrăgostească și să râdă de ei cum iau cele mai proaste decizii. Îl chema Eros, sau cum îl mai știm de la Valentine`s Day, Cupidon.<br><br>A fost odată și o preafrumoasă fată pe nume Psyhe, care era atât de frumoasă încât oamenii mergeau s-o vadă și uitau să mai treacă pe la templul Afroditei. Și asta a devenit super geloasă. I-a zis lui Cupidon: <i> du-te la asta și trage-i o săgeată să se îndrăgostească de cel mai urât și mai rău monstru din lume</i>. (Efectiv, o ador pe Afrodita. Este chintesența conceptului de b*tch). Și s-a dus Cupidon noaptea în camera ei, dar ce să vezi, de ageamiu ce era, s-a împiedicat și s-a înțepat cu o săgeată. Păi ce făcuși, Bobiță? Cupidon s-a îndrăgostit lulea de Psyhe. <br><br>Ca să nu afle maică-sa, a dus-o într-un castel secret (se pare că băiatul învârtea afacerile lui) și o vizita doar noaptea, ca ea să nu-i descopere identitatea (mi se pare mie sau legenda asta îmi dă vibe de o altă poveste celebră?) O perioadă au fost foarte fericiți. Până au venit cumnatele în vizită.<br><br> Într-o zi, au venit surorile lui Psyhe în vizită (păi ce făcuși iar, Bobiță? Ai zis că palatul era secret). Și s-au pus la bârfă, că <i>cine-i tipul, cum arată</i>, chestii trestii. Ea nu știa să le zică. Astea i-au ațâțat curiozitatea și au plecat.<br><br>În noaptea aceea, doborâtă de curiozitate, a luat o lampă și s-a uitat la Cupidon în timp ce dormea. Cică atunci când a văzut că era zeu, și frumos pe deasupra, i-a tremurat mâna și o picătură nesimțită de ulei (erau lămpi cu ulei pe atunci, vezi modele câte vrei pe la Muzeul de Istorie) i-a căzut lui Cupidon fix pe obraz. Trezit din somnul lui de frumusețe, a văzut-o cum se holba la el și atât o fost de dezamăgit încât a recreat meme-ul cu antrenorul și s-a dus (încă am un foarte mare sentiment de déjà vu. Scuze déjà lu). <br><br>Psyhe s-a dus direct la maică-sa, Afrodita, să-și ceară iertare. Iar asta, încă geloasă, i-a dat trei taskuri imposibile: să separe un munte uriaș de semințe amestecate, să aducă lâna de aur de la niște berbeci demenți și să coboare în Lumea Subpământeană. Băăăăi, doar mie îmi sună a „Povestea Porcului”? Vaaai, nu pot să cred! Și Ion Creangă a citit „Legendele Olimpului”? <br><br>Mă rog, fata a reușit cu ajutor, desigur, sp le facă pe toate. Vă imaginați ce față a făcut Afrodita. Impresionat de curajul și regretul ei sincer, Zeus, care pesemne urmărise tot show-ul cu o cutie de popcorn în brațe, a promovat-o la gradul de zeiță. Psyhe, zeița sufletului și a minții (de unde azi ne-a rezultat <i>psihologia</i>). Acum egali, Cupidon (Care și-a făcut și el apariția la final, ca și cum nimic din toate astea nu s-ar fi întâmplat doar din cauza lui) și Psyhe s-au căsătorit și au avut o fetiță, pe care au numit-o Voluptas, zeița plăcerii. <br><br>Dar așa cum, dacă mănânci prea multă ciocolată, te doare burta, o să mă opresc cu această poveste voluptuoasă aici."
  },
  {
    word:"mătase", aliases:["Drumul Mătăsii","vierme de mătase","viermi de mătase"],
    phon:"/mă-tA-se/", tag:"modă", tagLabel:"modă",
    book:"doamnap",
    images:[],
    why:"Crescuți în mătase sunt doar viermii",
    story:"În general nu mă interesează moda (nici n-am de ce, doar sunt motan). Pur și simplu nu văd de ce să-ți pierzi timpul să cercetezi dacă o geantă din piele se asortează cu pantofii cui sau dacă verdele mentă mai e sau nu în tendințe. Să mă trăsnești dacă știu care e diferența dintre catifea și crep (care, by the way, nu e o clătită).<br><br> Dar m-am mai împiedicat uneori prin cărți de niște termeni fashionistici cu povești atât de fabuloase, încât a trebuit să-mi regândesc poziția (nu că nu aș mai avea aceleași prejudecăți, dar nu le mai zic cu voce tare). <br><br> Uite, de exemplu mătasea. Tragi de un fir și te trezești că-ți cade în cap întreaga istorie a lumii. Exagerez. Un pic. <br><br>Mătasea, acest material neted și lucios, a fost o comoară a istoriei. <br><br>Totul a pornit în China. Acum 5000 de ani, o împărăteasă își lua ceaiul în grădină, sub un copac. Și cum știm de la fratele Newton că cele mai mari descoperiri au loc sub un copac pentru că tind să-ți cadă în cap tot felul de chestii. Așa s-a întâmplat și aici, doar că a fost mai scârbos.<br><br> I-a căzut fix în ceașca de ceai un cocon. Dacă eu aș fi fost în locul ei, aruncam în secunda doi ceaiul cu tot cu lighioană și fugeam în casă, pardon, palat. Uite, vezi, de asta eu nu fac istorie. <br><br>Dar împărăteasa a studiat coconul și l-a admirat cum îi străluceau firele în lumină. I l-a arătat și soțului ei, Împăratul Galben (zici că-i basm românesc) și așa au apărut primele ferme de crescut viermi și războaie de țesut mătase. Împărăteasa a rămas în manualele de istorie ca <i>Zeița mătăsii</i> și <i>Mama viermilor de mătase</i>  (de ce să fii <i>mother of the dragons</i> când poți să fii <i>mother of the silk worms</i>). Și ca să nu le fure nimeni descoperirea, au ținut totul sub cel mai mare secret. Ca rețeta de Coca Cola. <br><br>Și îți dai seama, vine China la muncă cu haine de mătase, imediat sar pe ea romanii, grecii, Cleopatra și cine mai era pe acolo că <i>vaaai, dar de unde le ai</i>, <i>cât ai dat pe ele</i>,<i> dar vreau și eu</i>. Și China a văzut aici o idee de bussiness de lux și așa a apărut Temu. Numai că nu-i zicea așa, ci Drumul Mătăsii. Care tehnic nu era chiar un drum, ci mai multe rute. Și nu era doar pentru mătase, ci și pentru multe alte chestii exotice ca porțelan, ceai și mirodenii. Și pentru că nu se inventaseră încă tirurile, au apelat la cămile. (Gândește-te un pic în ce lume trăim. Azi te plângi că îți vine comanda de pe Shein în 10 zile lucrătoare, pe când atunci ai fi așteptat cu lunile. Ce să zic ai fi așteptat, că nici nu îndrăzneai în visele tale cele mai fantastice să-ți comanzi nici măcar o scobitoare din China; ai fi dat cu sapa pe pământul nobilului ăluia care-și aștepta comanda de mătase). <br><br>China a reușit să-și ascundă rețeta de mătase mii de ani, dar secretul a fost într-un final dezvăluit printr-un scandal de spionaj. Împăratul bizantin Iustinian (ăla de a ridicat Hagia Sophia) a trimis niște călugări la curtea Chinei, chipurile să predice adevărata credință. Doar că oamenii erau plătiți part-time să facă și treabă de spion. Au descoperit micile creaturi scârboase care produceau materialul de lux și s-au gândit cum să le ducă acasă fără să trezească suspiciuni. Evrika! Moși bătrâni, le-au ascuns în bastoanele lor de bambus. Nimeni de la vamă nu scana bastoane (da, știu, povestea mea are o groază de inexactități istorice). Și uite așa, cei doi călugări s-au făcut vinovați și de păcatul contrabandei, dar au fost iertați rapid de reprezentantul lui Dumnezeu pe pământ subsemnatul Iustinian care a și deschis fabrici, stricându-le afacerea chinezilor. Și apoi secretul s-a răspândit mai ceva ca gripa prin toată Europa și dincolo de ea până când n-a mai fost ceva atât de wow. <br><br>Și totuși chinezii s-au ținut tare datorită unui ajutor total neașteptat. Marketingul. <br><br>Un băiat italian l-a însoțit pe tatăl său într-o călătorie de afaceri prin Orient și a fost fermecat de lumea fabuloasă pe care a văzut-o acolo. Așa că a scris o carte, <i>Il Milione</i> sau mai pe românește <i>Cartea minunilor lumii</i> sau mai cunoscută sub numele de <i>Călătoriile lui Marco Polo</i>. (Yep, așa îl chema pe băiat. Sigur ai auzit de el la școală). Cartea a devenit bestseller instant, cam cum urmărim noi astăzi canale de travel pe Instagram și ne dorim brusc să mergem în Bali. Poate că toată lumea făcea mătase, dar China rămânea totuși wow. <br><br>Fast forward, astăzi, mătasea este un material scump, dar nu mai are hype-ul din trecut. Acum ne înnebunește ciocolata Dubai. Și chiar și Drumul Mătăsii a fost îngropat sub autostrăzile noastre moderne, iar cămilele au fost scoase la pensie. Lumea s-a schimbat. Dar știi ce nu s-a schimbat? Viermele ăla scârbos. Arată la fel de scârbos ca acum 5000 de ani. <br><br>Deci da, primul produs de lux din istorie a avut eticheta made in China."
  },
    {
    word:"acord", aliases:["acorduri"],
    phon:"/a-cOrd/", tag:"muzică", tagLabel:"muzică",
    book:"doamnap",
    images:[],
    why:"În muzică, acordul este atunci când sunetele se pun de acord.",
    story:"În pictură, există culori de bază ca roșu, galben și albastru (ce frumos e steagul nostru), cu care poți face un desen drăguț. Dar poți să le amesteci și să obții și alte culori. Unele pot arăta dubioase ca scoase dintr-o conservă uitată la soare, altele pot fi superbe de-ți vine să te îmbraci numai cu ele. Și dacă le folosești, îți poate ieși un tablou de atârnat la Luvru (utopic vorbind). <br><br>Așa e și în muzică. Poți cânta în același timp mai multe note muzicale și să sune bine împreună (și atunci se cheamă că ai făcut un acord) sau te zgârie pe creier (și atunci se cheamă...hmmm... cred că au fost prea traumatizați ca să găsească un cuvânt pentru asta). În timp, lumea a descoperit cam ce note merg bine împreună și a dat nume acordurilor, precum do major sau re minor."
  },
    {
    word:"digital", aliases:["digitală","digitale"],
    phon:"/di-gi-tAl/", tag:"adjectiv", tagLabel:"adjectiv",
    book:"doamnap",
    images:[],
    why:"„pianul asculta de impulsurile mele digitale”-„Doamna Pylinska și secretul lui Chopin” de Éric-Emmanuel Schmitt",
    story:"Acest cuvânt apare în dicționarul Nedumirescu nu pentru că ar avea nevoie de o explicație (până la urmă suntem asaltați de termeni ca dispozitive digitale, digitalizarea României, competențe digitale și toată lumea știe că au treabă cu tehnologia), ci pentru că <i>a avea tehnologia la degetul mic</i> nu e o expresie metaforică. <br><br>Totul a pornit de la DJ Deget. Cum s-au gândit oamenii preistorici să-și întrebuințeze degețelele în scopuri mai științifice decât scobitul în nas? Să vadă dacă nu le-a dispărut vreo oaie din bătătură. Înainte să le ducă la păscut, asociau fiecare oaie cu câte un deget și, la finalul zilei, când le aduceau înapoi acasă, vedeau dacă le-a rămas vreun deget fără oaie. Cum am zice noi astăzi, le numărau pe degete. Așa s-au născut cifrele. 10 degete, 10 cifre. <i>Digitus</i> în latină-Deget-cifre? Pe undeva s-a rupt firul. <i>Digits</i> din engleză ar veni mănușă.<br><br>Și așa a apărut cuvântul <i>digital</i>, pentru orice ținea de degete. Amprente, mușchi, gesturi, impulsuri etcetera, etcetera.<br><br>Și apoi cineva s-a gândit: dacă am scrie toată informația doar cu cifre? Mai exact în doar două cifre: 0 și 1. Banii din cont? Un șir încurajator de lung de unu-uri (dubios că nu există cuvânt pentru așa ceva) și zerouri (de ce Doamne iartă-mă e singurul care are tratament preferențial?). Scrisoarea către bunica? O aglomerare de 0 și 1 pe care n-o poate citi nici bunica (asta dacă nu e o bunică genială). O fotografie cu mine la mare? Egală cu zero. Și mulți de unu presărați deasupra, à la  Salt Bae.<br><br>Așa s-a născut limbajul digital, care vine de la <i>digits</i>, care vine de la degete. Dar cum a devenit prea lung șirul de strămoși, sensul inițial s-a pierdut în negura vremurilor și a rămas doar tehnolooooogia (sper că ai spus-o ca în meme)."
  },
  {
    word:"viril", aliases:["virili"],
    phon:"/vi-rIl/", tag:"adjectiv", tagLabel:"adjectiv",
    book:"doamnap",
    images:[],
    why:"„instrumentul suna viril și franc sub degetele mele”-„Doamna Pylinska și secretul lui Chopin” de Éric-Emmanuel Schmitt",
    story:"<i>Viril</i> este unul din cuvintele alea care fac treaba ingrată de exprimare a prejudecăților. Mai exact, pe cea mai de bază prejudecată din lumea asta: băieți versus fete.<br><br><i>Viril</i> înseamnă specific masculin (pentru că <i>vir</i> în limba latină înseamnă <i>bărbat</i>), dar a fost upgradat și extins ca sinonim cu energic, viguros, plin de forță. <br><br>Complementarul lui ar fi <i>feminin</i> (pentru că vine și el din latină, unde <i>femina</i> înseamnă <i>femeie</i>).<i>Feminin</i> apare în DEX ca însemnând specific femeilor, și prin extensie... nimic. Atât e definiția. Specific femeilor, orice ar însemna asta (vai, eternul mister al femeilor neînțelese, asta ca disculpare să nu se scrie slab, emotiv, isteric, inferior cognitiv). Și nu doar în limba română, așa apare și în limbile internaționale.<br><br>Dar asta nu înseamnă că gata, ar trebui parașutat din dicționar și interzis prin constituție. Este un cuvânt care-și face jobul pentru care e plătit, ca oricare altul. Dar ce mă amuză de fiecare dată e că până la urmă limba este mijlocul prin care societatea comunică, dar și se dă de gol. Și asta e doar o observație. Atât."
  },
   {
    word:"franc", aliases:["francă"],
    phon:"/frAnc/", tag:"adjectiv", tagLabel:"adjectiv",
    book:"doamnap",
    images:[],
    why:"„instrumentul suna viril și franc sub degetele mele”-„Doamna Pylinska și secretul lui Chopin” de Éric-Emmanuel Schmitt",
    story:"Dacă cineva îmi zice că sunt franc, acum știu că mi-a făcut un compliment. Prima oară, aș fi zis că ori m-a confundat și m-a făcut francez (ceea ce mi-a gâdilat un pic orgoliul, n-am să te mint), ori s-a intoxicat cu produse etilice și m-a confundat cu fosta monedă națională a Franței.<br><br>Abia mai târziu am descoperit că înseamnă sincer, cinstit, că vorbești deschis, pe față, ceea ce gândești. <br><br>Îmi place cum sună, simplu, curat, ca un capac trântit peste lada de zestre. Franc. El este un motan franc."
  },
  {
    word:"Lyon", aliases:["Lion"],
    phon:"/li-On/", tag:"oraș", tagLabel:"oraș",
    book:"doamnap",
    images:[],
    why:"Nu are treabă cu leii, dar are cu romanii.",
    story:"Lyon este un mare oraș din estul Franței, cam cum este Clujul nostru. Este al treilea din țară ca populație (după Paris și Marsilia) și un mare centru industrial și bancar. Are ruine romane, catedrale gotice, clădiri superbe, chiar și o ditamai moschee!<br><br>Credeam că numele lui are legătură cu leul (nu am fost departe, e <i>lion</i> în franceză, ceea ce ar fi fost foarte tare din perspectiva mea felină), dar nu. Cică e din vechea limbă galică și vine de la un zeu de-al lor sau de la lumină (foarte intuitiv, ce să zic...). Dar mă rog, eu tot o să zic că e orașul ăla cu leu.<br><br>Aici se găsește sediul Interpol (organizația aia de cooperare între polițiile din toate țările. Toată lumea a auzit la tv că nu știu cine a fugit din țară, dar e dat în urmărire de Interpol; aici stau the big bosses). <br><br> Antoine de Saint-Exupéry și împăratul roman Claudius (am aflat de el din cărțile foarte faine „Eu, Claudius” și „Claudius Zeul” de Robert Graves) s-au născut la Lyon. Frații Auguste și Charles Lumière (creatorii cinematografului) și Éric-Emmanuel Schmitt nu s-au născut, dar au crescut în Lyon.<br><br>Îmi place. După ce mă plictisesc de Paris, aș face un city-brake aici."
  },
  {
    word:"Paris", aliases:["Parisului"],
    phon:"/pa-rIs/", tag:"oraș", tagLabel:"oraș",
    book:"doamnap",
    images:[],
    why:"Dacă ai căutat cuvântul ăsta, scuză-mă că întreb, dar cum de ai găsit semnal wi-fi în peșteră?",
    story:"Zici Paris și te gândești la Catedrala Notre-Dame, Turnul Eiffel, Luvru, plimbări pe malul Senei, podul ăla frumos din aur, croissante și baghete, librării, librării, librării, biblioteci, grădini, Constantin Brâncuși, George Enescu, Victor Hugo, Moulin Rouge, Napoleon... mai ești aici încă 342 de ore ca să continui?"
  },
    {
    word:"Școala Normală Superioară", aliases:["școala normală"],
    phon:"/școA-la nor-mA-lă su-pe-ri-oA-ră/", tag:"educație", tagLabel:"educație",
    book:"doamnap",
    images:[
  {src:"imagini/ens1.jpg", caption:"ENS pe harta Parisului (sursa:https://www.di.ens.fr/information)"},
  {src:"imagini/ens2.jpeg", caption:"Vedere aeriană a ENS (sursa:https://psl.eu/ecole-normale-superieure-psl)"},
],
    why:"Dacă reușești să intri aici, ești atât de tare încât primești și salariu.",
    story:"Toată lumea, atunci când se gândește la sistemul de educație din Franța, zice imediat Sorbona. Da, își merită prestigiul, n-am ce comenta, dar pierdem din vedere faptul că ei mai au o instituție atât de înaltă și de selectivă, încât trebuie să fii cel puțin geniu ca să intri acolo. École normale supérieure.<br><br>Admiterea se face prin concursuri naționale extrem de severe ce necesită doi ani de pregătire intensă după liceu (<i>classes préparatoires</i>) (asta ar fi diferența față de sistemul din România. În Franța există universități, ca Sorbona, unde intri mai ușor, pe baza unui dosar, sau grandes écoles cum e ENS, unde intri pe baza unui examen super greu de admitere). ENS primește doar o mână de studenți pe an (numiți <i>normaliens</i>). Studenții admiși pe locurile oficiale au statut de funcționari publici stagiari și primesc un salariu lunar de la stat pe durata studiilor (cât de tare e asta! Să fii plătit că ești geniu).<br><br>A fost fondată în timpul Revoluției Franceze, în 1794 (pe când la noi era epoca fanariotă și prindeam din urmă Occidentul cu academiile noastre domnești) și își are sediul în celebrul Cartier Latin al Parisului. <br><br>Printre studenții celebri se numără Jean-Paul Sartre (filozof, scriitor și câștigător de Premiu Nobel, dar nu pentru aspectul fizic), Éric-Emmanuel Schmitt (tatăl lui <i>Oscar și Tanti Roz</i>; să nu-l ratezi, că îi place să vină și pe la noi; în mod contraintuitiv, nu a făcut literele, ci filosofie), Louis Pasteur (inventatorul pasteurizării fără de care n-am mai putea cumpăra lapte de la magazin), Georges Pompidou (fost președinte al Franței), Nicușor Dan (actual președinte al României; toată țara știe că a făcut matematica, dar puțin știu că a intrat tocmai la instituția asta extrem de selectivă), Theodor Paleologu (toată lumea îl știe fie de la radio, podcasturi, fondator al Casei Paleologu sau măcar din librării).<br><br>Dacă ai vrea să știi cum e să fii student la ENS, poți să vezi filmul <i>Le Théorème de Marguerite</i> (2023)."
  },
    {
    word:"schimnicie", aliases:["schimnicii"],
    phon:"/schim-ni-cI-e/", tag:"religie", tagLabel:"religie",
    book:"doamnap",
    images:[],
    why:"„evadat din schimnicia școlară”-„Doamna Pylinska și secretul lui Chopin” de Éric-Emmanuel Schmitt",
    story:"Vine de la schimnic, adică un om care alege să trăiască izolat de societate (prin păduri, peșteri și alte pustietăți) pentru a putea să se dedice total credinței în Dumnezeu. Adică, altfel spus, pustnic. Sunt sigur că nu și-au dorit niciodată asta, dar unii pustnici au devenit chiar celebri. Îmi vin acum în minte Sfântul Daniil Sihastrul (cine merge la Mănăstirea Putna, îi găsește și chilia în apropiere) sau Sfântul Ioan Casian (care a trăit într-o peșteră pe lângă Constanța. Abia ajungi la ea, darămite să mai și locuiești 365 de zile acolo...).<br><br>Ce-i drept, și perioada școlară poate fi, tras de păr, o schimnicie, cum zice Éric-Emmanuel Schmitt: elevii sunt izolați de societate (fericiți cei ce nu au de plătit facturi), ducând o viață plină de cumpătare (în general, contrar prejudecăților, majoritatea elevilor nu sunt așa prăjiți cum mai arată la televizor; studenția e aia care te lecuiește de tocilăreală și ore de culcare), închinată rugăciunii (cu intensitate maximă mai ales în săptămâna tezelor) și mântuirii sufletului (prin credința în viața de după bac)."
  },
  {
    word:"Bulevardul", aliases:["Bulevardul Elisabeta","Bulivar","bulivar"],
    phon:"/bu-le-vAr-dul/", tag:"locuri istorice", tagLabel:"locuri",
    book:"vero",
    images:[],
    why:"-La bulivar, birjar! La bulivar!...",
    story:"E cineva care, după ce a terminat <i>„D-l Goe”</i>, s-a întrebat <i>care bulevard</i>?<br><br>Întreb de curiozitate, pentru că, atunci când eu am citit pentru prima oară povestioara asta (parcă sunt secole de atunci), am fost atât de <i>ha-ha-râs plictisit-o poveste cu un băiat răsfățat-satiră la adresa societății-Caragiale fin observator social-boring-next</i> încât am ratat detaliul care m-ar fi făcut să-mi placă foarte mult textul ăsta. Și în schimb, mi-a rămas în minte doar sub eticheta că e un alt text de-al lui Caragiale în care îi ia la mișto pe oamenii din vremea lui. Ceea ce sună fun când citești Caragiale pentru prima oară, a doua oară, dar deja de la a cincea schiță începe să nu-ți mai pese. Și mai e și vârsta. Ce te interesează la 10 ani superficialitatea umană și lipsa de educație? Alea-s probleme de oameni mari. Mai haios e Căpitanul Chilot. Efectiv, are doar chiloți și pelerină și o groază de aventuri. <br><br>Îți fac o mărturisire, încă de la 10 ani mi-au plăcut muzeele de istorie. Nu mă huidui atât de repede! Sunt ciudat, dar nu și tocilar. Lasă-mă să elaborez. Muzeele sunt, în 9 cazuri din 10, locuri plictisitoare, admit asta cu mâna pe inimă. La fel ca la Caragiale, e interesant să vezi pentru prima oară un vârf de lance din neolitic sau o mănușă de epocă. De la a cincea încolo, treci printre vitrine așa, din simț obsesiv-compulsiv ca să dormi liniștit că ai văzut tot ce era de văzut. <br><br>Dar ceea ce face un muzeu cu adevărat interesant (să prindă viață, cum ar zice firile mai poetice) sunt poveștile alea absolut mind-blowing care nu apar pe nicio etichetă. Să vezi. Eram cândva, demult, într-un muzeu de arheologie plin de vase, monede și tot felul de alte bucățele metalice. Plictisitor până în măduva oaselor. Că tot era și un schelet rătăcit pe acolo. Și cum defilam eu prin sală, am văzut un grup în fața unei vitrine și un tip care le explica ceva. Nu era ghidul muzeului, era un tip foarte obișnuit. Putea foarte bine să lucreze într-o corporație. Si el povestea cum fărâmițele alea erau de fapt ce a mai rămas dintr-o diplomă romană, adică un fel de buletin antic. Deținătorul a fost un veteran născut într-o provincie cucerită de romani. Ce era nașpa cu acești străini era că nu aveau cetățenie romană. Practic ei nu puteau să voteze, nu puteau să-și cumpere proprietăți și nu puteau să se căsătorească legal. Dar Imperiul Roman a venit cu o idee foarte modernă: puteai primi cetățenia romană ca premiu. Nu conta dacă erai din deșertul Saharei, din pădurile germane sau chiar din Dacia, dacă făceai ceva bine, puteai avea aceleași drepturi și libertăți ca orice cetățean din Roma. Diploma aia din bronz demonstra că omul și-a îndeplinit stagiul militar obligatoriu de 25 de ani (și a reușit să rămână în viață, cel mai important), astfel că a devenit cetățean roman cu drepturi depline. Putea să iasă la pensie, să-și ia o căsuță drăguță undeva la mare și să trăiască fericit până la adânci bătrâneți. <br><br>Bucățile alea metalice ascundeau de fapt o poveste mind-blowing a unui om care a trăit acum mii de ani și a unei altfel de lumi. O lume în care nu era suficient să te naști, ca să ți se garanteze drepturile. O lume în care dacă munceai serios, puteai să-ți depășești condiția.<br><br>Și de atunci am rămas fascinat de viața oamenilor din trecut. De asta îmi plac mie muzeele de istorie. Pentru că poți da peste niște povești absolut fabuloase din epocile trecute care, în mod paradoxal, erau foarte diferite, dar uneori și foarte asemănătoare cu viețile noastre de azi.<br><br>Revenind la Mistăr Goe. Dincolo de clișeul cu satira la adresa societății, este povestea unui puști de pe la 1900 care e dus de familia lui cu trenul la București, să vadă parada de ziua națională. Și din această perspectivă, textul devine un muzeu interactiv. <br><br>Doar că, din păcate, și aici ai doar etichete care îți stârnesc întrebări fără răspuns. De ce era îmbrăcat Goe în costum de marinar? De ce ziua națională nu era sărbătorită pe 1 decembrie, ci pe 10 mai? Și, mai ales, care bulivar? (cum avem noi azi romgleza, cucoanele aveau rom-franceza; pur și simplu pronunțau prost franțuzescul boulevard).<br><br>Pot spune că am și un motiv personal pentru care vreau să deslușesc odată și pentru totdeauna care-i faza cu acest bulevard. Când mi-a trezit prima oară interesul, i-am cercetat povestea, am aflat tot ce voiam să știu și am mers mai departe mândru că am mai învățat ceva nou. Apoi peste vreun an sau ceva, iar am dat peste el într-o carte și am zâmbit superior. <i>Da, Bulevardul... Bulevardul care era...</i> Și m-am blocat. Uitasem tot. Iar, dă-i și cercetează. Iar am trecut mai departe. Zilele trecute, când am dat din nou peste el în <i>Scenele bucureștene</i> ale lui Vero mai că am înnebunit. Uitasem ce era cu el.<br><br> Sunt idiot. Știu. Acum am și dovada.<br><br>Uite de asta trebuie neapărat să-l trec în dicționarul Nedumirescu, ca să-mi intre în cap de-a pururi și în vecii vecilor.<br><br>Dacă azi cucoanele ar urca în taxi și ar zice replica, ar primi niște priviri nedumerite. Care din ele? Kiseleff? Magheru? Unirii? Aviatorilor? Sau celelalte? Ei bine, în epoca lor, nimeni nu întreba care, pentru că nu mai era altul. <br><br>Pentru bucureștenii din 1870, termenul de <i>bulevard</i> era ceva modern. Doar în Occident găseai astfel de artere foarte largi, drepte, cu circulație intensă și arbori de o parte și de alta pe trotuar. La noi, găseai străzi, ulițe, cel mult căi. Drepte? Da, dacă prin drepte te gândești la o linie trasată de cineva în timp ce merge pe bicicletă. Nu mai mergea. <i>Trebuie să avem și noi un bulevard serios. Ce, noi suntem mai fraieri? </i>și-ar fi putut zice unul din cei mai buni primari al Bucureștiului, Pache Protopopescu (fie-i amintirea veșnică). Așa că a trasat pe hartă o linie orizontală între rondul de la Universitate și Mănăstirea Sărindar (unde e azi Cercul Militar) și a numit-o foarte sugestiv <b>Bulevardul</b>. Cum încă nu exista Arcul de Triumf, parada de 10 mai (ziua națională a României de atunci) defila aici, prin fața statuii lui Mihai Viteazul. De-a lungul timpului, ca orice bucureștean care se respectă, bulevardul ăsta ba s-a întins mai mult decât îi era plapuma, ba a suferit tăieri bugetare, ba și-a schimbat numele în funcție de anturaj. <br><br>Extinderea lui maximă a fost de la rondul de la Universitate până la Operă. Azi ține doar de la Universitate și până la statuia lui Mihail Kogălniceanu.<br><br> Pentru că trebuia să poarte un nume și pentru că cea mai importantă instituție de lângă el era Universitatea, i s-a zis <b>Bulevardul Academiei</b>. Apoi a primit numele primei regine a țării, devenind <b>Bulevardul Elisabeta</b>. Comuniștii aveau boală pe regalitate, așa că l-au redenumit <b> Bulevardul 6 martie</b>, în cinstea zilei în care a venit la putere primul guvern comunist, al lui Petru Groza. A murit și Gheorghe Gheorghiu-Dej, primul lider comunist, și n-au găsit alt mod să-i păstreze amintirea, decât transformându-l în bulevard. <b>Bulevardul Gheorghe Gheorghiu-Dej.</b>Apoi a venit Nicolae Ceaușescu și, cum lui îi plăcea foarte mult să schimbe chestii, i-a schimbat și el numele, în <b>Bulevardul Mihail Kogălniceanu</b>. Comunismul a căzut și în sfârșit lumea a zis <i>știi ce? Îmi plăcea mai mult numele vechi. Hai să nu mai umblăm niciodată la el</i>. Și uite de asta azi îl strigăm tot <b>Bulevardul Elisabeta</b>.<br><br>Dar gândindu-mă un pic, în clasamentul străzilor fără de care Bucureștiul nu ar fi București, ar fi detronat doar de Calea Victoriei. Aici se află Cișmigiul (și doar el ar fi destul să justifice afirmația), Palatul Primăriei, Palatul Arhivelor Naționale, Hotelul Corinthia, Cercul Militar, Liceul Gheorghe Lazăr, Universitatea și nici n-am ajuns la jumătatea listei. <br><br>Dacă aveau totuși dreptate primii oameni care l-au văzut? Dacă până la urmă nu are nevoie de un nume și este de fapt bulevardul bulevardelor? THE Boulevard? BulevardUL?"
  },
];

// Fiecare carte are un id unic, un titlu si o coperta (poza adaugata manual de tine).
// "cover" poate fi fie un link catre o imagine online, fie o imagine codificata base64 -- la fel ca la logo.
// Ca sa legi un cuvant de o carte, pui id-ul cartii in campul "book" al cuvantului (in loc de null).
const BOOKS = [
 
    {
    id:"corespondenta",
    title:"Corespondenta",
    cover:"coperti/corespondenta.png"
  },
  {
    id:"doamnap",
    title:"Doamna Pylinska și secretul lui Chopin",
    cover:"coperti/doamnap.png"
  },
  {
    id:"vero",
    title:"Scene bucureștene. 1919",
    cover:"coperti/vero.png"
  }

  
];
