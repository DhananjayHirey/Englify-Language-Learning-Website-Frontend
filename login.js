function signup(){

    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var address = document.getElementById('address').value;

    localStorage.setItem('name' , name);
    localStorage.setItem('email', email);
    localStorage.setItem('password',password);
    localStorage.setItem('address',address)
}