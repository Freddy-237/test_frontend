
let today =new Date();

let date = today.toLocaleDateString('fr-FR',{
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}
);

document.querySelector('#date').innerHTML= date;
console.log(date);