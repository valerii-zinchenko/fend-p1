(function(){
	var navBarBtn = $('.navbar-toggle');
	
	// Automatically collapse the 
	$('#nav-controls a').click(function(){
		if (navBarBtn.css('display') !== 'none') {
			navBarBtn.click();
		}
	});
})();
