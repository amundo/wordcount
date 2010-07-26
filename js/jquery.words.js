(function($) {
  $.fn.words = function(options) {

 var opts = $.extend({}, $.fn.words.defaults, options);

 return this.each(function() {
     $this = $(this);
     var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

     var markup = $this.text();

     /*
        handle paragraph breaking here
        */

     var tokens = $.fn.words.tokenize(markup);

     html = markup.replace(/(\w+)/g, '<span class="word_$1">$1</span>')

     html = '<p>' + html.split(/\n+/g).join('</p>\n<p>') + '</p>'

     //console.log(html);

     $this.html(html);

    });
  };

  $.fn.words.tokenize = function(text) {
    return text.split(/([ \W])/)
  }

  $.fn.wrapInSpan = function(word){
    return '<span>' + word + '</span>';
  }

  $.fn.words.defaults = {
  };

})(jQuery);
