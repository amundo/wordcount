// returns the number of words in a jQuery input field or textarea.
// usage: $('textarea#foo').numwords() => 10 @@TODO more docs
(function($) {

  $.fn.numwords = function(){
  
/*
    var defaults = {
      //target: $(this).before($('<span id="numwords"/>'))
      target: $('h1')
    };
  
    var options = $.extend(defaults, options);

*/
  
    return this.each(function(){
      $this = $(this);
      var count = $.fn.numwords.tokenize($this.val());
      $this.bind('keyup, change', function(){
        $('h1').html(count);
      })
    })

  };
  
  $.fn.numwords.tokenize = function(text){
    var text = $.trim(text);
    return text.split(/\s+/)
  }
  
  $.fn.numwords = function countWords(text) { 
    return $.fn.numwords.tokenize(text).length 
  }

})(jQuery)


