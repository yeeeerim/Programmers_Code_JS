// K번째수
// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
  var answer = [];

  for (let com of commands) {
    let new_arr = array.slice(com[0] - 1, com[1]);
    new_arr.sort((a, b) => a - b);
    answer.push(new_arr[com[2] - 1]);
  }

  return answer;
}

console.log(
  "=====정답=====> " +
    solution(
      [1, 5, 2, 6, 3, 7, 4],
      [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
      ]
    )
);
