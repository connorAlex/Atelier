
const adminUserName = "user"
const adminPassword = "123"

class AccountClient {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    
    checkCredentials(inputUserName, inputPassword) {
        return this.userName === inputUserName && this.password === inputPassword;
    }
}

const adminUser = new AccountClient(adminUserName, adminPassword);

const inputUserName = "Atelier"
const inputPassword = "password1"


// Example of a function to log in a user
const login = async (username, password) => {
    console.log(username, password)
  };
  export default {
    login,
  };
  