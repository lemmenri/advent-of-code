const input = [
    "8404622",
    "4315145",
    "4484880",
    "7432090",
    "2282624",
    "5418664",
    "695788",
    "8442243",
    "4056555",
    "4326054",
    "7230547",
    "12703239",
    "10796757",
    "7395928",
    "15579346",
    "16379788",
    "10247845",
    "2748285",
    "977005",
    "8138763",
    "11033855",
    "14956421",
    "3767673",
    "7123961",
    "9301462",
    "10757610",
    "2886772",
    "5236340",
    "3782510",
    "5364973",
    "3866401",
    "7533397",
    "1474424",
    "11637774",
    "2690482",
    "2770110",
    "10720683",
    "11484750",
    "14270717",
    "11559034",
    "8473165",
    "3362296",
    "4090619",
    "6152887",
    "4627633",
    "9785878",
    "6756371",
    "4195699",
    "7997751",
    "15541286",
    "14849780",
    "12012394",
    "15029845",
    "5840036",
    "14680516",
    "1050714",
    "15158572",
    "13831219",
    "1283520",
    "11795465",
    "5388964",
    "8707783",
    "13580635",
    "5423026",
    "6173268",
    "15288367",
    "1189907",
    "3271491",
    "4363148",
    "16035487",
    "8643136",
    "8290136",
    "12581492",
    "10869370",
    "10680600",
    "15533741",
    "8733364",
    "15367067",
    "9148446",
    "4005002",
    "3388997",
    "6497705",
    "5699650",
    "1802668",
    "4788434",
    "9988019",
    "1384879",
    "15133976",
    "14499529",
    "5085507",
    "14658408",
    "618127",
    "15416682",
    "16447882",
    "13983341",
    "14089031",
    "345923",
    "6225367",
    "6084920",
    "12576830",
    "3179844",
    "5567668",
    "3035881",
    "12930420",
    "280557",
    "15946834",
    "10514301",
    "15732792",
    "11584904",
    "2399923",
    "291573",
    "1078785",
    "4155647",
    "2182653",
    "11926565",
    "2380336",
    "10207422",
    "7856368",
    "2913395",
    "7677344",
    "11889969",
    "2040845",
    "160665",
    "10533920",
    "3300017",
    "3150149",
    "16650475",
    "3878773",
    "15852107",
    "2754369",
    "9130580",
    "12699405",
    "4382581",
    "341086",
    "141250",
    "4150323",
    "5543388",
    "9863520",
    "7170869",
    "11512403",
    "16685436",
    "6768252",
    "9612844",
    "11288237",
    "3306435",
    "3994652",
    "5629842",
    "12009670",
    "10557964",
    "11174122",
    "13682106",
    "7299573",
    "3771279",
    "1499706",
    "12001660",
    "7513197",
    "2893569",
    "9022388",
    "16461210",
    "7462534",
    "7864682",
    "10215781",
    "4658238",
    "15790882",
    "4472862",
    "13456598",
    "15666790",
    "145815",
    "15804058",
    "7599274",
    "16654977",
    "404467",
    "7413221",
    "13123479",
    "9231273",
    "6260495",
    "4513084",
    "15900917",
    "2417953",
    "7979641",
    "4942654",
    "5277743",
    "2404832",
    "11381817",
    "14008913",
    "7753355",
    "4757801",
    "14705410",
    "1919699",
    "2871654",
    "5976877",
    "14980791",
    "5136572",
    "10648546",
    "11245295",
    "749524",
    "3668086",
    "3496804",
    "5468286",
    "7186632",
    "8578896",
    "9889739",
    "16646097",
    "13958483",
    "12846712",
    "16456784",
    "4057180",
    "5321058",
    "16352123",
    "6433363",
    "13665164",
    "7700571",
    "2709049",
    "5692655",
    "15863851",
    "11766844",
    "498113",
    "5453132",
    "13877673",
    "8716185",
    "3144429",
    "2880751",
    "10172421",
    "6847302",
    "236689",
    "7399147",
    "6577920",
    "9332261",
    "1029324",
    "12160017",
    "14869758",
    "16347298",
    "13121938",
    "13974108",
    "10775238",
    "12620603",
    "16556709",
    "12730061",
    "13236482",
    "9622954",
    "7077141",
    "13022156",
    "15999529",
    "10481747",
    "8726313",
    "4239025",
    "9644810",
    "6217993",
    "7365287",
    "1992384",
    "5932273",
    "6599776",
    "15912642",
    "14082065",
    "16674278",
    "16008060",
    "4231561",
    "16475956",
    "229667",
    "10586258",
    "5259868",
    "12472396",
    "9170783",
    "6805568",
    "5683968",
    "14784354",
    "16498471",
    "8781909",
    "16319221",
    "10119480",
    "1201370",
    "3185595",
    "11352126",
    "14128557",
    "12929894",
    "11420647",
    "11848021",
    "12738555",
    "13420110",
    "3960943",
    "5119199",
    "14552969",
    "6192603",
    "2320971",
    "3011783",
    "7251690",
    "9581497",
    "11579324",
    "7797427",
    "12971996",
    "2986912",
    "8015071",
    "2913074",
    "8577947",
    "9571546",
    "13969800",
    "12913372",
    "4898999",
    "1536482",
    "10165360",
    "10026084",
    "2610154",
    "16342627",
    "12520264",
    "14407655",
    "10299875",
    "13827396",
    "12496138",
    "1530370",
    "12891647",
    "6550377",
    "339086",
    "9690104",
    "10139414",
    "12473382",
    "10701658",
    "7587031",
    "14131483",
    "15316293",
    "11695246",
    "6901160",
    "7340635",
    "921042",
    "14941151",
    "8855553",
    "12568135",
    "10162088",
    "4420024",
    "15568296",
    "14876796",
    "10249221",
    "8274384",
    "15993280",
    "14141852",
    "12950044",
    "16765424",
    "4804311",
    "6192874",
    "5169110",
    "5896422",
    "4282698",
    "3755590",
    "11711402",
    "12136293",
    "5941713",
    "6677519",
    "3196528",
    "10775273",
    "2338951",
    "14379260",
    "2365676",
    "1088424",
    "1496229",
    "10155117",
    "9115042",
    "6264646",
    "7555074",
    "6551045",
    "575547",
    "15431666",
    "10432196",
    "2539644",
    "5530556",
    "3580029",
    "2820863",
    "5228940",
    "13943609",
    "16285509",
    "4372680",
    "1765562",
    "5597626",
    "4489384",
    "15104251",
    "5331548",
    "15362164",
    "15428699",
    "255792",
    "10577604",
    "14705201",
    "13272059",
    "2003336",
    "5431488",
    "9452391",
    "11295485",
    "8849065",
    "10198014",
    "13613826",
    "4756848",
    "9916111",
    "14806180",
    "2751611",
    "1436101",
    "5709832",
    "15681442",
    "514892",
    "9185160",
    "3465891",
    "16592815",
    "6811236",
    "1717981",
    "422278",
    "960430",
    "13365912",
    "11235407",
    "15337843",
    "9937278",
    "6361474",
    "10688460",
    "10758757",
    "15485329",
    "13167034",
    "10866053",
    "14636547",
    "13909415",
    "11073920",
    "5595594",
    "16588177",
    "7495957",
    "9675117",
    "10580783",
    "940096",
    "11363512",
    "13610240",
    "11648445",
    "8165216",
    "3972445",
    "5680655",
    "7996510",
    "5697808",
    "8807130",
    "13875834",
    "14899295",
    "4942342",
    "12909941",
    "4305817",
    "2450292",
    "2032760",
    "6211651",
    "7887131",
    "7062679",
    "3513313",
    "3958612",
    "2189359",
    "2614461",
    "6490862",
    "6953253",
    "11470801",
    "9804703",
    "322100",
    "9745859",
    "11474782",
    "15408024",
    "2933314",
    "4252743",
    "11774033",
    "8047599",
    "10324585",
    "4166415",
    "16073585",
    "4896782",
    "10120683",
    "5540078",
    "12291906",
    "10362247",
    "16071557",
    "4048891",
    "5289449",
    "16472089",
    "3847706",
    "843339",
    "11103828",
    "735142",
    "16044243",
    "10332113",
    "8254337",
    "1035617",
    "5325938",
    "11438100",
    "9132160",
    "14510444",
    "14149243",
    "455691",
    "8297422",
    "9577931",
    "12893372",
    "5115254",
    "3370017",
    "14523519",
    "2713613",
    "7795579",
    "13680619",
    "15778459",
    "14393203",
    "16040197",
    "11725356",
    "8465980",
    "6682788",
    "9210455",
    "1814320",
    "6485875",
    "8586122",
    "13054441",
    "2010442",
    "5632383",
    "10429382",
    "3400226",
    "2235502",
    "13502472",
    "910399",
    "16594907",
    "6622968",
    "6639759",
    "12813702",
    "3645907",
    "8704433",
    "7268549",
    "5504867",
    "9024817",
    "15357060",
    "6253620",
    "2805788",
    "2414639",
    "9923581",
    "1762369",
    "15200225",
    "11527070",
    "15055118",
    "15805077",
    "14990468",
    "10521527",
    "4312077",
    "15152311",
    "10440697",
    "223696",
    "6559068",
    "11627979",
    "13601593",
    "13395234",
    "15010940",
    "6274666",
    "605676",
    "1282458",
    "7471527",
    "5513179",
    "13091261",
    "3742410",
    "14541170",
    "14771496",
    "10067353",
    "9486300",
    "11409715",
    "13723392",
    "9128174",
    "11609325",
    "3426609",
    "6616264",
    "3006658",
    "13748424",
    "3588829",
    "4205287",
    "12580831",
    "8574024",
    "15165587",
    "13517286",
    "2162546",
    "5956797",
    "12553577",
    "11737318",
    "3862080",
    "12199387",
    "6050290",
    "9307568",
    "15309138",
    "11002713",
    "8440249",
    "11831980",
    "3467509",
    "11968601",
    "16337005",
    "132359",
    "3340362",
    "6996987",
    "5019844",
    "268426",
    "5370616",
    "8923422",
    "11195660",
    "6312140",
    "7855185",
    "4396111",
    "5054061",
    "6567380",
    "7633962",
    "11210792",
    "4634311",
    "11786906",
    "3708856",
    "6250279",
    "9696781",
    "6749033",
    "1373981",
    "4559853",
    "9329113",
    "3946172",
    "725734",
    "9998132",
    "12148950",
    "11090410",
    "9938568",
    "4575116",
    "1775213",
    "5648819",
    "9489863",
    "2847456",
    "11923942",
    "4199103",
    "6175343",
    "13657912",
    "15071767",
    "11721994",
    "4777174",
    "13273063",
    "2996009",
    "4959314",
    "8799403",
    "14833741",
    "3887898",
    "845006",
    "2522912",
    "11394791",
    "6293978",
    "12262324",
    "4744154",
    "5706750",
    "15570930",
    "1334392",
    "11983387",
    "16138371",
    "1789149",
    "6443805",
    "9980783",
    "7568640",
    "2201894",
    "12042119",
    "15951777",
    "3131223",
    "16640672",
    "4508250",
    "3114717",
    "10650157",
    "14888654",
    "16621482",
    "3416578",
    "10672986",
    "12181457",
    "2141113",
    "7863703",
    "3203446",
    "7194338",
    "15820720",
    "13523312",
    "15787238",
    "14289817",
    "9868673",
    "15062251",
    "13574182",
    "15293624",
    "3586080",
    "13946294",
    "10888970",
    "2775455",
    "6124915",
    "2643045",
    "3339982",
    "2389427",
    "12070837",
    "13166215",
    "7993937",
    "11380103",
    "1223025",
    "2287812",
    "1986772",
    "13550246",
    "15724431",
    "13913161",
    "11803312",
    "12055349",
    "1861073",
    "6179121",
    "5345553",
    "7862494",
    "13752423",
    "787126",
    "3728585",
    "10961534",
    "616296",
    "5904837",
    "593498",
    "11229528",
    "5856143",
    "4748848",
    "15546404",
    "6611098",
    "7023822",
    "10038777",
    "437366",
    "4861971",
    "2279439",
    "16690208",
    "11091345",
    "15770882",
    "2447362",
    "12043570",
    "15865691",
    "8935684",
    "1194401",
    "13891135",
    "2067040",
    "12911348",
    "6123228",
    "9945826",
    "4487212",
    "9800618",
    "6470885",
    "2172970",
    "2884252",
    "2114668",
    "2618990",
    "14089081",
    "16612568",
    "8442286",
    "14342540",
    "11427345",
    "9139694",
    "14982843",
    "16046802",
    "1914549",
    "8469709",
    "7413920",
    "1081558",
    "13427432",
    "932952",
    "2497661",
    "9648766",
    "5799782",
    "14345899",
    "954940",
    "12540951",
    "8106996",
    "7803257",
    "13407283",
    "4456865",
    "2670678",
    "5977181",
    "6367807",
    "7578796",
    "15761155",
    "10622591",
    "11996717",
    "1132435",
    "9930071",
    "11756690",
    "7109698",
    "5311508",
    "15910983",
    "12598386",
    "12654609",
    "1054190",
    "1310512",
    "9693673",
    "2021263",
    "1624196",
    "6759438",
    "5726735",
    "3510190",
    "9512535",
    "1450085",
    "7938522",
    "5431943",
    "15177671",
    "5972048",
    "4532686",
    "7563870",
    "13449595",
    "3002521",
    "6174388",
    "1426031",
    "1603490",
    "6003036",
    "1308241",
    "8251823",
    "9236316",
    "4770691",
    "3461532",
    "6295617",
    "16576678",
    "2802826",
    "14587096",
    "10652049",
    "12746348",
    "13420592",
    "2192138",
    "3468910",
    "925083",
    "2440011",
    "6940407",
    "5619659",
    "13978760",
    "15989913",
    "2501014",
    "16553736",
    "15472493",
    "8503406",
    "3954211",
    "16277473",
    "8405603",
    "16513330",
    "3797150",
    "14331230",
    "10230486",
    "4610310",
    "6227292",
    "3285566",
    "14399327",
    "4599699",
    "13386136",
    "10387840",
    "13539984",
    "4104626",
    "13667980",
    "1599693",
    "3082614",
    "2375366",
    "6444169",
    "16140186",
    "13729387",
    "10160322",
    "12886737",
    "10020550",
    "6969892",
    "3561324",
    "3157390",
    "9439424",
    "4459773",
    "13026556",
    "11738713",
    "1854691",
    "5144314",
    "6271298",
    "12117723",
    "10601988",
    "14248783",
    "14876781",
    "8129029",
    "7440068",
    "2357712",
    "1188652",
    "15575071",
    "13232749",
    "4209469",
    "16039446",
    "2006638",
    "1995187",
    "14402089",
    "7501415",
    "10317253",
    "13876159",
    "12824293",
    "2523357",
    "1025419",
    "14368910",
    "5885666",
    "1639653",
    "336866",
    "7798158",
    "4875498",
    "10660241",
    "14258585",
    "6814726",
    "631964",
    "7051928",
    "13740641",
    "16280993",
    "5869273",
    "10740078",
    "8276336",
    "8763905",
    "16691978",
    "9070751",
    "4069681",
    "1582103",
    "12009596",
    "12695014",
    "15467514",
    "6636103",
    "15138976",
    "7872776",
    "10620169",
    "7812437",
    "3888227",
    "6212131",
    "3642862",
    "8970821",
    "13142440",
    "10946884",
    "12838541",
    "8599340",
    "13438835",
    "1552909",
    "2576000",
    "9252129",
    "13815139",
    "8648921",
    "16103247",
    "8158784",
    "13277904",
    "5614133",
    "7989556",
    "4346059",
    "12732706",
    "6869377",
    "5183902",
    "2821152",
    "14584017",
    "14872457",
    "8729723",
    "13337695",
    "6362874",
    "9569599",
    "9724289",
    "10762775",
    "10151796",
    "751901",
    "12310088",
    "12050305",
    "15895319",
    "276124",
    "13137614",
    "5124134",
    "13164531",
    "2901491",
    "8720717",
    "2467321",
    "1933369",
    "16115345",
    "16267732",
    "4336431",
    "5869802",
    "16207897",
    "12883714",
    "8306244",
    "13502825",
    "7699274",
    "9475443",
    "2193599",
    "6729150",
    "6063606",
    "13192238",
    "9741664",
    "7959661",
    "14398041",
    "8868636",
    "6349445",
    "8485803",
    "16050728",
    "9072409",
    "2604419",
    "8973848",
    "11257970",
    "9594523",
    "198364",
    "14090791",
    "8137160",
    "12765195",
    "7557378",
    "10202852",
    "12273749",
    "16496927",
    "13881213",
    "4764166",
    "12884089",
    "1537618",
    "11472414",
    "10050560",
    "625138",
    "14842983",
    "4184763",
    "12674064",
    "3510549",
    "3376503",
    "13769724",
    "16006737",
    "11563640",
    "6471809",
    "14434140",
    "8346982",
    "4241753",
    "16170942",
    "8860793",
    "16062055",
    "5176663",
    "10905607",
    "1283707",
    "14222718",
    "5477995",
    "12004541",
    "10643991",
    "13871628",
    "13925853",
    "15706184",
    "3713653",
    "7415544",
    "14696341",
    "16733202",
    "945359",
    "14003555",
    "4546699",
    "5964870",
    "13340005",
    "6091306",
    "9686037",
    "12826116",
    "9583593",
    "6250278",
    "621234",
    "9773814",
    "11480340",
    "15566240",
    "10180693",
    "6157598",
    "11091635",
    "922911",
    "9481859",
    "14287538",
    "5750262",
    "5537379",
    "14233204",
    "10872203",
    "16169275",
    "10292049",
    "13685025",
    "1760574",
    "7571995",
    "982865",
    "4504943",
    "4726862",
    "14581203",
    "4328944",
    "9787356",
    "11571548",
    "9426069",
    "12500050",
    "2333133",
    "8442369",
    "3774368",
    "8653736",
    "4086056",
    "1546317",
    "13800794",
    "5825462",
    "16368175",
    "13649493",
    "16676326",
    "9913158",
    "6350196",
    "9072432",
    "1299722",
    "16727435",
    "14012815",
    "6499055",
    "8182605",
    "3118412",
    "15508340",
    "2878896",
    "2515876",
    "6194738",
    "5417120",
    "10137053",
    "5668836",
    "9668472",
    "15463167",
    "14828771",
    "8489127",
    "2877183",
    "4679445",
    "14316864",
    "10350619",
    "11648470",
    "11444518",
    "3363534",
    "15736463",
    "16022843",
    "3296577",
    "7599969",
    "16105060",
    "4788828",
    "4419466",
    "4036730",
    "6508337",
    "1252671",
    "8211928",
    "11531229",
    "11049165",
    "3475876",
    "5789856",
    "6713853",
    "10738169",
    "10218767",
    "10598203",
    "2340879",
    "8863547",
    "1648841",
    "4493822",
    "8139117",
    "1732726",
    "2952992",
    "11103011",
    "10646116",
    "6140555",
    "4040191",
    "12703037",
    "10710825",
    "7489855",
    "12280764",
    "498443",
    "15147470",
    "11354198",
    "10031841",
    "2387869",
    "3556185",
    "9997477",
    "11822250",
    "13692726",
    "6006772",
    "8211089",
    "6485269",
    "1507333",
    "5123613",
    "2208301",
    "13257859",
    "7822757",
    "7548502",
    "16438725",
    "6997820",
    "14393965",
    "931155",
    "13584728",
    "10360940",
    "9618919",
    "15558673",
    "14746651",
    "13078991",
    "13274975",
    "8007771",
    "14351269",
    "9011346",
    "3450383",
    "5981025",
    "8433407",
    "405734",
    "2616738",
    "7494607",
    "16308568",
    "3784994",
    "1633464",
    "9721765",
    "10308741",
    "1405309",
    "637871",
    "6496400",
    "5977597",
    "14088984",
    "7211890",
    "5555701",
    "5978468",
    "13989436",
    "12537348",
    "5405470",
    "4291866",
    "10949038",
    "9632872",
    "8608787",
    "11099047",
    "13846874",
    "5236475",
    "5284256",
    "15825693",
    "14562989",
    "14347690",
    "11637445",
    "15719920",
    "3155607",
    "16475200",
    "9857159",
    "7051762",
    "8181111",
    "14267380",
    "424548",
    "14646886",
    "7069161",
    "9627000",
    "7305030",
    "5669961",
    "9452053",
    "13895234",
    "15651243",
    "11311146",
    "14464216",
    "370496",
    "8560628",
    "8226302",
    "2699022",
    "16700189",
    "3890318",
    "4499835",
    "1270312",
    "3151132",
    "4955736",
    "2675626",
    "11524699",
    "15319027",
    "5315127",
    "6464586",
    "7021768",
    "3165295",
    "4531262",
    "8758987",
    "286525",
    "16388699",
    "2437841",
    "14144123",
    "7769248",
    "6418976",
    "14445198",
    "10342288",
    "15611974",
    "3859097",
    "13786972",
    "11960981",
    "6639948",
    "5329917",
    "5406725",
    "196786",
    "2284128",
    "12551757",
    "14755626",
    "8850700",
    "16681027",
    "2971264",
    "6897658",
    "13741417",
    "13303580",
    "15573399",
    "16619568",
    "3608055",
    "2666878",
    "16688916",
    "6438191",
    "9426154",
    "4649499",
    "5979294",
    "4462820",
    "14150232",
    "14313263",
    "13832812",
    "10157569",
    "9407088",
    "3893965",
    "11180737",
    "5610435",
    "15655883",
    "328333",
    "2078223",
    "1812724",
    "14117971",
    "9296237",
    "15294567",
    "1693242",
    "8263864",
    "4078911",
    "5508023",
    "10203645",
    "11046933",
    "5544808",
    "14341043",
    "6825492",
    "12245734",
    "13024385",
    "3310748",
    "13187715",
    "15052029",
    "12142866",
    "9417732",
    "14518809",
    "15516051",
    "8882296",
    "8622654",
    "1025902",
    "3047966",
    "8207341",
    "2048930",
    "13990935",
    "9291731",
    "16234452",
    "4428257",
    "11956806",
    "6330465",
    "3050052",
    "11710050",
    "11441135",
    "9610108",
    "3804491",
    "12916543",
    "3304388",
    "1021052",
    "13763196",
    "4454319",
    "12362972",
    "7818313",
    "5368290",
    "6916759",
    "15435704",
    "4804696",
    "339407",
    "2886089",
    "10649503",
    "5531266",
    "15060150",
    "7468470",
    "9558981",
    "16574177",
    "13373394",
    "9985951",
    "6008255",
    "3076056",
    "4431406",
    "3355411",
    "8764368",
    "4571331",
    "13579648",
    "3019286",
    "16274303",
    "7219385",
    "9452086",
    "6519200",
    "708745",
    "10650625",
    "5878823",
    "8245535",
    "15527874",
    "4997072",
    "9704073",
    "8222552",
    "14329359",
    "9538546",
    "15594992",
    "1343608",
    "12118654",
    "14991611",
    "1726356",
    "5297225",
    "16679431",
    "7160469",
    "15441761",
    "7917426",
    "773108",
    "9712734",
    "6609923",
    "9113361",
    "2118171",
    "1595326",
    "8812185",
    "5976729",
    "11112531",
    "1226213",
    "12377221",
    "14166917",
    "1520970",
    "10118675",
    "4194968",
    "4269467",
    "185584",
    "15833315",
    "2357955",
    "5415822",
    "4424697",
    "5708125",
    "8885847",
    "7113544",
    "13080011",
    "16672521",
    "11997231",
    "7303651",
    "13257773",
    "4218142",
    "12626179",
    "8151302",
    "187257",
    "243072",
    "4457126",
    "6022578",
    "3471577",
    "1277424",
    "5749292",
    "969370",
    "10556210",
    "11298386",
    "9075317",
    "9123293",
    "11226295",
    "6650796",
    "15633959",
    "2865820",
    "1037352",
    "5371872",
    "12533451",
    "11633119",
    "13630082",
    "15863237",
    "16338033",
    "9513850",
    "3444428",
    "6455213",
    "9507625",
    "13178364",
    "2553365",
    "8982249",
    "1767281",
    "15727705",
    "658490",
    "11327791",
    "11810271",
    "11362260",
    "1710924",
    "9119826",
    "14471754",
    "1905855",
    "4111726",
    "10841313",
    "13047053",
    "15009780",
    "1898779",
    "1616077",
    "4953887",
    "12546391",
    "4957040",
    "2867032",
    "10712407",
    "10886279",
    "8745149",
    "7894764",
    "10280325",
    "10562480",
    "2036521",
    "9089947",
    "16325298",
    "11804858",
    "11823730",
    "11207018",
    "5291648",
    "9924177",
    "10862852",
    "12785515",
    "2754933",
    "13642742",
    "8528563",
    "8778798",
    "6398147",
    "6526465",
    "11098640",
    "6400962",
    "12888873",
    "8981391",
    "2262089",
    "2313207",
    "2499984",
    "5406875",
    "12351938",
    "10708809",
    "3377191",
    "13930737",
    "7841072",
    "861731",
    "11758591",
    "1849677",
    "10487062",
    "273393",
    "1498259",
    "11394568",
    "4902323",
    "14769553",
    "3821036",
    "12177819",
    "646441",
    "9802879",
    "267456",
    "14981336",
    "15168181",
    "16165149",
    "14997360",
    "1918469",
    "10515715",
    "4250163",
    "1454724",
    "14317319",
    "9649544",
    "13534125",
    "5244696",
    "6409388",
    "532405",
    "2367067",
    "9454219",
    "5998934",
    "8297791",
    "2861387",
    "6742715",
    "777170",
    "12707201",
    "3055350",
    "11296317",
    "13506230",
    "3698417",
    "13920333",
    "15800870",
    "15701384",
    "5789743",
    "5278013",
    "801840",
    "2797074",
    "2034640",
    "3041540",
    "11062915",
    "267642",
    "3881025",
    "5650485",
    "1181381",
    "7888234",
    "15170943",
    "582120",
    "12362413",
    "15228190",
    "13813289",
    "1030427",
    "10032629",
    "11121750",
    "5159579",
    "5665228",
    "7272017",
    "4672052",
    "11621434",
    "682711",
    "147154",
    "5857171",
    "10788573",
    "11734278",
    "16194333",
    "1516264",
    "14096252",
    "13728061",
    "9482457",
    "8962740",
    "9491393",
    "14716431",
    "10318032",
    "13292151",
    "2969342",
    "5820493",
    "10669710",
    "392337",
    "593953",
    "15175066",
    "3908203",
    "2027700",
    "5808883",
    "14217016",
    "12850304",
    "15022743",
    "8255147",
    "11151765",
    "16170084",
    "4267585",
    "11605541",
    "7126625",
    "3143475",
    "15541899",
    "7761065",
    "5854741",
    "2195727",
    "15933158",
    "7343616",
    "1914646",
    "11118081",
    "15045087",
    "11830261",
    "7419566",
    "5520921",
    "6974164",
    "708310",
    "4933439",
    "14014082",
    "14698814",
    "15139994",
    "9818663",
    "4092769",
    "2142007",
    "8213389",
    "15787711",
    "6824321",
    "4600415",
    "16466938",
    "14628373",
    "3528938",
    "14935537",
    "4890976",
    "3985340",
    "9244684",
    "14581183",
    "4344051",
    "16438086",
    "14532429",
    "1526754",
    "958949",
    "14202521",
    "1883309",
    "11586916",
    "2244079",
    "12943246",
    "14377822",
    "11373701",
    "141045",
    "6175178",
    "11264599",
    "3914042",
    "7594809",
    "14818528",
    "4430683",
    "1702231",
    "1836474",
    "331095",
    "14702605",
    "15798575",
    "7411104",
    "3303736",
    "3162492",
    "824014",
    "3551091",
    "1777965",
    "9588189",
    "2401446",
    "13471416",
    "14806607",
    "6155538",
    "5834835",
    "6510647",
    "8236304",
    "6759721",
    "3354207",
    "14140857",
    "6319001",
    "1894689",
    "10986492",
    "9901385",
    "9185379",
    "11760605",
    "478063",
    "4671839",
    "3762304",
    "4777136",
    "5396100",
    "14247481",
    "1720189",
    "2467724",
    "15080290",
    "789683",
    "11526244",
    "4429470",
    "16500550",
    "8869241",
    "906186",
    "12833547",
    "7229219",
    "10547766",
    "10825041",
    "16088131",
    "10382234",
    "8570514",
    "8519546",
    "7829144",
    "2163664",
    "3891790",
    "883185",
    "1767354",
    "6830204",
    "14524840",
    "7205106",
    "15304719",
    "5230085",
    "11397990",
    "5117611",
    "14114827",
    "11698381",
    "2905455",
    "933309",
    "3384894",
    "5689799",
    "3984301",
    "8065396",
    "13964044",
    "8454668",
    "9642575",
    "10422330",
    "2570216",
    "14723752",
    "1758687",
    "7693135",
    "7554628",
    "4260071",
    "14207694",
    "3604163",
    "8141950",
    "15613755",
    "2843652",
    "12839401",
    "12333473",
    "8889983",
    "11149055",
    "12899982",
    "6146586",
    "7627387",
    "8060051",
    "2176867",
    "2767931",
    "3772088",
    "14836241",
    "14446581",
    "15571405",
    "810302",
    "14675934",
    "6620597",
    "12652809",
    "567155",
    "1098430",
    "16403827",
    "11573440",
    "15278413",
    "9995589",
    "15584941",
    "11267778",
    "10952719",
    "329897",
    "11366918",
    "6437451",
    "6750019",
    "14242046",
    "3517701",
    "8332213",
    "538633",
    "4403838",
    "4659000",
    "1391725",
    "12271561",
    "2096381",
    "12533389",
    "14119930",
    "14301984",
    "15272404",
    "5305993",
    "14333396",
    "5109843",
    "5583060",
    "8372960",
    "15934889",
    "6023371",
    "16100264",
    "8134001",
    "4954600",
    "11852525",
    "3364354",
    "15934891",
    "16227449",
    "10151018",
    "241016",
    "4419265",
    "7562474",
    "16095300",
    "12957584",
    "7407347",
    "10210191",
    "16423690",
    "1106116",
    "1445785",
    "12343234",
    "13480566",
    "10087804",
    "5842787",
    "11358655",
    "6245137",
    "9486356",
    "8063397",
    "4362353",
    "12998362",
    "16164295",
    "1303063",
    "12702235",
    "6916538",
    "10504755",
    "3827703",
    "13328835",
    "13302852",
    "7646885",
    "1216737",
    "15861771",
    "12566961",
    "4815307",
    "3604251",
    "10326603",
    "4922097",
    "6399666",
    "4840329",
    "2896841",
    "9221560",
    "13082890",
    "8187066",
    "10330156",
    "9460407",
    "11463061",
    "1115642",
    "248197",
    "10621350",
    "16693891",
    "9807477",
    "3591368",
    "15272845",
    "10039559",
    "7951586",
    "7523063",
    "9864091",
    "10500599",
    "994119",
    "8292566",
    "4891655",
    "11531171",
    "15307708",
    "1433793",
    "13088468",
    "2887969",
    "14980632",
    "14409455",
    "10705137",
    "15125608",
    "13740736",
    "12002894",
    "12966122",
    "9860687",
    "6482886",
    "5222435",
    "14461068",
    "15411044",
    "2295479",
    "3451032",
    "13636063",
    "4228055",
    "11766373",
    "326554",
    "5827492",
    "5837160",
    "6838315",
    "8050060",
    "2852569",
    "14221606",
    "9575138",
    "11272142",
    "4171269",
    "5855803",
    "3007225",
    "10913629",
    "13704926",
    "2723728",
    "1724887",
    "4704628",
    "7169910",
    "14760494",
    "9255600",
    "12842145",
    "12013685",
    "12652167",
    "15607746",
    "11909518",
    "10655191",
    "16276872",
    "13491148",
    "11246437",
    "966278",
    "6706289",
    "13466712",
    "8499655",
    "13398134",
    "7051691",
    "2200887",
    "15874855",
    "4741708",
    "5526206",
    "9720894",
    "11266961",
    "10814527",
    "15376744",
    "9709856",
    "8593128",
    "8003531",
    "9594225",
    "15797200",
    "4654114",
    "9936865",
    "14012264",
    "12513165",
    "13522478",
    "6705546",
    "5040066",
    "15725895",
    "12942545",
    "14524032",
    "12226323",
    "9017528",
    "198975",
    "1071105",
    "5714188",
    "11002857",
    "12965088",
    "202513",
    "5574126",
    "684199",
    "12505700",
    "15997074",
    "5035694",
    "8987017",
    "16086852",
    "8529414",
    "14856396",
    "7125251",
    "3273590",
    "2144102",
    "1079564",
    "14956303",
    "7142519",
    "3284566",
    "10766791",
    "7262625",
    "4152467",
    "1066764",
    "1604443",
    "7982149",
    "8893913",
    "16381576",
    "12270960",
    "16382909",
    "11454003",
    "2680886",
    "11128682",
    "1093284",
    "12918193",
    "2014680",
    "632597",
    "3180399",
    "15375991",
    "12143470",
    "292873",
    "7522913",
    "12360796",
    "10734871",
    "4136345",
    "2567736",
    "13842170",
    "14050854",
    "8293958",
    "5999727",
    "7674032",
    "12631645",
    "1047486",
    "8995146",
    "13532653",
    "4094965",
    "16477989",
    "3391414",
    "14941990",
    "1113645",
    "6684757",
    "4269412",
    "13998795",
    "4480099",
    "2834685",
    "15893314",
    "5296335",
    "1966109",
    "8174648",
    "3496404",
    "12452985",
    "4908322",
    "13056299",
    "12743312",
    "9101481",
    "8505524",
    "824704",
    "7338899",
    "7083022",
    "9205766",
    "11727947",
    "6522070",
    "14986074",
    "14783868",
    "15870181",
    "11884789",
    "15316260",
    "3023784",
    "6737045",
    "15434596",
    "12004057",
    "8516608",
    "9012138",
    "16629230",
    "10658275",
    "5553404",
    "7496597",
    "13779685",
    "16362784",
    "12488642",
    "2429452",
    "2172011",
    "169651",
    "12916686",
    "12422636",
    "11929288",
    "6687330",
    "12216006",
    "8859548",
    "5695399",
    "15800000",
    "14412649",
    "9599291",
    "16621940",
    "14130394",
    "10546130",
    "11208810",
    "4979994",
    "8239158",
    "16760917",
    "15351277",
    "14745499",
    "10555840",
    "8512774",
    "11529079",
    "11897052",
    "12287087",
    "11502469",
    "2430989",
    "645209",
    "6688875",
    "7507150",
    "14372949",
    "10479375",
    "16479725",
    "199369",
    "15023047",
    "10958690",
    "16108076",
    "12100338",
    "4563808",
    "15955773",
    "12774238",
    "1701357",
    "697300",
    "8880634",
    "6867706",
    "1684152",
    "2256254",
    "16030265",
    "12403845",
    "4777810",
    "5984620",
    "4027115",
    "2414688",
    "15719118",
    "12295634",
    "14902881",
    "5004105",
    "14618222",
    "4472563",
    "7165254",
    "7426529",
    "12835598",
    "12557642",
    "2988514",
    "10897589",
    "7237117",
    "14401542",
    "14319895",
    "3627824",
    "15864765",
    "15099262",
    "2377173",
    "14971712",
    "141131",
    "6566689",
    "11520219",
    "4529782",
    "13728087",
    "857533",
    "8163541",
    "6586658",
    "5989238",
    "13877878",
    "5120486",
    "8563204",
    "2246548",
    "5599943",
    "7193317",
    "2023165",
    "6370035",
    "2587449",
    "13589877",
    "13456043",
    "13530543",
    "7429895",
    "10129479",
    "9291952",
    "16771908",
    "14236660",
    "4670395",
    "2234654",
    "5215646",
    "14658263",
    "12340253",
    "10170265",
    "11086390",
    "8184869",
    "10079621",
    "14964359",
    "6479686",
    "14130590",
    "3952495",
    "14645016",
    "16561526",
    "5228739",
    "16487635",
    "14936517",
    "16560215",
    "10701384",
    "13530237",
    "5295509",
    "13888753",
    "8895198",
    "13492233",
    "7947382",
    "2801883",
    "4596472",
    "9505246",
    "15787491",
    "12154310",
    "7268096",
    "13494012",
    "15338557",
    "2733091",
    "12931432",
    "14488686",
    "13959742",
    "1516336",
    "5209477",
    "8854684",
    "15239792",
    "13468968",
    "12720858",
    "12393093",
    "16424888",
    "14479937",
    "2715015",
    "16016245",
    "4250011",
    "693497",
    "14026773",
    "10028648",
    "1810020",
    "2305225",
    "3376537",
    "8396473",
    "10135037",
    "14342483",
    "15117122",
    "7139712",
    "9666560",
    "3503954",
    "8128240",
    "8195357",
    "4025206",
    "7721225",
    "11251505",
    "12115277",
    "15746163",
    "437614",
    "6365496",
    "10733115",
    "1663241",
    "2652998",
    "10181855",
    "164491",
    "7768296",
    "6029148",
    "2746020",
    "822975",
    "8959845",
    "13276761",
    "16250284",
    "11825803",
    "2874325",
    "836409",
    "13635976",
    "8192783",
    "4814232",
    "13230607",
    "14623282",
    "707132",
    "12301746",
    "13360057",
    "15232523",
    "3462065",
    "16127073",
    "9111896",
    "1197863",
    "7317985",
    "5190586",
    "7042477",
    "9233453",
    "6978089",
    "8912459",
    "16002604",
    "12112693",
    "15370217",
    "1544043",
    "2633022",
    "9041872",
    "5793939",
    "10571766",
    "1104494",
    "9472562",
    "15681774",
    "1530673",
    "11496245",
    "5119451",
    "12370339",
    "11573700",
    "3297238",
    "9401256",
    "16173649",
    "16042473",
    "13498927",
    "9928514",
    "5710424",
    "15989073",
    "514175",
    "13984796",
    "7356528",
    "4175003",
    "1930002",
    "11054079",
    "1929756",
    "6727388",
    "13685058",
    "9837039",
    "5991669",
    "11317040",
    "2961325",
    "7756228",
    "9308542",
    "9898018",
    "9809511",
    "9345120",
    "5588280",
    "6244979",
    "8384969",
    "6263679",
    "13683540",
    "2457524",
    "9712346",
    "1363077",
    "9774125",
    "16424741",
    "4349089",
    "1226849",
    "15337340",
    "5866845",
    "5732722",
    "12556715",
    "14948063",
    "12741491",
    "3128837",
    "8934040",
    "14363120",
    "15407517",
    "13780845",
    "10300435",
    "7222770",
    "9333148",
    "5272599",
    "8988521",
    "808051",
    "10247113",
    "9660099",
    "647793",
    "13062697",
    "9376781",
    "2587633",
    "10808267",
    "15928458",
    "9301977",
    "11697753",
]

