import { PlayerResumeDTO } from "./player-resume-dto";

export class TeamDTO {
    public id: string;
    public name: string;
    public category: string;
    public type: string;
    public clubId: string;
    public members: PlayerResumeDTO[];

    constructor (id: string, name: string, category: string, type: string, clubId: string, members: PlayerResumeDTO[]) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.type = type;
        this.clubId = clubId;
        this.members = members;
    }

}
