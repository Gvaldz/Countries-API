export class Flag{
    #png
    #alt

    constructor(png, alt){
        this.#png = png;
        this.#alt = alt;
    }

    getPng() {
        return this.#png;
    }

    getAlt(){
        return this.#alt;
    }
}
