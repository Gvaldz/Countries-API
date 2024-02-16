export class Name{
    #common
    #official

    constructor(common, official){
        this.#common = common;
        this.#official = official;
    }

    getCommon() {
        return this.#common;
    }

    getOfficial(){
        return this.#official;
    }
}