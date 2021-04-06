function addBook() {
    let table = document.getElementById("MyTable");

    let td = table.getElementsByTagName("TR")[1].getElementsByTagName("TD");

    let row = table.insertRow(2);
    row.classList.add("added"); 

    let name = td[0].firstChild.value;

    for (var i = 0; i < td.length-1; i++) {
        row.insertCell(-1).innerHTML = td[i].firstChild.value;
        td[i].firstChild.value = "";
    }

    var deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = () => deleteBook(name);

    let btn = row.insertCell(-1);
    btn.appendChild(deleteButton);
}

function deleteBook (name) {
    let rows = document.getElementById("MyTable").getElementsByTagName("TR");

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].getElementsByTagName("TD")[0].innerHTML == name) {
            if (rows[i].classList.contains("added")) {
                rows[i].remove();
            }
            else {
                rows[i].style.display = "none";
                rows[i].classList.add("deleted");
            }
        }
    }
}

function startTimer() {
    setInterval(alertFunc, 3000);
}

function saveChange() {
    alert("Hello!");
}