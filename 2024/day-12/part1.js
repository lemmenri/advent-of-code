const input = [
    "WWWJJJJJJJJJJJJJJJSFFFFFFFFFFKKKHHHHHHHHHHHHHHHHHHHHHOOUEEEEEEEEEEEEEEEFGPPPQQQQQQQQQQQQQQSSSJJJJJJJJJJJJJJIIGGGGQQQQQQQQQQQQQQQQUUUUUUUUUUU",
    "WWWJJJJJJJJJJJJJJJJJFFFFFFFFFFKKHHHHHHHHHHHHHHHHHHHHHOOUUEEEEEEEEEEEEFFFGPPPPPPQQQQQQQQQQQQSJJJJJJJJJJJJJJJIIGGGGGGQQOQQQQQQCCCQUUCCUUUUUUUU",
    "WWWWJJJJJJJJJJJJJJOJFFFFFFFFFKKKHHHHHHHHRHHHHHHHHHHHHUUUUEEEEEEEEEEEFWFFFQQPMMPLLPQQQQQQQQJJJJJJJJJJJJJJJJJGIGGGGQQQOOOOOQCCCCCQCCCUUUUUUUUU",
    "WWWWWJJJJJJJJJJJJJOJJFFFFFFFFFKKHGHHHHHRRHHHHHHHHHHHUUUUUEEEEEEEEEEEFWFFFFQPMPPPLPQQQQQQQQCJJJJJJJJJJJJJJJJJJJGGQQQQQOOOOQOQCCCCCCCCCGGGUUUU",
    "WWWJJJJJJJJJJJJJJJJJFFFFFFFFFFKKKHHHHHRRRRRRHHHHHHHHUUUUUMEEEEEEEEEFFFFFFFFPPPPPPPPPQQQQQQBBJJJJJJJJJJJJJJJJJJGGGGQQOOOOOQOQCCCCCCCCIGGGUUUU",
    "WOJJJJJJJJJJJJJKJKKFFFFFFFFKFKKKKHHHHRRRRRRMRRHHHHHHHHUUUMMMMEEEEEFDFFFFFFFPPPPPPPJPQQQQQQBBBJJJJJJJJJJJJJJJJJGGGQQQOOOOOOOOUCCCCCCCCCPGUUGU",
    "OOJJJQJJJJJJJJJKKKKKKFFFFFFKKKKKKHHHRRRRRRRRRRHHHHHKKHUUUMMMMMEEEEFFFFFFFFFPPPPPPPPPQQQQJQBBJJJJJJJJJJJJJJJJJJGGGGGOOOOOOOOCCCCCCCCCCCCGGGGU",
    "POOJJQOJJJSSSJJKKKKKKFFFFFFKKKKKHHHBBRRRRRRRRRZHHHHHKMMUMMMMMMEMEEFFFFFFFFYPPPPPPPPPQQQJJBBBJJJJJJJJJJJJJJJJJJGGGGGOOOOOOOOCCCCCCCCCCCCCGGGG",
    "OOOOOOOOOJSSSSJKKKKKKKKKFKKKKKKDDDDBBBBRRRRRZZZHZHHZMMMMMMMMMMMMEEEPFFFFFFYPPPPPPPPPPQQJJJBJJJJJJJJJJJJJJJJJJJGGGGOOWOOOOOOCCCCCCCCCCCCCGGGG",
    "OOOOOOOOOOGGSJJJKKKKKKKKFKKKKKKKKDDDDDDDWRRRRZZZZHZZMMMMMMMMMMEEEEEPFFFFFFYPPPPPPPPFPQQQJJJJJJJJJJJJJJJJJJGGGGGGGGGGGOOOOOCCCCCCCCCCCSGGGGGG",
    "OOOOOOOOOGGGSJJKKKKTKKKKKKKKKKKKKKDDDDDDWRRRRZZZZZZZZMMMMMMMMMMMEPPPPFFFFFYYYPPPPPPPQQQQTJJJJJJJJJJJJJJJJJGGGGGGGGGGGOOOOOOCCCCCCCCCRGGGGGGG",
    "OOOOOOOOOGGGGYTTKKTTKKKKKKKKKKKKKKDDDDDWWWRRRZZZZZZZZZMMMMMMMMMPPPPPPPFFYFYGYPPPPPPGGQQQTTTJJJJJJJJJJJJJJJGGGGGGGGGGGGGGGOCCCCCCCCCCRRGGGGGG",
    "TOOOOOOOGGGGGYTTTTTTKKKKKKKKKKDDDDDDDDDDWWRRZZZZZZZZZMMSMMMMMMHHPPPPPPFFYYYGGGGGPGGGGQQQTTTTTTJJJJJJJJJJJJGGGGGGGGGGGGGGOOGCCCCCCCRRRRGGGGGG",
    "OOOOOOOGGGGGGYYTYTTTKKKKKKKKKKKDDDDDDDDDDRRZZZZZZZZZZMMSMSMMMMMHPPPPPPPPPPYYGGGGPGGGQQQTTTTTTTTJJJJJJJJJJJGLGGGGGGGGGGGGGGGCCCCCXXXXRRRRGGGG",
    "OOOOOGGGGGGGGYYYYYTTTTTTKKKKKKKKDDDDDDDDRRZZZZZZZZZZZMMSMSSMMIPPPPPPPPPPPYYYYGGGGGGGQQTTTTTTRTJJJJJJJJJJJJGLLVGGGGGGGGGGGGGCGGCSXXXXXRRGGGGR",
    "SOGGGGGGGGGGMMMMMMMTTTTTVVVVKKKDDDDDDDDDDDZZZZZZZZZZZMCSSSSSMMPPPPPPPPPPPPPYGGGGGGGGKKMTQQRRRRRRRJJJJJJJJJLLLLGGGGGGGGGGGGGGGGGGGXXXXRRRRGGR",
    "SOSGGGGGGGGGMMMMMMMMMMMMMMVVKKVVXDDDDDDDDDZZZZZZZZZZSSSSSSSSMPPPPPPPPPPPPPPYYGGGGGGKKKKQQRRRRRRRRRRRLLLLLLLLLLGGGGGGGGGGGGGGGGGXXXXXXXRRRGRR",
    "SSSSSGGGGGGGMMMMMMMMMMMMMMVVVVVXXDDDDDDDDZZZZZZZZZZZZSSSSSSSYPPPPPPPPPPPPYYYYGGKKKKKKKKKKKRRRRRRRRRLLLLLLLLLLGGGGGGGGGGGGGGGGGXXXXXXLXXRRGRR",
    "SSSSSGGGGGGGMMMMMMMMMMMMMMVVVVVXXXDDXXDZZZZZZZZZZZZZZSSSSSSSSSZPPPPPPPPPPPPKKKKKKKKKKKKKYYYRRRRRRRRRRLLLLLLLLLLLGGGGGGGGGGGVGGZXXXXXXXRRRRRR",
    "SSSSSGGGGGGGMMMMMMMMMMMMMMVVVVVVXXXXXXXZZZZZZZZZZZZZZSSSSSSSSZZZPPPPPPPPPPRKKKKKKKKKKKKKKYYRRYRRRRRRRLLLLLLLLLLLGGGGGGGGGPGVGZZZXXXXXRRRRQRR",
    "SSSSSGGMMMMMMMMMMMMMMMMMMMVVVVVVXXXXXXXZZZZZZZZZZZZZZSZZSSSZZZPPPFFFFFFFPPRKKKKKKKKKKKKKYYYYRYRRRRRLRRLLLLLLLAALGGGGGGGGGGGVVVZZXXRRRRRQQQRR",
    "SSSQSSGMMMMMMMMMMMMMMMMMMMVVVVVVXXXXXXZZZZZZZZZZZZZZZZZZZZZZZZZZPFFFFFFFPKRKKKKKKKKKKKRRRRRYRLLCRRLLRRRRRRLLAAGGGAGGGGGGGVGGVVVCCCCCRRRQQQQQ",
    "FSSGGGGMMMMMMMMMMMMMMMMMMMVVVVVXXXXXXXZZZZZZZXXZZZKZZZZZZZZZZZZZZFFFFFFFPKKKKKKKKKKKKKRRRRRRGLLLJLLRRLRRRRRRRAAAGAGAGGUVVVVVVVCCCCCXRQQQQQFF",
    "FGMMMMMMMMMMMMMMMMMMMMMMMMVQQVVXXXEXXXZXZXZXXXXZZZZZZZZZZZZZZZZZZZZFPPPXXKKGKKKKKKKKKIRRRRRRGLLLLLLLLLRRRRREAAAAAAAAAAUUVVVVAAOCCFFRRFQQFFFF",
    "GGMMMMMMMBBBKMMMMMMMMTTTTTVTTCVVXEEEXXXXZXXXXXXXXXWWWWWWWWWZZZZZZFFFFFQQQQQGKKKKKKKKKIRRRRRRLLLLLLLLLLRRRRREAAAAAAAAAAAUUJJJAAAAAAAJRQQFFFFF",
    "DDMMMMMMMBBBBMMMMMMMMBBTTTTTTCVVXEEEEXXXZZXXXXXXXXWWWWWWWWWZZZZZZFFFFFQQQQQKKKKKKKKKWRRRRRRRLLLLLLLLLRRRRRREEAAAAAYYYAUUUJJAAAAAAAAJRFFFFFFF",
    "DDMMMMMMMBBBBMMMMMMMMBBTTTTTTTVVXEEEXXXXXZZXXXXXXZWWWWWWWWWNZZZZZZFFFFQQQQQKKKKKKKKWWWRRRRRLLLLLLLLLLLREERREEAAAAAYYYUUUUUUUAAAAAJJXXFFFFFFF",
    "DDMMMMMMMBBBBBBBBBBBBBBBTTTTTTUVEEEEEEEEXXXXXXXMMZWWWWWWWWWNNZZZZZFFFFQQQQQQQQQQQQQWRRRRRRRRRSLLLLLLLLREEEREEAVVVVYYYYYUAUAAAAAXWXXXXXXFFFFF",
    "DDMMMMMMMBBBBBBBBBBBBBBBTTTUUUUVEEEENEEXXXXXXXMMMMWWWWWWWWWNZZZZFFFFFFQQQQQQQQQQQQQDDSSSRRRRRSLLLLLLLLLLEEEEEAAVYYYYYYYUAAAAAAAXXXXXXXXFFFFF",
    "DDMMMMMMMRBBBBBBBBBBBBBBTUUUUUEEEEEEEEEXXXXXXXMMMMWWWWWWWWWNEEZEEEBFFFQQQQQQQQQQQQQQQQQSSSRSSSLLLLLLLLLEEEEEEAYYYYYYYYYUAAAAAAXXXXXXXXXFFFFF",
    "DDMMMMMMMUBBBBBBBBBBBUBUUUUUUIEEEEEEEEEEXXXMMXMMMMWWWWWWWWWEEEZEEEBBFFQQQQQQQQQQQQQQQQQSSSRSSSLLLLLLLLLEEEEEEEYYYYYYYYYYYYYYYXXXXXXXXXXXFFFF",
    "DSMMMMMMMUUUJBBBBBBBBUUUUUUUIIIEEEEEEEEEEEEMMMMMMMWWWWWWWWWWWWWWWWBBBFQQQQQQQQQQQQQQQQQSSSSSSSLLLLLTLLLEEEEEEEYYYYYYYYYYYYYYYXXXXXXXXXXXXFXX",
    "SSSWSSSUUUUUUBBBBUUUUUUUUUUIIIEEEEEEEEEEEEMMMMMMMMMMMMMZNWWWWWWWWWEBEBQQQQQIYQQQQQQQQQQSSSSSSSSBLLLLEEEEEEEEEEYYYYYYYYYYYYYYYXXXXXXXXXXXXXXX",
    "SSWWSSRUUUUUBBUUUUUUUUUUUUUUUIEEEEEEEEEEEEMMMMMMMMMMMMZZZWWWWWWWWWEEEBQQQQQQYQQQQQQQQQQSSSSSSSSSSSLEEEEEEEEEEEYYYYYYYYYYAAAAAAXXXXXXXXXXXXXX",
    "WWWWSTRUUUUUYBUEEEEEUEUUUUULUUEEEEEEEEEEOEMMMMMMMMMMMMZZZWWWWWWWWWEIIIIITQQQYQQQQQQQQQQSSSSSSSSSSSSEEEEEEEEEEEYYYYYYYYYYIAAAAAAAXXXXXXXXXXXX",
    "WWWWWTTTUTUUUBUEEEEEEEUUUUULLUEEEEEEEEEOOMMMMMMMMMMMZZZZZWWWWWWWWWEMIJJIIQQQLQQQQQQQQQQSSSSSSSSSSSEEEEEEEEEEEEYYYYYYYYYYIAAAAAAXXXXXXXXXXXXX",
    "WWWTWTTTTTUUUUUUUEEEEEUULLLLLEEEEEEJIIIIIMMMMMMMMMMZZZZZZWWWWWWWWWEMIJJIIQQQLLLLLLDUUUSSSSSSSSSSSEEEEEEEEEEEEEYYYYYYYVIIIAAAAAAXXXXXXXXXXXXX",
    "WWWTTTTTTTTTUUUUUEEEEEEENEELEEEEEEEEEEIIIIMMMMMMMMZZZZZZZWWWWWWWWWEEIIIIIILLLLLLLUUUUSSSPPSSSSSSSEEEEEEEEEEEVEYYYYYYYVVVIIAAAAAAYXXXXXXXXXXX",
    "WWWWTTTTTTTUUUUUUUUEEEEEEEEEEEEEEEEEEIIIIMMMMMMMMZZZZZZZZWWWWWWWWWEEIIIIIIILLLLLLUUUUSSSPPSSSSSSEEEEEEEEEEEEVVYYYYYYYVVFFIAAAAAYYXYYYYXXXXXT",
    "WTTTTTTTNTTUTUUUUUEEEEEEEEEQQQEEEEEEEIIIIMMMMMMMMQZWZZZZZWWWWWWWWWEEEIIIIIIIILLUUUUUUPPPPPPSSSSSSBTEEEEEEEEEVVVVVVVVVVXXAAAALLLZYYYYYYXXTTTT",
    "TTTTTTTTTTTTTUUUUUEEEEEEEEEQQEEQEEEEEEIIIMMMMMMMMQZZZZZUZWWWWWEEEEEEEIIIIIIIIIUUUUUUPPPPPPPPSSSSPBBEBBBBEEEEEVVVVVXXXXXXRRAALLZZZYYYYYXXXTTT",
    "TTTTTTTTTTTTTUUUUUEEEEEEEEEQQQFQQEEEEIIIIIMMMNNFFFFZMZFFFFFFEEEEEEEEEIIIIIIIIUUUUUFPPPPPPPPSXXSSBBBBBBBBEEEEVVVVVXXXXXXXXAAALYYYYYYYYYYXXTTT",
    "TTTTTTTTRRRTTUUUUUEEEEEEEEQQFFFQQQQIIIIIIIIIMNNNFFFZMFFFFFFFFFFFEEEEEEIIIIIUUUUUUFFFFFPPPPSSSSSSBBBBBBBBRRVEVVVVVXXXXXXXXXLLLYYYYYYYYYTXXTTT",
    "TTTTTTTTRRRRRIUUUEEEEEEEEEEEFFFFQFQQQQIIIIIIINNNNFFFFFFFFFFFFFFEEEEEEIIIIIIIIIIIUUFFFJPPPPPQBISSSBBBBBBBBBVVVVVVXXXXXXXXXXXLLLYGYYYYYTTTTTTT",
    "TTTTTTTTRRRRRIUUUEEIEEEEEEYEFFFFFFQQQIIIIIIIINNNBFFFFFFFFFFFFFFFEEEEIIPPPIIIIIIYUUFFFFFFPPPBBBBBBBBBBBBBBBVVVVVVVXXXXXXXXXXXLLLYYYYYYYYTTTTT",
    "TTTTTTTTRRIIIIIIIIIEEEEEEEYYFFFFFFFFFFIIIIIQQNBNBBFFFFFFFFFFFFFEEEEEEIIIIWIIIITYYYFFFFFFTTPPPPBBBBBBBBBBNNVVVVVVXXXXXXXXXXXXLLLLYYYYYYYTTTTT",
    "TTTTTTRRRRIIIIIIIIIIEEEEEEYFFFFFFFFFFFIIIIULQQBNBBBFFFFFFFFFNFOEEEEEIIIIIIIIITTYYYYFFFFTTTPPPBBBBBBBBBBBNNNVVVNNXXXXXXXXXXLLLLLLYYYYYYYYYTTT",
    "TTTTTTTRRIIIIIIIIIITTEEEEFFFFFFFFFFFFFFIIILLLLBBBBBBBBFFFFFFOOOOOOCCIIIIIIIIIYYYYYYFFFTTTTPAABBBBBBBBBBBBNNNNNNNXXXXXXXXLLLLLLLLYYYYYYYYTTTT",
    "TTTTTTTTRIIIIINIIIIITTTEEEEFFFFFFFFFFFFFFBBLLLLBBBBBBFFFFFFFXOOOOCCCCIIIIIIIIYYYYYYFFCCTTTCAABBBBBBBBBBBBNNNNNNNXXXXXXXXXLLLLLLYYYYYYYYYYTTT",
    "TTTTTTRRRIIIIINIIIIITTTTEETFFFFFFFFFFFFJFBBLLBBEBBBBBBBFFFFFFCCOCCCCIIIIIIIIIYIYYYYFFRCTTTCAABBBBBBBBBBBBBBNBNNNXUXXXXXXLLLLLLLYYYYYYYYYTTTR",
    "TTTTTTRRIIIIIINNNITTTTTTETTTTTFFFFFFFFFFFFLLLBBBBBBBBBBFFFFFICCOCCCCCCIIIIIIOYYYCYYCFCCCCCCAAABBBBBBBBOBBBBBBBNXXXXXXXMLLLLLLLLLLLLYYYYYYTTR",
    "TTTTORRRRIBNNVNNNNNTTTTTTTTTTTFFFFFRRRRRRLLLLTBBBBBBBBFFFFCIICCCCCCCIIIIIIIIOOOYCCCCCCCCCCCCCCBBBBBBBOOOBBBBKBBBXXXXXXXXLLLLLLLLLLLSYSSSSTTT",
    "TOOOORRRRBBBNNNNNNNNTTTTTTTTTTFFFFRRRRRRGLLLLBBBBBBBBBFFFFIIIIIIICCIIIIIIIIIOOOOOCCCCCCCCCCCCCCBBBBBBBBBBBBBBBBBXXXXXXXXLLLLLLLLLLSSSSSSSSTT",
    "TOOOORRRBBBBNNNNNTNPTTTTTTTTTFFFFFRRRRRRRGLURFVVBVBBBBIIIIIIIIIIICCIIIIIIOIOOOOOCCCCCCCCCCCCCCCBBBBBXXXBBBBBBBBBBBXXXXXXLLLLLLLLSSSSSSSSSSST",
    "OOOORRRRRBBBNNNNNNNPNTTTTTTTTTTFRRRRRRRRRRNRRFVVVVXBBIIIIIIIICCICCCCCCCIIOOOOOOOOCCCCCCCCCCCCCXXBBBBXXXBBBBBBBBBBBXXXXXXLLLLLLLLSSSSSSSSSSSS",
    "OOOOLLLLRRRBNNNNNNNNNNNTTTATFFFFRRRRRRRRRRRRRFFVVVBBBIIIIIIIICCCCCCCCCCCAOOOOOOOOCCCCCCCCCCCCCXXXBBBXXBBBBBBBBBBBBBYYLLLLLLLRCSSSSSSSSSSSSSS",
    "OOOOOLLLNSNBNNNNNNNNNJAJAAAFFFFFFRRRRRRRRRRRRRFVVVFBFFIIIIIIIICCCCCCCCCAAOOOOOOOOOOCCCCCCCCCCCXXXXXXXXXBBBBBBBBBBBBYYRLLLLLLRCCCSSSSSSSSSSSS",
    "OOOOOLLINNNNNNNNNNNNEAAAAAAAFFFFRRRRRRRRRRRRRRFVVVFFFFFFIIIICCCCCCCCCCCAAAAOOOOOOOOCCCCCCCKCXXXXXNXBXBBBBBBBBBBBBBRRRRRRRRRORCCCCSSSSSSSSSSS",
    "IOOOILIINNNNNNNNNNNNAAAAAAAAAAFFRCRRCRRRRRRRRRFFFFFFFFFHHIIIIICCCCCCCCCAAAAAAOOAOOOCCCCHHHXXXXXXNNXBBBBBBBBBBBBBBBRRRRRRRRRRRRRCCSSSSSSSSSSS",
    "IIIIIIIIWWNNNNNNNNNNGGGAAAAAAAAAACRRCCRRRRRCCCCCFFFFFFFHHIPIAFCCCCCCCCCAAAAAOOOAOOCCZZHHHHHHXXXXXXXGBBBBBBBBBBBBJRRRRRRRRRRRRRCRSSSSSSSSSSSS",
    "IIIIIIIIWWNNNNNNNNNNNGGAAAAAAAAAGRRCCCRRRRRCCCCFFFFFFFFHHHFFFFCCFCCCCCAAAAAAAAAAAOCZZZHHHHHHHXXXXXXGGBBBBBBBBBBJJRRRRRRRRRRRRRRRRSSSSLSSSSSS",
    "IIIIIIEIWWNNNNNNNNNNGGAAAAAAAAGGGGCCCCCRRCCCCCCFCFFFFHHHFHFFFFFFFFCCCCAAAAAAAAAAZZZZZHHHHHHHHHHHHHXGHNHHBHHBBBBJRRRRRRRRRRRRRRRLRWSSSLLSSSSS",
    "SIIIIIELWWNNWNNNNNNMNGGAAAAAAAAGCCCCCRRRRRCCCCCCCFYFFFHHFFFFFFFFFFCCCCAPAAAAAAZZZZZZZHHHHHHEEHEEHHHHHHHHHHHHHHHJRRRRRRRRRRRRRRRRYSSSSSLSSEES",
    "IIIIILLLWWWWWNNNNNNNNGGAAAAAAAACCCCCRRRRRRRCCCCCCCCZFHHFFFFFFFFFFPCCCPPPAAAAAAGZZZZZZZZHEHHEEEEEHHHHEHHHHHHHHHHJJRRRRRRRRRRRRRRRRSSSSSSSGEES",
    "IIIILLLLWWWWWPPKNNNVPGGAAAAAAGGRCCCCCRRRRRRCCCCCCCCCCPFFFFFFFFFFPPPPCPPUAAAAAAZZZZZZZZZHEEHEEEEEEEEEEHHHHHHHHHHJJJURRRRRRRRRRRRRESSSSSSSGGES",
    "IIIIILLLLLWWWWPPPQQPPGGGGGAAAGGGGGGGGRRGQQRICCCCCCCCPPFFFFFFFFFFPPPPCPPUAAAADZNNZZZZZZZZEEEEEEEEEEEEYHHHHPPPPPPPPPPPURRRRRRRRRRNESSSSSSSSSSS",
    "IIILLLLLPLWWWPPPPPPPPPGGGGGAAGGGGGGGGGGGGGGGCCCCCCCCPPFFFFFFFFFPPPPPPPPPDADDDZZZZZZRZZZZZEEEEEEEEEEEHHHHHPPPPPPPPPPPURRNRRRNRRNNESSSSSSSSSSS",
    "IIIILLLLLLLWWPPPPPPPPGGGGGGGGGGGGGGGGGGGGCCCCCCCCCCCPPFFFFFFFFFPPPPPPPPPDDDDDDDZZZZRRZZZZEEEEEEEEEWWHHHHHPPPPPPPPPPPQURNNRRNNNNNNSSSSSSSSSSS",
    "IILLLLLLLLLPPPPPPPPPPPGGGGGGGGGGGGGGGGGGGCCCCCCCCPPCPFFFFEFFFFFPPPPPPPPPPDDDDDDDZZZRRZZEEEEEEEEEEEWEHHHPPPPPPPPPPPPPUUUNNNNNNNNNNNHHSSSSSSSS",
    "JLLLLLLLLLPPPPPPPPPPPPGGGGGGGGAGGGGGGGCGGCCCCCCCCPPPPFFFXXXFFFFPPPPPPPPPPDDDDDDDDRRRRRZEEEEEEEEEEEEEEHHPPPPPPPPPPPPPUUUNNNNNNNNNNNNHSSSSSSSS",
    "JLLLLLLLLLLPPPPPPPPPPPPPGGGGGAAALLGGGGCCCCCCCCCCCCCPPFPFXXXXFFFFFPPPPPPPPPPPDDDRRRRRRRZZZZEEEEEEEEEIIHHPPPPPPPPPPPPUUUPNNNNNNNNNNNNHSSSSSSSS",
    "JLHLLLLLLLPPPPPPPPPPPPPGGGGGGLLLLGGGGGICCCCCCCCCCCCPPPPFXXXXXFFFFPPPPPPPPPPDDDDRRRRRRRRZZEEEEEEEEEEIHHHPPPPPPPPPPPPUUWNNNNNNNNNNNKISSSSSSSSS",
    "JLHLLLLLLLPPPPPPPPPPPPGGGGGGGLLLLLLGGGGCCCCCCCCCCPPPPPPPXXXXXXFFFFPHJJJPPPPDDDRRRRRRRRRZZZEEEEEEEEIIHDDDDDPPPPPPPPPUUUNNNNNNNNNNKKSSSSSSSSSS",
    "JJLLLJLLTTTPPPPPPPPPPPGGGGGGGLLLLLLGGGGGKCCCCCCCPPPPPPXXXXXXXFFFFJJJJJJJPDDDDDDDRRRRRZZZZZZZEEEEEEIIHDDDDDPPPPPPPPPUUQNNNNNNNNNNNKKSSKSSSSSS",
    "JJJJJJJJJJJPPPPPPPPPPPGGGGGGGLLLLLLGGGGGGCCCCCCCCCPPPPXXXXXJJJFJJJJJJJJJJJJDDDDDRRRZZZZZZZZZZEEEIIIIHHDZZDDDDUUUUUUUUUENNNNNNNNKKKKKKKKSSSSS",
    "JJJJJJJJJJJMPPPPPPJPGGGGGGGQGQLLLBLGGGCCCCCCCCCCCCCPPPPXXXXJJJJJJJJJJJJJJJJJDDDDDRRZZKKKKZZQQQQQIQIIZZZZZDDDDUUUUUUUUUUUNNNNNMVKKKKKKKKSKSKS",
    "JJJJJJJJJMMMMPMMPMPPMMGGGGGGGLLLLLLLLLLCCCCCCCCCCCPPPPPPXXXXJJJJJJJJJJJJJJJDDDDDDRZZKKKKKZZKQQQQQQQIIZZZDDDUUUUUUUUUUUUVVVVNNVVVKKFFFKKKKKKK",
    "JJBBJJJJJMMMMMMMMMPPMMMMGWWWGLLLLLLLLLPCCCCCCCCCCPPPPPPPYYYYYYYJJJJJJJJJJJJDFDFFFNKKKKKKKKKKKQQQQQZZZZZZZZDZZZDUUUUUUUUVVVVVVVVVIFFFKKKKKKKK",
    "JBBBJJJJJJMMMMMMMMMPMMMGGGLLLLLLLLLLLLLLCCCCCCCCCCCPPPYYYYYYYYJJJJJJJJJJJJJFFFFYFFXFFKKKKKKKKKQQQQQZZZZZZZZZZZZUUUUUUUUVVVVVVVVIIFFFKKKKKKKK",
    "JBBBBBBMMMMMMDMMDMMMMMMMMMLLLLLLLLLLLLLLCCCCCCCCCCCPPYYYZYYYYYYJYJJJJJJJJJJJFXFFFFFFFKKKKKKKKKQQQQQQZZZZZZZZZJZSUUSUUTUVVVVVSVVVIIFFFFKKKKKK",
    "JBBBBBBMMMDDDDDDDMMMMMMMMGGSSSLGLLLLLLKCCCCCCCCCCCCPPPYYZYYYYYYYYJJJJJJJJJFFFFFFFFFFFKKKKKKKKKQQQQQQQZZZZZZZZQQSSSSSSUUUVVVVVVVVVIVXFFFKKKKK",
    "BBBBBBBBMMDDDDDDDDDDMMGGGGGGGGGGGGGLKLLCCCCCCCCCCCCCCUYYYYYYYYYYYYJJJJJJJJMFFFFFFFFFFKKKKKKKKKQQQQQQQZZZZZZZZQQQQSSSSUUVVVVVVVVVIIVVKKKKKKKK",
    "BBBBBBBMMMMDDDDDDDDDMMMGGGGGGGGGGGGKKKKKCUCPUCCCCCCUUUUUYYYYYYYYJJJJJJJJJFFFFFFFFFFFFKKKKKKKKQQMQQQQQZZZZZZZZZQQQSSSSSVVVVVVVVVVVVVVKKKKKKKK",
    "BBBBBBBMMMDDDDDDDDDDMMGGGGGGGGGGGGKKKKKKKUUPUCCCCCUUUUYYYYYYYYYYYYJJJJJJJFMFFFFFFFFFFKKKKKKKQQQMQMQQQQQZZZQQZQQQQSSSSSSVVVVVVVVVCVVVKKKKKKKK",
    "BBBBBBMMMMDDDDDDDDDMMMGGGGGGGGGGGGGGKKKKKKUUUCCCCCUUUUYYYYYYYMYYYYYYJWWWWFFFFFFFFFFFFKKKKKKMMMMMMMMQQQQZQQQQQQQQSSSSSSSSVVVVVVVVVKKKKKKKKKKK",
    "BBBBBBBBMPVDDDDDDDDWWWGGGGGGGGGGGGGGKKKKUUUCCCCCCUUUUUUYYMMMMMMYYYMMWWMWWFFFFFFFFFFFFKKKKMMMMMMMMMMMQQQQQQQQQQQQQQQSSSSSSSVVVVVVOOOKKKKKKKKK",
    "BBBBBBBPPPVDDDDDDDDWWWGGGGGGGGGGVGGGKKUUUUUUCCCCUUUUUUUUMMMMMMMMMYMMMMMMWWFFWFFFFFFFFKKKKMMMMMMMMMMMQQQQQQQQQQQQQQQSSSVVVVVVVVOOOOOOOKKKKKKK",
    "BBBBBRBPPPPPPDDDDDDDWWGGGGGGGGGGTTTTTTTUUUUUUUCUUUUUUUUUMMMMMMMMMMMMMMMMMWWWWWFFFFFZFKKKKMMMMMMMMMWWQQQQQQQQQQHHQQQSSSSTTTTTOOOOOOOONNOOKKKK",
    "BBBBBBBPPPPPPDPPDDDWWWGGGGTTTTTTTTTTTTTUUUUUUUCUUUUUUUUUMNMMMMMMMMMMMMMMWWWWWWFFFFFFFKKMMMMMMMMMMMWWQQQQQQQHHHHHHQQSSSTTTTTTOOOOOOOOONOOOOKK",
    "QBBBRPPPPPPPPPPPDDDWWWGGGGTTTTTTTTTTTTTIUUUUUUUUUUUUUUUMMMMMMMMMMMMMMMMMUWWWWWWFFFWKKKKKKYMMMMMMMMWWQQQQHHHHHHHHHQQQASTTTTTJOOOOOOOOOOOOOOOK",
    "QBBBBPPPPPPPPPPPPPDWWWGWGGTTTTTTTTTTTTTIIUIIUUUUUUUUUMMMMMMMMMMMMMMMMMMUUWWWWWWWWKKKKKKKKKKMMMMMMMMMMMMHHHHHHHHHHQQQASTTTPPOOOOOOOOOOOOOOOOO",
    "QQQQBPPPPPPPPPPWPWWWWWWWWWGGGGTTTTTTTTTIIIIIUUUUUVUUUUMMMMMMMMMKMMMMMMMXUUUUUUUUWWWKKKKKKKKMMZMMMMMMMMMXHHHHHHHHHHQTTTTTXOOOOXXOOLOOOOOOOOOO",
    "QQPPPPPPPPPPPPPWWWTTTTTTTTWTTTTTTTTTTTTIIIIIUUUPPPPPUUUMMCMMMMRKMMMMMMMXUUUUUUUWWWKKKKKKKKMMMMMMMMMMRHHXHHHHHHHHHHHHTTTTTXXOXXXTOLOOOOOOOOOO",
    "PPPPPPPPPPPPWWWWWWTTTTTTTTWTTTTTTTTTTTTIIIIIIIUPPPPPUUUVVVMMMMMKKNMMXXXXXUUUUUUUWWUKKKKKKKVMMMMMMMMMHHHHHHHHHHHHHHHTTTTTTXXOXXTTTTTOOOOOOOOT",
    "HHPPPPPPPPPPWWWWWWTTTTTTTTWTTTTTTTTTTTTIIIIPIIUPPPPPVVVVVVLMMKKEKKKXXXXXUUUUUUUUUUUVKKKKVVVVVVMEEEEEEHHHHHHHHHHHHHHTTXXXXXXOXXTTTTOTOOOOOOOT",
    "HHHPPPPPPPPPWPWWWWTTTTTTTTTTTTTTTIIIIIIIIPPPPPPPPPPPVVVVVVVKKKKKKKKKKKXXXUUUUUUUUUUVKKKKKVVVVVZZZEVVVHHHHHHHHHHHHHHHHXXXXXBVTTTTTTOOOOOOOOOT",
    "HHHPPPPPPPPPPPWWWWTTTTTTTTTTTTTTTIIIIIIIIPPPPPPPPPPPVVVVVVVKKKKKKKKKKKXXXIIUUUUUUUVVVKKVVVVVVVZZZZVVVHHHHHHHHHHHHHXXXXXXBBBBCTTTTTTOOOOOOOTT",
    "HHHPPPNNNPPPPPWPWWTTTTTTTTTTTTTTTIIIIIIIIPPPPPPPPPPPVVVVVVKKKKKKKKKKKKKXIIIJJJIDUUVVVKVVVIVVZZZZZVVVVVIHHHHHHHHHHHXXXXXXBBBBBTTTTTCCOOOOOTTT",
    "HHHHPNNNNNJPPPPPWWWWTTTTTTTTTTTTTIIIINIIIPPPPPPPPVVVVVVVVVVKKKKKKKKKKKKKIIIIIIIIIIVVVVVVVIIVVVVVVVVVVVIHOOHHHHHHXXXXXXXXXXBBBTTTTTOCOOOOOTTT",
    "HHHHNNNNNNJJJJPPWWWWTTTTTTTTTTTTTIIITNIIIIIEEEEEVVVVVVVVVVVVVKKKKKKKKKKKIIIIIIIIIIVVVVVVIIIVVVVVVVVVVVVHPOOOHIIIIIIXXXXXXBBBBTTTTOOOOOOTTTTT",
    "HHNNNNNNNXJJPPPPPWWWTTTTTTTTWWWIIIIITTTIIIIEEVVVVVVVVVVVVVVKKKKKKKKKKMKKIWIIIIIIIIVVVVVIIIVVVVVVVVVVVVVHPPOIIIIIIIIXXBXXXBBBBTTTTTTTOTTTTTTT",
    "HHHHNNNNNJJJPEEPPWWWTTTTTTTTWWWWUUTITTTTIEEEEVVVVHVVVVVVVVVVKKKKKKKKKTTTIITIIIIEEEEVVEEIIIIVVVVVVVJVVVVPPIIIIIIIIIBBXBBBBBBBBTTTTTTTOTTTTTTT",
    "HHHHNNNNNPPPPEEEPPEWTTTTTTTTUWWWUUTTTTTIIIEEEVCVVHVVVVJJVVAXXKKKKKKKKTTTITTTTEEEEEEEEEEIIIIVVJVVJJJVVVPPPPIIIIIIIBBBBBBBBBBTTTTTTTTTOTTTTTTT",
    "HHHHNNNNNPPPPPEEEEEMWEEWEEEUUWUWUUTTTTTTEEEEEVCCVHVVVJJJJAAXXKKKKKKJJTTTTTTTTTEEEEEEEEEIIIIVJJVJJJJJVPPPPPPIIIIIIBBBBBBBBBBTTTIIIITTCCTTTTTT",
    "LLLLLNNNNNNPEEEEEEEEEEEEEEUUUUUUUUTTTTTTETEEEEJCCJJJJJJJJJJXXXXXKKKKXXXTEEETTTEEEEEEEEEIIIIIJJJJJJJJJPPPPPIIIIIIIIBBBBBBBBTTTTIIIITTTCCCCCTT",
    "LLLLLLLLLLLLEEEEEEEEEEEEEEUUUUUUUTTTTTTTTTEEEEJJCJJJJJJJJJJJJXXXXXXXXXXTEEEDTEEEEEEEEEEEIIIKKJJJJJJJJJPPNNNIIIIIIBBBBBBBBIIIIIIITTTTCCCCCTTT",
    "LLLLLLLLLLLDDDEEEEEEEEEEUUUUUUUUTTTTTTTTTEEEEEJJJJJJJJJJJJJJJXXXXXXXXXXXEEEEXXEEEEEEPPPPPPIJJJJJJJJJPPPPPPNNIIIIBBBBBBBBIIIIIIIITTTCCCCCCCCT",
    "LLLLLLLLLPPDEEEEEEEEEEEEEEEUUUUUUUTYYYYTTEEEEEBBJJJJJJJJJJJJJJXXXXXXXXEEEEEEEEEEEEEEPPPPPPEEJJJJJPJPPPPPPPNNVIINNBBBBBBBBIIIIIITTTTTCCCCCCCT",
    "LLLLLLLLLPPPEEEEEEEEEEEEEEEUUUUUUUJJYYYTEEEEEBBBBBJJJJJJJJJJJJXXXXCPPUEEEEEEEEEEEEEEPPPPPPEELJJAAPPPPPPPPPNNNNFNNNBBBBBBBBIIIITTTTTCCCCCCCCC",
    "LLLLLLLLPPPPEEEEEEEEEEEYYEUUUJJJJJJJJJYEEEEBBBBBBBBJJJJJJJJJJJXXXXPPPPPPEEEEEEEEEEEEPPPPPPEELJJAAPPPPPPPPPNNNNNNNNNNBBBBBLLIIIITTTTCCCCCCCCC",
    "LLLLLLLLPPPPPEEEEEEEEEEEYYUUUJJJJJJJJJYEEEEBEEBBBBBJCJJJJJJJJJXXMMMPPPPPFFEEFFEEEEEEPPPPPPEEEEAAAPPPPPPPPNNNNNXXNNWWBBZLLLLIJTTTTTTTCCCCCCCC",
    "LLLLLLLLLZPPPPPPEEEUEEEYYYYYYJJJJJJJJJJEEEEBBBBBBBBBBBEJJJJJJJXXMMMPPPPPPFFFFFELEEEEPPPPPPAAAAAAAAAPPPPPMMNNNNNNNNWWWWLLLLLSSTTTTTTQQCCCCCCC",
    "LLLLLLLLPPPPPPPPEEEEEEEYYYYYJJJJJJJJJJJXXEEVBBBBBBBBBBJJJJJJJIXXMMPPPPPPFFFFFCEEEPPPPPPPPPPPPPAAAAAPPPPPMMNNNNNNCSSWWCLLLLLRSTSTTTTCCCCCZCCC",
    "LLLLLLLPPPPPPPPPPEPPPEYYYYYYYYJJJJJJJJJJJTEETBBBBBBBBBBJJJJJJJMMMMPPPPPPPFFFFCCCCPPPPPPPPPPPPPAAAAPPPAPMMMMNNNNNCSSCCCLJCCCCSSSTTSSSCCCCZZZZ",
    "LLLLLLLPPPPPPPPPPPPPYYYYYYYYYYJJJJJJJJTJTIIIITBBBBBBBBBBJJJJJMMPPPPPPPPPPPFFFCCCCPPPPPPPPPPPPPAAAAPPAAAAMMMNNNNSSSSSCCCCCCCCCSSSSSSSDCBBZZZZ",
    "LLLLLLLLPPPPPPPPPPPPYYYYYYYYYYYJJJJJJJTOOIIIITTBBBBBBBBBJJJJJMMPPPPPPPPPPFFFFFCCCPPPPPPPPPPPPPAAAPPPAAAMMMMMNNNSSSSCCCCCCCCCCSSSSSSKDDDBBBZZ",
    "LLLLLLLPPPPPPPPPPPPYYYYYYYYYYYYJJJJJTTTTTIIIITBBBABBBBBBBJOJJJMPPPPPPPPPPFFFFFCCCPPPPPPPPPPPPPAAPPPPAAAAMMMMMMMMMSMCCCCCCCCCCSSSSSDDDDDBZZZZ",
    "LLLQLLLLSPPPPPPPPPPYYYYYYYYYYYYYYJRRTTTTTIIIITBBBABBBBBMMJJJJJJJPPPPPPMPPFFFFFCCCFRRRRAPPPPPPPAPPPPAAAAAMMMMMMMMMMMCCCCCCCCCCCSSSSXXXDDDZXZZ",
    "LLLQQLLLSPPPPPPPPPPYYYYYYYYYYYYRRRRTTTTTTIIIITTBBBBBMBBMMMMJJJJJMPPPMPMMPFFFFFCCFFRRRAAAAAAAAAAPPPPPAAOZZMMMMMMMMMMMCCCCCCCCCUSSSSXXXXDDXXXZ",
    "LLQQQQWLPPPPPPPPPPPYYYYYYYYYYYYYRRRTTTTIIIIIITTTBBBMMMMMZMMMJJJJMPMMMPMMMFMMFFFFFFFFFQQQAAAAAAAPPPPPPOOZZZMMPPPPPPPPPPCCCCCCCCISSRXXXXXXXXXX",
    "LLQQQQQQDDDPPPPPPPPBBYYYBBYYYYRRRRRRTTTIIIIIITTTMMBMMMMZZMZZJJJJMMMMMMMMMMMMFMMFFFFFFFQQQQAAALLPPDDDOOOZZZZMPPPPPPPPPPJJCCCCCCCRRRRXRXXXXXEE",
    "LLQQQQQQDDPPPPBPPBBBBBBBBBYBYRRRRRRRRTTIIIIIITTMMMMMMMMZZZZZJJJJMMMMMMMMMMMMMMMMFFFFQQQQQRAAAPPPPGDOOOOZZZMMPPPPPPPPPPPPPPPPCCRRRRRXRRXXEEEU",
    "LQQQQQQQDDDBBBBBBBBBBBBBBBBBBRRRRRRRRTTIIIIIITTMMMMMMMMZZZZZJJJJMMMMMMMMMMMMMMMMFTFTRQQQQRFAGGGGGGDDDZZZZZMMPPPPPPPPPPPPPPPPCRRRRRRRRRXXEEEE",
    "QQQQQQRQDQQBBBBBBBUBBBBBBBBBBBRRRRQQQIIIIIIIITTFFMMMMMMZZZZZJJJJZMMMMMMMMMMMMMMTTTTTRRQQRRFAAGGGGGDEDSZZZZEMPPPPPPPPPPPPPPPPJRRRRRRRRRXEEEEE",
    "QQQQQQQQQQJBBBBBBBUBBBBBBBBBBBBRRRQQQIIIIIIITTTFFFMMMMZZZZZZZZZMMMMMMMMMMMMMMMTTEETTTRQRRRRGGGGGGDDDDSZZZZMMPPPPPPPPPPPPPPPPJRRRRRRRRREEEEEE",
    "QQQQQQQQQQJJBBBBBUUUBBBBBBBBBBOORQQQQIIIIIIITTTTIFFFFMZZZZZZZZJZMMMMMMMMMMMMAAEEEEEETRRRRRRRGGGGGGDDSSZZZZMMPPPPPPPPPPPPPPPPPRRRRRRRREEEEEEE",
    "QQQQQQQQQQJJBBSBUUUZBBBBBBBCBOOORQQQQIIIIIIIITTTFFFFFFVZZZZZZZZZMMMTMMTTMMTMAEEEEEEERRRRRRRRRGGGGGDDUZZZZZMMPPPPPPPPPPPPPPPPPRSRRRRRREEEEEEE",
    "QQQQQDQQWDJJJJUUUUUZZZBBBOCCCOOOOQQQQIIIIIIIITTFFFFFFFFZZZZZZZZZMMMTMMTTTMTMMMEEEEEEEEIIRRRRRGGGGGUUUZZZZZOMPPPPPPPPPPPPPPPPPSSRRRRZLLTLLEEE",
    "QQQQQDDDDDDDJJJJJUUUUBBBBOCCCOOOOQQQQIIIIIIIIEFFFFFFFZFYZZZZZZZZMTTTTTTTTTTTMLLEEEEEEEIIRRRRRRGGGGUUUXZZZOOOPPPPPPPPPPPPPPPPPSBBBRRRALLLLLEE",
    "QQQQQDDDDDDDDDJUUUUUUSBBBOOOOOOOOQQQQIIIIIIIIEFFFFFFFZZZZZZZZZZZTTTTTTTTTTTTTTLTTEEEEERRRRXRRPPPPGGUXXXVOOOOOOOOOOEEEPPPPPPPPBBBBBBAAAALLLLL",
    "QQQQQQDDDDDDDDJJUUZUUUSSSOOOOOOOOQQQQIIIIIIIIEFFFFFLLZZZZZZZZZZTTTTTTTTTTTTTTTTTTEEEEEREEEEORPPPPGUUXXXVOOOOOOOOOOEEEPPPEBBBBBBBBBBAAAAALLLL",
    "QQQQQDDDDDDDDDDUUUUASSSOOOOOOOOOOOQQQIIIIIIIIEEFFFFLLZZZZZZZZZZTTTTTTTTTTTTTTTTTTTETEEEEEEEPPPPPPGUUXXXVVOOOOOOOOOOEEPPPEBBBBBBBBBAABABBBLLL",
    "QQQQQHDDDDDDDDDAUUUAASSAGGGOOOOOOOQQQGGQGGGGGEFFFFLLLLLZZZZZZTTTTTTTTTTTTTTTTTTTOTTTEEEEEEEAPPPPPPPXXXVVVVVVOOOOOOEEEEEEEBBBBBBBBBBBBBBBLLLL",
    "QQQDDDDDDDDDDDDAUAAAAAAAAGOOZOOOOOQGGGGGGGGGGGBBBBLLLLLZZZZZZTMTTTTTTTTFTTTTVVEEOTEEEEEEEEEEPPPPXXXXXXVVVVVOOOOOOOEEEEEEEABBBBBBBBBBBBBBLLLL",
    "QRDDDDDDDDDDDDAAAAAAASSAGGZZZZOOOOGGGGGGGGGGGGGBLLLLLLLZZZZZZZTTZTTTTTTFFFFTTVVEEEEEEEEEETEEPPSSVVVXXXVVVVVOVOOOOOEEEEEEEBBBBBBBBBBBBBBLLLLL",
    "RRDNDDDBDDDDDDAAAAAAASSGGZZZZZOOOOGGGGGGGGGGGGGGSLLLLLZZZZZZZZZZZTZTTTTTFFFTVVVVEEEEEEEEEEEEXXXXSVVVXXVVVVVVVOOOOEEEWEEWWBBWBBBBBBBBBBPLPLLL",
    "RRDDDDDBDDDDDDAAAAAAASSSSZZZZZOTGGGGGGGGGGGGGGGSSSLLLLLZZZZZZZZZZZZTTTTFFFFVVVVVEEEEEEEEEEEEXXXXSVVVVVVVVVVVVVVZZZWWWWEEWWWWWBBBBBBBBPPPPLLL",
    "RRDDDDDDDDDDDDAAAAAAASSSSSZZZZOGGGGGGGGGGGGGGGGSSSLLLLZZZZZZZZZZZZZTTTTTFFFVVVVVVEEVVEEEEEEXXXXXXVVVVVVVVVVVVZZZZZWWWWWWWWWBBBBBBBBBBLLPPLLL",
    "RRDDDDDDDDDDDDDAAAAASSSSLSYZZYGGGGGGGGGGGGGGGSSSSSSSLLZZZZZZZZZZZZZZTTTTFVVVVVVVVEEVVEEEEXXXXXXXXVVVVVVVVVVVVZZZZZZZWWWWWWBBBBBBBVBBLLLPPLLL",
    "RRRDDDDDDDDDKKKKAAAAGGSLLLZZZZNGGGGGGGGGGGGGGSSSSSSSSLZZZZZZZZZZZZZTTTTTVVVVVVVVVVVVVEUXXXXXXXXXVVVVVVVVVVVVVZZZZZZZZWWWWWWBBQBBBVBBLLLLLLLL",
]

