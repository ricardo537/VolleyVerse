export class PlayerDTO {
    public name: string;
    public last_name: string;
    public description: string;
    public img;

    constructor (name: string, last_name: string, description: string, img: string) {
        this.name = name;
        this.last_name = last_name;
        this.description = description;
        this.img = img;
    }

}
