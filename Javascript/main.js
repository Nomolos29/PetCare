const AppName = "petUsers"
let DB = []
let recordFromStorage = window.sessionStorage.getItem(AppName)

if(recordFromStorage !== null) {
  DB = JSON.parse(recordFromStorage)
}


