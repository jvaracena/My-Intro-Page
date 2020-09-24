/*
    extensions.js
    
    This contains the functions that support:
    
    (1)  Activates bootstrap Tool Tips and Popovers
  
*/

/* ------------------------------------------------------------------- */
/* (1) Activate the BS components - Tool Tips and Popovers */

$(document).ready(function(){
    //activate tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    //activate popover
    $('[data-toggle="popover"]').popover(); 
});

