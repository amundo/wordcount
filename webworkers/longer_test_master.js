$(document).ready(function(){


  function dump(obj) { return JSON.stringify(obj,null,2) } 
  
  function subdivide(sequence, CHUNK_MAX){
  
    var chunks = [], chunk = [], offset;
  
    for (var i = 0, max = Math.floor(sequence.length / CHUNK_MAX)+1; i < max; i++){
      offset = i * CHUNK_MAX;
      chunk = sequence.splice(0, CHUNK_MAX); 
      chunks.push(chunk);    
    }
    return chunks;
  }


  function render(counts){
    $('#counts tbody').empty();
    for(var word in counts){ 
      $('#counts tbody').append('<tr><td class=wordCount>'+counts[word]+'</td><td class=countedWord>' + word + '</td></tr>');
    }
  }
  var total = {};

  function calculate(){

   var words = $.trim($('div#text').text()).split(/[\n ]+/),
       chunks = subdivide(words, 100);

console.log(chunks[chunks.length]);

   $.each(chunks, function(i,chunk){
      var countingWorker = new Worker('counter.js');

      countingWorker.postMessage( JSON.stringify(chunk) );

      countingWorker.addEventListener('message', function(e) {
        $.each(e.data, function(word, count){
          if( total[word] === undefined ){ 
            total[word]  = count ;
          } else { 
            total[word] += count ; 
          } 
        });
      }, false);

    })

    render(total);
  }

  $('#crunch').click( calculate );

});


