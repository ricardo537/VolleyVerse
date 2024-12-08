import { LoginDTO } from "./login-dto";

export class UpdatePlayerDTO {
    email: string;
    password: string;
    name: string;
    last_name: string;
    description: string;
    login: LoginDTO;

    constructor (email: string, password: string, name: string, last_name:string, description:string, login:LoginDTO) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.last_name = last_name;
        this.description = description;
        this.login = login;
    }
}
