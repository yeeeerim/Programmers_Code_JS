// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
  var answer = [2];
  answer[0] = 7;
  answer[1] = 7;

  for (let num of lottos) {
    if (num == 0) {
      answer[0]--;
    } else if (win_nums.includes(num)) {
      answer[0]--;
      answer[1]--;
    }
  }

  if (answer[0] == 7) answer[0] = 6;
  if (answer[1] == 7) answer[1] = 6;

  return answer;
}

console.log(
  "====== 정답 ======> " +
    solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
);
