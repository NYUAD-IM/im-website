Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

// Retrieve the template data from the HTML 
var source = $('#template').html();

// Compile the template data into a function
var template = Handlebars.compile(source);

var context = {}

console.log(context);

 //getting the HTML after passing the context into the template
var html = template(context);

// Option 1: Insert the HTML code directly into the body
$(document.body).append(html);

//Option 2: Inserting HTML into the page in the specified class/id. 
// var destination = document.querySelector(".page");
// destination.innerHTML = html;