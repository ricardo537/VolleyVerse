import { Validator } from "src/app/shared/utils/validator";
import { LoginDTO } from "./login-dto";

export class UpdatePlayerDTO {
    email: string;
    password: string;
    name: string;
    last_name: string;
    description: string;
    login: LoginDTO;

    constructor (email: string, password: string, name: string, last_name:string, description:string) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.last_name = last_name;
        this.description = description;
        this.login = LoginDTO.getSession();
    }

    public static fromJSON (json:any): UpdatePlayerDTO|string {
        if (json.password === json.password_confirm) {
            if (Validator.emailComprobation(json.email)) {
                return new UpdatePlayerDTO(json.email, json.password, json.name, json.last_name, json.description);
            } else {
                return "El email no cumple el formato correcto, revísalo por favor.";
            }
        } else {
            return "Las contraseñas que has introducido tienen que ser iguales, revísalas por favor.";
        }
    }
}
