apiKey = 'f2f521e33d4560494b111bdef5f1745c';

var mainEl = document.querySelector('main');
var searchEl = document.querySelector('#search-input');
var mainDivEl = document.querySelector('#main-div-element');
var navEl = document.querySelector('nav');
var searchInputEl = document.querySelector('#search-city-input');
var typedCitiesId = document.querySelector('#typed-cities-id');
var selectedLocationP = document.querySelector('#selected-location');
var forecastPlacementEl = document.querySelector('#forecast-placement');

//local storage
var weatherSearches = JSON.parse(localStorage.getItem('Weather')) || [];

for (var i = 0; i < weatherSearches.length; i++) {
    
        var inputSearchEl = document.createElement('button');
        var citySearchValue = inputSearchEl.textContent = weatherSearches[i].city;
    
        typedCitiesId.appendChild(inputSearchEl);
        searchEl.appendChild(typedCitiesId);
        navEl.appendChild(searchEl);

}
