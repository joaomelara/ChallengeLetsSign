const userData = JSON.parse(localStorage.getItem("formData"));

function loadEmail() {
  if (userData) {
    let fields = document.getElementsByClassName("emailField");
    for (let i = 0; i < fields.length; i++) {
      fields[i].innerHTML = userData.email;
    }
    
  } else {
    console.log("No email found in local storage.");
  }
}