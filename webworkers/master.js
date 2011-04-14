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

      var worker = new Worker('counter.js');

      worker.postMessage( JSON.stringify(words) );

      worker.addEventListener('message', function(e) {
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


