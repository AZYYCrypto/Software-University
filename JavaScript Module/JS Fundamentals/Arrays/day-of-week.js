function dayOfWeek(num) {
    let arrDays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday' ]
if (num <= 0 || num > 7 ) {
    console.log('Invalid Day');
    
} else {
    console.log(arrDays[num - 1]);

}
 
 
}


dayOfWeek([5]);
    