const test1 = [ // 140
    "AAAA",
    "BBCD",
    "BBCC",
    "EEEC",
]

const test2 = [ // 772
    "OOOOO",
    "OXOXO",
    "OOOOO",
    "OXOXO",
    "OOOOO",
]

const test3 = [ // 1930
    "RRRRIICCFF",
    "RRRRIICCCF",
    "VVRRRCCFFF",
    "VVRCCCJFFF",
    "VVVVCJJCFE",
    "VVIVCCJJEE",
    "VVIIICJJEE",
    "MIIIIIJJEE",
    "MIIISIJEEE",
    "MMMISSJEEE",
]

const test4 = [ // 28
    "AB",
    "BB",
]

const test5 = [ // 24
    "AA",
    "BB",
]

const test6 = [ // 44
    "AA",
    "BB",
    "BB",
]

function main() {
    console.log("day 11 part 1...")
    // const data = parseInputToArray(test1)
    // console.log(data)
    // const regions = calculateRegions(data)
    // console.log(regions)
    // const totalPrice = calculateTotalPrice(regions)
    // console.log("Total price: " + totalPrice)
    // console.log(data)


    // console.log("Total price test1: " + calculateTotalPrice(calculateRegions(parseInputToArray(test1)))) // 140
    // console.log("Total price test2: " + calculateTotalPrice(calculateRegions(parseInputToArray(test2)))) // 772
    // console.log("Total price test3: " + calculateTotalPrice(calculateRegions(parseInputToArray(test3)))) // 1930
    // console.log("Total price test4: " + calculateTotalPrice(calculateRegions(parseInputToArray(test4)))) // 28
    // console.log("Total price test4: " + calculateTotalPrice(calculateRegions(parseInputToArray(test5)))) // 24
    console.log("Total price test4: " + calculateTotalPrice(calculateRegions(parseInputToArray(input)))) // 24
}

