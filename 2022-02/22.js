// https://www.codewars.com/kata/520b9d2ad5c005041100000f/

function pigIt(str){
    const words = str.split(' ');

    return words.map(words => swap(words)).join(' ');
}

function swap(str){
    return str.match(/[\w+]/g) ? str.slice(1) + str[0] + 'ay' : str;
}