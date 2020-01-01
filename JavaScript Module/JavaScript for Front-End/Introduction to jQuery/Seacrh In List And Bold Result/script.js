function search() {
    let towns = $('#towns li');
    let searched = $('#searchText').val().toLowerCase();
    let count = 0;
    for (let town of towns) {
        let currentTown = town.textContent.toLowerCase();

        if (currentTown.includes(searched)) {
            count++;
            $(town).css('font-weight','bold');
        } 
        

    }

$('#result').text(`${count} matches found`)

     $(searched).text(' ');

}