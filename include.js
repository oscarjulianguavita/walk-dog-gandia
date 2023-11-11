document.addEventListener("DOMContentLoaded", function () {
    // Incluir el head
    fetch("head.html")
        .then(response => response.text())
        .then(data => {
            document.head.innerHTML = data;
        });

    // Incluir el header con menú de hamburguesa
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data + document.body.innerHTML;
        });


    //Incluir el footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML += data;
        });
});