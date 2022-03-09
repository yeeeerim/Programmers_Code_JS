[프로그래머스](https://programmers.co.kr/learn/challenges)
---
## ✔Array.prototype
|func|description|ex|
|--|------|-----|
|map()|배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환|const map1 = array1.map(x => x * 2);|
|filter()|주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환|const result = words.filter(word => word.length > 6);|
|reduce()|배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환|var total = [ 0, 1, 2, 3 ].reduce(( acc, cur ) => acc + cur,  0);|
|splice()| 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경||

## ✔Algorithms
- [순열과 조합](https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349) `LV1 010.js`
```javascript
function getCombinations(arr, cnt) { // 조합
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
```
- 숫자 정렬
```javascript
arr.sort((a, b) => a - b);
```
