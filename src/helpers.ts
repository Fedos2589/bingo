import { Cell } from "./components/bingo/mock";

export const checkWinner = (data: Cell[][]) => {
  const isWinner = (cells: Cell[]) => cells.every(cell => cell.isActive);
  let firstDiag: Cell[] = [];
  let secondDiag: Cell[] = [];
  const len = data.length;

  for(let i = 0; i < len; i++) {
    if(isWinner(data[i]) || isWinner(data.map(row => row[i]))) {
      return true
    }
    firstDiag.push(data[i][i])
    secondDiag.push(data[i][len - i - 1])
  }

  if (isWinner(firstDiag) || isWinner(secondDiag)) {
    return true
  }

  return false
}