document.getElementById('documentInput').addEventListener('input', function(e) {
  var value = e.target.value;
  var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
						.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
						.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
						.replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
						.replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
  e.target.value = cpfPattern;
});

function checkForm() {
    try {
        const name = document.getElementById("nameInput").value;
        const pDocument = document.getElementById("documentInput").value;
        const email = document.getElementById("emailInput").value;
        const birthdate = document.getElementById("birthdateInput").value;

        if (name === "" || pDocument === "" || email === "" || birthdate === "") {
            alert("Por favor preencha os campos.");
            return false;
        } else {
            let currentDate = new Date();
            if (new Date(birthdate) > currentDate || new Date(birthdate) < new Date("1900-01-01" || pDocument.length < 11)) {
                alert("Dados inválidos.");
                return false;
            } else {
                const formData = {
                    name: name,
                    pDocument: pDocument,
                    email: email,
                    birthdate: birthdate
                };

                // Store the form data in local storage
                localStorage.setItem("formData", JSON.stringify(formData));

                return true;
            }
        }

    } catch (error) {
        console.error("Error checking form: ", error);
        alert("Erro ao verificar o formulário. Tente novamente.");
        return false;
    }

}