const input = [
    "x00: 1",
    "x01: 1",
    "x02: 0",
    "x03: 0",
    "x04: 0",
    "x05: 1",
    "x06: 0",
    "x07: 1",
    "x08: 1",
    "x09: 0",
    "x10: 1",
    "x11: 0",
    "x12: 0",
    "x13: 1",
    "x14: 0",
    "x15: 0",
    "x16: 1",
    "x17: 0",
    "x18: 1",
    "x19: 0",
    "x20: 0",
    "x21: 1",
    "x22: 1",
    "x23: 0",
    "x24: 0",
    "x25: 1",
    "x26: 1",
    "x27: 0",
    "x28: 0",
    "x29: 1",
    "x30: 0",
    "x31: 0",
    "x32: 1",
    "x33: 0",
    "x34: 1",
    "x35: 1",
    "x36: 1",
    "x37: 1",
    "x38: 0",
    "x39: 0",
    "x40: 1",
    "x41: 1",
    "x42: 1",
    "x43: 1",
    "x44: 1",
    "y00: 1",
    "y01: 0",
    "y02: 1",
    "y03: 1",
    "y04: 0",
    "y05: 0",
    "y06: 1",
    "y07: 1",
    "y08: 0",
    "y09: 1",
    "y10: 1",
    "y11: 1",
    "y12: 1",
    "y13: 1",
    "y14: 0",
    "y15: 0",
    "y16: 0",
    "y17: 1",
    "y18: 0",
    "y19: 1",
    "y20: 0",
    "y21: 1",
    "y22: 1",
    "y23: 0",
    "y24: 1",
    "y25: 0",
    "y26: 1",
    "y27: 1",
    "y28: 0",
    "y29: 0",
    "y30: 1",
    "y31: 1",
    "y32: 1",
    "y33: 1",
    "y34: 1",
    "y35: 0",
    "y36: 1",
    "y37: 0",
    "y38: 0",
    "y39: 1",
    "y40: 1",
    "y41: 0",
    "y42: 1",
    "y43: 0",
    "y44: 1",
    "",
    "x36 XOR y36 -> bbk",
    "sfc XOR sdv -> z15",
    "ncj XOR gdc -> z43",
    "vvr AND ggf -> rqg",
    "stp OR qwr -> kbw",
    "x25 XOR y25 -> vbw",
    "wjm OR ghg -> jtc",
    "x23 AND y23 -> rks",
    "drw OR kbq -> btn",
    "hcc AND kqp -> jkc",
    "y08 XOR x08 -> kgn",
    "btn XOR sgv -> z02",
    "kbw XOR jnv -> z18",
    "mqh OR vkh -> jds",
    "vvr XOR ggf -> z09",
    "nrr XOR qwg -> z30",
    "y07 XOR x07 -> cnk",
    "kbk XOR hbw -> z37",
    "sgh OR hfn -> mjn",
    "y15 AND x15 -> gms",
    "tpf XOR sft -> z11",
    "qvn XOR sgr -> z01",
    "kbv AND csv -> sdp",
    "x32 XOR y32 -> tkt",
    "y22 XOR x22 -> fhn",
    "qdf OR qbj -> brn",
    "y14 AND x14 -> wgj",
    "cqc OR rnr -> ksv",
    "gws OR tfb -> vst",
    "brn XOR jkv -> z33",
    "tmh XOR qch -> z44",
    "fcq OR qhs -> wwt",
    "vng AND gfs -> rpk",
    "y24 XOR x24 -> hkf",
    "x39 AND y39 -> vkh",
    "y06 XOR x06 -> srn",
    "fhn XOR fvq -> z22",
    "y42 XOR x42 -> jdf",
    "x38 XOR y38 -> jjj",
    "rks OR rdh -> kpb",
    "qvf XOR jmm -> z41",
    "y01 AND x01 -> kbq",
    "jsk AND pkq -> gdh",
    "mms OR gdh -> fvq",
    "fpw AND jjj -> fdd",
    "bbk XOR fcn -> z36",
    "x43 AND y43 -> dfg",
    "npr XOR hfv -> z19",
    "y08 AND x08 -> ctv",
    "jkc OR vvb -> bkk",
    "y26 AND x26 -> pwf",
    "nnn OR cvn -> gdc",
    "vpd OR dtb -> z45",
    "x44 XOR y44 -> tmh",
    "pbj OR dfg -> qch",
    "y41 AND x41 -> gmm",
    "x25 AND y25 -> sfh",
    "y40 XOR x40 -> gqd",
    "y20 AND x20 -> kvs",
    "nmq OR jmn -> rjb",
    "pkq XOR jsk -> z21",
    "x04 XOR y04 -> gbh",
    "x04 AND y04 -> scp",
    "pcf OR mqt -> tpf",
    "x31 AND y31 -> cps",
    "fhn AND fvq -> wdf",
    "y11 XOR x11 -> sft",
    "srn AND fhb -> cqc",
    "bpq OR crp -> hbw",
    "gvj OR kvs -> jsk",
    "kmd AND vvv -> rdh",
    "y16 AND x16 -> rnq",
    "thk AND wnk -> z39",
    "sfh OR qgg -> bhv",
    "y02 XOR x02 -> sgv",
    "qvn AND sgr -> drw",
    "x34 AND y34 -> sgh",
    "y42 AND x42 -> nnn",
    "qvf AND jmm -> pgm",
    "sck OR kms -> hcc",
    "msf XOR tkt -> z32",
    "rjb AND btj -> wts",
    "y18 AND x18 -> mgt",
    "jdf AND nmw -> cvn",
    "kqp XOR hcc -> z12",
    "qpg OR csr -> djn",
    "x12 XOR y12 -> kqp",
    "x19 XOR y19 -> hfv",
    "gps AND bkk -> jvj",
    "x14 XOR y14 -> vng",
    "x13 AND y13 -> rqn",
    "wwt XOR vbw -> z25",
    "ggh OR pwf -> nct",
    "nmw XOR jdf -> z42",
    "y23 XOR x23 -> vvv",
    "gbh XOR whq -> z04",
    "vtj OR fpn -> nrr",
    "x05 AND y05 -> gdk",
    "kpb AND hkf -> fcq",
    "x10 AND y10 -> pcf",
    "jtc XOR sng -> z03",
    "vvv XOR kmd -> z23",
    "gps XOR bkk -> z13",
    "x09 XOR y09 -> ggf",
    "y03 XOR x03 -> sng",
    "kwv OR ctv -> z08",
    "y03 AND x03 -> fcv",
    "y18 XOR x18 -> jnv",
    "y39 XOR x39 -> wnk",
    "x27 XOR y27 -> njn",
    "jnv AND kbw -> hrv",
    "y09 AND x09 -> nbb",
    "x31 XOR y31 -> btj",
    "gms OR ngf -> pvv",
    "rpk OR wgj -> sdv",
    "bhv XOR wnf -> z26",
    "wnk XOR thk -> mqh",
    "pgn OR qsw -> fpw",
    "y15 XOR x15 -> sfc",
    "x35 XOR y35 -> qgs",
    "djn XOR ptk -> tfb",
    "pvv XOR rnq -> z16",
    "cnk AND ksv -> tss",
    "x38 AND y38 -> fkp",
    "y26 XOR x26 -> wnf",
    "sdp OR gdk -> fhb",
    "x00 AND y00 -> qvn",
    "x37 AND y37 -> qsw",
    "dpg OR mqp -> jpb",
    "btn AND sgv -> ghg",
    "jpb XOR kpm -> z34",
    "y34 XOR x34 -> kpm",
    "kpb XOR hkf -> z24",
    "qgs AND mjn -> ckr",
    "hfv AND npr -> tvp",
    "y10 XOR x10 -> vkt",
    "gvw AND kgn -> kwv",
    "ncj AND gdc -> pbj",
    "y05 XOR x05 -> kbv",
    "x24 AND y24 -> qhs",
    "gbh AND whq -> jgs",
    "kbg XOR hth -> z17",
    "gvw XOR kgn -> vvr",
    "ksv XOR cnk -> z07",
    "pvv AND rnq -> mcc",
    "x40 AND y40 -> vnr",
    "x17 AND y17 -> qwr",
    "mgt OR hrv -> npr",
    "gwp AND vst -> fpn",
    "tvp OR cqb -> tbr",
    "y41 XOR x41 -> qvf",
    "x21 AND y21 -> mms",
    "nct AND njn -> qpg",
    "tmh AND qch -> vpd",
    "y37 XOR x37 -> kbk",
    "x20 XOR y20 -> pkb",
    "nbb OR rqg -> nsm",
    "x21 XOR y21 -> pkq",
    "y00 XOR x00 -> z00",
    "kpm AND jpb -> hfn",
    "y11 AND x11 -> sck",
    "qwg AND nrr -> nmq",
    "x43 XOR y43 -> ncj",
    "jvj OR rqn -> gfs",
    "scp OR jgs -> csv",
    "y01 XOR x01 -> sgr",
    "fcn AND bbk -> bpq",
    "y22 AND x22 -> mmc",
    "y36 AND x36 -> crp",
    "x13 XOR y13 -> gps",
    "hjm OR tss -> gvw",
    "fcv OR wmt -> whq",
    "wdg OR vnr -> jmm",
    "mcc OR bkr -> kbg",
    "pgm OR gmm -> nmw",
    "jkv AND brn -> mqp",
    "kbk AND hbw -> pgn",
    "jds XOR gqd -> z40",
    "fkp OR fdd -> thk",
    "nsm XOR vkt -> z10",
    "bhv AND wnf -> ggh",
    "x29 AND y29 -> vtj",
    "y32 AND x32 -> qbj",
    "jgr OR ckr -> fcn",
    "x35 AND y35 -> jgr",
    "wts OR cps -> msf",
    "x27 AND y27 -> csr",
    "y16 XOR x16 -> bkr",
    "y28 XOR x28 -> ptk",
    "qgs XOR mjn -> z35",
    "vkt AND nsm -> mqt",
    "rjb XOR btj -> z31",
    "x30 XOR y30 -> qwg",
    "y07 AND x07 -> hjm",
    "srn XOR fhb -> z06",
    "x12 AND y12 -> vvb",
    "y19 AND x19 -> cqb",
    "hth AND kbg -> stp",
    "vbw AND wwt -> qgg",
    "mmc OR wdf -> kmd",
    "vng XOR gfs -> z14",
    "gqd AND jds -> wdg",
    "x33 XOR y33 -> jkv",
    "kbv XOR csv -> z05",
    "pkb XOR tbr -> z20",
    "y30 AND x30 -> jmn",
    "x06 AND y06 -> rnr",
    "gwp XOR vst -> z29",
    "sfc AND sdv -> ngf",
    "x33 AND y33 -> dpg",
    "pkb AND tbr -> gvj",
    "tkt AND msf -> qdf",
    "tpf AND sft -> kms",
    "jjj XOR fpw -> z38",
    "sng AND jtc -> wmt",
    "ptk AND djn -> gws",
    "x29 XOR y29 -> gwp",
    "y44 AND x44 -> dtb",
    "nct XOR njn -> z27",
    "x17 XOR y17 -> hth",
    "y28 AND x28 -> z28",
    "x02 AND y02 -> wjm",
]

