const input = [
    "967801543219877892110120432456765487321234545",
    "854914678900166743026501501329870398100987656",
    "763023498101255654137432672014981287231892187",
    "012109567692341015048976789023569346542763096",
    "101238747887654320157985989121478965456754345",
    "387345656901298743269834870130327101329805210",
    "296096543214386654978723763243210234910418721",
    "145187762105675667871011054358700195894329652",
    "034219853098734789876012343969656786765012347",
    "124309344565623210985985432878545987787601478",
    "565678234674310301234576501701230834594576569",
    "876569132183087456789632101689321127623987654",
    "985432045092196565410547012678101098210891203",
    "876301896700123478326698763543201543109890312",
    "101216789810156389887789654410892672108701021",
    "560125654327667210796612345329763489807632120",
    "456981011498558976545003459458654308716543031",
    "347876320123443089232117868567761218923784787",
    "210945451056782190101656977657890034874695698",
    "987890102349891001212343980342101125665546788",
    "816543211001230417654322821233211056750036569",
    "105565439814376528740011987344780149821123478",
    "219870126765089439951010476035691231034032107",
    "327892345670129310892312362121003412385221016",
    "456781036789438901765403453438912505496102345",
    "012301095490567812989889854567434676787243212",
    "903432787321054923476798763479823987654356601",
    "876563456434143898565210012189714303498987787",
    "569874894321032387654302100001605212567345698",
    "984965765410101234563218761232556721986432183",
    "673454899006565123870109454343457890673212012",
    "542165678187443012989547823254598012364301501",
    "034078543298332132103456910167652345455677652",
    "125609434701245045892321009878541076210588943",
    "010712549889456756701034569969037889821099812",
    "899823456776321893212103278450126985432178901",
    "701209870125410984345232182321125676589067887",
    "654312565034587654456941091101034389678450996",
    "521023454123898343457850190872765210789321045",
    "438985576540123232567569287963898001679877832",
    "307656987239854101098478016554587123456756921",
    "412587610108763003451289123423696564012345670",
    "653496541067654012760345689510789456703430189",
    "743237832378903009801236776421012329898521278",
    "892106901265012108980109865430101012987630167",
]

const test1 = [ // 1
    "0123",
    "1234",
    "8765",
    "9876",
]

const test2 = [ // 2
    "...0...",
    "...1...",
    "...2...",
    "6543456",
    "7.....7",
    "8.....8",
    "9.....9",
]

const test3 = [ // 4
    "..90..9",
    "...1.98",
    "...2..7",
    "6543456",
    "765.987",
    "876....",
    "987....",
]

const test4 = [ // 3
    "10..9..",
    "2...8..",
    "3...7..",
    "4567654",
    "...8..3",
    "...9..2",
    ".....01",
]

const test5 = [
    "89010123",
    "78121874",
    "87430965",
    "96549874",
    "45678903",
    "32019012",
    "01329801",
    "10456732",
]

function main() {
    console.log("day 10 part 2...")
    const data = parseInputToArray(input)
    // printArray(data)
    const trailheads = getTrailheads(data)
    let score = 0
    trailheads.forEach(head => {
        const paths = findPaths(data, head)
        score += calculateScore(paths)
    })
    console.log("Score: " + score)

}

main() // 1210

function calculateScore(paths) {
    let pairs = []
    // console.log(paths[0])
    paths.forEach(path => {
        if (path.length === 10) {
            pairs.push({ startAndEnd: { start: path[0], finish: path[9] } })
        }
    })
    // console.log("pairs:")
    // console.log(pairs)
    // const uniquePairs = new Set(pairs.map(e => JSON.stringify(e.startAndEnd)))
    // console.log("uniquePairs:")
    // console.log(uniquePairs)
    return pairs.length
}

function findPaths(map, trailhead) {
    let paths = [[trailhead]]

    for (let i = 1; i <= 9; i++) {
        // console.log("paths:")
        // console.log(paths)
        const newPaths = []
        paths.forEach(path => {
            const newPathPieces = getNeighboursWithValue(map, { x: path[path.length - 1].x, y: path[path.length - 1].y }, i)
            // console.log("newPathPieces:")
            // console.log(newPathPieces)
            newPathPieces.forEach(piece => {
                newPaths.push([...path, piece])
            })
        })
        // console.log("newPaths:")
        // console.log(newPaths)
        paths = JSON.parse(JSON.stringify(newPaths))
    }

    // console.log("paths:")
    // console.log(paths)
    return paths
}

// function getNeighbours(map, position) {
//     const neighbours = []
//     for (let offsetX = -1; offsetX <= 1; offsetX++) {
//         for (let offsetY = -1; offsetY <= 1; offsetY++) {
//             if (offsetX != 0 || offsetY != 0) {
//                 const indexX = Number(position.x) + offsetX
//                 const indexY = Number(position.y) + offsetY
//                 // console.log("trying " + indexX + ", " + indexY)
//                 if (map?.[indexY]?.[indexX]
//                 ) {
//                     // console.log("found a neighbour!")
//                     neighbours.push({ value: map[indexY][indexX], x: indexX, y: indexY })
//                 }
//             }
//         }
//     }
//     return neighbours
// }

// function getNeighboursWithValue(map, position, targetValue) {
//     const neighbours = []
//     for (let offsetX = -1; offsetX <= 1; offsetX++) {
//         for (let offsetY = -1; offsetY <= 1; offsetY++) {
//             if (offsetX != 0 || offsetY != 0) {
//                 const indexX = Number(position.x) + offsetX
//                 const indexY = Number(position.y) + offsetY
//                 // console.log("trying " + indexX + ", " + indexY)
//                 if (map?.[indexY]?.[indexX]
//                 ) {
//                     if (Number(map[indexY][indexX]) === targetValue) {
//                         // console.log("found a neighbour!")
//                         neighbours.push({ value: Number(map[indexY][indexX]), x: indexX, y: indexY })
//                     }
//                 }
//             }
//         }
//     }
//     return neighbours
// }

function getNeighboursWithValue(map, position, targetValue) { // only orthogonal neighbours Rick! Learn to read...
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
        if (map?.[indexY]?.[indexX]
        ) {
            if (Number(map[indexY][indexX]) === targetValue) {
                // console.log("found a neighbour!")
                neighbours.push({ value: Number(map[indexY][indexX]), x: indexX, y: indexY })
            }
        }
    })

    return neighbours
}

function getTrailheads(array, trailheadValue = "0") {
    const trailheads = []
    array.forEach((row, i) => {
        row.forEach((value, j) => {
            if (value === trailheadValue) {
                trailheads.push({ value: Number(trailheadValue), x: j, y: i })
            }
        })
    })

    return trailheads
}

function parseInputToArray(tekst) {
    const data = []
    tekst.forEach(row => {
        data.push(row.split(""))
    })
    // printArray(data)
    return data
}

function printArray(map) {
    map.forEach(row => {
        let string = ""
        row.forEach(value => {
            string += value
        })
        console.log(string)
    })
}