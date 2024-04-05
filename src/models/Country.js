export class Country {
    #name
    #capital = []
    #flag
    #altSpelling = []
    #continent = []
    #postalCode
    #car
    
    setName(name) { this.#name = name }
    getName() { return this.#name }

    setCapital(capital) { this.#capital = capital }
    getCapital() { return this.#capital }
    
    setFlag(flag) { this.#flag = flag }
    getFlag() { return this.#flag }

    setAltSpelling(altSpelling) { this.#altSpelling = altSpelling }
    getAltSpelling() { return this.#altSpelling }

    setContinent(continent) { this.#continent = continent }
    getContinent() { return this.#continent }

    setPostalCode(postalCode) { this.#postalCode = postalCode }
    getPostalCode() { return this.#postalCode }

    setCar(car) { this.#car = car }
    getCar() { return this.#car }

}