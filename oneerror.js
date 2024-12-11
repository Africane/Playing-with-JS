// code to generate a pyramid, inverted and upright

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    const spaces = " ".repeat(rowCount - rowNumber);
    const characters = character.repeat(rowNumber * 2 - 1);
    return spaces + characters + spaces;
}

for (let i = 0; i < count; i++) {
    console.log(character.repeat(i+1));
}

let result = " ";
for (const row of rows) {
    result = result + row + "\n";
}
console.log(result);