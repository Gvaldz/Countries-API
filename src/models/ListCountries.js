export class ListCountries {
    #countries = []

    addCountry(country){
        this.#countries.push(country)
    }

    getCountries() {
        return this.#countries
    }
}