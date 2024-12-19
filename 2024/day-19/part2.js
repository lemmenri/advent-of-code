const input = [
    "ugw, wbgg, uwu, ww, buuuu, bggu, rrgub, uuwr, rrgr, wwg, bwgw, rw, uwwg, ggrb, rwg, bbug, ggrw, bbb, wruwr, brg, wgrg, grwb, gbg, bggwwrb, rr, bwrw, wbwwb, grw, gbrgww, rrrug, ubuggu, bgb, wbbr, guuwgub, ugwbb, urbw, rbgwg, ugg, bbwu, bggrbuu, gurb, wggrgwb, ugubwg, ru, rwruub, bgw, buug, wgbw, gubwru, wu, uubw, gurw, bbrb, wru, rur, uw, gwbwgr, wwb, wrw, grgugurb, gwuu, rruwwug, www, gur, rgu, ruwgub, rwug, bb, grrw, gbbbwr, brwgg, wrbwgwb, buww, gbug, bgug, rrbgg, bwrrg, rbu, wwuuub, bwwgrr, rgw, grrgru, wuuggg, rwwb, bu, rrr, bgr, brrggrrw, buur, wr, uuuu, rgbrgur, rwwru, bgwuwg, wbbgr, wurubgrg, rbugbu, wwu, ubwwr, wbwbwwgw, wbr, gwbb, rrw, g, gwrg, ugb, ub, ggb, uwrur, gurr, guwwubr, urgg, uwr, bgggru, ugrbg, wbbggb, urur, rubgguu, guwb, rbbwrwbw, bgrb, wrg, wbggb, rbbbgw, uuwuu, urrwg, wg, ruu, brgrwgg, bgbw, wgu, gbw, ruuuugw, wuw, ubu, ggguwb, rwbubbr, rrg, bbrbr, wggbuu, rgg, burwurw, gubrgg, rrb, bbw, urb, urbwrbwb, bugu, rbwug, rgb, ubgbw, wurrrb, bwbbg, rbw, bbubrw, gug, bbg, rruw, uuuwu, bbbr, gbrwrrr, wwgb, wbrrbwg, uwwu, ugwbw, bbwrg, rrbwrb, bgbrggub, gbbbbb, bgbbrgb, rgrg, bubwu, bur, rub, guu, uuw, bru, rbbbbb, urugw, wruw, uwrwur, uug, wgrgwgu, gbgwgu, ggu, grwugu, bubr, urwwg, bbwgurg, urwgr, gwu, ubgwbur, brr, rwu, wub, ggw, bgrurbg, wrwggg, wbg, uwurww, gugug, rubuur, ggwb, wbrw, wubr, rgguu, gruw, bgwug, uwb, uuu, uwgr, wwgu, urw, rubwubu, gugrubw, bwbrg, rgub, gwbrwwg, uu, bgrwwg, gbrggwbr, ugrw, bwg, ugbub, uwbuu, wgbug, wgrbggbw, bgrbr, gwgr, rbub, gwb, gwwu, wwrurwu, uggrww, gub, rrbubgur, uwrr, rbbb, wbgrg, gbwgur, bruru, r, ugrbbr, guwggg, bwugg, wburru, rrrrwu, ugbbw, urwub, gwbu, ubr, uugbwg, ubww, rwuur, ubw, wggbg, bug, grgu, wwgg, wgbuw, ubburgbb, gwugw, ruur, bruu, wbgu, gbgr, rrbr, gggb, wur, guw, grrbrgw, brw, rrrrrwwu, ug, rbgb, guggg, bg, wgg, bugwgbrw, wgbbgru, gwwgbu, gbwurr, wrb, wguuwrg, wwr, uwwwbu, bgu, ugu, ugrwug, wbu, gr, wurgb, rwb, rg, ggbrrbrb, bub, uburg, urbbbb, brrwu, wguwbr, rgbbwuub, urug, buu, bwgb, gru, ggrrwg, gurbr, ruw, bwr, gbr, brb, buuu, brwg, bbrw, gw, wwggr, gg, uru, wbb, rbb, uugb, rgrbu, bwugrb, gb, bgg, wug, ruru, grr, wrr, wubbrww, brguww, uwg, rbr, ubb, bgruu, uwwwrb, grrguuu, wwbbb, wrwgw, rugbu, wubbg, urr, ruwgbbub, grrgr, rrwu, wbwg, gwuwrbr, gburw, brurrguw, ubg, rurbu, bgurugrb, gwbguwb, grrwgubw, burw, rgrr, bwgu, wwurb, wb, urg, rww, gwr, grg, rgr, bbuu, rbg, bubww, uub, ruwbgb, grgbg, ggrwg, uwuuu, bbbbwrb, wuu, ggbg, ubuwru, wugubg, bbr, ggg, bubwg, wgr, b, bgrgw, ruwb, ubuuu, bwu, uggb, ggr, ur, gbu, urwwugb, wrugu, uuurb, rurwr, uguggb, buwg, ugwuw, rgwb, bgrbu, gbww, gbb, uuwu, gwgu, uuguu, bwrwggb, bwb, wrbw, rgrb, ubbwwur, grb, gwrb, bbu, uww, buw, rbubrw, rb, bbbrw, gwg, guugg, gwggbrgw, uuuwb, rug, uguguw, gbbu, u, bww, br, gurwggb, wbrwgr, rurgw, rggb, wgw, wwwbbr, ugbgrr, rwr, brgug, wbwgbr, ugr, rrwg, bbur, ubgwwrr, rurwbbu, wwrg, wugrrb, rguwbrr, guuu, rrurubr",
    "",
    "rgruuubbwugwgwbrgwrgwbbuuggubrwuwguuuggrwbrrbgwbw",
    "wuuuuuwbwgbuwgbbrwbwgwbgwubwggbugubburuubgrgggwu",
    "guggbrubbwwwugugbgbururwugwuwububbuburrbwub",
    "rrwurubruwbuuwwbrugububgrgrrurwwbrrurwgwbwrwbwggrwbuwbw",
    "wrwrwwurubbwwrugubuugwguwgurbwgrwugrwwwrubwbburb",
    "rwwuguwbgrgrwurwurwwbwrbbrbrrggrwwwgbwgbugugrrrb",
    "wwbrwgrgwruwguurwrwrggrbgggbrgwubbbwgbwruwg",
    "wubrrguwrrwwrrwwggrbuwwrbbwwrrwurwrrwrruurbwrbwuw",
    "ruuuubgbgruubguwuwburbwrbuwwuugbuggwrbgwwgugrgwgwubwuwwww",
    "rguuuurbrbwurgubguuggwbwuuuuuuwwuggbwbrurrgrgwrggbrwrrguur",
    "grburwrbrrgwrubwurrurugwgurrwwbuwbbrgbrubbrrwbw",
    "ruwbbubbubguwuuuwgbubgruwbubugruwrwguwgwruwbw",
    "rrwbbbbwuwrwuwwwrgrrubgbwwwuwrguwbrbwrrgwgugwwruwrrrgrgrgb",
    "wgwuuwwgwgrrggrruurbgruwgbbrgwgbbwggbubwurwurbwwgbuuggbbb",
    "bwguubrwrrgwgbrwbwugwwbgggurwwuwrgugrgwwbwgwwgwgwrbb",
    "ubrbubbrwbuuwgbgggwbubwbrrwugwrbrruugrggwrubbbrgbwwubwubg",
    "ubbrrwwbbrwwrrgrbubgbrrggburbwuwwgbwbbbrrggwuwggrgwwuuwgg",
    "ugbuurruugwgrwrrrbguubgwwgrrrrrrguwrubbggrbwwbbwrwurwu",
    "rwrrrwubgruurwrubgbwruwrgrrbgugbbwbwwbgbrrrbwbbwbuwr",
    "gwruurwuwbbbuuwguwwrubgwwrrruggwrbwrwguwugbwu",
    "gggbbwubuurbwruuwbwwbuwbwgwbbruuuubrbbrwrguurwbwububrrruwwbw",
    "gugwbbgwuurrwrbwgwbrggugwgrbwbrbgwgrwbgbgb",
    "uwurubgrbruwuuuwbgrggrbrwwuwbgwgggbrrgggwuu",
    "rbwgwwgubwwuruwwbrwwrwrgwuuuwrrggbwgbwruggwurwgbwgbwbubu",
    "rrbguwwrrrwwwbrrbugrbgrwgwubgwrrwugbwgwgbuurgbugruurbbg",
    "ugrrugugbuwgwubgrrgbuurugugbrburrwrbgbbbgubwgrrguwwb",
    "bugwbbruugwubgbbgwbwuubbggwuwwwrwuwruwrwuurwbw",
    "brgwgurgbwwgbgrwgwbwbgwuggruuuwubbbugrbubgwbrrugbrbbrr",
    "grwgbwguwgwbgwuwggbrububugwuurrwugurrburrrwguuuwgrwugr",
    "buuguwburgwrguubrgbuwuwbuurwuuwwgbrbrrgbwrbgrgrwuwwuw",
    "ugwguwuwubggubrbrggbbwbbwgbgwbbwubgrrwguwrubggbbwgburuw",
    "guubrurwrgwbugugruuwggrgrwgwrgbuuwwrrrgurbwgrrw",
    "rrbbbbggbrrbrbggwgwwwwugwwuugruuggbuggwgwbrr",
    "gwrggbrwugruwuwurwrggrbwgubwwrrbruwwruggrgrgub",
    "guubrburrrgwbgwgrwurwwbbbbubbrbgugubugwuwwwwwwwbwubbgubb",
    "rgwgrbrgbbwuububrwwrwgurwrwrburrbgbugugwruubrwgwwuugrrwr",
    "uubrrbrwururwwwuuuwubuuuggbuubgbrggubrbbwurww",
    "urwwbwrrgrbuwbwwbggwwgwuruwwuwrrbwgrbruwwrbugrbuw",
    "uwbgwbrrgwrrrggwuwuwwrrwuuurrbwurwrwurgwgrbw",
    "brgwbugrgruururgurugbrubrwwgwwbrwwwrbugguuuurb",
    "gbbrbburwguwuggwurgbuubwwrrwgbwwurwbwrgrruuburubwgb",
    "rbgbwbubuguwgwwgrwubwgbruwubwbubrwwgurwwuwruuuguubwg",
    "uurrwurrgrgbrrguwgbbrruuurugwggurgubwguugubuwbwbw",
    "bwruwwrbgrubrwwrbwggwgguwbuwugwrbuurggggwgbbbbruuwugbwruwbw",
    "uubbugrgbbwbrbrgbwbbbbuurbbwurbbbrruurrruuwwububb",
    "gurbuwrwwbrugugurrgbrubrbuwwgrbggbwbwrbggwwuuugbrgrwgw",
    "rbrruuwurrbbrrbbrwwgbwurgbgrbrgubrwrurbwbw",
    "brwgwgbrgwwbbwrbbuwrgrbruuggggguguwwuwwbwuwguurwgubgurgg",
    "bwrrbugbrwwwrgurggbgurbgrgggbwwgbbrwbugrwwgu",
    "rubwrwgwgwbgugbbubbubrgbgrwwbrugrrggbbbrrbubgurgbrggbrbrwbw",
    "wugrruguubbbrgbwgrwgubrguwrgugrrurrwwwbubwgwuwgb",
    "uwrurrrbrwgwwbuubbbrrbrubwrggrwrgrurugbwbw",
    "rgwbgugruwugwbgurbbuwbruwuggrwuwurwwurbrbbuwr",
    "ubwwgwbbgwbugrbwggggbwwgwubwwgubwuurgwbw",
    "wbgubuururuwgubwgrbrwwrururugurugurbrrbwgrugrwbw",
    "bwubgwguugbrubuwuubbrrruwbrurbbwbrwbrurbgruu",
    "wguwwgwwwwruwgggurbrruuguwgrurrwbbugrwbggbbwbuwruwwwrw",
    "rbbuuwwuguruwbgugrgruwwbgubgwwrbrbwwwbrbwubbwuguurwuwgbgw",
    "gugwwbwgbgubggurgwugwburguguwwwbgburwwwwrubgwu",
    "uwbrgbugwbggrwbwubruwwwrwuwrbrbgrguugrrggbbbggugbrrgr",
    "urbwrbrrrbgbbuburwbgburbuuuubguggbrwbwrugwgubwrgbbwggr",
    "gbgbbwbwrubrgrbbwbrwuurbbbgurwrggbubwuwwguugwgrububgugrwbw",
    "wbrgbgbwgwgugwwgggruuuuwbugbgrrburwbgrugrurrrww",
    "rwwwrbrwgrwwbbwwuubbrrbwbggugubuuwwrrwrwbgrgggbrw",
    "gwbwrururgwggwwuuurwgrburruuruwwuggwrugrbugwwubwb",
    "ubuuruuugugburruwguurrgbwbwbgwrugwugggbwbbwruurwuur",
    "bgbuubbbwrrbggwurbrbugggrrrrrbugruruwurgggbruggguugru",
    "ggwbrubwrrbgbuwbwuwggwggbwgwuugbburrubrbgg",
    "rrrwgbbgbuwubbgwrbwurgbrurrbuwuwbuwgruurwgggwbubggwbw",
    "urubgubrbbwrwrugwwubwubbbgwurbwrwwwrbwbruugwgrbruuubr",
    "rurrgwrgurubgwbgrwgbrggwwubguguruuwgugbrruwur",
    "rbuggrurwwuwgwbbuwbugugbwrguwbgrrbbbwrwbgrbbubbrwururu",
    "bgbbgrwgrrrgbgggrgrbuugrrgrubgbwrguwbubuurbuwwrbuw",
    "bbbgugrrggubwggbwurruwwgrwgbgrbrgrggubbuuwuuurggrggubu",
    "wggbgbgrgbguwguggugburrrrwgbgbrgbrrwrbbrbbgrb",
    "ubwgbgrbwrugbbubgugruwubrbuwrbwggubuubrgrrbrbwgbrwu",
    "rbuuuruggrwburwggrubrwbrgrgrrgrwbwgruwwwrurwurwu",
    "ubbguubrrgrgruuuwbbwggwggruwwbgbwwbrwrwbwbwggbgwggurwru",
    "uwbuwgruruugwgrgwwrwuuugwubuububgrrrwbwbwubgwugrwwrwguuwwb",
    "bubggggguwgrbuurruwuuugrbbgbgrwggrwrwgwgwrguburrbwbw",
    "bbggwgrggrbrwuuububgwubwbwwwbrgruwbbrugrurbbwrwbwrbbwbw",
    "gwgbwwbgbwwgwrrbguwuggwbwrwrwbbugwwwwububgggg",
    "uwwuwugwugurrgwgrubuggrbrrburrugwwgbruggwrbg",
    "bwurbuurgurbbwuwbrgwugwubrbbbgbbuwguugwuwbrbugwwugrrubgwbw",
    "gwrbwwggbbwwubgwggbrgwugbuwwuururuuwurgbggbuur",
    "rguruuggbrwrbbrbwubuwwugwuuuwwurgrggrrrwrwbw",
    "burgrbrgwurwwurugrggrrgugbwwbgrgbggwwururubguwubgrrugrggb",
    "bgubgwrgwrwrurbgubuuwgrwrurgbbwgwwuuuwbguubuwbgwwwu",
    "bbgrbrgbwgbwbrwbggrbgbugwrgbwugbgubuuuruww",
    "gbrubrgbbubgbwubrbbubwwwwwgurrbgbwbwuugbrggwbrgrurbrb",
    "bwubrrgurgwruwwrwrwbgwggbbrwrrrwurubgrgwbw",
    "ubgwgwwbugbbrbrbwwggbbggrgburwwbbwwggwbgwru",
    "rgurrbbubrurgrrrwwrguubbgururrbgwuwbgrbgrugbgburb",
    "rrbwrrrwuwwgbubgrugrbuugbwuwgwgrbrwwwuubbgrwgggrbwuugw",
    "bbwrbubuggwrrggggggubbbrgggwrrubugwgrubgwgrrwuwwuuwuwwbw",
    "rguwbuggwggggggwgrburwrbgrggwrbbgwrrrgwguuruwruubrwrbwgr",
    "uwwbrbugrgguuwgrbgubwgrugrurrgurbugwrbubbugubww",
    "urbrgubrrbwuururbbwgwuuwrbrwbuuwuuggrbguwubwrurgbwgb",
    "rbrggugruurbrruwwuurbwwbwruuggbwgwubwbrgbrwbubrbruur",
    "guugbbgrrubwwwggwwgrbbbwbbuuuuwwwrwuwruuwggrubug",
    "bwwwubruwuwuuurrrrbgwggwwubwwrggwwwgrgrwgwgwgrrbgbgbguwrr",
    "wbuubrgwwrbrrwbgwrbubruggugrugubrurgubbgwwggrgggrgwbw",
    "ugwgwgguburwggruwgrggugbggubgburwgguggguwu",
    "rguurwurgwrbgwgwbbwbwbrbwwubwwubwbggggwgwuubuwrb",
    "gbbgbbgwggurwrbwwrgwgrwbbwbburggrggwruugwrurgwgbu",
    "rwgbwrwggubuwgrbbbrgubrrbbugurbbggwgrwuuggwwggbrbgg",
    "wurbrwuwrbgwwggrwbwgwuwrbbgugggbwgruubwurgrrbwubrbwbw",
    "gruwuugbrgrrgwbwuuwbrgugbburrrbbwgugbwbgwgwurbggbbuuggg",
    "uuggrrrgrrubbrrguugrwrrbggbugugrgwwwbgbbrgr",
    "urggrwwbubrugrwgrrrruwruurggbgwrrubwrggwbbuwwrrruru",
    "bgrrgwrburuuubuuruubbbubbggwubbugbuwrbgbrrg",
    "ubwugwuggwurgwbwbbwrgrwwgbguwwrugrrubwuuwruuguwuugggrwbw",
    "rgwwburwbgguubbgrbbwwgrguubwurgbuuubrruuwugrwwgbgrggbwbuww",
    "wgbrwruwrrbguwuuwbwggbwwguwgburruurruguburggbu",
    "bubrbggbgbuuwrwwrwurrgbugbburrgrbugwrugubbrbgggrbbrbugg",
    "wbuwrgwbrgwbgwbgwbwurwururrugruurwbbwwgubggg",
    "buuguwgwwbbrbbrwbwgrbwuruuwgruggbbgburwruwbgbg",
    "brubgbbrrburbwbrbrwbrurbwbwburgrrrgwurguub",
    "urwwruuwurbgbwrurbbbgrbbwbwrwrugwrrwrwruubwbugrurgbubwrr",
    "ugbugrbrrrggrbrbbwuwgurubbrwbrurbwgrwwgwwgrggwuuwbu",
    "wgguugwurwgrgrbuwggwwgwgwgbuwgwurwwuuwwuwbw",
    "gruwgbbubugwrgrrwrrgururgrbggbggbuubggrrgrwuubrbgbw",
    "wuwggurubbgbwgwuwgbwwbwrbgwwgrwbuwuuurgbwrgr",
    "bururbrgbbguwrbrbrgurguubrburbggruwrrbrrggg",
    "gugbbwwggurrwwrggwrurbrrggurggwubuuruwuuruw",
    "buggwgwwrwuuwwugrrbbwggbbgbwgbguruuugwuruururgwbggbrw",
    "uugurrgbgrbrrrwrbbgwwwgbbbrwrrrbgrbwbgwgbwgbb",
    "gbbbgbbgbrbbwuuuburbwgwuubbwgwrrwruwbguubgbububggu",
    "brgruggrwrwrgbbuwgbburgrrrggwubgwurrurugguurrbrugrr",
    "rrbguguuwrwuwugrwugburuwwbgwrgwgrgwggrggwwbwrwrruuggb",
    "bgwrggbrwurgbrrbrugbbbwbbrurbwgbrrrurrwwrrguwugg",
    "ugwgugbrwbwrbggrgbrwuwggburuuwgwgbruburrrwrbbguwrgubwbw",
    "bbggrrrrrbrrgwbuuwwbbbubuururuwrgwgbrrrgbrwwr",
    "uuuuubrbrgrwbuuugwbguubbgbwggrbwugwgrwrwrgwgrugbuwurrb",
    "rwburugwrrwgruwrgugwbwwbbbuuwrgugbrgbburgwrbgg",
    "gbbwgbggwbgurwrbwuuwuubrrruwrwubbuwwurgbwbrurrggbugwg",
    "gwwuggrgrbbbwgwgrgruguwbbwwwuugbgwbrwgwrbbwbrgguu",
    "wrubbuubgwgurrbwbgrbguwrbuuwuubgbbuwwrugwubgwwrwggwr",
    "gbburubrwbubbrrguurwurwuugwrwgbrurwgguubrguwbw",
    "wurubwbgwrwbwrubbgbruururgburrwgubwubbbrurwgwuwrgrbgrbrbwbw",
    "ruwbgurgwrruburruurruugwrrwgbrrrrbwgrwbgbguwruwubug",
    "wugrugurguuwwgbrguggwbguwwwgbbrwguwbwwbwrgbwruubbggrurbrw",
    "wubururbuururburbwubwgwuwwggwrgbuuwubbruwuwwrwbu",
    "wrrbrgrwggurubrrgbubbrgrubbwwbruwgbbubwbw",
    "brugguubgrbwurwuurggwuubrwwrwwrubuugburuwubg",
    "ggrbgrwgwbrrgwrburubgurwruwuuwrrrbrwrurwbw",
    "uwggugwwwbruuwgwgwrgwuugurgggwurwwubuwwubggwgwbw",
    "urwuguwgguwgbbrrrubuubbbwggrbrwbwubugwgbrwrbruwu",
    "wbruuuubrwrrurgbgurggbwrbggugwwurwrrubguwwwbwrgru",
    "ubbrbwwurrurubbbwwgwrubgwbwguugrwugggurubrrguuggbwgu",
    "wubrgbrwguwggguurggurguwbruwbrbgrgrgugwbrgbwgw",
    "wggubrwrgwgrgwwwwrugubgbbuugbrubwbguwbwrgbbuwurgwb",
    "brrbbbuwbbububguuwuubrbbbgwgbbbuwwggruwwbgbrrgbbrubrgubrgu",
    "wgwbwuwggrgbbrbrrugubgwwbbbbrugwgwbgbwrwbrwruggwwgrwbw",
    "bwguuugwbuugrrwrruruwuwwbgwwgugrbrbrwrgguuuwrwbwurggwru",
    "uguwbwbwbrguguugwubbwurwgwggrgwguuguwgbubwuuguwwggrrwwbw",
    "rrggubuguurgubrwgbwuwrbbrrguwbwgbrbwbrbrbuuuuuggburgubg",
    "wgrrgwuuuwgwgruubggurggrwbwgwgrwgbgubuwgwggubug",
    "rbuugugbruuwuurbbbgbgruwbwuwwbbgbrggubwwwgbgbbrwugugrwbw",
    "rurwrwgrwgwurbruwruwguubuuubrbgwbuugrgrwurgrubuwrugb",
    "bwgguubbubwrgrbubggwwwugurrwwurubgrgbggrugrrwrugwubrrw",
    "rwuwurrrrbbuwuwruwgguruuburbbrwrruurwggbbruuwbbwbrru",
    "buuwurburgbgwgrgwrwuwuubbrbwrwuwuurrrbrgubrruwgurbr",
    "urgwurrrrrwwbbrggrrwgrrwbrrrurrubwruwurrwuwbwwrww",
    "wgwwbbbbrbrburwrrwrrburbubbrggrurbgwbbwuwbuwrrwbw",
    "ugruwbrwbrurubrugurrbruuwgbwurrrrbbrubrbrg",
    "uugurrgbggbwgrgruuwwrubwbubrwbbbbwrbubrrrub",
    "bgggrrwgubwruwbbbgwwgbguwgbgggggwbwgbuurgbwuwbgbwbw",
    "wgrwgggrbgbguurwbgrbgwrgbruwurubuggwgwbw",
    "ubrrggurrggwurbwrgrrwugwrubuwgbwurguggbrrgwgg",
    "bwuugbwuwguruuguuggbgbwgguwgwbbruwruwrwbbubuwbururw",
    "ubugwurwurguuuggrrugwrwbbggububrgububgwrgwburwbw",
    "uurggrgrgruuwwbuwuwwwggbguwrbggwrrwrrwurbbwbw",
    "wgbbgrwwwbgrrbbuwubbgbgrurbwbrwubgbububbgwgwwrrg",
    "rrggurruggwgwbugbgwubwugbbbgbrrwwgubugwwbrrwbw",
    "bubwgwubgwgrwwrugbbwrbwbbrwbwbbbbuwbgbuurbb",
    "urguwurguuugrwggrwbugrbgugrwwbgbwurgwbbguwgurbrgwrrbbgr",
    "rbgguwgbwguwgbbgubrwwuwggbwbbuggwbwwbgggbwg",
    "gbururwwrgguuuuggugrbugrggwrwuggbbgburrrwuuw",
    "uwbgbugbgbwrugbbwgrwguurwgubgrrwggbbrurrgbgwwuwggbuwwbw",
    "gruwuwbgguuuwbwgbrwugbuuwwgwwwguwgbgbgrguruggggbbbb",
    "uggwbgugbrrugwrgwbgwuggrrwuurbbwwwwrguubbuubgrbwbbwwwgwbw",
    "bggbugguwbrbbwrwwguwgbbururrwrgbgrggggwbbgwuwgruggbwwbw",
    "wubugwwbuwgbugbrurrrwrwgwgrgrwguwbgrubwubwwubrrurwrgwubr",
    "rrurgbbrwwubwgbbwbrgbwbbugwwbguwuuuuuwwrbggwrbr",
    "grwbrrbuubbrgrgugurbbwrbbggbrburggwgggbgwbgrwbw",
    "wurrbrgwgbubgguwrggubrwbrrwwwbuwgggwwuurrrwbuuggg",
    "rgwwrgwbrwguuwbguubgwbrruuuuubbbbubrrgrwwgwrb",
    "ugbbguugwwgggbwgguguburuuwwrruburgrrrbgwrbuurbguwwbwub",
    "gurgwuwrruurbbwrbbbwwwbbgrgurgrurbrurrgbbwrwbwbbbgurrrrwb",
    "grgggbubwrrbgwwgbwggruuurwwuwrguwbwrruwgrgrrwrrbuwubbrwbw",
    "urguugbuwgbgubrugrrwwrugbugwuubgwrbguggbgggrubrwwbgubub",
    "wrrrwgwwbwrurbrbggbubrwgbbgurwbuugwgbwwrgugrubuwuuwwbbg",
    "ubgwrbgbwgurbgwuggbgbrwbuwugrgwgwbwwububgwwwugrwwuuburuww",
    "wuruwbgrruuwuwrbwgugrgwbrugwbbuuruwbguugwwrwubwwbrwgwugurb",
    "wgbrbbbwrbgwburbrbgbburggrgrrwwbwbuubwrbbgu",
    "bbruguwbbrrrrbbwwrbwburgwwuburrwbwguuuugubbgwg",
    "wgbugwrwwbwbbgwbbrgrrwuggwbrgugrurwuugwbuubugwugrbgu",
    "bgrbrrugwwgwbbrwwrrbrgwubuurrbwubgurbwurggbuwbw",
    "brwwrrrggwuwwbgbgwrgwbuuwwgrwbbgrbubbrwbwwbu",
    "ggwbrwgbwbgrbwbgwwrgbgwwgrburwwrbwrwgbbrbwrbgubgbg",
    "wburgubbgrgwgrrgurbwrbgubrrugbwgbgwwrgrrbbbuwwwbrwbgrrrgr",
    "guubguggrubwwbbbwuwgggburbrgrwugbrgrwbguurrguwwggw",
    "gruubwbwwwwuugbgwrbrrwuuggugubuugrbrbbwwggb",
    "ububrgwrruwbwuwurgrgrwwurwwrrruruubgwbwwgubuuw",
    "ggrgubbrbwbugwrubuuguuurrbrubbggrwwguuwrrbb",
    "ugbuuwrruggwrrbbgggrwwbgwubrguubwrgwbgggbuw",
    "buggwrggubwwbwuwrrrwuurbbgrbbrgrbgbbbbgbrbuggugwugbgrbbwu",
    "ruuwbbbrrrrrwwugwwwburgwwgbwggurrgbrwguwbrubrwbwbw",
    "ggbwugrrwgubwgwgwwrrruwbwggwwwggbrurubruwggu",
    "gwrrwrbuuuuwbbrurrrrwburrgguwurgbuwwwbrrwubruwwgrbwrbwwbw",
    "wgbbwbwrrgwwgbuuugbbwbwubbrbggrguuwuggwbwbubrruwwugwg",
    "bggbbwbrgruuwwbbrwwwwbwgggugburwurbwguwbwbrrwrwgbg",
    "wguuburubrubbbrrruuwwwgbrbguuwgwbuugubuggugrbuwrbbwbw",
    "rbugwubgururuwwwrugwwuwwubwruwuuuggwbwbwwgwwuwwbw",
    "brrrwgrbrgbrugubrrbuwrbbwrwgburbgrbwwurwbwwuug",
    "brurbgugbrggwgbwwbbwbrruuurwwwruwwgubwugbubgbwwbw",
    "rrbbgbrgwgbrgubrbgwwrwgwrgwrgwgwwgbrrgbuurggbbrrwrbgwgruu",
    "ggburururgwbrrburwbuuwwuburwubwwgugggwubrgrbubwwbw",
    "gwuubwwrwrrbbwrwwgubbwwwbwgwgrrbuwgwwgwgguubwrgwwuwwurbug",
    "ubwgrwurbugggrwubgrbgwrbbggwugwbbwrwrrggrruwgbruwruwwbw",
    "rrrwrwbrgwwwwuurrrgwrgbruugbrruruwwurwgrbuurwbbbwbbwg",
    "uwbgurgbbwuubbbbgbubgbbbgguwrguwbruwwuurwguubgrrbwgrwbw",
    "ruwbbbrwuuwrggwubbbubbbrggguwrbgruuwbrbrwuwgrrurrb",
    "ggugbguuururuggbbbrwwwrugwgwwurrgbrruwguubugrwuwuub",
    "ubrurrbruwrgrbgrwuurrbbwuwggwgbbwuwrrwubwubggu",
    "gwurbgrrrgwggwubbrguwwwwwrbgwwrgrwwwwbrgwgbguubrggururgggb",
    "wwbwguurbguruwwbrrwburrwrrgwrggwwgubbwbubr",
    "gwwbguguruwgbgrgrubbgbrubuubwrwgbrwggrgrubrgrbggrbrrwwrwww",
    "guwuwwwggwgrugbugruubbbrggwgbwwubbgrruwgbggruuuugwbw",
    "wgbwbbrbrwgrgrgugurbrgbrgrbguggbwrwrgwbrwurgubgwuuuwbg",
    "rurwuuubgbrbrgrwwgwuwrrurguuugbwrrrbruubgrrbuuwubwrwbubgwbw",
    "ruuuwwbburrwuwwgbbrwrrwbwubbgrggwuuubbugrwwuguuwugwwrgwb",
    "guwugwurugguuwrbbgwgbbrwbwrwwgwgrbugwwbw",
    "uggwurrrbwwbgguwwuubbwwbwwwubrbggrbbwgbubr",
    "wgubrwguwugwwbwwrbbguguwuuguuwruugwbrubgrgrwwwurwg",
    "ubrgrwrwugrugwguwruwguwggbuggrrrguwwwgguuguugrugugrwbgwu",
    "uruwbrbbuwwrrggrwubrugwrwbrwwbrwrbugruwbbubruuuguuwruwbgg",
    "rugbubrgggbggrbugrrbwburbrrugwwwuwrrgrwbgwwgwbugww",
    "bubwwuruurwbwrgbburbgruugbugbrbgwgrwgbrwgwrruuwbw",
    "wbrgbgggrgrwwgrbggbwrrurgrgrbgbrbbugggrgbgbbwbw",
    "wgggbgbggbrbrwbugrbbbgwwgrwurbgwgbruwgbrbrurrbwbw",
    "wwgwwuwgggggbrgubwbrrggrrwbggrrrgwbgubrwgggurruwwuwg",
    "rgguubwwwrwruguwrbgbrgubbwwbruggbbrbbrwwwuuwrbwwurrwgrwu",
    "wgugwbuurbrrbrwgbbwbwgggrgubbwwrrgwwrruburubggrguurb",
    "rwruwrgubrguurrguggggrruuuwgwgubbwurwuwwuuwggrgbuuwwubw",
    "uuwgrrrrbbgbbbbwugurrbggwgubgbruubwubwubggrruuwwwgbrurgwg",
    "gruururgbbrbgwbwggwwbugwuggrgwwuwwrrurrwwbuw",
    "rbgrbwbgbbwwrbwbrgbubbbubrbuubwwwuburbrurbbrgggbwwgwwruuuw",
    "rgbgbwrgbwurbgurgburgwbgbwwugggrrbubgurbwwuurwgrwrbuwrrb",
    "ugrbruwrrrubgururwggbbbbugwugwgbgbwguwbgrubuugb",
    "ubugwrbbgwuggggwwrwwubrrrwbgwwgbbwwbgbgrwwbw",
    "rrgbrgbwrgbbwubwgrwuruugwruwuuwugbwwurubwrwbbbwuur",
    "rbgbbugrgurgrgwggbrgwuwubruguwrwwrrbgrbggbwwuugbugwbgwwuwbw",
    "wuwugwurgbubwguugbwurbguuuwrrugrugbubwurrrwbwwgwuugruwugbwbw",
    "wrgburuuugbuuuwwurgurbgwugbrrbrwgwugwrubgbugrrugrurbgr",
    "uwuuggggwrwgbggbuugggbrggwbrugggugbuuwbw",
    "uuuwuggguggbggrbgbrwrruuburrbuwubwwrruwbrwruwbbwgbbb",
    "bgbbbugwgwgrburgggbruuwrwubbrwgwbuwugbrbuwwwwwgwgwrwbbgurg",
    "rubgbbbrwggguruwwrgbbrrwgrwurbbugruuguuuwugu",
    "urrubwwgugbrbbbbggrggggbgbbuwgrbubwwrgburwrrgbgbwwbw",
    "bguggubwwwwrbwrubrgrbuguwrbwurwggwrwrgrrrgurrrrugubwwuwgrb",
    "urwuuuuuwrwrgggruwrbrbrgrurrbubguwruwuruwubgrbwrugr",
    "urbwbgwburrgrwgbuwubrrbruwruguubbugurburgwrrrggwrwwbw",
    "wbrruguwuwuwgwwugbubwrbubgwwwruugwuwrbugwuggrggur",
    "urruwgwrwwrbrurggwwugrugwrgurrbggbrwgwrrububwbr",
    "uuugguwgrgrwbgrrgurbrrwgbruwuuurbrrwwwrwurwrurbguwuwggu",
    "rrugrbgbwwuggwurwgbguwuubugurrubrrruwurbrbwr",
    "rugrrrwgbugwgbrwrggguggubbubuwgwbugbwbuwbw",
    "bbbbbggrrrwwuwgbugwwwgurgwgbbuuwguurugwwbugrbu",
    "bbgbrbubbuggrwbrbwgubugrrwrgbggbwbwbwrbruggurwgwbugb",
    "ruwwwwgggbbrgbuurbbwubwbbrrrbrgrrwwrugbgurgrrrrwwbrwurrg",
    "wrgbwwwguuggrwugbrugrgwbgrbgwwgwgrbbrwgbruugbub",
    "rrbrrwgbrgwbbwgwurbgggrbguwrwwwggbwwbwuubrbb",
    "rgbggbuwrbrgrgruwugwwgwgbwwbbggwuwuugwurburbggubwgwwbuwbw",
    "uurwuubububuwgbuuuwgbuuwgguwwguwgbgwguruuguburrwubbwbw",
    "buwbwggwbbrwgrgbugrbugwwgwrgbrgwwwgrwbgwwwgbwbrgbbwwgur",
    "rbbrwuubwgrwbbrubwgwgubbrwrbwrbwrubwrgwbwwwuguwbbbbgwbuwbw",
    "bgrgwwguurburrrbwubrurrguwburuubrwwggwgwwwwrurrugbwbw",
    "rugrubrbbggbgruuubgrggrrbbrwwwuwwuruggbguwugrbgrugg",
    "rrwbbgwbrggbwugubwugugwbuurbbgrrggrrrbwgggu",
    "grgwruuuwgwwguubgruwgrgrrgubruwwgbbrwugrgurubbuwbgrbrbrb",
    "gwwburrgbuubgwbuburgrrbgwbrugubgwuuguwgwbwrrwbrwbbururbwbw",
    "uurbwrbwbgbwrrwwwrugubgwrbgubwgrbbrugrwwubrgrrbrbw",
    "wbwubrbbbwgwbggwrubbgrbbruwuugwububrurubwwrwggrwurbbwug",
    "ruuugrurburuuwgrwbbuuruugugbwgbgbbgbwbwbuugrgwwubrgwrrggww",
    "gugrwbwbwgurgbgurugrbwwurbbgwggwwruguubwbbwurrrbuuubwbw",
    "gwbguubuurgwwwwwgugbuuburuurrwwuwbubrrbbubwggbbubrrggrrwbw",
    "grurgwrrgwbbuubgguuwwbrbrguurwbrbbbbbgbbugbwugbrwwuggugggwbw",
    "gggwbuwrwrrbbrwgubgurwugrugubbugwwbbrrgrguwbuwwbrgbr",
    "guubbubrrwbwwbwuggbbuguggrgurbwwrwgbbuwbw",
    "ubgburrrrbuuurruurwuubbugrgwggurguwwrgubrguubw",
    "wbrgrrrrguggwwuwgggwrgbwbwbbuuwwbrburgurwwwbbubrrwbrbuwb",
    "wrgbruuguburbbrggrbgggbgbbwururgbbgurgwguu",
    "ggbwwwwwurwgubwrwwwuwbgwrwgrgwbbgwbwubburgbbrgubububg",
    "wrrurbbwubrrrrrrwwugrubbuwbrbrbbwwggwwgbwgwrbrgug",
    "uwrgggwwgrburbgbugbbruubwwrubugwwbrwrubbwwguwwbggu",
    "guubrwgrwrguwuwurbugwwubguuugrugwgwwrgwruggrwguurbgrgu",
    "urwbrwrwbbrbwbwbrgbugwuurgruwwbgugrwrurburgub",
    "grubrurguububbggrbrwggbuwbgrrgbburrgugrugurwbuwbw",
    "wrubggrbwugurbbgrrbrwrgwwuruuwurwrugrggurbgruwbuwg",
    "ggrbrbgrgbbugubgubwbbbuwuwuurruwuwbubrbgrbbbgrrgggrwuuu",
    "ubguwbrbbgwurrbggrgrwuwwwbgwbuuwbgwurwbubgbwuwr",
    "gbuwwgbwrbwwubwrwwwurwwgwbubrwwrrwrwwwwbrrwgwbbugwwbbwbug",
    "rgbwrurgwgggugubbbwwwwbgubuugrbgggbbrrrgurrgburruuwg",
    "bubrwwwbbgruuuwuruguggubguuubgrburgubgrgbgwbw",
    "rrgwwggbwgbuburwgwbgwbgbbrrurwrurbbuwurrbgrggrbbbbg",
    "uubwwgrwuwuugguugurubbwwwwgbwbbbrugugbubggbuuugugwgrgwbwbw",
    "burgwwgbgbbrwugbubbubuugugwbwrbbbrrrwguwgbggg",
    "uuugguurbubugwguggubrwbguuwgrurbbuwggrrrbrrwbggwguwuu",
    "rrbrrbgrwgwggwugwgwbwwwggubbgwguugwuuwugbr",
    "bwgbwuuurubgrwgwubugwwuwbbgbbgrgbubgurwwbubbrwbw",
    "rgggwrbgburuwugbbbbubrwuubwruuwrrwbgwbbgwbrurwbw",
    "ggwruurwwugwwwbubggubrgrbbugggurruwbgwgwrrguurrgrwwruwww",
    "grwrbururubugruwwgwgggwgrrurbbgwurubrurggwurbbuwgbbbguwbwbw",
    "wuuubgbwuburbgbgrrwguuwwgbgbwbubrggwbubruwbguwbwwbw",
    "brwrrrugrgrbbrwrgggbuwruuguubbuwbbrwrbrgugwgrwbw",
    "wubrrrrrggwwrguwrrwbbubbuguuubbwbgwbgrrubrbwbwwbggrurrb",
    "grwugguubgwrwgurrrwwwbubrwuwurguwrubrgguwrbwubwbgwbw",
    "grbuuwwwrgrrbbggwguurbwbwrrruwwgbgwbbwbrwrwrwbw",
    "wugbgbguurbubbrrgguubruwwbbuwrgwwwbruugbwrb",
    "wwwubbgbgurrbwuubrubuururbbugggburggruuwwuw",
    "buwugrbuwrgrburrwwurgggubruggwwgububrubwuwgrwgwbuguuu",
    "rgrwgbbbugruuuugbbgrwwwguwuwbwrwrwwggugrurgw",
    "wbrrgwwwrubbubbggrugwuuubugwugbubgggruwuubgrgurrwbuwgruw",
    "burgugubbbwwubbuugwguwwbbrrbrrrrwruggwbw",
    "wruubbuwbrrubwurubwwguwgrggrrgrruuubuwugbrbguuu",
    "buubuurrugbgbrwrwguugrwgggubrbbgrggbgggubggwurwwruruwr",
    "wbgwbgrwbwrbbrurbbwrwbwggrgbwbuubrugbugbruuubbrwgwuu",
    "bwubrurwrwbgrruggwwwgubbbwgbrrgwbbwwgrwbuwu",
    "uwgggurrbbwgbwggwbbgrguurwgguwwurguugwurgrgwbuwrbbbug",
    "ubwrurwuuruggguugbwbwwurwwuburwgbbwwwbruubguuwrbwwrbruwr",
    "bubwurbgrgbwburwrwwwwbrurgwrbwbuggbubburggruugrggw",
    "wbwbbburrbugrbbruurwuurrbwugrgubububgbuwubrwugguurb",
    "brwgbbuuwuwugwbuugbuwwuuwbwrbwbwwgrugwwuugbwbr",
    "urwwbguwugbwwgrgbrrrgubgruwwguwrwrgubgggurwwurbbu",
    "rruwwbbbwrrwbwrwwwguwubrbgwuuwbgwrrwuruwuugwrrrbbuggrwwg",
    "uururggrrrbrugbgbgrwrgbgurwrwbgbwrrgrwubrwrrrrrgwurububu",
    "buuuwwbubbwggrwrgugwwrwgrwguuwuguruwbwubrbrwbgw",
    "wgugubbuwguurwbuwuugbburuguugwbbrgwuwrggggubrbuwrrubrguu",
    "wgubwgbbbrbrrwwrbwgwgguuurbuwurgwbrruuuuuuubbgrguru",
    "wbgurrugwrgrgwbrbwbwwbrruurruwwwrwbwbwggrbbbbwwwbb",
    "uwurguruuwgbwrgbgggwuwbbbuwwubrbggggbwrbgrbuubwwuuwbw",
    "uwbgrgwggbgugubgwruwwgwrrbgbuurgrguwbrgbruuggwubuuugwbr",
    "wwuwbbwrrwbwrrgrbbrwugugguruwwwrwgwwrrubrugrwbugbbur",
    "bwggggrugguwrurburggbuugubrubggrbrwwbbbwwgrurgurwguruwbgg",
    "bbgrbrwwbbubwugbrurrguwwwggggwwbwbwbwuggwgrggbrur",
    "rbwwguwwwgbgrruubwwbuguwwggurrgruwuwbbwrrbwurgbrgubgubgbw",
    "rrrggrwgubrbbwbbwgwbwbwwgwwbbbwrrgrwgwuwwg",
    "rbrwurgrubwuuugbbwrrwwbbubwburwguwrbuguwrgrbbu",
    "wrrurgrwwuwrrbbuuuurwugrwbuwbugububbggwwubgrwug",
    "guggurwurwwbubbguugurrrwurrurruwrrggggubbgbgrgbgbrwwr",
    "ggwrbugbuwrburguwwbubbbubrrwwuuwrwugbgwwwwbrbubwgwrbgww",
    "uubbggburrgruubrwwgubbgrrgrugggwbrwwgrrwruu",
    "gbrggbuurbbggbrrbrbgrguuwugbbbbbbwgbgugrwwbgrgubbwrbbwuwbw",
    "gbuwrbuwgbrwbwrbwwuuruwwwrrrwubgubguwbwuwwbrwugggb",
    "ggrubbrrbgrgbwwwgrrubgbwwwgrbgwugbrrgggbbbrwrrb",
    "bgbgwwbugbwgbrrrbbruugggggwrrwwwrwburbubwbgbbuwrwrg",
    "ggugrwrggburgwuwubrrgurruwwgrwbruubgwwbw",
    "rgbubgubbgugrbrbrgwbgwuuwbgrrbbggrruugwgggwwwrwgbrwrr",
    "gbuggrbgbgugurrwgrrbburggwrwgurwgurrbrugrrbwgrwwbwbbwrbugg",
    "wwubrbbrgbgrgbbuubrrugwubbuurgwggbrruwbguwbw",
    "brggwwrbrwbgbrrgwggwuwuwgbugbuwgwrgwrwbw",
    "uugbgurgbgrrbwwrugbgurugrbuuwubrrwbbgwuuruur",
    "gggubrbbwbwurugrwgruugbgwgbwggrurrgubururgugb",
    "rrguwburwbrgugbwrgurbbbrurgwbubrwuwuwwugwrbbrrwb",
    "ugwwrwwguguwwubwwguwububrbuuubuubgwgrguggggbuggb",
    "rruggwgwbwburuwwgbrrbuuwgbbgrrrwubbgbrrgwwbw",
    "ugugwrurbbgugugrggrguugurwrgwubbwbggwwwgugru",
    "rgbwwuruurrwwguruubgrwbwgugubbwgbrwgbwubgbgbwwgw",
    "gbbwbbwwwwgrwgrwbbwwrgrbgurrgubbugbwrgbgbgw",
    "brwwgggrggwurgbrrugbgbgwbbwbwbuwwbbgwrbwbwbw",
    "wrwbguwgwrwuuggwbgwrugbugugrrwbrrguwbggwwrwgwrrwubugg",
    "uubwuuwwwgrrrubugubugruggrwrgwwrbbrbbwurwwbw",
    "wgbwrugrguurwruuruuuuubwubrbbwgguugrurbuuwuurwbbrgbu",
    "wrwrrgggwbbbburrbbrguwrrugrrbgbwuwurgurwbrgwrubb",
    "gubuwubwuggwurburbgbggbrurgbuurbbuurrubugbrbbwugwrbrbbu",
    "grwwuwwwgbwuggbbbrwbguuurwbbrwggurrubuuwggubru",
    "rwwwuwwbwbwbwgwwrrbruggbgbbrbbrbwuwbbrubuugrwwu",
    "bwrgwruwuwgruurbwruuuruwgbgrgrrrbrwgrgrgwwwgrr",
    "uwbgggbbrwbbruurbrgrbgbruwrgbgubburgbbrurbrbbwuwwbw",
    "bwrrbwbbuubwrbrwurrwgrruwubbbbggwrbgruruwguwgbggwgwbwbuwr",
    "bwrrgrgwurgurggwgwuwrgrgbbrubwgwwubgbbgurbbwbubgwrrrgbwg",
    "ggggubgububgbrbgrgwggwwubwrbgrburrguguurrgbwgggrrubg",
    "urwrrwwuuwgrgrwgguuwggbwwwggwbbrbwuuurbwrbwbugugrgbwbwubw",
    "rwbrrbgbwruuurbwwuubwwgbburuwruggrgrgguwurwbw",
    "rwrgwrgbgwwrgbrwgwgbrbbbbrgbgubuuwwgruubwbu",
    "rbrgubrrrbubggrwruwwgwuurgwurwgubrgguugggwbbwuuuruwgwbrr",
    "gbwrgwbgrrurrwrggbwrugwrgbuwrwrgbbbwbuggurubuurw",
    "rurwrbbwbuurrwwugrrbrbuwrgrwbbwbwbburwwbrgwggwuwgruwbw",
    "bwbbrrgrbggbubuwwuwrwwbrwrwwrrubwgbgbbguurwbw",
    "uwwbgwwrwbbwuubgruwugbgbbgwguburuwbrugbbbbuwbw",
    "gwgwubwwrruubrwwrrugrgruwwbubuggwwbguwbrgg",
    "bwggruwwbwuburbrrwbggggggbwuuwgwbguuuurgwwguwwwbwuwbw",
    "wbgurbbbubuuwuwugguwrubwrgbbrwwruururuggugbbrrg",
    "bggbbbubgrwuugrwgbbbuubugbuwwwbgruwbbuubggwuwgwgbrw",
    "wwbguwrwwuuggugbuwuubgwwguwguwgwburbrwbuwbggubww",
    "gbgrrruuwwwgbgggwggrruubwwwwwuuurgruwwbw",
    "gggrrugwwrwwbwgggguwbgbuubugwwbugrgrwwwrwbgwurwwuub",
    "grbwruurbbgurwbrwrguruwgwbuwruubgrgubwgwguggrbwggurguuwuwu",
]

