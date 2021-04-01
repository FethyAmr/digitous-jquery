$("button").click(function(){
    $("#bg").animate({
        marginLeft: '100px'

    }, 1000, function() { 
      console.log("animation terminée !");
    });
});