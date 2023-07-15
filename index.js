// code your solution here
function superbowlWin(arr){
    let champ = arr.find( e => e.result === "W");
    return !!champ ? champ.year : undefined;
}

