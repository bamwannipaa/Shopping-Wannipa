function validateForm(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == null || username == "" ){
        alert("Please enter your username")
        return false;
    }

    if(password == null || password == "" ){
        alert("Please enter your password")
        return false;
    }
    alert("Welcome To HOME")

}