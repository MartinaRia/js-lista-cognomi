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

//BONUS 3: come farei senza i metodi che ho trovato per risolvere le richieste dell’EX?

//Dichiarazione variabili


//Lista cognomi
var surnameList = ["Rossi", "Bianchi", "Smith", "Doe"];
console.log(surnameList); //check

// Richiedi cognome utente
var yourSurname = prompt("Prego inserisca qui il suo cognome");
var surnameListNew = ["Rossi", "Bianchi", "Smith", "Doe" , yourSurname];
console.log(surnameListNew); //check

//Ordina alfabeticamente e constrolla
surnameList.sort();
console.log(surnameList);


// //Ciclo per stampa array items
// for (var i = 0; i < surnameList.length; i++) {
//
//   listItemsDivided = surnameList[i];
//
//   contenutoPrecedente = document.getElementById('a-b_surnameList').innerHTML;
//
//   //Inserisci lista in lista ordinata di html
//   document.getElementById('a-b_surnameList').innerHTML = contenutoPrecedente + "<li>" + listItemsDivided + " - posizione nella lista: " + [i] + "</li>" ;
// }
