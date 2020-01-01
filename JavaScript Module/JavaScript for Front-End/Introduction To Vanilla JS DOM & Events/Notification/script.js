function notify(message) {
    let notifyDiv = document.getElementById('notification');

    notifyDiv.innerText = message;
    notifyDiv.style.display = 'block';

    setInterval(function () {
        notifyDiv.style.display = 'none';
    } , 1100);

}