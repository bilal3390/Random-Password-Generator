function generatePassword() {
    var length = 8; // length of the generated password
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; //!@#$%^&*()_+~`|}{[]\:;?><,./-=
    var password = "";

    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("passwordInput").value = password;
}
