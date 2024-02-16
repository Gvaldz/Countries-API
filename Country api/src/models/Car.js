export class Car{
    #signs = []
    #side

    constructor(signs, side){
        this.#signs = signs
        this.#side = side
    }

    getSigns(){
        return this.#signs
    }

    getSide(){
        return this.#side
    }
}