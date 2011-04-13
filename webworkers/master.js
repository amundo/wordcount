$(document).ready(function(){

  $('#crunch').click(calculate);

  function calculate(){

    $('.text').each(function(i){

      var words = $.trim( $(this).html() ).split(/[\n ]+/) ;

      var worker = new Worker('counter.js');

      worker.postMessage( JSON.stringify(words) );

      worker.addEventListener('message', function(e) {
        $.each(e.data, function(word, count){
          $('#counts tbody').append('<tr><td>'+i+': '+count+'</td><td>' + word + '</td></tr>');
        });
      }, false);

    })
  }

})
