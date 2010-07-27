function depunctuate(text){
  return text;
}

function tokenize(text){
  var text = $.trim(text);
  ///var punctuation = '?.![]
  return text.split(/[ \n\t\[\]\.\\\/]/);
}

function count_words(words){
  var count = {};

  for(var i=0;i<words.length;i++){
    if(words[i] in count){
      count[words[i]] += 1;
    } else {
      count[words[i]] = 1;
    }
  }
  return count;
}

function reverse_word(word){
    return word.split('').reverse().join("");
}

function render_count_table(table, targetSelector){
  $.each(table, function(wd,fq){
    $('<tr><td>' + fq + '</td><td>' + wd + '</td><td>' + reverse_word(wd) + '</td></tr>')
     .appendTo($(targetSelector).find('tbody'))
  })
}

function filterWordsByPattern(words, pattern){
  var selected = [];
  var pattern = new RegExp(pattern);

  $.each(words, function(i, w){
    if(w.match(pattern)){
      selected.push(w)
    }
  })

  return selected;
}

$(function(){

  //$('#text').autogrow();


  function clearTable(targetSelector){
    $(targetSelector + ' tbody').html('');
  }

  $('button#calculate').click(function(){
    var words = [];
    var words = tokenize($('#text').val()); 

    var pattern = $('#pattern').val();
    if(pattern.length > 0){
      words = filterWordsByPattern(words, pattern)
    }

    var word_freq = count_words(words);  
    var targetSelector = '#count';
    clearTable(targetSelector);
    render_count_table(word_freq, targetSelector );
    $(targetSelector).tablesorter();

  })

  $('#export').click(function(){
    $('#count').table2CSV();
  })

  $('#clear').click(function(){
    clearTable('#count');
  })

})

