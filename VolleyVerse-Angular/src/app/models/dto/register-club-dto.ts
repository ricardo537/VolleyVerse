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
}
