function vacationBooksList(input) {
    let numOfPage = Number(input[0]);
    let pages = Number(input[1]);
    let numOfdays = Number(input[2]);

    let timeForReadBook = numOfPage / pages;
    let hoursForDay = timeForReadBook / numOfdays;

    console.log(hoursForDay);

}