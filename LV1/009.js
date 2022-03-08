// 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128?language=javascript

function solution(a, b) {
  return a.reduce((acc, cur, index) => acc + cur * b[index], 0);
}

console.log("=====정답=====> " + solution([1, 2, 3, 4], [-3, -1, 0, 2]));
