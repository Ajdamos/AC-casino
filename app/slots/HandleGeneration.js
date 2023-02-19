export function HandleGeneration(oldArray, IMAGES) {
    if(oldArray.length < 3){
        let temp = []
        for(let i = 0; i < 9; i++) temp.push(IMAGES[Math.floor(Math.random() * 9)])
        return temp
    }
    else{
        let temp = [];
        for(let i = 0; i < 3; i++) {
            temp.push(IMAGES[Math.floor(Math.random() * 9)])}
        for(let j = 0; j < 6; j++) {
            temp.push(oldArray[j])}
        return temp
    }
}

