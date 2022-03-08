// 키패드 누르기
//  https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

function solution(numbers, hand) {
  let answer = "";
  let lh = [3, 0];
  let rh = [3, 2];

  for (let num of numbers) {
    if ([1, 4, 7].includes(num)) {
      answer += "L";
      lh = [Math.floor(num / 3), 0];
    } else if ([3, 6, 9].includes(num)) {
      answer += "R";
      rh = [Math.floor(num / 3) - 1, 2];
    } else {
      // 2,5,8,0
      let loc = [];
      if (num == 0) loc = [3, 1];
      else loc = [Math.floor(num / 3), 1];

      let l_gap = Math.abs(lh[0] - loc[0]) + Math.abs(lh[1] - loc[1]);
      let r_gap = Math.abs(rh[0] - loc[0]) + Math.abs(rh[1] - loc[1]);
      if (l_gap > r_gap) {
        answer += "R";
        rh = loc;
      } else if (l_gap < r_gap) {
        answer += "L";
        lh = loc;
      } else {
        if (hand == "right") {
          answer += "R";
          rh = loc;
        } else {
          answer += "L";
          lh = loc;
        }
      }
    }
    console.log(num + " : 왼손[" + lh + "], 오른손[" + rh + "]");
  }

  return answer;
}

console.log(
  "=====정답=====>" + solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")
);
//  LRLLLRLLRRL
