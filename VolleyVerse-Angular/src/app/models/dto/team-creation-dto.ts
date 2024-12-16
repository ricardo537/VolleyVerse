import { LoginDTO } from "./login-dto";

export class TeamCreationDTO {
    name:string;
    category:string;
    type: string;
	clubId: string;
	login: LoginDTO;

    constructor (name: string, category: string, type: string, clubId: string, login: LoginDTO) {
        this.name = name;
        this.category = category;
        this.type = type;
        this.clubId = clubId;
        this.login = login;
    }
}    