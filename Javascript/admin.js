let body = document.querySelector('#userList');

// Creating function userContainer

function userContainer(username, email, password) {
  
  // Creating Containers
  
  const mainContainer = document.createElement('div');mainContainer.className = 'admin-main-container';
  const container = document.createElement('div');
  container.className = 'admin-container';
  const circle = document.createElement('div');
  circle.className = 'login-circle3' 
  // appending conainer in mainContainer
  
  mainContainer.appendChild(circle)
  circle.appendChild(container)
  // Creating Text Elements
  
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  // Adding classnames
  
  h1.className = 'user-name';
  p1.className = 'user-email';
  p2.className = 'user-password';
  // Creating text nodes
  
  const userName = document.createTextNode('Username: ' + username);
  const userEmail = document.createTextNode('Email: ' + email);
  const userPassword = document.createTextNode('Password: ' + password);
  // Appending text nodes
  
  h1.appendChild(userName)
  p1.appendChild(userEmail)
  p2.appendChild(userPassword)
  // appending text elements in container

  container.append(h1,p1,p2)

  // Appending to DOM

  document.querySelector('#main').insertBefore(mainContainer, document.getElementById('#footer'))
}
console.log(body)

userContainer("Solomon", "nomolos2019@gmail.com", 1234567890)
userContainer("Solomon", "nomolos2019@gmail.com", 1234567890)
userContainer("Solomon", "nomolos2019@gmail.com", 1234567890)
userContainer("Solomon", "nomolos2019@gmail.com", 1234567890)
userContainer("Solomon", "nomolos2019@gmail.com", 1234567890)
userContainer("Solomon", "nomolos2019@gmail.com", 1234567890)
userContainer("Solomon", "nomolos2019@gmail.com", 1234567890)

userContainer("Peter", "nomolos2019@gmail.com", 1234567890)
userContainer("Peter", "nomolos2019@gmail.com", 1234567890)
userContainer("Peter", "nomolos2019@gmail.com", 1234567890)
userContainer("Peter", "nomolos2019@gmail.com", 1234567890)
userContainer("Peter", "nomolos2019@gmail.com", 1234567890)
userContainer("Peter", "nomolos2019@gmail.com", 1234567890)
userContainer("Peter", "nomolos2019@gmail.com", 1234567890)