$(document).ready(function() {

    Handlebars.registerHelper('if_eq', function(a, b, opts) {
        if (a == b) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    });

    // Handlebars.registerPartial("navbarPartial",$("#navbar-partial").html());

    // Retrieve the template data from the HTML 
    var source = $('#template').html();
    var navbarSource = $('#navbar-template').html();
    var footerSource = $('#footer-template').html();

    // Compile the template data into a function
    var template = Handlebars.compile(source);
    var navbarTemplate = Handlebars.compile(navbarSource);
    var footerTemplate = Handlebars.compile(footerSource);

    //navbar JSON data
    var navContext = {"PageType":"Navbar","PageTitle":"Navbar","PageStatus":"Visible","PageDescription":"This is the navigation bar","PageSections":[{"SectionStatus":"Visible","SectionType":"Navbar","SectionOrder":"0","SectionTitle":"","SectionSubtitle":"","SectionDescription":"","Subsections":[{"SubsectionStatus":"Visible","SubsectionType":"Navbar Main","SubsectionOrder":"1","SubsectionItems":[{"ItemName":"Interactive Media","ItemLink":"/index.html","ItemImageLink":""}]},{"SubsectionStatus":"Visible","SubsectionType":"Navbar Main","SubsectionOrder":"2","SubsectionItems":[{"ItemName":"NYU Abu Dhabi","ItemLink":"https://nyuad.nyu.edu/en/","ItemImageLink":""}]},{"SubsectionStatus":"Visible","SubsectionType":"Navbar Links","SubsectionOrder":"3","SubsectionItems":[{"ItemName":"Home","ItemLink":"/index","ItemImageLink":""},{"ItemName":"People","ItemLink":"/people","ItemImageLink":""},{"ItemName":"Resources","ItemLink":"/resources","ItemImageLink":""},{"ItemName":"Gallery","ItemLink":"/gallery","ItemImageLink":""}]}]}]}

    var footerContext = {"PageType":"Footer","PageTitle":"Footer","PageStatus":"Visible","PageDescription":"This is the footer","PageSections":[{"SectionStatus":"Visible","SectionType":"Footer","SectionOrder":"","SectionTitle":"","SectionSubtitle":"","SectionDescription":"","Subsections":[{"SubsectionStatus":"Visible","SubsectionType":"Footer Main","SubsectionOrder":"1","SubsectionItems":[{"ItemName":"Interactive Media","ItemLink":"/index.html","ItemImageLink":""}]},{"SubsectionStatus":"Visible","SubsectionType":"Footer Main","SubsectionOrder":"2","SubsectionItems":[{"ItemName":"NYU Abu Dhabi","ItemLink":"https://nyuad.nyu.edu/en/","ItemImageLink":""}]},{"SubsectionStatus":"Visible","SubsectionType":"Footer Social Media","SubsectionOrder":"3","SubsectionItems":[{"ItemName":"","ItemLink":"https://www.instagram.com/im_nyuad/","ItemImageLink":"google-drive-social-media-link1 or dreamhost/socialmedia1.jpg"}]},{"SubsectionStatus":"Visible","SubsectionType":"Footer Links","SubsectionOrder":"4","SubsectionItems":[{"ItemName":"Home","ItemLink":"/index","ItemImageLink":""},{"ItemName":"People","ItemLink":"/people","ItemImageLink":""},{"ItemName":"Resources","ItemLink":"/resources","ItemImageLink":""},{"ItemName":"Gallery","ItemLink":"/gallery","ItemImageLink":""}]},{"SubsectionStatus":"Visible","SubsectionType":"Footer Links","SubsectionOrder":"5","SubsectionItems":[{"ItemName":"Program Policies","ItemLink":"https://docs.google.com/forms/d/e/1FAIpQLSet-uA9AvNQ-3AM0-jwxDk0jW8m9s9qm0L4cQbR3eGaw7cAhw/viewform","ItemImageLink":""},{"ItemName":"Request Room Access","ItemLink":"https://goo.gl/forms/p4wXYuga8LBDMOZ92","ItemImageLink":""},{"ItemName":"Subscribe to Updates","ItemLink":"https://docs.google.com/forms/d/e/1FAIpQLScFC9I9xPLBowQq1N06vHFl4JcZjzuXV1nCINA1MbMCaMp5fw/viewform?c=0&w=1","ItemImageLink":""}]}]}]} 

    console.log("Current page: " + currentPage);

    //page JSON data
    if (currentPage == "Home"){
        var context = {}
    } else if (currentPage == "People"){
        var context = {}
    } else if (currentPage == "Resources"){
        var context = {}
    } else if (currentPage == "Gallery"){
        var context = {}
    } else if (currentPage == "Error"){
        var context = {}
    }
    

    //getting the HTML after passing the context into the template
    var html = template(context);
    var navbarHtml = navbarTemplate(navContext);
    var footerHtml = footerTemplate(footerContext);

    //Insert the HTML code directly into the body
    $(document.body).append(navbarHtml,html,footerHtml);

});