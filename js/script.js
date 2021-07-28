// 1. Richiesta nome utente
var firstName = prompt('Inserisci il tuo nome :');
// 2. Richiesta cognome utente 
var lastName = prompt('Inserisci il tuo cognome :');
// 3. Richiesta colore preferiot utente 
var colorFav = prompt('Inserisci il tuo colore preferito :');
// 4. Inserimento costante classe
const classBool = '40';
// 5. Componimento password 
var password = firstName + lastName + colorFav + classBool;
// 6. Stampa della password sull'HTML
document.getElementById('password').innerHTML += password;

