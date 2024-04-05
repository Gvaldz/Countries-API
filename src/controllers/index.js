import { ListCountries } from "../models/ListCountries.js"
import { Country } from "../models/Country.js"
import { Name } from "../models/Name.js"
import { Car } from "../models/Car.js"
import { Flag } from "../models/Flag.js"

let listCountries = new ListCountries(); 

let api = document.getElementById("btn-api")
api.addEventListener("click", function(){
    let url = "https://restcountries.com/v3.1/all"
    fetch(url)
    .then(response => response.json())
    .then (data => {
        data.forEach(element => {
            let country = new Country();
            let name = new Name(element.name.common, element.name.official); 
            country.setName(name); 
            country.setCapital(element.capital);

            let flag = new Flag(element.flags.png, element.flags.alt); 
            country.setFlag(flag); 
            element.altSpellings.forEach(item => {
                country.getAltSpelling().push(item)
            });
            country.setContinent(element.continents);

            let car = new Car(element.car.signs, element.car.side); 
            country.setCar(car); 

            console.log(country)
            listCountries.addCountry(country); 
        });
    });
});

let btnView = document.getElementById("btn-view");
btnView.addEventListener("click", () => {
    let div = document.getElementById("box_dad");
    div.innerHTML = '';

    listCountries.getCountries().forEach(country => {
        let card = document.createElement("div");
        card.classList.add("card");
        
        let name = document.createElement("h2");
        name.textContent =`Nombre: ${country.getName().getCommon()}`;
        card.appendChild(name);

        let subname = document.createElement("h3");
        subname.textContent =`Nombre oficial: ${country.getName().getOfficial()}`;
        card.appendChild(subname);

        let image = document.createElement("img");
        image.src = country.getFlag().getPng();
        image.alt = country.getFlag().getAlt();
        card.appendChild(image);

        let capital = document.createElement("p");
        capital.textContent = `Capital: ${country.getCapital()}`;
        card.appendChild(capital);

        let continent = document.createElement("p");
        continent.textContent = `Continent: ${country.getContinent()}`;
        card.appendChild(continent);

        let spellings = document.createElement("p");
        spellings.textContent = `Spellings: ${country.getAltSpelling()}`;
        card.appendChild(spellings);        

        let car = document.createElement("p");
        car.textContent =`Car signs: ${country.getCar().getSigns()}`;
        card.appendChild(car);

        let car2 = document.createElement("p");
        car2.textContent =`Car side: ${country.getCar().getSide()}`;
        card.appendChild(car2);

        div.appendChild(card);
    });
});

