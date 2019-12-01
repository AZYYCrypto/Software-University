function addItem() {
    let inputText = document.getElementById('text');
    let inputValue = document.getElementById('value');
    let select = document.getElementById('menu');
    let option = document.getElementById('option')

    

    option.innerText = inputText.value;
    option.value = inputText.value;

    select.appendChild(option)
    inputText.value = '';
    inputValue.value = '';


    
    
}