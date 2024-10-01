    /**@interface CanvasElement Interface pour l'élément Canvas*/

export interface CanvasElement extends HTMLCanvasElement{
    getContext("2d")?: CanvasRenderingContext2D;
}