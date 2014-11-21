// Loads page with the given template and data.
var loadPage = function(template) {
	$('#main-container').html('');
  	$('#main-container').html(Handlebars.templates[template]());
  	console.log("LOADED PAGE");
};

$(document).on('click', '#arm_to_mars', function() {
    loadPage('arm_to_mars');
});