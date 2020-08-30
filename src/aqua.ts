export class Game2d {
    public   fps: number;
    public   width: number;
    public   height: number;
    private _isRuning: boolean;
    private _canvas: HTMLElement;
    private _interval: number;
    private _context: CanvasRenderingContext2D;

    public constructor(CanvasID: string) {
        this._canvas   = document.getElementById(CanvasID);
        this.fps       = 30;
        this._isRuning = false;
        this._context  = this._canvas.getContext("2d");
        this.width    = this._context.canvas.width;
        this.height   = this._context.canvas.height;
    }
    public start(update: Function) {
        this._interval = setInterval(update, 1000/this.fps);
        this._isRuning = true;
    }
    public stop() {
        clearInterval(this._interval);
        this._isRuning = false;
    }
    get isRuning(): boolean {
        return this._isRuning;
    }
}