main() // 1424006

function calculateTotalPrice(regions) {
    let totalPrice = 0
    regions.forEach(region => {
        totalPrice += region.price
    })
    return totalPrice
}

function calculateRegions(area) {
    const regions = []

    let id = 0
    area.forEach((row, y) => {
        row.forEach((value, x) => {
            // console.log("Working on " + x + ", " + y)
            // check if part of an existing region
            // if so, go to next
            if (value.isPartOfRegion) {
                // console.log(value.value + " done this one!")
                return
            }

            // else find all fields connected to this field
            const partsOfThisRegion = getRestOfField(area, { x, y })
            // console.log("Region:")
            // console.log(partsOfThisRegion)

            // add all to new region
            regions.push({
                id,
                value: value.value,
                area: undefined,
                perimeter: undefined,
                price: undefined,
                parts: partsOfThisRegion
            })

            // mark all as part of an region
            partsOfThisRegion.forEach(part => {
                area[part.y][part.x].isPartOfRegion = true
            })

            id++
        })
    })

    regions.forEach(region => {
        region.area = region.parts.length
        region.perimeter = calculatePerimeter(area, region)
        region.price = region.area * region.perimeter
    })

    return regions
}

// console.log("TESTING CALCULATEREGIONS")
// console.log(calculateRegions(parseInputToArray(test1)))
// console.log(calculateRegions(parseInputToArray(test2)))

