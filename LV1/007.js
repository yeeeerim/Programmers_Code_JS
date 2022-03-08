// 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051?language=javascript

function solution(numbers) {
  let answer = 45;

  for (let num of numbers) answer -= num;

  return answer;
}

console.log("=====정답=====> " + solution([1, 2, 3, 4, 6, 7, 8, 0]));
