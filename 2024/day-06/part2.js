const input = [
    ".....................#................#...#.....#.................................................#...........#...................",
    ".............#....#.#.................................#....................................................#.........#............",
    "...........................................#...................................................................#......#...........",
    "....................................................#................#.......#.............#......................................",
    "..........................................#...##.#....................................#....#.........#............................",
    "....................................#.............................................#.......#................#.......###............",
    "..##.......#......................#..#........................................................#...................#...............",
    ".....#...........#..................................#..............#...........#..................................................",
    "..........#..#......#.....#..#........#..................#.............................#...........................##............#",
    "..............................#....#..........#...................................................................................",
    ".......#.#..........................#.........#...##..........................................................#.#....#...#.#......",
    "..............................................................................................................#.........#.........",
    "....................#......#.....#...............................#..#.........#........................#.#.....#..................",
    "......................................##.................#.....................#............#.#.#..............#...............#..",
    "#...........................#..................#.....#..#..#.............#......#.........#........#........#.#.#.................",
    ".......#.............#....................#.................#...#.........#.......#................#......#................#....#.",
    "...............#.................................................#................#..................#..................#.........",
    ".........#....................#..............................#..............#..............#.......#....................#......#..",
    "....................................##.............................................................................#.#............",
    ".....................................................................#...#.#........................#....#....#......#............",
    ".....#...........................#.........#.............................................................................#........",
    "...............#.#.........#...............##..............................................#............#.........................",
    "#..............#....##....#............#...#.#............................#...................................#..#..............#.",
    "........#.........#...........................................................#..............................................#....",
    ".........................................................................................#.......#................................",
    "................................#.........#..........#..#.......................................#..............................#..",
    "........................#.................................................................................##........#.............",
    ".....#.....................#.....................#...#...........#.........................#......................................",
    "....................................................................................................#.............................",
    ".........#...................................#...#................................................................................",
    "..............#............##......#..............#......................................................#.....................#..",
    "..#.......#............................................................................#...#.....................#................",
    "..................#.....................##..#.................#..........#.....#........#.............#............#...........#..",
    "...................................#.....#..............#..#.............................................#.....#......#....#......",
    "......#....#.....................................................#................#...............................#...............",
    "..#.#..................#.......#......#.............#.......#.....................................................................",
    "......##...........................#.................#.....#........................................#.............................",
    "...#......................#...............##......#.......................#..........#.................#.......#.......#..........",
    "...........................#.............................................................#.#................#......#..#...........",
    "..#.............#.....#.........................................................#..........#......................................",
    "...........#.........#..........................................................................#..............#..................",
    ".#.......................................................#.#.......#............................................#.#...............",
    "..........................#....#...............#............................................................#.........#...........",
    ".........................##.........#^.....................................................#......................................",
    "........#.......#.................................................................................................#.......#.......",
    "..........#..................................##..#.......................#.................#....................................#.",
    "...................................#..#.....#.#.............#.....#.................##..............#.............................",
    "...........................................................#.........................................................#......#.....",
    "............#.........................#.........#.................................................................................",
    "................#.........................#...............................#.......................................................",
    ".....................#.......#.................#.#..............#...............#.................................................",
    "...#......................#...............................#.......#.......#..........................................#............",
    ".........#..#............................................................................................#........................",
    "..............................................................................................#.#...........#.........#...........",
    "..#..............#...............#.................................................................#.....#........................",
    "................#..........#.......##..............#..............................#.##......#.....................................",
    ".........#....#.#..................................................................#...................#..........................",
    "#...#............#...............................................................................................................#",
    "........#.....#.#................#.........................#.........#...........................##........................#.#....",
    "......#...#.....................................................................#...........................#.....................",
    "........#.........#.....................#............................................................................#..........#.",
    ".................................................................#....................#.........#..#...#.##.......................",
    "..........#...........................##.......#...................................................................#.#............",
    ".......................................................................................#.................#..#.#...................",
    "............................................................................................#.............#.......................",
    "........................#........................#.................#..........................#...........................#.......",
    ".....................................#......#.................................#..........#........................................",
    "....#...............................#........#............................#............................#..........................",
    "..........#................#.#....................................................................................................",
    "#........................................................................#..........................................#.....#.......",
    ".#....................................#.........#..#.#...................................................#........................",
    "...................#....................#..............#..................#.................................................#.....",
    ".........................................................................#..........................#............#................",
    "........................................................#.................................................................#.......",
    "#...........................................#..............#............................................................#..#......",
    "...............#..............#...............#............................#.......#.............#....#...........................",
    "......#............#.#...........................................................................................#................",
    "..................#..#.......#..............................#.............................#........#.......#.........#...........#",
    "...............#.....................................#......#....................................#..........#................#....",
    ".............................................#...............#...........#........#.............#...#.......................##....",
    ".....#..................#...........#..............#.............#....................................#.........#.................",
    "........................#.......................................................................#...........#.....................",
    ".............................#.....................................................#........##....................................",
    "...........#.................................................................................#.........#....#....#.....#..........",
    ".....#..................................................................................#.....#.............................#....#",
    "..#........#...............#.........................................................#.......#........................#.........#.",
    "..............................................#....................##..............................#..........#.......#.#......#..",
    ".......................#......................................................#........#..........................................",
    "..#.........................................#...........#.........................................................#...............",
    "..........................#.......#...............................................................................................",
    ".........#.....................#..............................................#...............#...................................",
    "..............................................#.........#..........#....#..............#..........................................",
    "......................................#.........#............#........................................................#...#.......",
    "...........................................#.....#..................#.....#..........#...............#...#........................",
    ".......................#........#..........................................................#.......#.........#............#....#..",
    "..........#.....................................................................#...#.......#.......#.........#.....#.............",
    ".............................#..#...............................#....#.................................................#..#.......",
    ".#.............#................##......................................#...#..............................#............#.........",
    "....#.........#....#..................................................................................#...............#.....#.....",
    "......#................................................#.....#.#.......#.......#....................#.............#...............",
    "...............................#..........#........................#.......................................................#.....#",
    "...............#.......................................................................................#......#.......#..#.#.#....",
    "..#....#.........................................................................#...................#....................##......",
    "...........................#......#.................#...#..........................#..............................................",
    "......#..........#...#............#....#..........................................................................................",
    ".......................#......#...............#..#......................#......#........................#........................#",
    ".#............#................................#............#....................#.................................#..............",
    "................#.........#.................###............#..#...............#..............................#...#................",
    "......#..........................#....#............#.................#...................................................#........",
    "..........................#...#.............#........#......................#......................#.#.............#............#.",
    "............................#................#....................#....##.......................#........#..........##.....#......",
    "..............#.#...................#.#.............................................#..........#......#...........................",
    ".....#.........................#...........#...#......................................#......#..........#.#....#.##...............",
    ".............##.##....................................................................#.#..............#.......#.....#..#...#.....",
    "#.......#..................#.........#...................#................#..##...............##...............#..................",
    "..............#....#........#.....#.................................#....#....#...#.......................................#.......",
    "...........................#......#..............................#......................#.........................................",
    ".................#.#..........##................#...#..................................#..............#.....#.................#...",
    "..........................#..............#..#......................#.......................#...........##.........................",
    "..#...................#..........#.......#..........#...............................#.....................#.......................",
    "............#......................#................#....#......................#.................................................",
    "...........................................#........#.........#..........#..................#....#.........#....##................",
    "..........#........................#.#...............#............................................#........#...#.....#............",
    "...............#..........#..........#...#.....#........................#..............#..#.....................##................",
    "...#.......................##.....................#................................................#..#............#..............",
    "....#........#..#...#.#............................#................#................#............................................",
    "...........#....................#.....#.........................#....................#.............#....#.........#...#........##.",
    ".#.....#.................##............#...............................#...............#.......................##.................",
    "..............................#................................#.............................#................#.#.................",
    "............##..............#........#.......#...................#..........................#.............###..#...#............#.",
]

