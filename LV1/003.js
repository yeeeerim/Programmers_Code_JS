// 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function solution(new_id) {
  let answer = new_id;

  // 1단계 : 대문자 -> 소문자
  answer = answer.toLowerCase();

  // 2단계 : 소문자, 숫자, -, _, . 를 제외한 모든 문자 제거
  let id = [];
  id = answer.split("");
  id = id.filter(
    (c) =>
      c == "-" ||
      c == "_" ||
      c == "." ||
      (c >= "a" && c <= "z") ||
      (c >= 0 && c <= 9)
  );

  // 3단계 : .가 2번 이상 연속된 부분을 하나의 .로 치환
  let cnt = 0;
  for (let i = 0; i < id.length; i++) {
    if (id[i] != ".") {
      if (cnt >= 2) {
        id.splice(i - cnt + 1, cnt - 1);
        i = i - cnt + 1;
      }
      cnt = 0;
    } else cnt++;
  }
  if (cnt >= 2) {
    id.splice(id.length - cnt, cnt + 1);
  }

  // 4단계 : .가 처음이나 끝에 위치하면 제거
  if (id[0] == ".") id.shift();
  if (id[id.length - 1] == ".") id.pop();

  // 5단계 : 빈 문자열이면 "a"를 대입
  if (id.length == 0) id.push("a");

  // 6단계 : 길이가 16자 이상이면 첫 15문자를 제외한 나머지 제거, 제거 후 끝이 .이면 .제거
  if (id.length >= 16) {
    id = id.slice(0, 15);
    if (id[id.length - 1] == ".") id.pop();
  }

  // 7단계 : 길이가 2자 이하면 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 추가
  while (id.length <= 2) {
    id.push(id[id.length - 1]);
  }

  answer = id.join("");
  return answer;
}

console.log("====== 정답1 ======> " + solution("...!@BaT#*..y.abcdefghijklm"));
console.log("====== 정답2 ======> " + solution(".a."));
