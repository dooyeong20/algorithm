// https://www.codewars.com/users/dooyeong/completed_solutions

function dblLinear(n) {
    const usedNumberSet = new Set([1]);
    let count = 0;

    const canMade = (num) => (num - 1) % 2 === 0 || (num - 1) % 3 === 0
    const isMadeBefore = (num) => usedNumberSet.has((num - 1) / 2) || usedNumberSet.has((num - 1) / 3);

    for (let i = 1; ; i++) {
        if (canMade(i) && isMadeBefore(i)) {
            usedNumberSet.add(i);
            count += 1;
        }

        if (count === n) {
            return i;
        }
    }
}