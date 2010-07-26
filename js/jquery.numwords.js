// returns the number of words in a jQuery input field or textarea.
// usage: $('textarea#foo').numwords() => 10 @@TODO more docs
(function($) {

  $.fn.numwords = function(options){

   var options = $.extend($.fn.numwords.defaults, options);
  
    return this.each(function(){
      $(this).bind('change keyup', function(){
        var count = $.fn.numwords.countwords($(this).val());
        $(options.target).html(count);
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

  $.fn.numwords.defaults = {
     target: 'h1'
   };


})(jQuery)


