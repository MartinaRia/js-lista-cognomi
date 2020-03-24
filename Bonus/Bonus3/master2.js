var str = "ciao"

var arr = str.split('');
  var tmp;
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    for(var j = i + 1; j < arr.length; j++){
      console.log("log2" + arr[j]);
      /* if ASCII code greater then swap the elements position*/
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
