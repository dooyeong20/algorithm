// https://programmers.co.kr/learn/courses/30/lessons/92343

function solution(info, edges) {
    // Array.fill 은 값을 얕은 복사해서 넣기 때문에 빈 배열 참조값이 같아서 ES6의 Array.from 사용
    const graph = Array.from({length: info.length}, () => []);
    let answer = 0;

    const gatherSheep = (node, sheep, wolf, nextNodes) => {
        const newNodes = nextNodes.filter((nextNode) => nextNode !== node);

        sheep += !info[node];
        wolf += info[node];
        answer = Math.max(answer, sheep);

        if(sheep === wolf) {
            return answer;
        }

        newNodes.push(...graph[node]);
        newNodes.forEach((newNode) => {
            return gatherSheep(newNode, sheep, wolf, newNodes);
        });

        return answer;
    };

    edges.forEach(([from, to]) => {
        graph[from].push(to);
    });

    return gatherSheep(0, 0, 0, []);
}