const test1 = [
    "x00: 1",
    "x01: 0",
    "x02: 1",
    "x03: 1",
    "x04: 0",
    "y00: 1",
    "y01: 1",
    "y02: 1",
    "y03: 1",
    "y04: 1",
    "",
    "ntg XOR fgs -> mjb",
    "y02 OR x01 -> tnw",
    "kwq OR kpj -> z05",
    "x00 OR x03 -> fst",
    "tgd XOR rvg -> z01",
    "vdt OR tnw -> bfw",
    "bfw AND frj -> z10",
    "ffh OR nrd -> bqk",
    "y00 AND y03 -> djm",
    "y03 OR y00 -> psh",
    "bqk OR frj -> z08",
    "tnw OR fst -> frj",
    "gnj AND tgd -> z11",
    "bfw XOR mjb -> z00",
    "x03 OR x00 -> vdt",
    "gnj AND wpb -> z02",
    "x04 AND y00 -> kjc",
    "djm OR pbm -> qhw",
    "nrd AND vdt -> hwm",
    "kjc AND fst -> rvg",
    "y04 OR y02 -> fgs",
    "y01 AND x02 -> pbm",
    "ntg OR kjc -> kwq",
    "psh XOR fgs -> tgd",
    "qhw XOR tgd -> z09",
    "pbm OR djm -> kpj",
    "x03 XOR y03 -> ffh",
    "x00 XOR y04 -> ntg",
    "bfw OR bqk -> z06",
    "nrd XOR fgs -> wpb",
    "frj XOR qhw -> z04",
    "bqk OR frj -> z07",
    "y03 OR x01 -> nrd",
    "hwm AND bqk -> z03",
    "tgd XOR rvg -> z12",
    "tnw OR pbm -> gnj",
]

