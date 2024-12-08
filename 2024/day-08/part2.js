const input = [
    ".....E........................s.......n.........g.",
    ".............................c............4.......",
    "........................................4.........",
    "....................................5.....e.......",
    "...............p...........c......................",
    "....h................s...................e........",
    "h..................1...........s..Ke............C.",
    ".......................1...............g.....KC...",
    "........8.......B.....p..kc................K..e.X.",
    "...b.........pI...k..................r.........C.X",
    "...........................5.n............R.r.....",
    "j......Z....tApE..............c....5..g.X.........",
    "............E..L......5............X..............",
    "b...................D...................K.....R..4",
    "..k..D.....h..A...........L.1.....................",
    ".j...........h......B.......A.....................",
    ".........I......b..................4.......r....0.",
    ".................B.n..........G...................",
    "..........9.I...............U...................2.",
    ".........Doy........s...............U....R........",
    "..........................G.....V............R....",
    "...z.o.......I..E....t.....G..n....3..............",
    ".Z.........Aj..................W.......M.U........",
    "..Z......k......O....W.....U........M.......0.....",
    ".....z......o.O..........a....ZG..................",
    "........L..........Y............a.................",
    "......D8t...S.......WO............................",
    "......1P..........WO.9..F.w........Q..d....0......",
    "..........y............................x..........",
    "............z..........w.........J................",
    ".o...t..P.........w..B......F....v........x....2..",
    "y..8...........v.......M.................x.......2",
    ".....y..........z..N...H.......6........a.........",
    "....N.S............H...................a..........",
    "N........S..........v........m....................",
    "......8...........H........7x....6.l..............",
    ".............q.P...............w..m...............",
    ".....S......................7.6.......T...........",
    "...............................0....3.6....J......",
    "...N..........v.................m.......3.l.J.....",
    "...........................F..d....7.3............",
    "...............u..................................",
    ".V....Y..u..........H.......J.............T.......",
    ".......V...q...................d..fF.............T",
    "..u................................f.....T......l.",
    "..................................i...............",
    "...Y......M.........................7.............",
    "............Y...........9............f2..m..Q.....",
    ".....................i.9........fd.......l....Q...",
    "V.........q................i......................",
]

const test = [
    "............",
    "........0...",
    ".....0......",
    ".......0....",
    "....0.......",
    "......A.....",
    "............",
    "............",
    "........A...",
    ".........A..",
    "............",
    "............",
]

function main() {
    console.log("day 8 part 2...")
    const data = []
    input.forEach(row => {
        data.push(row.split(""))
    })
    print(data)
    console.log("calculating...")
    const mapOfAntinodes = new Array(data.length).fill().map(() => new Array(data[0].length).fill(false))
    const mapsize = { x: data[0].length, y: data.length }

    const antennas = []
    data.forEach((row, i) => {
        row.forEach((value, j) => {
            if (value !== ".") {
                if (!antennas.some(antenna => antenna.antennaName === value)) {
                    antennas.push({ antennaName: value, antennaPostion: [{ x: j, y: i }] })
                } else {
                    antennas[antennas.findIndex(antenna => antenna.antennaName === value)].antennaPostion.push({ x: j, y: i })
                }
            }
        })
    })
    // console.log(antennas[0])
    // console.log(antennas[1])

    antennas.forEach(antenna => {
        const antennaPairs = []
        antenna.antennaPostion.forEach((position, indexA) => {
            for (let i = indexA; i < antenna.antennaPostion.length - 1; i++) {
                antennaPairs.push({ a: position, b: antenna.antennaPostion[i + 1] })
            }
        })
        // console.log(antennaPairs)

        const antinodes = []
        antennaPairs.forEach(pair => {
            const nodes = findAntinodes(pair, mapsize)
            nodes.forEach(node => {
                antinodes.push(node)
            })
        })
        // console.log(antinodes)

        antinodes.forEach(antinode => {
            if (isInMap(antinode, mapsize)) {
                // console.log(`marking ${antenna.antennaName} on ${antinode.x}, ${antinode.y}`)
                markPosition(mapOfAntinodes, antinode.x, antinode.y)
            }
        })
    })

    print(mapOfAntinodes)
    console.log(countAntinodes(mapOfAntinodes))
}

function print(map) {
    map.forEach(row => {
        let string = ""
        row.forEach(value => {
            string += (value === true ? "X" : value === false ? "." : value)
        })
        console.log(string)
    })
}

function isInMap(position, mapsize) {
    let isInMap = true
    if (position.x < 0 || position.x > mapsize.x - 1) { isInMap = false }
    if (position.y < 0 || position.y > mapsize.y - 1) { isInMap = false }
    return isInMap
}

function findAntinodes(positions, mapsize) {
    const deltaX = positions.b.x - positions.a.x
    // console.log(deltaX)
    const deltaY = positions.b.y - positions.a.y
    // console.log(deltaY)
    let startX = positions.a.x
    let startY = positions.a.y

    while ((startX - deltaX) >= 0 && (startY - deltaY) >= 0 && (startX - deltaX) < mapsize.x && (startY - deltaY) < mapsize.y) {
        startX -= deltaX
        startY -= deltaY
    }

    // console.log(startX)
    // console.log(startY)

    const antinodes = []

    while ((startX) >= 0 && (startY) >= 0 && (startX) < mapsize.x && (startY) < mapsize.y) {
        antinodes.push({ x: startX, y: startY })
        startX += deltaX
        startY += deltaY
    }
    return antinodes
}

// console.log(findAntinodes({ a: { x: 4, y: 3 }, b: { x: 5, y: 5 } }, { x: 12, y: 12 }))
// console.log(findAntinodes({ a: { x: 7, y: 3 }, b: { x: 4, y: 4 } }, { x: 12, y: 12 }))
// console.log(findAntinodes({ a: { x: 8, y: 1 }, b: { x: 5, y: 2 } }, { x: 12, y: 12 }))

function markPosition(map, x, y, mark = true) {
    // console.log(x + ", " + y)
    const markedMap = [...map]
    markedMap[Number(y)][Number(x)] = mark
    // console.log(markedMap)
    return markedMap
}

function countAntinodes(map) {
    let counter = 0
    map.forEach(row => {
        row.forEach(value => {
            if (value) { counter++ }
        })
    })
    return counter
}

main() // 