import { Validator } from "src/app/shared/utils/validator";
export class RegisterClubDTO {
    email: string;
    password: string;
    name: string;
    zip_code: string;

    constructor (email:string, password:string, name:string, zip_code:string) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.zip_code = zip_code;
    }

    public static fromJSON (json:any): RegisterClubDTO|string {
        if (json.password === json.password_confirm) {
            if (Validator.emailComprobation(json.email)) {
                if (Validator.zipCodeComprobation(json.zip_code)) {
                    return new RegisterClubDTO(json.email, json.password, json.name, json.zip_code);
                } else {
                    return "El código postal no es válido, revísalo por favor.";
                }
            } else {
                return "El email no cumple el formato correcto, revísalo por favor.";
            }
        } else {
            return "Las contraseñas que has introducido tienen que ser iguales, revísalas por favor.";
        }
    }
}
