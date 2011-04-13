
function count(sequence){
  var fq = {};

  for(var i=0, max = sequence.length; i<max; i++){
    var elem = sequence[i];

    if ( fq[elem] === undefined ) { 
      fq[elem] = 0 
    } ;
    fq[elem] += 1 ;
  }
  return fq;
}

onmessage = function(e){

  var data = JSON.parse(e.data),
      tally = count(data);

  self.postMessage(tally);

  self.close(); 

}
