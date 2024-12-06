export class RegisterUserDTO {
    email: string;
    password: string;
    name: string;
    last_name: string;

    constructor (email:string, password:string, name:string, last_name:string) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.last_name = last_name;
    }
}
