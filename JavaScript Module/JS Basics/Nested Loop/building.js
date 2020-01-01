function building(input){
    let floors = Number(input.shift()); 
    let rooms = Number(input.shift()); 

    for (let floor = floors; floor >= 1; floor--){
        let output = "";
        for (let room = 0; room < rooms; room++) {
            if (floor == floors) {
                output += `L${floor}${room}`;

            } else if (floor % 2 == 0) {
                output += `O${floor}${room}`;
            }
        }
        console.log(output);
    }
      
}

building([4,4]);