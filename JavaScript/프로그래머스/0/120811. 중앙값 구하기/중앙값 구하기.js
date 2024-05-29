function solution(array) {
    var answer = 0;
    let reuslt = array.sort((a,b)=>a-b);
    let middle = Math.floor(reuslt.length/2);
    
    answer = reuslt[middle]
    return answer;
}