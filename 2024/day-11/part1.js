const input = "64554 35 906 6 6960985 5755 975820 0"

const test = "125 17"
const test2 = "0"

function main() {
    console.log("day 11 part 1")
    let stones = input.split(" ")
    console.log(stones)
    for (let i = 0; i < 25; i++) {
        console.log("Iteration " + (i + 1))
        stones = JSON.parse(JSON.stringify(nextIteration(stones)))
        console.log(stones)
    }
    console.log("Lenght: " + stones.length)

}

main() // 175006

function nextIteration(array) {
    const newArray = []
    array.forEach(stone => {
        if (Number(stone) === 0) { newArray.push(1) }
        else if (String(stone).length % 2 === 0) {
            newArray.push(Number(String(stone).slice(0, String(stone).length / 2)))
            newArray.push(Number(String(stone).slice(String(stone).length / 2, String(stone).length)))
        } else {
            newArray.push(Number(stone) * 2024)
        }
    })
    return newArray
}

function printArray(map) {
    map.forEach(row => {
        let string = ""
        row.forEach(value => {
            string += (value + " ")
        })
        console.log(string)
    })
}