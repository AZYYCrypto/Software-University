function extractText () {

    let items = $('#items li')
    .toArray()
    .map(li => li.textContent).join(', ');

    $('div').text(items);
    
    
    
    


}