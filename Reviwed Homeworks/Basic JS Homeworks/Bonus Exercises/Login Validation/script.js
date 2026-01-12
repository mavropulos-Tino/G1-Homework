const username = "1";
const password = "2";

const usernameInput = prompt("Enter username:");
const passwordInput = prompt("Enter password:");

if (usernameInput === null || passwordInput === null || ' ') {
  alert("Username or password fields cannot be empty.");

} else if (username === usernameInput && password === passwordInput) {
  alert(`Login successful, hello ${usernameInput}`);

} else {
  alert("Incorrect username or password entered.");

}