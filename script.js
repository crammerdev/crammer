
document.getElementById('btn-dipae').addEventListener('click', function()
 {window.location.href = 'Panepistimia/DIPAE/dipae.html';});

 document.getElementById('btn-pamak').addEventListener('click', function()
 {window.location.href = 'Panepistimia/PAMAK/pamak.html';});

 document.getElementById('btn-apth').addEventListener('click', function()
 {window.location.href = 'Panepistimia/APTH/apth.html';});

 document.getElementById('btn-ionio').addEventListener('click', function()
 {window.location.href = 'Panepistimia/IONIO/ionio.html';});


 /*search bar*/
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const buttons = document.querySelectorAll(".items");

    searchInput.addEventListener("input", function() {
        const searchText = removeDiacritics(this.value.toLowerCase());

        buttons.forEach(function(button) {
            const buttonText = removeDiacritics(button.textContent.toLowerCase());

            if (buttonText.includes(searchText)) {
                button.style.display = "inline-block";
            } else {
                button.style.display = "none";
            }
        });
    });

    function removeDiacritics(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
});

