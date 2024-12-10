export class PlayerDTO {
    public name: string;
    public last_name: string;
    public description: string;

    constructor (name: string, last_name: string, description: string) {
        this.name = name;
        this.last_name = last_name;
        this.description = description;
    }

}