const test = [
    "....#.....",
    ".........#",
    "..........",
    "..#.......",
    ".......#..",
    "..........",
    ".#..^.....",
    "........#.",
    "#.........",
    "......#...",
]

function main() {
    const startTime = Date.now()
    console.log("day 06 part 2...")

    const startingmap = []
    input.forEach(row => {
        startingmap.push(row.split(""))
    })
    // console.log(startingmap)

    let loopCounter = 0

    const skipGuardPostition = findCurrentGuardPosition(startingmap)

    const skipNotSeenPositions = findLoop(startingmap, true)
    // console.log(skipNotSeenPositions)

    startingmap.forEach((row, i) => {
        row.forEach((field, j) => {
            if (skipGuardPostition.x === j && skipGuardPostition.y === i) {
                console.log("skipping start position")
                return
            }
            if (!(skipNotSeenPositions[i][j] === "X")) {
                console.log("skipping position out of scope")
                return
            }
            const testMap = markPosition(JSON.parse(JSON.stringify(startingmap)), j, i, "O")
            // console.log(testMap)
            const mapHasLoop = findLoop(testMap)
            if (mapHasLoop) {
                loopCounter++
            }
            console.log(`Map ${i}, ${j} has a loop: ${mapHasLoop}`)
        })
    })

    console.log("Loops: " + loopCounter)
    const elapsedTime = Date.now() - startTime
    console.log("Time: " + elapsedTime)
}

main() // 1831

