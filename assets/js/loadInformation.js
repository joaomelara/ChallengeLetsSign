const userData = JSON.parse(localStorage.getItem("formData"));

if (window.location.href.includes("authentication.html")) {
  if (localStorage.getItem("authenticated") == "false" || localStorage.getItem("authenticated") == null) {
    window.location.href = "index.html";
  }
} else if (localStorage.getItem("authenticated") && window.location.href.includes("index.html") || window.location.href.includes("tokenVerification.html")) {
  localStorage.setItem("authenticated", false);
  localStorage.setItem("faceStored", false);
  localStorage.removeItem("usedAltDevice");
  console.log("User unauthenticated.")
}

if(window.location.href.includes("signing.html")) {
  if (localStorage.getItem("authenticated") == "false" || localStorage.getItem("authenticated") == null || localStorage.getItem("faceStored") == "false" || localStorage.getItem("faceStored") == null) {
    window.location.href = "index.html";
  }
}

function loadEmail() {
  try {
    if (userData) {
      let fields = document.getElementsByClassName("emailField");
      for (let i = 0; i < fields.length; i++) {
        fields[i].innerHTML = userData.email;
      }

    } else {
      console.log("No email found in local storage.");
    }

  } catch (error) {
    console.error("Error loading email:", error);
  }

}

function loadName() {
  try {
    if (userData) {
      document.getElementById("nameInput").value = userData.name;

    } else {
      console.log("No name found in local storage.");
    }

  } catch (error) {
    console.error("Error loading name:", error);
  }
}

function loadAll() {
  try {
    if (userData) {
      document.getElementById("nameInput").value = userData.name;
      document.getElementById("documentInput").value = userData.pDocument;
      document.getElementById("emailInput").value = userData.email;
      document.getElementById("birthdateInput").value = userData.birthdate;

    } else {
      console.log("No info found in local storage.");
    }

  } catch (error) {
    console.error("Error loading info:", error);
  }
}