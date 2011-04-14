$(document).ready(function(){

  function render(counts){
    $('#counts tbody').empty();
    for(var word in counts){ 
      $('#counts tbody').append('<tr><td>'+counts[word]+'</td><td>' + word + '</td></tr>');
    }
  }

  var total = {};

  function calculate(){


    $('.text').each(function(i){

      var words = $.trim( $(this).html() ).split(/[\n ]+/) ;

      var countingWorker = new Worker('counter.js');

      countingWorker.postMessage( JSON.stringify(words) );

      countingWorker.addEventListener('message', function(e) {
        $.each(e.data, function(word, count){
          if( total[word] === undefined ){ 
            total[word]  = count ;
          } else { 
            total[word] += count ; 
          } 
        });
      }, false);

    });

    render(total);
  }

  $('#crunch').click(calculate);

});


