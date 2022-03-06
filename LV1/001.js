// 신고 결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function solution(id_list, report, k) {
  let answer = [];
  let arr = []; // 신고한 정보 - ex) muzi: ['frodo', 'neo']
  let cnt = []; // 신고 당한 횟수 - ex) frodo: 2
  let id = []; // 메일 받을 횟수

  for (let i = 0; i < id_list.length; i++) {
    id[id_list[i]] = 0;
  }

  for (let i = 0; i < report.length; i++) {
    let from = report[i].split(" ")[0];
    let to = report[i].split(" ")[1];

    if (arr[from] == null) arr[from] = [];
    if (arr[from] == null || (arr[from] != null && !arr[from].includes(to))) {
      arr[from].push(to);
      if (cnt[to] == null) cnt[to] = 1;
      else cnt[to]++;
    }
  }

  for (let user in cnt) {
    const n = cnt[user];
    if (n >= k) {
      for (let from in arr) {
        const to = arr[from];
        if (to.includes(user)) {
          id[from]++;
        }
      }
    }
  }
  //   console.log(id);

  let index = 0;
  for (let user in id) {
    answer[index++] = id[user];
  }

  //   console.log(cnt);
  //   console.log(arr);

  return answer;
}

console.log(
  "[정답] =======================> " +
    solution(
      ["muzi", "frodo", "apeach", "neo"],
      [
        "muzi frodo",
        "apeach frodo",
        "frodo neo",
        "muzi neo",
        "apeach muzi",
        "apeach muzi",
      ],
      2
    )
);
