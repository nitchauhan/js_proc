console.log("This is index.js");


// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tablebody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tablebody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('lform');
    libraryForm.reset();
}

//Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}



// Add submit event listener to libraryForm
let lform = document.getElementById('lform');
lform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('AAuthor').value;
    let type;
    let fiction = document.getElementById('mkotivationbook');
    let programming = document.getElementById('komputerprograming');
    let cooking = document.getElementById('Kooking');

    if (mkotivationbook.checked) {
        type = mkotivationbook.value;
    }
    else if (komputerprograming.checked) {
        type = komputerprograming.value;
    }
    else if (Kooking.checked) {
        type = Kooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    // if (display.validate(book)) {

        if (display.validate(book)) {

            display.add(book);
            display.clear();
            display.show('success', 'Your book has been successfully added')
        }
        else {
            // Show error to the user
            display.show('danger', 'Sorry you cannot add this book');
        }

        e.preventDefault();
    }