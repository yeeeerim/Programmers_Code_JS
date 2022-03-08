// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
  var answer = 0;
  let arr = [];
  let height = board.length;
  for (let n of moves) {
    for (let i = 0; i < height; i++) {
      let num = board[i][n - 1];
      if (num != 0) {
        if (arr[arr.length - 1] == num) {
          arr.pop();
          answer += 2;
        } else arr.push(num);
        board[i][n - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(
  "=====정답=====> " +
    solution(
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    )
);
