
function count(sequence){
  var fq = {};

  for(var i=0;i<sequence.length;i++){
    var elem = sequence[i];

    if ( fq[elem] === undefined ) { 
      fq[elem] = 0 
    } ;
    fq[elem] += 1 ;
  }
  return fq;
}

self.addEventListener('message', function(e) {

  var data = e.data;

  var tally = count(data);

  self.postMessage(tally);

  self.close(); // Terminates the worker.

}, false);
