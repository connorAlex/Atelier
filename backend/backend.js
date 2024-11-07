const adminEmail = "sabus3@uic.edu"
const adminPassword = "Atelier2024!"

class Account {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    
    checkCredentials(inputEmail, inputPassword) {
        return this.email === inputEmail && this.password === inputPassword;
    }
}

const adminUser = new Account(adminEmail, adminPassword);

const inputEmail = "sabus3@uic.edu"
const inputPassword = "atelier2024!"

if(adminUser.checkCredentials(inputEmail, inputPassword)) {
    console.log("Credentials are correct!");
} else {
    console.log("Invalid email or password. Try again!");
}
