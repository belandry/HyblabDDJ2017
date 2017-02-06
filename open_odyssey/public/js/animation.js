$(window).scroll(function () {
   $('.slide').each(function () {
      console.log('test');
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('text_bleu')
      }
   });
});