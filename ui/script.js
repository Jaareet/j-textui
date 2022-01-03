var timeleft = 2000 
var waiting = false 

$(function(){
    $(".container").removeClass("container-show").addClass("container-hide").fadeOut(300);
    window.addEventListener("message", function(event){
        let v = event.data;
        if (v.message) {
            $(".container").removeClass("container-hide").addClass("container-show").fadeIn(300).html(v.message); 
            HelpTimer(2000)
        }
    })
})

// maded with love from Patron for you!
HelpTimer = (restore) => {
    if(restore != null){
        timeleft = 2000
    }

    if(!waiting){
        waiting = true 
        setTimeout(function(){ 
            timeleft -= 1000  

            if(timeleft == 0){ 
                $(".container").removeClass("container-show").addClass("container-hide").fadeOut(300);
            }
             
            waiting = false 
            HelpTimer()   
        }, 1000) 
    }
}