import { Validator } from "src/app/shared/utils/validator";

export class LoginDTO {
    email: string;
    password: string;
    type: string;

    constructor (email: string, password: string, type: string) {
        this.email = email;
        this.password = password;
        this.type = type;
    }

    public static fromJSON (json:any): LoginDTO|string {
            if (Validator.emailComprobation(json.email)) {
                return new LoginDTO(json.email, json.password, "n");
            } else {
                return "El email no cumple el formato correcto, revísalo por favor.";
            }
    }
}
