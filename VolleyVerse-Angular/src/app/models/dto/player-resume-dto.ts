export class PlayerResumeDTO {
    public id: string;
    public name: string;
    public last_name: string;
    public description: string;
    public img;

    constructor (id: string, name: string, last_name: string, description: string, img: string) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.description = description;
        this.img = img;
    }

}