function getRestOfField(area, startPosition) {
    // console.log("lets go!")
    const fieldMap = new Map()
    fieldMap.set(JSON.stringify({ x: startPosition.x, y: startPosition.y }), { x: startPosition.x, y: startPosition.y })

    let previousMapSize = 0
    while (fieldMap.size !== previousMapSize) {
        previousMapSize = fieldMap.size
        // console.log(`Previous size: ${previousMapSize}, current size: ${fieldMap.size}`)
        fieldMap.forEach(field => {
            const neighbours = getAllNeighboursWithSameValue(area, { x: field.x, y: field.y })
            // console.log(neighbours)
            neighbours.forEach(neighbour => {
                // fieldMap.set(neighbour.x, neighbour.y)
                fieldMap.set(JSON.stringify({ x: neighbour.x, y: neighbour.y }), { x: neighbour.x, y: neighbour.y })
            })
        })
        // console.log(fieldMap)
    }
    // console.log(fieldMap)


    return Array.from(fieldMap, ([index, position]) => (position))
}

// console.log("TESTING getRestOfField")
// const area = parseInputToArray(test6)
// console.log(area)
// console.log(getRestOfField(area, { x: 1, y: 1 }))

function calculatePerimeter(map, region) {
    let perimeter = 0
    region.parts.forEach(part => {
        perimeter += (4 - (getAllNeighboursWithSameValue(map, part)).length)
    })
    return perimeter
}

