const adminUserName = "Atelier"
const adminPassword = "password1"

class Account {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    
    checkCredentials(inputUserName, inputPassword) {
        return this.userName === inputUserName && this.password === inputPassword;
    }
}

const adminUser = new Account(adminUserName, adminPassword);

const inputUserName = "Atelier"
const inputPassword = "password1"

if(adminUser.checkCredentials(inputUserName, inputPassword)) {
    console.log("Credentials are correct!");
} else {
    console.log("Invalid email or password. Try again!");
}
