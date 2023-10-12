const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

  
const whereIsWaldo = (matrix) => {
  for(let i = 0, row = 1; i < matrix.length; i++,row++){
    for(let j = 0, column = 1; j < matrix[i].length; j++, column++){
      if(matrix[i][j] !== matrix[i][j+1] && matrix[i][j] !== matrix[i][j+2] && j !== matrix[i].length - 1 && j !== matrix[i].length - 2){
        return [row, column];
      }
      else if(matrix[i][j] !== matrix[i][j+1] && matrix[i][j] !== matrix[i][j-1] && j == matrix[i].length - 2){
        return [row, column];
      }
      else if(matrix[i][j] !== matrix[i][j-1] && j == matrix[i].length - 1){
        return [row, column];
      }
    }
  }
}




console.log(whereIsWaldo(example));
console.log(whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
]));
console.log(whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
]));


