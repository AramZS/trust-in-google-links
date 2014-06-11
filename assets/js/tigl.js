jQuery(window).load(function() {
    jQuery('#poststuff').on('click', '.mce-i-link', function(evt){
        var term = "";
        if (window.getSelection){
            term = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            term = document.selection.createRange().text;   
        }
        var safeTerm = encodeURIComponent(term); 
        var googleLucky = 'http://www.google.com/search?h1=en&q='+safeTerm+'&btnI=1';
        
        var req = new XMLHttpRequest();
        req.open('GET', googleLucky, false);
        req.send(null);
                
        var firstLink = req.getResponseHeader('Location');
        
    });
});