$(document).ready(function() {

    // Registering Handlebars helper to do conditionals 
    Handlebars.registerHelper('if_eq', function(a, b, opts) {
        if (a == b) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    });

    // Retrieving the template data from the HTML 
    var source = $('#template').html();

    // Compiling the template data into a function
    var template = Handlebars.compile(source);

    // Combining all JSON into one
    var finalJSON = [].concat(Navbar, Page, Footer);
    var wrapper  = {objects: finalJSON};

    // Getting the HTML after passing the context into the template
    var html = template(wrapper);

    // Insert the HTML code directly into the body
    $(document.body).append(html);

    // Initializing horizontical.js (for Slides section)
    horizontical.init();

    // Navbar mobile overlay toggle
    (function($){
        $('.Toggle .Image').click(function(e){
            e.preventDefault();
            $('.Links').toggleClass('active');
            $('nav').toggleClass('active');
            $('.Main').toggleClass('active');
            $('body').toggleClass('active');
        })
    })(jQuery);

    $('.main-carousel').flickity({
        // options
        pageDots: false
      });

});