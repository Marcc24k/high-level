$(document).ready(function(){
    
   /*HOVER CLASS TRIGGER*/
    
    $("#map-location-clemens").mouseenter(function(){

        // Test       alert("hello!");
       
        
        $("#map-location-clemens").css({
            "color": "red",
        })
        
    });
    
    $("#map-location-clemens").mouseout(function(){

       
        
        $("#map-location-clemens").css({
            "color": "dimgrey",
        })
        
    });
    
    
    
    
    
});