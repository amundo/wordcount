// returns the number of words in a jQuery input field or textarea.
// usage: $('textarea#foo').numwords() => 10 @@TODO more docs
(function($) {

  $.fn.numwords = function(){
  
    return this.each(function(){
      var count = $.fn.numwords.countwords($(this).val())

      $(this).bind('keyup change', function(){
        $('h1').html(count);
      });

    });
  };
  
  $.fn.numwords.tokenize = function(text){
    var text = $.trim(text);
    return text.split(/\s+/);
  };
  
  $.fn.numwords.countwords = function(text) { 
    return $.fn.numwords.tokenize(text).length ;
  };

})(jQuery)