function getIndexOfRegionAtPosition(regions, targetPosition) {
    let index = -1
    regions.forEach((region, i) => {
        if (region.parts.some(part => (part.x === targetPosition.x && part.y === targetPosition.y))) {
            index = i;
            return;
        }
    })
    return index
}

// console.log("TESTING getIndexOfRegionAtPosition")
// const regions = [
//     {
//         id: 0, value: 'A', area: 1, parts: [
//             { value: 'A', x: 0, y: 0 },
//         ]
//     },
//     {
//         id: 4, value: 'B', area: 1, parts: [
//             { value: 'B', x: 0, y: 2 }, { value: 'B', x: 1, y: 1 },
//         ]
//     },
// ]
// console.log(getIndexOfRegionAtPosition(regions, { x: 0, y: 0 })) // 0
// console.log(getIndexOfRegionAtPosition(regions, { x: 1, y: 1 })) // 1


function parseInputToArray(tekst) {
    const data = []
    tekst.forEach(row => {
        const rowData = row.split("")
        const newRowData = []
        rowData.forEach(value => {
            newRowData.push({
                value,
                isPartOfRegion: false
            })
        })
        data.push(newRowData)
    })
    // printArray(data)
    return data
}

function getAllNeighboursWithSameValue(map, position) {
    const targetValue = map[position.y][position.x].value
    const neighbours = []
    const offsets = [
        { offsetX: -1, offsetY: 0 },
        { offsetX: 1, offsetY: 0 },
        { offsetX: 0, offsetY: -1 },
        { offsetX: 0, offsetY: 1 },
    ]

    offsets.forEach(offset => {
        const indexX = Number(position.x) + offset.offsetX
        const indexY = Number(position.y) + offset.offsetY
        // console.log("trying " + indexX + ", " + indexY)
        if (map?.[indexY]?.[indexX]?.value
        ) {
            if (map[indexY][indexX].value == targetValue) {
                // console.log("found a neighbour!")
                neighbours.push({ value: map[indexY][indexX].value, x: indexX, y: indexY })
            }
        }
    })

    return neighbours
}