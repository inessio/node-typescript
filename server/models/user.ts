interface userDetails {
    username : string;
    name: string;
    email: string;
}

export default class User {
    
    // username: String;
    // name: String;
    // email: String;

    constructor(public username: String, public name: String, public email: String){
        // this.username = username ;
        // this.name = name;
        // this.email = email;
    }

    getUsername(){
        return this.username
    }
    getEmail(){
        return this.email
    }
    getName(){
        return this.name
    }
}
