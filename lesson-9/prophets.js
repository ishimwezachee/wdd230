const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });


function displayProphets(prophet){
    // create elements to add to the document 
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('P');

   h2.textContent = `${prophet.name} ${prophet.lastname};`
   portrait.setAttribute('src', prophet.imageurl);
  //  portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
   portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${suffix(prophet.order)} Latter-day President`);
   portrait.setAttribute('loading', 'lazy');
   p1.textContent = `Date of Birth: ${prophet.birthdate}`;
   p2.textContent = `Place of Birth: ${prophet.birthplace}`;



     
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // Add two other component 
    card.appendChild(p1);
    card.appendChild(p2); 
    card.appendChild(portrait);
    // append card to cards
    document.querySelector('div.cards').appendChild(card);

}

// return right suffix for a date; 
const suffix = (num)=>{
    let date = ''
    switch(num){
        case 1:
          date=`${num}st`;
          break;
        case 2:
            date = `${num}nd`;
            break;
        case 3:
            date = `${num}rd`;
            break;
        default:
            date = `${num}th`;
    }
    return date;
}

