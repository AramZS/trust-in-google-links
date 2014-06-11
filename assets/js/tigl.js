jQuery(window).load(function() {
    jQuery('#poststuff').on('mousedown', '.mce-i-link', function(evt){
        var term = "";
        if (window.getSelection){
            var iframe = document.getElementById('content_ifr');
            var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
            var innerSelection = innerDoc.getSelection();
            term = innerSelection.toString();
        } else if (document.selection && document.selection.type != "Control") {
            term = document.selection.createRange().text;   
        }
        var safeTerm = encodeURIComponent(term); 
        var googleLucky = 'http://www.google.com/search?h1=en&q='+safeTerm+'&btnI=1';
        jQuery('#wp-link-backdrop').prepend('<h1 id="keymaster" style="color:white;font-weight: bolder;width: 580px;height: 100px;margin: 7px auto;">Standby for Autolink. Are you the gatekeeper?</h1>');
        jQuery.post(ajaxurl, {
			action: 'get_lucky_with_google',
			google_lucky_url: googleLucky
		},
		function(response) {
			var firstLink = jQuery(response).find("response_data").text();
            jQuery('#link-options #url-field').val(firstLink);
            jQuery('#link-options #link-title-field').val(term);
            jQuery('#keymaster').remove();
            jQuery('#link-target-checkbox').prop('checked', true);
			//jQuery(".nominate-result-"+itemID).html(response);
			//alert(response);
			//jQuery("#test-div1").append(data);
		});          
        
        
        
    });

    jQuery('#poststuff').on('mousedown', '.mce_link', function(evt){
        var term = "";
        if (window.getSelection){
            var iframe = document.getElementById('content_ifr');
            var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
            var innerSelection = innerDoc.getSelection();
            term = innerSelection.toString();
        } else if (document.selection && document.selection.type != "Control") {
            term = document.selection.createRange().text;   
        }
        var safeTerm = encodeURIComponent(term); 
        var googleLucky = 'http://www.google.com/search?h1=en&q='+safeTerm+'&btnI=1';
        jQuery('#wp-link-backdrop').prepend('<h1 id="keymaster" style="color:white;font-weight: bolder;width: 580px;height: 100px;margin: 7px auto;">Standby for Autolink. Are you the gatekeeper?</h1>');
        jQuery.post(ajaxurl, {
			action: 'get_lucky_with_google',
			google_lucky_url: googleLucky
		},
		function(response) {
			var firstLink = jQuery(response).find("response_data").text();
            jQuery('#link-options #url-field').val(firstLink);
            jQuery('#link-options #link-title-field').val(term);
            jQuery('#keymaster').remove();
            jQuery('#link-target-checkbox').prop('checked', true);
			//jQuery(".nominate-result-"+itemID).html(response);
			//alert(response);
			//jQuery("#test-div1").append(data);
		});          
        
    });    
    
});