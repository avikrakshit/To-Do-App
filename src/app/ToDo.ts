export class ToDo {
    id: number;
    title: string;
    description: string;
    active: boolean;
    created_at: string;

    constructor(id: number, title: string, description: string, active: boolean, created_at: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.active = active;
        this.created_at = created_at;
    }
}
