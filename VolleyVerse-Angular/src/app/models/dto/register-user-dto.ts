import { Validator } from "src/app/shared/utils/validator";
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

    public static fromJSON (json:any): RegisterUserDTO|string {
        if (json.password === json.password_confirm) {
            if (Validator.emailComprobation(json.email)) {
                return new RegisterUserDTO(json.email, json.password, json.name, json.last_name);
            } else {
                return "El email no cumple el formato correcto, revísalo por favor.";
            }
        } else {
            return "Las contraseñas que has introducido tienen que ser iguales, revísalas por favor.";
        }
    }
}
