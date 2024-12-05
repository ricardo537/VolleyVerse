import { LoginDTO } from "./login-dto";

export class SessionDTO {
    login: LoginDTO;
    type_user: string;

    constructor(login: LoginDTO, type_user: string) {
        this.login = login;
        this.type_user = type_user;
    }
}
