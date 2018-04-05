export class Todo {
    todoID: number;
    userID: number;
    title: string;
    completed: boolean;

    constructor(todoID: number, userID: number, title: string, completed: boolean) {
        this.todoID = todoID;
        this.userID = userID;
        this.title = title;
        this.completed = completed;
    }

    public getTodoID(): number {
        return this.todoID;
    }

    public getUserID(): number {
        return this.userID;
    }

    public getTitle(): string {
        return this.title;
    }

    public getCompleted(): boolean {
        return this.completed;
    }
}

export const TODOS =
    [
        new Todo(1, 1, 'delectus aut autem', false),
        new Todo(2, 2, 'quis ut nam facilis et officia qui', false),
        new Todo(3, 3, 'fugiat veniam minus', true)
    ];
