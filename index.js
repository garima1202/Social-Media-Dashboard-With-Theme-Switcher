   var res=$("input:checkbox").val();
   let exists=res;
   $(".switch").click(function () {
       exists=!exists;
       return false;
   });
  $(".switch").click(function(){
    if(exists){
        // dark
        trans();
        $(".card").removeClass("cardLight");
        $(".container").removeClass("containerLight");
        $("body").removeClass("backg");
        $(".hi").removeClass("cardHLight");
        $(".hi1").removeClass("fLight");
        $(".hi2").removeClass("tFLight");
        $(".card").removeClass("cardLight");
        $(".darkMode").removeClass("lightMode");
        $(".heading").removeClass("headingLight");
        $(".overview").removeClass("overviewLight");
        $(".numbers").removeClass("numberLight");
        $(".numbersInOverview").removeClass("numbersInOverviewLight");
       
        return false;
    } 
    if(!exists){
        // light
        trans();
        $(".card").addClass("cardLight");
        $(".container").addClass("containerLight");
        $("body").addClass("backg");
        $(".hi").addClass("cardHLight");
        $(".hi1").addClass("fLight");
        $(".hi2").addClass("tFLight");
        $(".card").addClass("cardLight");
        $(".darkMode").addClass("lightMode");
        $(".heading").addClass("headingLight");
        $(".overview").addClass("overviewLight");
        $(".numbers").addClass("numberLight");
        $(".numbersInOverview").addClass("numbersInOverviewLight");
       
    }
  });
  let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}