function findLoop(startingmap, returnMarkedMap = false) {
    let markedMap = new Array(startingmap.length).fill().map(() => new Array(startingmap[0].length).fill("."))
    let isDone = false
    let stepCounter = 0
    const maxSteps = 10000
    let nextPosition = findCurrentGuardPosition(startingmap)
    // console.log(nextPosition)
    markedMap = markPosition(markedMap, nextPosition.x, nextPosition.y)

    const previousPositions = [nextPosition]
    let foundLoop = false


    while (!isDone && stepCounter < maxSteps) {
        if (stepCounter === (maxSteps - 1)) { console.log("running out of steps...") }
        nextPosition = findNextPosition(startingmap, nextPosition)
        // check if nextPosition has already been visited before
        if (hasBeenThereBefore(previousPositions, nextPosition)) {
            foundLoop = true
            isDone = true
        } else {
            previousPositions.push(nextPosition)
        }
        if (nextPosition === "done") { isDone = true }
        else {
            // console.log(nextPosition)
            markedMap = markPosition(markedMap, nextPosition.x, nextPosition.y)
        }
        stepCounter++
    }
    // console.log(markedMap)
    // console.log("taken " + stepCounter + " steps...")
    // console.log(countStepsTaken(markedMap))
    // console.log("Loop: " + foundLoop)
    if (returnMarkedMap) {
        return markedMap
    }
    return foundLoop
}

function findCurrentGuardPosition(map) {
    const regex = /(<|>|v|\^)/
    let currentX = null, currentY = null
    map.forEach((row, i) => {
        row.forEach((position, j) => {
            if (regex.test(position)) {
                currentX = j
                currentY = i
            }
        })
    })
    return { x: currentX, y: currentY, direction: findDirection(map[currentY][currentX]) }
}

function findDirection(guard) {
    if (guard === "^") { return "up" }
    if (guard === "v") { return "down" }
    if (guard === ">") { return "right" }
    if (guard === "<") { return "left" }
    return "something went wrong"
}

function markPosition(map, x, y, mark = "X") {
    // console.log(x + ", " + y)
    const markedMap = [...map]
    markedMap[Number(y)][Number(x)] = mark
    // console.log(markedMap)
    return markedMap
}

// let testArray = new Array(6).fill().map(() => new Array(6).fill("."))
// console.log(testArray)
// testArray = markPosition(testArray, 1, 2)
// console.log(testArray)
// testArray = markPosition(testArray, "0", "2")
// console.log(testArray)

function findNextPosition(map, currentPosition) {
    let nextX = currentPosition.x
    let nextY = currentPosition.y
    if (currentPosition.direction === 'up') { nextY-- }
    if (currentPosition.direction === 'down') { nextY++ }
    if (currentPosition.direction === 'left') { nextX-- }
    if (currentPosition.direction === 'right') { nextX++ }

    // check if walking off the map
    if (nextX < 0 || nextY < 0 || nextX >= map[0].length || nextY >= map.length) {
        return "done"
    }

    // check for collision
    if (map[nextY][nextX] === "#" || map[nextY][nextX] === "O") {
        let nextDirection = null
        if (currentPosition.direction === 'up') { nextDirection = "right" }
        if (currentPosition.direction === 'down') { nextDirection = "left" }
        if (currentPosition.direction === 'left') { nextDirection = "up" }
        if (currentPosition.direction === 'right') { nextDirection = "down" }
        return { x: currentPosition.x, y: currentPosition.y, direction: nextDirection }
    }

    // return next field
    return { x: nextX, y: nextY, direction: currentPosition.direction }
}

function countStepsTaken(map) {
    let counter = 0
    map.forEach(row => {
        row.forEach(value => {
            if (value === "X") { counter++ }
        })
    })
    return counter
}

function hasBeenThereBefore(previousPositions, nextPosition) {
    let hasBeenThere = false
    previousPositions.forEach(position => {
        if (
            position.x === nextPosition.x &&
            position.y === nextPosition.y &&
            position.direction == nextPosition.direction
        ) {
            hasBeenThere = true
        }
    })
    return hasBeenThere
}

// const previousPositions = [
//     { x: 4, y: 6, direction: 'up' },
//     { x: 4, y: 5, direction: 'up' },
//     { x: 4, y: 4, direction: 'up' },
//     { x: 4, y: 3, direction: 'up' },
//     { x: 8, y: 3, direction: 'down' },
//     { x: 8, y: 4, direction: 'down' },
//     { x: 8, y: 5, direction: 'down' },
//     { x: 8, y: 6, direction: 'down' },
//     { x: 8, y: 6, direction: 'left' },
//     { x: 7, y: 6, direction: 'left' }
// ]

// const nextPosition = { x: 7, y: 6, direction: 'left' }

// console.log(hasBeenThereBefore(previousPositions, nextPosition))