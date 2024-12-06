import { LoginDTO } from "./login-dto";

export class UpdateClubDTO {
    email: string;
    password: string;
    name: string;
    zip_code: string;
    contact: string;
    login: LoginDTO;

    constructor (email: string, password: string, name: string, zip_code:string, contact:string, login:LoginDTO) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.zip_code = zip_code;
        this.contact = contact;
        this.login = login;
    }
}
