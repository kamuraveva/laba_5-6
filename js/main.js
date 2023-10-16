function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text_1 = document.getElementById("text_1");

    var pattern = /^[\w-\.]+@[\w-]+\.[a-z]{1,3}$/i;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text_1.innerHTML = "Ваш email-адрес верный";
        text_1.style.color = "#00ff00";
    }

    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text_1.innerHTML = "Введите корректный email-адрес";
        text_1.style.color = "#ff0000";
    }

    if (email == "") {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text_1.innerHTML = "Введите email-адрес";
        text_1.style.color = "#00ff00";
    }
}

function empty_name() {
    var name = document.getElementById("name").value;
    var text = document.getElementById("text");

    if (name.trim().length == 0) {
        text.innerHTML = "Введите ваше имя";
        text.style.color = "#00ff00";
    }

    else {
        text.innerHTML = "Вы ввели имя";
        text.style.color = "#00ff00";
    }
}

function empty_subject() {
    var subject = document.getElementById("subject").value;
    var text_2 = document.getElementById("text_2");

    if (subject.trim().length == 0) {
        text_2.innerHTML = "Введите тему письма";
        text_2.style.color = "#00ff00";
    }

    else {
        text_2.innerHTML = "Вы ввели тему письма";
        text_2.style.color = "#00ff00";
    }
}