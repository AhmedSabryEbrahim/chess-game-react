export class GameHistory {
    history: Array<string>;
    whiteHistory: Array<string>;
    blackHistory: Array<string>;
    public constructor(){
      this.history= [];
      this.whiteHistory= [];
      this.blackHistory= [];
    }
    public addStep(step: string, stepNumber: number): void{
        this.history = [...this.history , step];
        if (stepNumber % 2 === 0)
            this.whiteHistory = this.whiteHistory.concat(step);
        else this.blackHistory = this.blackHistory.concat(step);
    }
    public renderWhiteHistory(): Array<any> {
        let lst: any = [];
        if (this.whiteHistory.length > 0)
        lst = this.whiteHistory.map((item: string, key: number) => (
            <li key={key}>{item}</li>
        ));
        return lst;
    }
    public renderBlackHistory(): Array<any> {
        let lst: any = [];
        if (this.blackHistory.length > 0)
        lst = this.blackHistory.map((item: string, key: number) => (
            <li key={key}>{item}</li>
        ));
        return lst;
    }
}