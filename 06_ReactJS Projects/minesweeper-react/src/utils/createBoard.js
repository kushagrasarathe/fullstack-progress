export default function createBoard(rows, columns, mines) {

    if (mines > rows * columns) {
        mines = (rows * columns) / 3
    }

    let gridArr = [];
    for (let i = 0; i < rows; i++) {
        let subArr = []
        for (let j = 0; j < columns; j++) {
            subArr.push(0)
        }
        gridArr.push(subArr)
    }

    let minesCount = 0

    while (mines > minesCount) {
        const x = Math.floor(Math.random() * rows);
        const y = Math.floor(Math.random() * columns);
        if (gridArr[x][y] !== "🔥") {
            gridArr[x][y] = "🔥"
            minesCount--
        }

    }
    return gridArr;
}
