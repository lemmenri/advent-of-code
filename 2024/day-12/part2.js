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

const test7 = [
    "AA",
]

const test8 = [
    "EEEEE",
    "EXXXX",
    "EEEEE",
    "EXXXX",
    "EEEEE",
]

const test9 = [
    "AAAAAA",
    "AAABBA",
    "AAABBA",
    "ABBAAA",
    "ABBAAA",
    "AAAAAA",
]

const test10 = [
    "AAA",
    "AAA",
    "AAA",
]

function main() {
    console.log("day 11 part 2...")
    // const data = parseInputToArray(test10)
    // console.log(data)
    // const regions = calculateRegions(data)
    // console.log(regions)
    // const totalPrice = calculateTotalPrice(regions)
    // console.log("Total price: " + totalPrice)
    // console.log(data)


    console.log("Total price test1: " + calculateTotalPrice(calculateRegions(parseInputToArray(test1)))) // 80
    console.log("Total price test2: " + calculateTotalPrice(calculateRegions(parseInputToArray(test2)))) // 436
    console.log("Total price test3: " + calculateTotalPrice(calculateRegions(parseInputToArray(test3)))) // 1206
    console.log("Total price test4: " + calculateTotalPrice(calculateRegions(parseInputToArray(test4)))) // 22
    console.log("Total price test5: " + calculateTotalPrice(calculateRegions(parseInputToArray(test5)))) // 16
    console.log("Total price input: " + calculateTotalPrice(calculateRegions(parseInputToArray(input)))) // 858684
    // console.log("Total price test7: " + calculateTotalPrice(calculateRegions(parseInputToArray(test7)))) // 8
    // console.log("Total price test8: " + calculateTotalPrice(calculateRegions(parseInputToArray(test8)))) // 236
    // console.log("Total price test9: " + calculateTotalPrice(calculateRegions(parseInputToArray(test9)))) // 368
    // console.log("Total price test10: " + calculateTotalPrice(calculateRegions(parseInputToArray(test10)))) // 36
}

main() // 858684

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
                sides: undefined,
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
        // region.sides = calculateSides(area, region)
        region.sides = calculateCorners(region)
        // region.perimeter = calculatePerimeter(area, region)
        region.price = region.area * region.sides
    })

    return regions
}

// console.log("TESTING CALCULATEREGIONS")
// console.log(calculateRegions(parseInputToArray(test1)))
// console.log(calculateRegions(parseInputToArray(test2)))

function calculateCorners(region) {
    let corners = 0

    const fields = region.parts
    const fieldDetails = []
    fields.forEach(field => {
        const north = fields.find(part => (part.x === field.x && (part.y + 1) === field.y))
        const east = fields.find(part => ((part.x - 1) === field.x && part.y === field.y))
        const south = fields.find(part => (part.x === field.x && (part.y - 1) === field.y))
        const west = fields.find(part => ((part.x + 1) === field.x && part.y === field.y))
        const northEast = fields.find(part => ((part.x - 1) === field.x && (part.y + 1) === field.y))
        const southEast = fields.find(part => ((part.x - 1) === field.x && (part.y - 1) === field.y))
        const southWest = fields.find(part => ((part.x + 1) === field.x && (part.y - 1) === field.y))
        const northWest = fields.find(part => ((part.x + 1) === field.x && (part.y + 1) === field.y))
        fieldDetails.push({
            field,
            north,
            northEast,
            east,
            southEast,
            south,
            southWest,
            west,
            northWest,
        })
    })
    // console.log(fieldDetails)

    fieldDetails.forEach(field => {
        // north east
        if ((!field.north && !field.east) || (field.north && field.east && (!field.northEast))) {
            // console.log('north east corner found for field: ' + field.field.x + ", " + field.field.y)
            corners++
        }
        // south east
        if ((!field.south && !field.east) || (field.south && field.east && (!field.southEast))) {
            // console.log('south east corner found for field: ' + field.field.x + ", " + field.field.y)
            corners++
        }
        // south west
        if ((!field.south && !field.west) || (field.south && field.west && (!field.southWest))) {
            // console.log('south west corner found for field: ' + field.field.x + ", " + field.field.y)
            corners++
        }
        // north west
        if ((!field.north && !field.west) || (field.north && field.west && (!field.northWest))) {
            // console.log('north west corner found for field: ' + field.field.x + ", " + field.field.y)
            corners++
        }
    })

    return corners
}

