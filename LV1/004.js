// 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

function solution(s) {
  let answer = s;
  const keyword = [
    ["zero", "0"],
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
  ];

  for (let i = 0; i < keyword.length; i++) {
    let k = new RegExp(keyword[i][0], "g");
    answer = answer.replace(k, keyword[i][1]);
  }

  return Number(answer);
}

console.log("=====정답=====> " + solution("one4seveneightone"));
