const input = [
    "Register A: 51571418",
    "Register B: 0",
    "Register C: 0",
    "",
    "Program: 2,4,1,1,7,5,0,3,1,4,4,5,5,5,3,0",
]

const test1 = [
    "Register A: 729",
    "Register B: 0",
    "Register C: 0",
    "",
    "Program: 0,1,5,4,3,0",
]

function main(data) {
    console.log("Day 17 part 1...")
    const program = parseInput(data)
    console.log(program)
    let registerA = program.registerA
    let registerB = program.registerB
    let registerC = program.registerC
    const instructions = program.instructions
    let instructionPointer = 0
    console.log(registerA.toString(8))
    console.log(registerB.toString(8))
    console.log(registerC.toString(8))
    const output = []

    while (instructionPointer <= instructions.length - 2) {
        const opcode = instructions[instructionPointer]
        const operand = instructions[instructionPointer + 1]
        let comboOperand = 0

        switch (operand) {
            case 0:
            case 1:
            case 2:
            case 3:
                comboOperand = operand
                break;
            case 4:
                comboOperand = registerA
                break;
            case 5:
                comboOperand = registerB
                break;
            case 6:
                comboOperand = registerC
                break;

        }

        console.log("Executing " + opcode + " with operand " + operand + " and operand value " + comboOperand)

        switch (opcode) {
            case 0: // adv
                registerA = Math.trunc(registerA / (2 ** comboOperand))
                break;
            case 1: // bxl
                registerB = registerB ^ operand
                break;
            case 2: // bst
                registerB = comboOperand % 8
                break;
            case 3: // jnz
                if (registerA !== 0) { instructionPointer = operand - 2 }
                break;
            case 4: // bxc
                registerB = registerB ^ registerC
                break;
            case 5: // out
                output.push(comboOperand % 8)
                break;
            case 6: // bdv
                registerB = Math.trunc(registerA / (2 ** comboOperand))
                break;
            case 7: // cdv
                registerC = Math.trunc(registerA / (2 ** comboOperand))
                break;
        }

        console.log(registerA.toString(8))
        console.log(registerB.toString(8))
        console.log(registerC.toString(8))
        printOutput(output)

        instructionPointer += 2
    }

    console.log("output:")
    printOutput(output)
}

// main(test1)
main(input) // 4,0,4,7,1,2,7,1,6

function parseInput(input) {
    const registerA = Number(input[0].split(":")[1].trim())
    const registerB = Number(input[1].split(":")[1].trim())
    const registerC = Number(input[2].split(":")[1].trim())
    const instructions = [...input[4].split(":")[1].trim().split(",").map(element => (Number(element)))]
    return { registerA, registerB, registerC, instructions }
}

function printOutput(output) {
    let outputText = ""
    output.forEach(element => {
        outputText += (element + ",")
    })
    console.log(outputText.substring(0, outputText.length - 1))
}
