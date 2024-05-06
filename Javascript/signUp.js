function doesEmailExistsInDB(email) {
  return DB.find((record) => record.email === email)
}

function saveToStorage(arrayRecord) {
  window.sessionStorage.setItem(AppName, JSON.stringify(arrayRecord))
}

function comparePasswords(password1, password2) {
  return password1 === password2
}

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault()
  onSubmit()
  
})

function onSubmit() {
  let username = document.querySelector("#username").value.trim()
  let email = document.querySelector("#email2").value.trim()
  let password1 = document.querySelector("#password").value.trim()
  let password2 = document.querySelector("#password2").value.trim()

  let isPasswordEqual = comparePasswords(password1, password2)

  if(!isPasswordEqual) {
    alert("passwords are not the same!!")
    return
  } else if(doesEmailExistsInDB(email)) {
    alert("This email has been used.\nPlease choose another email")
  } 
  else {
    let newRecord = {
      username, 
      email,
      password: password1
    }

    DB.push(newRecord)
    
    saveToStorage(DB)
    alert("Registration for " + username + " successful!")

    // to move to login page
    let basePath = window.location.origin
    let nextPath = basePath + "/login.html"
    window.location.replace(nextPath)
    
  }

}
