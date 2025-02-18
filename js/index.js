
const today =new Date();


const hour = today.toLocaleTimeString('fr-FR',{
    hour: '2-digit',
    minute:'2-digit'
}
)
const date = today.toLocaleDateString('fr-FR',{
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}
);
document.querySelector('#hour').innerHTML= hour;

document.querySelector('#date').innerHTML= date;

