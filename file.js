const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

 let i = 0;

// refused.textContent += ;
// admitted.textContent += ;

do {
    for (i = 0;)
    if(people[i] === 'Phil' || people[i] === 'Lola'){
        refused.textContent += people[i] + ',';
    } else {
        admitted.textContent += people[i] + ',';
    }



    i++;
} while(i < people.length);
