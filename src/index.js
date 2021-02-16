
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == 0 || matrix === undefined) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i ++) {
      if (i % 2) {
        matrix[i].sort((a, b) => b - a)
      } else {
        matrix[i]
      } 
    }  
    return matrix.flat()
  };
}