// function calculateSides(area, region) {
//     let sides = 0
//     const fields = region.parts
//     const fieldDetails = []
//     fields.forEach(field => {
//         const north = fields.find(part => (part.x === field.x && (part.y + 1) === field.y))
//         const east = fields.find(part => ((part.x - 1) === field.x && part.y === field.y))
//         const south = fields.find(part => (part.x === field.x && (part.y - 1) === field.y))
//         const west = fields.find(part => ((part.x + 1) === field.x && part.y === field.y))
//         fieldDetails.push({
//             field,
//             north,
//             northId: undefined,
//             east,
//             eastId: undefined,
//             south,
//             southId: undefined,
//             west,
//             westId: undefined,
//         })
//     })
//     // console.log(fieldDetails)

//     fieldDetails.forEach(field => {
//         // North
//         if (field.north === undefined) {
//             // Get East neighbours NorthId
//             const eastNorth = fieldDetails.find((plot) => ((plot.field.x - 1) === field.field.x && plot.field.y === field.field.y))?.northId
//             // Get West neighbours NorthId
//             const westNorth = fieldDetails.find((plot) => ((plot.field.x + 1) === field.field.x && plot.field.y === field.field.y))?.northId
//             // console.log("neighbours north")
//             // console.log(eastNorth)
//             // console.log(westNorth)
//             if (eastNorth !== undefined) { field.northId = eastNorth }
//             else if (westNorth !== undefined) { field.northId = westNorth }
//             else {
//                 field.northId = sides
//                 sides++
//             }
//             // console.log(field.northId)
//         }

//         // East
//         if (field.east === undefined) {
//             // Get South neighbours EastId
//             const southEast = fieldDetails.find(plot => (plot.field.x === field.field.x && (plot.field.y - 1) === field.field.y))?.eastId
//             // Get North neighbours EastId
//             const northEast = fieldDetails.find(plot => (plot.field.x === field.field.x && (plot.field.y + 1) === field.field.y))?.eastId
//             // console.log("neighbours east")
//             // console.log(southEast)
//             // console.log(northEast)
//             if (southEast !== undefined) { field.eastId = southEast }
//             else if (northEast !== undefined) { field.eastId = northEast }
//             else {
//                 field.eastId = sides
//                 sides++
//             }
//             // console.log(field.eastId)
//         }

//         // South
//         if (field.south === undefined) {
//             // Get East neighbours SouthId
//             const eastSouth = fieldDetails.find(plot => ((plot.field.x - 1) === field.field.x && plot.field.y === field.field.y))?.southId
//             // Get West neighbours SouthId
//             const westSouth = fieldDetails.find(plot => ((plot.field.x + 1) === field.field.x && plot.field.y === field.field.y))?.southId
//             // console.log("neighbours south")
//             // console.log(eastSouth)
//             // console.log(westSouth)
//             if (eastSouth !== undefined) { field.southId = eastSouth }
//             else if (westSouth !== undefined) { field.southId = westSouth }
//             else {
//                 field.southId = sides
//                 sides++
//             }
//             // console.log(field.southId)
//         }

//         // West
//         if (field.west === undefined) {
//             // Get South neighbours WestId
//             const southWest = fieldDetails.find(plot => (plot.field.x === field.field.x && (plot.field.y - 1) === field.field.y))?.westId
//             // Get North neighbours WestId
//             const northWest = fieldDetails.find(plot => (plot.field.x === field.field.x && (plot.field.y + 1) === field.field.y))?.westId
//             // console.log("neighbours west")
//             // console.log(southWest)
//             // console.log(northWest)
//             if (southWest !== undefined) { field.westId = southWest }
//             else if (northWest !== undefined) { field.westId = northWest }
//             else {
//                 field.westId = sides
//                 sides++
//             }
//             // console.log(field.westId)
//         }
//     })
//     // console.log(fieldDetails)

//     return sides
// }

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