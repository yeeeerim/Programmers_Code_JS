// 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

function getCombinations(arr, cnt) {
  const result = [];
  if (cnt === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, cnt - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });

  return result;
}

function isPrimeNum(n) {
  let cnt = 0;
  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) cnt++;
  }
  return cnt > 0 ? false : true;
}

function solution(nums) {
  let answer = 0;
  let comb = [];

  // 1. 조합 구하기
  comb = getCombinations(nums, 3);

  // 2. 소수인지 검사
  for (let arr of comb) {
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    if (isPrimeNum(sum)) answer++;
  }

  return answer;
}

console.log("=====정답=====> " + solution([1, 2, 3, 4]));
