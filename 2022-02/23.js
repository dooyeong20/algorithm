// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){
    let range = [list[0], list[0]];
    let ans = '';

    for(let i=1; i<list.length; i++) {
        if(range[1] + 1 === list[i]) {
            range[1] = list[i];
            continue;
        }

        ans = getAnswer(ans, range);
        range = [list[i], list[i]];
    }

    return getAnswer(ans, range);
}

function getAnswer(ans, range) {
    return ans + (ans ? ',' : '') + getRange(range);
}

function getRange(range) {
    if(range[0] === range[1]) {
        return range[0];
    }

    if(range[0] < range[1]) {
        return range[0] + 1 < range[1] ? range.join('-') : range[0] + ',' + range[1];
    }
}