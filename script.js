$(document).ready(function() {

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

    // Navbar JSON data
    var navContext = {"PageType":"Navbar","PageTitle":"Navbar","PageStatus":"Visible","PageDescription":"This is the navigation bar","PageSections":[{"SectionStatus":"Visible","SectionType":"Navbar","SectionOrder":"0","SectionTitle":"","SectionSubtitle":"","Subsections":[{"SubsectionStatus":"Visible","SubsectionType":"Navbar Main","SubsectionOrder":"1","SubsectionItems":[{"ItemName":"Interactive Media","ItemLink":"/","ItemImageLink":"","ItemStyle":"Main","ItemType":"Internal"}]},{"SubsectionStatus":"Visible","SubsectionType":"Navbar Links","SubsectionOrder":"2","SubsectionItems":[{"ItemName":"Home","ItemLink":"/","ItemImageLink":"","ItemStyle":"Link","ItemType":"Internal"},{"ItemName":"People","ItemLink":"/people/index.html","ItemImageLink":"","ItemStyle":"Link","ItemType":"Internal"},{"ItemName":"Resources","ItemLink":"/resources/index.html","ItemImageLink":"","ItemStyle":"Link","ItemType":"Internal"},{"ItemName":"Gallery","ItemLink":"/gallery/index.html","ItemImageLink":"","ItemStyle":"Link","ItemType":"Internal"}]},{"SubsectionStatus":"Visible","SubsectionType":"Navbar Logo","SubsectionOrder":"3","SubsectionItems":[{"ItemName":"","ItemLink":"https://nyuad.nyu.edu/en/","ItemImageLink":"https://drive.google.com/uc?export=view&id=1wh3jfLKWBXqountIZ7cPLH2E7H_p3VAL","ItemStyle":"Image","ItemType":"External"}]},{"SubsectionStatus":"Visible","SubsectionType":"Navbar Toggle","SubsectionOrder":"4","SubsectionItems":[{"ItemName":"","ItemLink":"","ItemImageLink":"https://drive.google.com/uc?export=view&id=1DL754ShflkKiOVL8nUyldB6Y8f2YkGsE","ItemStyle":"Image","ItemType":"n/a"}]}]}]}

    // Footer JSON data
    var footerContext = {"PageType":"Footer","PageTitle":"Footer","PageStatus":"Visible","PageDescription":"This is the footer","PageSections":[{"SectionStatus":"Visible","SectionType":"Footer","SectionOrder":"","SectionTitle":"","SectionSubtitle":"","Subsections":[{"SubsectionStatus":"Visible","SubsectionType":"Footer Main","SubsectionOrder":"1","SubsectionItems":[{"ItemName":"Interactive Media","ItemLink":"/","ItemImageLink":"","ItemStyle":"Main","ItemType":"Internal"},{"ItemName":"","ItemLink":"https://nyuad.nyu.edu/en/","ItemImageLink":"https://drive.google.com/uc?export=view&id=13OqBP13aUlEhIj0F_osBJZVNacWC1WQy","ItemStyle":"Image","ItemType":"External"},{"ItemName":"","ItemLink":"https://www.instagram.com/im_nyuad/","ItemImageLink":"https://drive.google.com/uc?export=view&id=1lNaJUtHHt60-nLGc4fmkpTcihIM9efIk","ItemStyle":"Social","ItemType":"External"}]},{"SubsectionStatus":"Visible","SubsectionType":"Footer Links","SubsectionOrder":"2","SubsectionItems":[{"ItemName":"Home","ItemLink":"/index.html","ItemImageLink":"","ItemStyle":"Link","ItemType":"Internal"},{"ItemName":"People","ItemLink":"/people/index.html","ItemImageLink":"","ItemStyle":"Link","ItemType":"Internal"},{"ItemName":"Resources","ItemLink":"/resources/index.html","ItemImageLink":"","ItemStyle":"Link","ItemType":"Internal"},{"ItemName":"Gallery","ItemLink":"/gallery/index.html","ItemImageLink":"","ItemStyle":"Link","ItemType":"Internal"}]},{"SubsectionStatus":"Visible","SubsectionType":"Footer Links","SubsectionOrder":"3","SubsectionItems":[{"ItemName":"Program Policies","ItemLink":"https://docs.google.com/forms/d/e/1FAIpQLSet-uA9AvNQ-3AM0-jwxDk0jW8m9s9qm0L4cQbR3eGaw7cAhw/viewform","ItemImageLink":"","ItemStyle":"Link","ItemType":"External"},{"ItemName":"Request Room Access","ItemLink":"https://goo.gl/forms/p4wXYuga8LBDMOZ92","ItemImageLink":"","ItemStyle":"Link","ItemType":"External"},{"ItemName":"Subscribe to Updates","ItemLink":"https://docs.google.com/forms/d/e/1FAIpQLScFC9I9xPLBowQq1N06vHFl4JcZjzuXV1nCINA1MbMCaMp5fw/viewform?c=0&w=1","ItemImageLink":"","ItemStyle":"Link","ItemType":"External"}]}]}]}

    console.log("Current page: " + currentPage);
    //USE SCRIPT TO GET CLASS OF BODY!!!

    //Page JSON data
    if (currentPage == "Home"){
        var linkIndex = 0;
        var context = {}
    } else if (currentPage == "People"){
        var linkIndex = 1;
        var context ={}
    } else if (currentPage == "Resources"){
        var linkIndex = 2;
        var context = {}
    } else if (currentPage == "Gallery"){
        var linkIndex = 3;
        var context = {}
    } else if (currentPage == "Error"){
        var linkIndex = 4;
        var context = {}
    }

    //combining all JSON into one
    var finalJSON = [].concat(navContext, context, footerContext);
    var wrapper  = {objects: finalJSON};

    //getting the HTML after passing the context into the template
    var html = template(wrapper);

    //Insert the HTML code directly into the body
    $(document.body).append(html);

    //initializing horizontical
    horizontical.init();

    //coloring navbar link
    document.body.className = context.PageTitle;

    //Navbar mobile overlay toggle
    (function($){
        $('.Toggle .Image').click(function(e){
            e.preventDefault();
            $('.Links').toggleClass('active');
            $('nav').toggleClass('active');
            $('.Main').toggleClass('active');
            $('.Toggle').toggleClass('active');
        })
    })(jQuery);

});