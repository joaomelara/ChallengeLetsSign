let result = "";

function makeToken(length) {
    result = "";
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    alert("Seu token é: " + result);
    return result;
}

function checkToken() {
    var token = document.getElementById("tokenInput").value;
    if (token == result){
        alert("Token correto!");
        window.location.href = "authentication.html";
    } else {
        alert("Token incorreto, tente novamente.");
    }
}