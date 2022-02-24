// https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6

/* 첫 시도 코드

function assembleString(array){
    if(array.length < 1) {
        return '';
    }

    const ans = [];

    for(let i=0; i<array[0].length; i++){
        let foundFlag = false;

        array.forEach((word) => {
            if(!foundFlag && word[i] !== '*') {
                foundFlag = true;
                ans.push(word[i]);
            }
        });

        if(!foundFlag) {
            ans.push('#');
        }
    }

    return ans.join('');
}
 */

function assembleString(array){
    if(array.length < 1) {
        return '';
    }

    return Array.from(array[0]).map((_, idx) => {
        const found = array.find((word) => word[idx] !== '*');

        return found ? found[idx] : '#';
    }).join('');
}