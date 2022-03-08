// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript

function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, index) => acc + cur * (signs[index] ? 1 : -1),
    0
  );
}

console.log("=====정답=====> " + solution([4, 7, 12], [true, false, true]));
