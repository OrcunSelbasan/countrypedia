// Fetch data
const getAllCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return data;
};

// Store fetched data
let countryData = [];

getAllCountries()
  .then((data) => (countryData = data))
  .catch((e) => console.log(e.message));

// Find Country
const findCountry = (val) => {
    return countryData.filter(country => {
        if (country.name.common === val) {
            return country;
        }
    })
}

// Random country
let chosenCountry;

const applyRandom = () => {
  const randomCountry =
    document.querySelectorAll("option")[Math.floor(Math.random() * 244)].value;

  document.querySelector("button").innerText = `Learn about ${randomCountry}`;
  
  chosenCountry = findCountry(randomCountry);

  return randomCountry;
};

// Choose country 

document.querySelector('select').addEventListener('change', (e) => {
    document.querySelector('button').innerText = `Learn about ${e.target.value}`
    chosenCountry = findCountry(e.target.value)
})

document.querySelector('#search').addEventListener('click', (e) => {
    if (document.querySelector('#search').innerText === "Learn about ...") {
        e.preventDefault()
        alert("Please choose random or select from the list.")
    }else {
        localStorage.setItem('storedData', JSON.stringify(chosenCountry))
        console.log(chosenCountry);
    }
})