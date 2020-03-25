/*DESCRIZIONE:
Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente ma senza i metodi
*/


//Lista cognomi
var surnameList = ["Rossi", "Bianchi", "Smith", "Doe"];
console.log(surnameList); //check

// Richiedi cognome utente
var yourSurname = prompt("Prego inserisca qui il suo cognome");

//Aggiunta in lista di yourSurname creando nuovo array per non usare push()
var surnameListNew = ["Rossi", "Bianchi", "Smith", "Doe" , yourSurname];
console.log(surnameListNew); //check

//Mettere a paragone ogni item dell'array con quello successivo a se stess in lista
for(var k = 0; k < surnameListNew.length; k++){
  //console.log(surnameListNew); //R-B-S-D-R
  for(var j = k + 1; j < surnameListNew.length; j++){
    //console.log(surnameListNew); //R:BSDR - B:SDR - S:DR - S:R - R

    if(surnameListNew[k] > surnameListNew[j]){ //quando una lettera(R) è più grande di quella dopo(B)...
      //...scambiale di posto facendo:
      var temp = surnameListNew[k]; //temp=R
      surnameListNew[k] = surnameListNew[j]; //R=B
      surnameListNew[j] = temp; // B=temp
      console.log(surnameListNew); //check
    }
  }

}

//Ciclo per stampa array items
for (var i = 0; i < surnameListNew.length; i++) {

  var listItemsDivided = surnameListNew[i];

  var contenutoPrecedente = document.getElementById('a-b_surnameList').innerHTML;

  //Inserisci lista in lista ordinata di html
  document.getElementById('a-b_surnameList').innerHTML = contenutoPrecedente + "<li>" + listItemsDivided + " - posizione nella lista: " + [i] + "</li>" ;
}