const test1 = [
    "r, wr, b, g, bwu, rb, gb, br",
    "",
    "brwrr",
    "bggr",
    "gbbr",
    "rrbgbr",
    "ubwu",
    "bwurrg",
    "brgr",
    "bbrgwb",
]

let parsedData = {}

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            // console.log('Fetching from cache', n);
            return cache[n];
        }
        else {
            // console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const isProblemPossible = memoize(
    (problem) => {
        if (problem === "") {
            // console.log(`Problem ${problem} is indeed possible!`)
            return 1
        }
        let parts = 0
        parsedData.towelPatterns.forEach(pattern => {
            if (problem.startsWith(pattern)) {
                // console.log(`Problem ${problem} starts with pattern ${pattern}, now trying subproblem ${problem.slice(pattern.length)}`)
                parts += isProblemPossible(problem.slice(pattern.length))
            }
        })
        return parts
    }
)

function main(data) {
    console.log("Day 19 part 1...")
    parsedData = parseInput(data)
    // console.log(parsedData)
    // console.log(isProblemPossible("rrbgbr"))
    let count = 0
    parsedData.problems.forEach(problem => {
        console.log("Working on problem " + problem)
        // console.log(isProblemPossible(problem).length)
        const subCount = isProblemPossible(problem)
        count += subCount
        console.log(subCount)
    })
    console.log(count)
}

// main(test1) // 16
main(input) // 572248688842069

function parseInput(data) {
    return parsedData = {
        towelPatterns: [...data[0].replaceAll(" ", "").split(",")],
        problems: [...data.slice(2)]
    }
}