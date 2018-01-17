export class Quiz {
    private static instance: any;

    // Attributes
    questions: Array<any> = [];

    private constructor () {}

    static getInstance (): Quiz {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new Quiz();
            return this.instance;
        }
    }
}
