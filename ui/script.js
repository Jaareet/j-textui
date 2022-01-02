$(function(){
    $(".container").removeClass("container-show").addClass("container-hide").fadeOut(300);
    window.addEventListener("message", function(event){
        let v = event.data;
        if (v.mostrar == true) {
            $(".container").removeClass("container-hide").addClass("container-show").fadeIn(300).html(v.message);
        } else if (v.mostrar == false){
            $(".container").removeClass("container-show").addClass("container-hide").fadeOut(300);
        }
    })
})