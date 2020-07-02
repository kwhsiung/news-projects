import * as covid19Disinformation from './covid19-disinformation/zh-TW'
import * as peng23 from './peng23'
import * as rent from './rent'
import * as referendum from './referendum'
import * as electionNews from './election-news/zh-TW'
import * as politicalContribution from './political-contribution/zh-TW'
export default Object.assign({
  'FOREIGN_LABOUR': {
    'I18N': 'Việt',
    'TITLE_1': '窮得',
    'TITLE_2': '只剩一條命',
    'HEADER_CONTENT_1': '在故鄉，他們窮得只剩一條命。',
    'HEADER_CONTENT_2': '在這座島，他們即便能掙到錢，也不一定有命回家⋯⋯',
    'SECTION_2': '我爸爸說他要來台灣照顧我，我說他老了不要再來，爸爸我已經會工作，坐船很危險不要來，可是他說我在這邊一個人，不放心，所以要來照顧我，跟我一起工作。',
    'SECTION_3_1_1': '2018 年 3 月 19 日凌晨，兩名越南籍偷渡客在台東縣潭年村塔瓦溪出海口溺斃，同行二十幾名同樣來自越南的偷渡客，還有兩名台灣籍人蛇集團成員也一併被逮',
    'SECTION_3_1_LINK': '（延伸閱讀）',
    'SECTION_3_1_2': '。溺斃的其中一名越南人名叫潘同甘，原本在越南河靜省的老家捕魚維生，2004 年時輾轉來到台灣當漁民。沒兩年，潘同甘發現薪資扣完仲介費後所剩無幾，於是逃跑四處打零工，最後落腳在山區菜園當農民。',
    'SECTION_3_2': '2015 年，潘文善跟上老爸腳步，花了 8,000 美金仲介費來到台灣。兩人命運相似，潘文善只在第一家紙箱工廠待了 20 個月，就因為實領所得太低而展開逃逸生活，最後索性和潘同甘一起上山種菜。去年 9 月，潘同甘在宿舍為其他同鄉的農工們煮晚餐，遭警方突襲逮捕，潘文善和同鄉們連忙從後門逃跑，躲過一劫。潘文善說，爸爸回去沒多久，就一直擔心他在台灣過得太苦，逃逸生活又非常壓抑，主動提議要偷渡來台灣照顧他。未想，潘同甘再次踏上台灣土地的那一刻就沒了呼吸，再也無法照顧兒子了。',
    'SECTION_4': '收到爸爸死訊的那天傍晚，潘文善還在農地裡忙著種菜。第二天，潘文善忙不迭趕下山，想先去移民署投案，再去殯儀館認屍。好巧不巧，潘文善在下山的路上就被警察逮捕，解釋了老半天才讓警察相信他正要去投案，最後放他自行搭車前往台東自首。',
    'SECTION_5': '結束一連串投案自首的筆錄程序後，移民署官員帶著潘文善前往殯儀館認屍。一路上，潘文善看似沉穩淡定，沒想到冰櫃才剛打開，他就激動得無法自己。',
    'SECTION_6': '那天，潘文善伏臥在父親的遺體上，說了好多好多的話。',
    'SECTION_7': '爸爸，錢不重要了，我要帶你回家。',
    'SECTION_8': '「潘同甘，雖然你在台灣不幸過世，但我們會帶著你的靈魂返回越南。」',
    'SECTION_9': '潘同甘要火化的那天，他的許多越南同鄉都特地請假來見他最後一面。只是，勢必有更多和他一樣處於逃跑狀態的人，無法親自到場送他最後一程。',
    'SECTION_10': '潘同甘的棺木準備送進焚化爐的前一刻，潘文善再也壓抑不住自己的悲傷，想要攔住父親的棺木。',
    'SECTION_11': '火化的過程中，來自台東聖母醫院的越南籍修女，以及同樣在醫院工作的服務人員，不停安撫潘文善的情緒。',
    'SECTION_12': '離開殯儀館後，潘文善一路背著爸爸的骨灰不願放下。一名嫁到台灣十幾年的親戚主動提供自己的車，打算載著潘文善去桃園機場搭乘隔日的班機。即便在車上將近十小時的路程中，潘文善一刻也沒有放下過父親。',
    'SECTION_13': '按照越南習俗，亡者的骨灰在回到家的路上，一路上要不停丟擲錢幣作為「過路費」。那天夜裡，從台 11 線一路到國道 1 號的路面上，陸續響起了銅板落地的清脆聲響——那是潘家父子在台灣最後的足聲。',
    'SECTION_14': '夜裏，潘文善堅持不肯到任何人家裡留宿，一行人索性直接找個安靜的角落，彼此無言地等待天明。',
    'SECTION_15_1': '潘文善的脖子上有個十分惹眼的船錨刺青。',
    'SECTION_15_2': '他說，在到台灣前，他也曾在東南亞其他國家的工廠裡打工，但多數人看到這刺青時，聯想到的，都是他在老家的漁民身份。潘文善卻說：「我刺這個其實不是想要再出海打漁，而是希望不要再漂泊，有一個可以靠岸的港口⋯⋯我想安定下來，有一個家可以給我回去。」',
    'SECTION_16': '其實我知道爸爸辛苦工作，也是想讓我可以存錢蓋房子娶老婆，因為我們在越南沒有房子，就沒辦法結婚有自己的家。現在爸爸這樣，沒有錢我覺得也沒關係了，我不想要再四處工作了，我要帶爸爸回家，以後我在越南海邊抓魚也可以生活了。'
  },
  'FOREIGN_LABOUR_II': {
    'I18N': 'Việt',
    'TITLE': '沒有路的地方',
    'SUB_TITLE': '往前望是漆黑，往後看是荒蕪',
    'OG_DESCR': '越南移工黃文團的遺體，在嘉義縣阿里山上一處極隱密的樹林中被人發現；當時他的頭部已經腐爛，雙手卻仍銬著警用手銬。殘酷的是，發現他遺體的人，是他正巧來台旅行的哥哥⋯',
    'SECTION_1': '我是黃文團在山上工作的同事，他前幾天在山上被警察抓到上手銬，頭部還被警察的槍打到流血，現在不知道是死還是活，你們趕快上山找他！',
    'SECTION_2_1': '2018 年 4 月 8 日，黃文立持觀光簽證從越南來台旅遊，才下飛機不久，就急著和將近兩年沒碰面的弟弟黃文團碰面。阿團在 2016 年 6 月來台，因為不甘心漁工收入過低，無法償還來台前付出的高額仲介費，於是不到半年就選擇放棄原本的合法工作，到山上四處非法打工；有時採茶，有時也當違法盜採珍貴林木的山老鼠。',
    'SECTION_2_2': '阿團和哥哥阿立碰面時，說山上的工作和一般沒兩樣，只是比較零碎，不是總有錢賺，但要哥哥不用為他擔心，放心在台灣享受旅行就好。',
    'SECTION_2_3': '10天後，阿立在台灣工作的妹妹黃氏河接到一通不明來電。電話另一頭的男人說，阿團幾天前在山上當山老鼠差點被警察逮走，追捕過程中他的頭部遭警用網槍射傷流血，脫逃後生死未卜，要她們儘速上山幫忙找人。',
    'SECTION_2_4': '次日，阿立靠著其他山老鼠的協助，在阿里山上一處極為隱密的樹林中，找到了弟弟的遺體。',
    'SECTION_2_5': '當時阿團赤裸著上身倒臥在樹林中，身上雖然看不出什麼傷口，但整個頭部腐爛發綠佈滿蛆蟲。更讓他感到驚嚇的是，阿團僵直擺放在胸前的雙手，竟被警用手銬牢牢困住，上頭甚至還標示著員警姓名。',
    'SECTION_2_6': '阿立嚇壞了，他甚至不知道該不該報警。',
    'SECTION_3': '阿立和妹妹阿河說他們無法相信警方，因此透過在台多年的越南籍神父阮文雄找上媒體。他們認為阿團的死因不單純；假如其中有冤，希望媒體協助照見。',
    'SECTION_4': '阿團的死訊和遺體位置，後來輾轉透過越南在台辦事處，轉達給台灣警方知情。警方通知阿河前往殯儀館認屍那天，阿立則帶著媒體再度上山。他認為，只要大家能看見阿團是在什麼樣的地方喪命，就能更理解他弟弟身上的故事。',
    'SECTION_5': '跨過路的盡頭，再過去，就是沒有路的地方了。',
    'SECTION_6': '在人們稱之為獸徑的林蔭之下，有人的足跡被悄悄隱去，也有人的血跡被永遠地留在這座島嶼。',
    'SECTION_7': '踩著獸徑頂著暴雨，阿立艱困地攀下深達 20 米，接近垂直的泥濘山溝，只為讓我們看一眼弟弟是在什麼樣的地方送命。',
    'SECTION_8': '「阿團，我是哥哥阿立，我來帶你下山。等一下我們要先去殯儀館，再之後我們就回越南的家。你有聽到的話，就到你的牌位這裡來。」',
    'SECTION_9': '阿團最後陳屍的地點，距離警方最後見到他的位置，只有大約 200 公尺。阿立很疑惑，當初弟弟逃脫後，警方到底有沒有去找過他？為什麼會讓弟弟銬著手銬，在那樣的地方孤單地死去？',
    'SECTION_10_1': '阿團在 2016 年 6 月時，留下懷有身孕的妻子在故鄉照顧父母，隻身來台當漁工。阿立說，阿團的妻子和父母聽到他的死訊時，一起暈倒了。',
    'SECTION_10_2': '阿團的兒子，從沒有機會感受父親的懷抱。',
    'SECTION_11': '2017 年 2 月，阿團在山上採茶時不慎摔斷手，為了就醫而被迫投案自首。妹妹阿河說，當時阿團打電話向自己借 10 萬元醫藥費，她才曉得哥哥在台灣的非法處境。',
    'SECTION_12': '那時候哥哥躺在醫院一直哭，一直哭，說來台灣不但完全沒賺到錢，還非法，最後還要跟我借那麼多錢看醫生，他很自責。',
    'SECTION_13': '阿團的告別式上，來了近 30 名在台工作的越南親友，其中有許多人目前的狀態，就是所謂的「失聯移工」。',
    'SECTION_14': '阿團被追捕那天人就在現場，卻幸運逃過一劫的阿黃，也參加了這場告別式。他說，阿團的不幸消息傳開後，同鄉的人到現在都不敢再接山老鼠的案子。他們也打定主意，以後被抓，絕不再冒死逃跑。',
    'SECTION_15_1': '那天下山，阿團走第一個，我在最後面，我們總共有 6 個人。我聽到開槍的聲音，還不知道發生什麼事，因為我離他大概有 50 公尺遠。後來大家趕快放下手邊的東西，分開跑掉⋯⋯',
    'SECTION_15_2': '阿團失蹤以後，我們一開始覺得大概是被抓而已，但還是有上山找過 3次，最多的時候有 4 個人一起找，最後在19號那天才找到⋯⋯之前我也擔心在台灣逃跑工作會出事情，現在阿團的事情超過我們的想像了，以後如果被抓就不會逃，要回去了。',
    'SECTION_16_1': '阿黃說，其實上山的人什麼工都兼著做。有茶就採、有菜就種，不像外界想像，總是在當山老鼠；畢竟那超累，有台灣老鼠頭約，他們也未必都接。阿團比阿黃早進那行，出團一次通常上山三、四天，下山領錢則是看自己能背多少檜木，多則兩萬元，少則一萬，對他們來說，辛苦也值得。',
    'SECTION_16_2': '阿黃與阿團，同樣都出身越南河靜省的貧窮家庭，來台後也都選擇逃離原有雇主，到山上四處打工賺錢。為什麼跑？阿黃說來台後感覺被騙，因為工廠根本沒有加班機會，居住環境惡劣還要苛扣薪資，害他花了快兩年才還完 5,500 美金的仲介費。假如不跑，三年合約到期時，他根本賺不到多少錢，因為前兩年收入都送給仲介了。',
    'SECTION_16_3': '「在台灣其實也很競爭，外勞很多找工作不容易，工作上的陷阱也多，很多雇主用騙的，回去以後我不會再推薦別人來台灣。要不是仲介費那麼高，不然我一開始就選擇回越南了。」',
    'SECTION_17': '這名淚流滿面的年輕人，是阿團另一名哥哥的小孩，才剛滿 18 歲沒幾個月，就跟緊家族長輩的腳步，來到台灣工作。事實上，他的父親也是在台灣的失聯移工。這天，他的父親也出席了阿團的告別式；阿立直到告別式開始，才讓我們知道有這名哥哥的存在。',
    'SECTION_18': '要將阿團骨灰送回越南的前一晚，阿立和阿河前往素有「外勞聖地」之稱的台中市東協廣場，想買些衣服送給阿團的兒子。他們打算告訴他：「這是爸爸在台灣工作時買給你的禮物。」',
    'SECTION_19_1': '警方在受訪時表示，森林警察追捕山老鼠的一切行動、配備都合法，行動本身存有風險，甚至可能遭不法分子攻擊，所以才會配備「防暴網槍」等器械。',
    'SECTION_19_2': '針對黃文團拒捕脫逃後不幸罹難的事件，警方表示，「我們只是在工作，山老鼠和逃逸外勞是要跟你拼命」，所以面對人犯第一時間冒死脫逃的狀況，警方沒理由跟著一起冒險跳下山溝，但事後為了人犯的人身安全著想，曾多次派出警力在附近搜尋，可惜始終找不到黃文團的身影。',
    'SECTION_19_3': '雖然黃文團正式驗屍報告尚未出爐，但葬儀社相關人員研判，黃文團的死亡時間，推估是在逃離警方追捕後兩、三天時間。',
    'SECTION_19_4': '警方私下批評，這些逃跑外勞跑去當山老鼠，全是在偷台灣的財產。'
  },
  'FOREIGN_LABOUR_III': {
    'I18N': 'Việt',
    'TITLE': '農地上的 Andy Lau',
    'TITLE_1': '農地上的',
    'TITLE_2': 'Andy Lau',
    'SUB_TITLE': '當他們合法工作時，往往只能得到非法的對待。無奈之下，他們只好非法進入農業，耕種餵飽台灣人⋯⋯⋯',
    'SECTION_2_1': '第一次見到 Andy Lau 是在一輛計程車上，當時他和女友 Tuti 正要出門匯款回印尼，司機問我願不願意和他們拼車，我說沒問題，就這麼開啟了相識的契機。',
    'SECTION_2_2': '然而那次碰面，我們並沒能真的說上幾句話；一方面是我顧著和司機聊她那超過 800 位的失聯移工載客清單，二方面是因為他的中文實在太爛，很難聊。後來我才知道，其實 Andy Lau 陸續在台灣待了 15 年，但大部分時間他都在海上打魚給台灣人吃，所以中文一直沒有提升的機會。',
    'SECTION_2_3': 'Andy Lau 的個頭不足一米六，但體型格外壯碩，配上黝黑的皮膚和滿臉落腮鬍，以及存在感滿點的金項鍊，很難讓人不注意到他的存在，更難忘懷。',
    'SECTION_2_4': '正因為 Andy Lau 是如此顯眼又難忘的存在，更讓我相信，其實鄉下農村裡的人們早有默契，若不是成千上萬像 Andy Lau 這樣的失聯移工的存在，台灣農業早就走向更嚴重的衰敗，所以實在沒有什麼好理由找碴，向移民署檢舉他們非法打工的事。',
    'SECTION_2_5': '根據勞動部統計，截至 2018 年 4 月底，台灣共有超過 68 萬名外籍移工，其中超過 40 萬人集中在鎮日喊著「缺工」的製造業中，另外也有 25 萬人分佈在台灣大大小小家庭與安養院中，看照年邁的長者們。這些遠渡重洋來台賣命工作的移工大軍，撐起了台灣岌岌可危的 3K 產業與如履薄冰的長照缺口。然而，同樣缺人缺到只靠「千歲團」們在苦撐的農業，卻不被允許合法聘用外籍移工。',
    'SECTION_2_6': '公開的秘密就是 — 不能用，但大家都聘到人了。',
    'SECTION_2_7_1': '台灣目前總計有超過 5.1 萬名失聯移工，他們當中的許多人，填補了台灣的農業人力缺口',
    'SECTION_2_7_2': '，Andy Lau 也是他們其中的一員。在過去，他領著說出來該讓台灣雇主感到丟臉的薪酬，合法卻血汗地捕魚給台灣人吃。這幾年，他說感謝老闆照顧，包吃包住讓他領著還像樣的收入，非法種菜給台灣人吃。',
    'SECTION_3': '台灣農業人口嚴重老化，人力缺口爆炸大，目前卻仍無法合法聘用外籍移工。為求生存，許多農家透過仲介、外籍配偶或種種管道協助，招聘或容留從其他產業「逃逸」的移工協助農事。經年累月下來，失聯移工們反倒成為維持農村存活的力量，也是農家之間公開的秘密。',
    'SECTION_4': '一名農家表示，許多來自越南、印尼的移工們「農業技能點滿」，不用花太多心思調教就能上軌道，而且印尼失聯移工多半吃苦耐勞、安分、怨言少，加上薪水只需本土勞工 2/3（甚至1/2）就請得起，是許多農家偏好的聘僱對象。',
    'SECTION_5': '即便是容貌相對容易辨識的印尼移工，一旦戴上帽子、斗笠和面罩後，除非走近細看，否則一時間也很難被外人辨識出來。進一步說，即便認得出來，其實農村的人們也多半已接納，甚至仰賴他們的存在，通常不願意主動檢舉。',
    'SECTION_6': '農忙時期的農地上，許多被戲稱為「千歲團」的老農們在幫忙採收，平均年齡通常高達 70 歲，只要十幾人一起幫忙採收，總年齡就超過千歲了。她們感嘆地說，年輕人多半不肯屈就農業，若沒有這些「非法外勞」協助，台灣農業早就完了。',
    'SECTION_7': '烈日下，一對印尼夫妻正在農地上抓緊空檔吃午餐。他們各自陸續在中東、東南亞、香港、台灣等地工作過，為求生存，根本沒有時間照顧被遺留在家鄉的孩子。印尼男人的手臂上有著看來粗糙的刺青，那是他孩子的出生年月日，以及妻子的名字。',
    'SECTION_8_1': '其實 Andy Lau 看起來根本不像天王劉德華，本名甚至也不叫 Andy，只是為了台灣人方便記憶，他們來台後多半會另取個好記的名字。「我叫 Andy」，這名黝黑壯碩的男子靦腆地說；「喔，你和天王劉德華同名耶，那以後你就叫 Andy Lau吧！」',
    'SECTION_8_2': '這個名字就這樣莫名其妙跟了他四年。',
    'SECTION_9': '當 Andy Lau 辛勤地在農地上幹活時，女友 Tuti 就留在工廠中分裝、包揀他們從農地上帶回來的生菜，最後送到消費者的餐桌上。Tuti說，許多和她一樣的女工們原先都是來台當看護的，但雇主常常違法叫她們到工廠、農地中幹活，卻只能領到一樣的薪水，後來她們索性「逃跑」到其他農村、工廠中非法打工，做的事情一樣，但薪水「有尊嚴」多了。',
    'SECTION_10': '現在的我是非法的，沒有任何援助，也許也不該得到任何幫助。但當我的身份合法時，又何曾享有合法的權利呢？',
    'SECTION_10_credit': '《逃 / 我們的寶島，他們的牢》，P.78',
    'SECTION_11': '許多長年聘僱非法移工的農家，都會提供完善的宿舍。我們採訪到的這個移工宿舍乾淨整齊，和一般的學生、公司宿舍相去不遠，差別只在於出入口特別隱密，而且牆上是用印尼文寫著：「亂丟垃圾的是狗。」',
    'SECTION_12': '結束了一天的農忙，Andy Lau 和女友 Tuti 回到宿舍簡單盥洗，吃飯後就得早早就寢，為明天的農事保留體力。今年五月，他們決定自首投案，回國結婚，並照顧 Andy Lau 失明多年的母親。',
    'SECTION_13_1': 'Andy Lau 從來沒有機會上學讀書。他的父親在他 10 歲時過世，從此之後他就得種田養家，15 歲開始出海捕魚，並陸續在巴基斯坦、斯里蘭卡、模里西斯的漁船上工作。他的幾個兄弟姊妹都是相似的命運，最小的妹妹在多年前前往沙烏地阿拉伯工作後，就和家人失聯至今。對他（以及他的許多同鄉）來說，一個安穩、安定的家庭恐怕是件難以想像，卻也因此教人無限嚮往的事。',
    'SECTION_13_2': '將近 15 年前，Andy Lau 開始在台灣的漁船上工作，一幹就是 9 年。當時他船上的同事們多半來自越南，他索性連中文都不用學了，只靠打手勢溝通，大家也只需要知道魚叫什麼名字就好。船上的薪水慘不忍睹，一萬七千元再讓仲介東扣西減後，最初的那兩年每個月拿不到一萬元，但他還是忍了下來，還清所有仲介費用。',
    'SECTION_13_3': '「你都能忍 9 年了，為什麼最後還要逃跑？」',
    'SECTION_13_4': '面對我們的提問，Andy Lau 還沒能開口前，女友 Tuti就搶著幫他回答了。她說：「他還沒認識女生以前都很老實，什麼都不懂，什麼工作他都 OK 可以做。結果後來認識一個女生，說叫他一起跑掉，他就跑了。」',
    'SECTION_13_5': '「所以……他是被前女友帶壞的？」<br>「對！」',
    'SECTION_14': '農場不只包住也包吃，冰箱裡隨時塞滿雇主準備的雞鴨魚肉和新鮮蔬果。唯一需要他們另外掏錢買的，是料理家鄉菜需要用到的石缽與辛香料。晚上八點，工人們才剛從田裡回到宿舍不久，早已過了吃飯時間的台灣農村，才正要飄起異國的家鄉味。'
  },
  'MORE': '看更多',
  'RELATED_REPORT': '其他議題',
  'DONATE_PREFIX': '贊助',
  'DONATE_POSTFIX': '報導',
}, covid19Disinformation, rent, referendum, peng23, electionNews, politicalContribution)
