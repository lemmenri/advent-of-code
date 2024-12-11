const input = "64554 35 906 6 6960985 5755 975820 0"

const test = "125 17"
const test2 = "0 0 0"

function main() {
    console.log("day 11 part 2")
    let stones = initialParse(input.split(" "))
    console.log(stones)
    for (let i = 0; i < 75; i++) {
        console.log("Iteration " + (i + 1))
        stones = JSON.parse(JSON.stringify(nextIteration(stones)))
        console.log(stones)
    }
    let count = 0
    stones.forEach(stone => {
        count += stone.count
    })
    console.log("Lenght: " + count)

}

main() // 207961583799296

function initialParse(array) {
    const newArray = []
    array.forEach(stone => {
        newArray.push({
            count: 1,
            value: Number(stone)
        })
    })
    return newArray
}

function nextIteration(array) {
    const newArray = []
    array.forEach(stone => {
        if (Number(stone.value) === 0) {
            const newValue = 1
            addValueToArray(newValue, stone.count, newArray)

        } else if (String(stone.value).length % 2 === 0) {
            const newValue1 = Number(String(stone.value).slice(0, String(stone.value).length / 2))
            const newValue2 = Number(String(stone.value).slice(String(stone.value).length / 2, String(stone.value).length))
            addValueToArray(newValue1, stone.count, newArray)
            addValueToArray(newValue2, stone.count, newArray)

            //     newArray.push(Number(String(stone).slice(0, String(stone).length / 2)))
            //     newArray.push(Number(String(stone).slice(String(stone).length / 2, String(stone).length)))
        } else {
            const newValue = Number(stone.value) * 2024
            addValueToArray(newValue, stone.count, newArray)
        }
    })
    return newArray
}

function addValueToArray(newValue, oldCount, newArray) {
    if (newArray.some(element => element.value === newValue)) {
        const index = newArray.findIndex(element => element.value === newValue)
        const currentCount = newArray[index].count
        newArray[index] = { count: currentCount + oldCount, value: newValue }
    } else {
        newArray.push({ count: oldCount, value: newValue })
    }
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