const test1 = [
    "1",
    "10",
    "100",
    "2024",
]


function main(data, iterations) {
    console.log("Day 22 part 1...")
    let results = []
    data.forEach(buyer => {
        let result = buyer
        for (let i = 0; i < iterations; i++) {
            result = getNextSecret(result)
        }
        console.log(result)
        results.push(result)
    })
    console.log(results.reduce((partialSum, a) => partialSum + a, 0))
}

// main(test1, 2000)
main(input, 2000) // 19458130434

function getNextSecret(secret) {
    /**
     * 1. Calculate the result of multiplying the secret number by 64. Then, mix this result into the secret number. 
     * Finally, prune the secret number.
     * 2. Calculate the result of dividing the secret number by 32. Round the result down to the nearest integer. 
     * Then, mix this result into the secret number. Finally, prune the secret number.
     * 3. Calculate the result of multiplying the secret number by 2048. Then, mix this result into the secret number. 
     * Finally, prune the secret number.
     */

    // 1
    const step1 = prune(mix(secret * 64, secret))
    // console.log(step1)
    // 2
    const step2 = prune(mix(Math.floor(step1 / 32), step1))
    // console.log(step2)
    // 2
    const step3 = prune(mix(step2 * 2048, step2))
    // console.log(step3)

    return step3
}


function mix(givenValue, secretNumber) { return givenValue ^ secretNumber }

function prune(a) {
    const result = a % 16777216
    return result < 0 ? result + 16777216 : result
}