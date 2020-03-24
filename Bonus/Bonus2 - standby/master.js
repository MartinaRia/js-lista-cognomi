/*DESCRIZIONE:
Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione della lista in cui il nuovo utente si trova

BONUS:
faccio output anche della lista NON ordinata oltre il resto;
output reso più carino e più elaborato, anche con CSS;
come farei senza i metodi che ho trovato per risolvere le richieste dell’EX?

NOTE:
parte dell’EX è proprio cercarsi i metodi che JS mi mete a disposizione per ordinare un array e farmi ritornare la posizione di un dato elemento nell’array;
e in caso del primo bonus, anche come poter ottenere una copia di un array;
come sempre una cartella con solo le richieste base, se faccio bonus, cartella a parte.*/

//BONUS 1: faccio output anche della lista NON ordinata oltre il resto;

//Dichiarazione variabili
var listItemsDivided, contenutoPrecedente;

//Lista cognomi
var surnameList = ["Rossi", "Bianchi", "Smith", "Doe"];
console.log(surnameList); //check

// Richiedi cognome utente
var yourSurname = prompt("Prego inserisca qui il suo cognome");

//Inserisci cognome utente inserito nel prompt nella lista surnameList tramite push().
surnameList.push(yourSurname);
console.log(surnameList); //check

//Duplicazione variabile surnameList per ottenere lista ordinata
var surnameOrderedList = surnameList.slice(0, surnameList.lenght);

//Ordina lista duplicata alfabeticamente e constrolla
surnameOrderedList.sort();
console.log(surnameOrderedList); //check nuova lista ordinata
console.log(surnameList); //check lista originale

//Ciclo per stampa array items lista ordinata
for (var i = 0; i < surnameOrderedList.length; i++) {

  listItemsDivided = surnameOrderedList[i];

  contenutoPrecedente = document.getElementById('a-b_surnameList').innerHTML;

  //Inserisci lista in lista ordinata di html
  document.getElementById('a-b_surnameList').innerHTML = contenutoPrecedente + "<li>" + listItemsDivided + " - posizione nella lista: " + [i] + "</li>" ;
}

//Ciclo per stampa array items lista originale
for (var j = 0; j < surnameList.length; j++) {

  listItemsDivided = surnameList[j];

  contenutoPrecedente = document.getElementById('original_surnameList').innerHTML;

  //Inserisci lista in lista ordinata di html
  document.getElementById('original_surnameList').innerHTML = contenutoPrecedente + "<li>" + listItemsDivided + "</li>" ;
}
