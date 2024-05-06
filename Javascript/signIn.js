
document.getElementById("login-form-main").addEventListener("submit", (e) => {
  e.preventDefault()
  check()
  
})

document.querySelector(".signUp").addEventListener("click", (e) => {
  e.preventDefault();

  let basePath = window.location.origin;
  let nextPath = basePath + "/signUp.html";
  window.location.replace(nextPath);
});


function doesEmailExistsInDB(email) {
  return DB.find((record) => record.email === email)
}
function doesPassowrdExistsInDB(password) {
  return DB.find((record) => record.password === password)
}

let attempt = 1
function count() {
  attempt++
}
function check() {
  let email1 = document.getElementById("email1").value.trim()
  let userPassword = document.getElementById("userPassword").value.trim()


  if(doesEmailExistsInDB(email1) && doesPassowrdExistsInDB(userPassword) && attempt < 3) {
    // alert("Sign in successful!")
  
    let basePath = window.location.origin
    let nextPath = basePath + "/index.html"
    window.location.replace(nextPath)
  }else if(!doesEmailExistsInDB(email1) && attempt !== 3){
    
    alert('Wrong Email input!\nEmail does not exist.\nPlease input correct email.\n OR click "Sign up" to Create an account.\n\nYou\'ve used ' + attempt + ' attempt of 3.')
    
    count()
  
  
  }else if (doesEmailExistsInDB(email1) && !doesPassowrdExistsInDB(userPassword) && attempt !== 5) {
    
    alert("Wrong password input!\nPlease comfirm password and try again.\n\nYou've used " + attempt + " attempt of 5.")
    
    count()

  }else if (doesEmailExistsInDB(email1) && doesPassowrdExistsInDB(userPassword) && attempt !== 6) {
      
    let basePath = window.location.origin
    let nextPath = basePath + "/index.html"
    window.location.replace(nextPath)
  }else{
    alert('This account does not exist!\nAnd you are out of attempts.\nWould you like to create an account?!')

    let basePath = window.location.origin
    let nextPath = basePath + "/signUp.html"
    window.location.replace(nextPath)
  }
  

  
}