const test2 = [
    "x00: 1",
    "x01: 1",
    "x02: 1",
    "y00: 0",
    "y01: 1",
    "y02: 0",
    "",
    "x00 AND y00 -> z00",
    "x01 XOR y01 -> z01",
    "x02 OR y02 -> z02",
]

function main(data) {
    console.log("day 24 part 1...")
    const parsedData = parseInput(data)
    // console.log(parsedData)
    const output = processRules(parsedData)
    // console.log(output)
    const result = parseOutput(output)
    console.log(result)
}

// main(test1) // 2024
// main(test2) // 4
main(input) // 58639252480880

function parseOutput(output) {
    let result = ""
    output.forEach(row => {
        if (/z/.test(row[0])) {
            result = "" + row[1] + result
        }
    })
    return parseInt(result, 2)
}

function processRules(data) {
    const output = new Map()
    const inputs = [...data.inputs]
    const rules = [...data.rules]
    while (hasUnprocessedRules(rules)) {

        rules.forEach(rule => {
            if (inputs.some(element => (element.gate === rule.gate1)) && inputs.some(element => (element.gate === rule.gate2))) {

                switch (rule.operation) {
                    case "AND":
                        const value1 = inputs.find(element => (element.gate === rule.gate1)).value
                        const value2 = inputs.find(element => (element.gate === rule.gate2)).value
                        inputs.push({ gate: rule.gate3, value: (value1 & value2) })
                        output.set(rule.gate3, (value1 & value2))
                        rule.processed = true
                        break;
                    case "OR":
                        const value3 = inputs.find(element => (element.gate === rule.gate1)).value
                        const value4 = inputs.find(element => (element.gate === rule.gate2)).value
                        inputs.push({ gate: rule.gate3, value: (value3 | value4) })
                        output.set(rule.gate3, (value3 | value4))
                        rule.processed = true
                        break;
                    case "XOR":
                        const value5 = inputs.find(element => (element.gate === rule.gate1)).value
                        const value6 = inputs.find(element => (element.gate === rule.gate2)).value
                        inputs.push({ gate: rule.gate3, value: (value5 ^ value6) })
                        output.set(rule.gate3, (value5 ^ value6))
                        rule.processed = true
                        break;
                }
            }
        })
    }
    // console.log(inputs)
    // console.log(rules)
    // console.log(hasUnprocessedRules(rules))
    return [...output].sort()
}

function hasUnprocessedRules(rules) {
    return rules.some(rule => rule.processed === false)
}

function parseInput(input) {
    const inputs = []
    const rules = []

    input.forEach(row => {
        if (/:/.test(row)) {
            inputs.push({
                gate: row.split(":")[0],
                value: Number(row.split(":")[1].trim())
            })
        }
        if (/->/.test(row)) {
            rules.push({
                gate1: row.split(" ")[0],
                gate2: row.split(" ")[2],
                gate3: row.split(" ")[4],
                operation: row.split(" ")[1],
                processed: false
            })
        }
    })

    return { inputs, rules }
}