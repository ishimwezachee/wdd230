const requestURL = 'https://ishimwezachee.github.io/wdd230/lesson06/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (business) {
    const business_data = business['data'];
    business_data.forEach(diplayBusiness);
  });

function diplayBusiness(business){
let card = document.createElement('section');
card.setAttribute('class','logoSection')
let logo = document.createElement('img');
logo.setAttribute('class','logoImage')
let p1 = document.createElement('p');
let p2 = document.createElement('P');
const anchor = document.createElement('a');
anchor.setAttribute("href",business.website);
anchor.textContent = business.website;
anchor.setAttribute("class","link");
// set attributes 
logo.setAttribute("src",business.logo);
logo.setAttribute("alt",`logo for ${business.name}`);
logo.setAttribute('loading', 'lazy');
p1.textContent = business.address;
p2.textContent = business.phone;


card.appendChild(logo);
card.appendChild(p1);
card.appendChild(p2);
card.appendChild(anchor); 
cards.appendChild(card);
}
