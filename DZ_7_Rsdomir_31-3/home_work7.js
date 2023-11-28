var users = [
    {login: "artem", password: "123", name: "Artem Metro Exodus"},
    {login: "anna", password: "321", name: "Anna Melnik Metro Exodus"},
    {login: "knyaz", password: "231", name: "Knyaz Metro Exodus"},
    {login: "damir", password: "132", name: "Damir Metro Exodus"},
    {login: "Idiot", password: "213", name: "Idiot Metro Exodus"},

];

function check_users() {
    var loginCheck = document.getElementById("login").value;
    var passwordCheck = document.getElementById("password").value;
    var user = users.find(function (user) {
        return user.login === loginCheck && user.password === passwordCheck;
    });

    if (user) {
        document.getElementById("message").textContent = "Welcome, "+ user.name +'! Auth is good.';
    } else {
        document.getElementById("message").textContent = "Error. Check your login or password.";
    }
}

// Обработчик нажатия кнопки "Войти"
document.getElementById("loginButton").addEventListener("click", check_users);
