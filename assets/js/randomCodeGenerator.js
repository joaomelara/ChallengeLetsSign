let result = "";

function makeToken(length) {
    try {
        result = "";
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        alert("Seu token é: " + result);

    } catch (error) {
        console.error("Error generating token: ", error);
        alert("Erro ao gerar o token. Tente novamente.");
    }

}

function checkToken() {
    try {
        var token = document.getElementById("tokenInput").value;
        if (token == result && token != "") {
            return true;
        } else {
            alert("Token incorreto, tente novamente.");
            return false;
        }
        
    } catch (error) {
        console.error("Error checking token: ", error);
        alert("Erro ao verificar o token. Tente novamente.");
        return false;
    }

}