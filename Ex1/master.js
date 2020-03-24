/*DESCRIZIONE:
Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione della lista in cui il nuovo utente si trova
BONUS: (ma solo se il resto è fatto)
faccio output anche della lista NON ordinata oltre il resto;
output reso più carino e più elaborato, anche con CSS;
come farei senza i metodi che ho trovato per risolvere le richieste dell’EX?

NOTE:
parte dell’EX è proprio cercarsi i metodi che JS mi mete a disposizione per ordinare un array e farmi ritornare la posizione di un dato elemento nell’array;
e in caso del primo bonus, anche come poter ottenere una copia di un array;
come sempre una cartella con solo le richieste base, se faccio bonus, cartella a parte.*/

//Lista cognomi
var surnameList = ["Rossi", "Bianchi", "Smith", "Doe"];

// Richiedi cognome utente
var yourSurname = prompt("Prego inserisca qui il suo cognome");

//Inserisci cognome utente inserito nel prompt nella lista surnameList tramite push().
surnameList.push(yourSurname)

//Controllo aggiunta nome a Lista
console.log(surnameList);
