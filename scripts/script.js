// Retrieve the template data from the HTML 
var source = $('#template').html();

// Compile the template data into a function
var template = Handlebars.compile(source);

var context = { 
    
 };

 //getting the HTML after passing the context into the template
var html = template(context);

// Option 1: Insert the HTML code into the page
// $(document.divdiv).append(html);

//Option 2: Inserting HTML into the page
var destination = document.querySelector(".home");
destination.innerHTML = html;