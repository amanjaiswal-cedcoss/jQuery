$(document).ready(function () {
  $months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  $days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  Gseconds = Ghours = Gminutes = Gdat = Gyear = Gmonth = $sec = $min = $hr=  $stopwatchClick=0;
  Gampm = GfullDate=Gday="";
  $count=99;
  function $daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

  function $updateDateTime() {
    var $date = new Date();
    var $hours = $date.getHours();
    var $minutes = $date.getMinutes();
    var $seconds = $date.getSeconds();
    var $dat = $date.getDate();
    var $day = $days[$date.getDay()];
    var $year = $date.getFullYear();
    var $month = $months[$date.getMonth()];
    var $fullDate = $day + " " + $dat + " " + $month + " " + $year;
    var $ampm = "";
    if ($hours < 12) {
      $ampm = "AM";
    } else if($hours==12) {
      $ampm = "PM";
    }
    else{
      $hours -= 12;
      $ampm = "PM";
    }

    if ($hours < 10) {
      $hours = "0" + $hours;
    }
    if ($minutes < 10) {
      $minutes = "0" + $minutes;
    }
    if ($seconds < 10) {
      $seconds = "0" + $seconds;
    }

    $("#date").html($fullDate);
    $("#hour").html($hours);
    $("#minute").html($minutes);
    $("#second").html($seconds);
    $("#ampm").html($ampm);
  }
  $updateDateTime();
  intervalUpdate = window.setInterval($updateDateTime, 1000);

  $("#btnSet").click(function () {
    
    Gseconds = parseInt($("#inpSeconds").val());
    Gminutes = parseInt($("#inpMinutes").val());
    Ghours = parseInt($("#inpHours").val());
    Gdat=parseInt($("#inpDay").val());
    Gmonth=parseInt($("#inpMonth").val());
    Gyear=parseInt($("#inpYear").val());
    countDays=$daysInMonth(Gmonth,Gyear)

    if(Gdat>countDays){
      $("#errorDate").html("This month consists of only "+countDays)
    }
    else{
      if(Gmonth>12){
        $("#errorDate").html("Month cannot exceed 12")
      }
      else{
        console.log(Gdat + " " + Gmonth + " " + Gyear)
        newDate=new Date(Gmonth+"/"+Gdat+"/"+Gyear)
        console.log(newDate);
        Gday=$days[newDate.getDay()];
        GfullDate =  Gday+ " " + Gdat + " " + Gmonth + " " + Gyear;
        $("#date").html(GfullDate);
        console.log("fulldate--",GfullDate)
     
    if(Ghours>12 || Gminutes>59 ||Gseconds>59){
       $("#errorTime").html("Enter a valid time")
    }
    else if(isNaN(Ghours) || isNaN(Gminutes) || isNaN(Gseconds)){
      $("#errorTime").html("Any field cannot be empty")
    }
    else{
      $("#error").html("");
      clearInterval(intervalUpdate);
    Gampm = $("#selAMPM :selected").text();
    $("#minute").html(Gminutes);
      $("#second").html(Gseconds);
      $("#hour").html(Ghours);
      $("#ampm").html(Gampm);
    $("#inpSeconds").val("");
    $("#inpMinutes").val("");
    $("#inpHours").val("");
    intervalAfterSet = window.setInterval($updateAfterSet, 1000);
    }

  }
}

  });

  function $updateAfterSet() {
    Gseconds++;
    if (Gseconds < 60) {
      $("#minute").html(Gminutes);
      $("#second").html(Gseconds);
      $("#hour").html(Ghours);
      $("#ampm").html(Gampm);
      console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
    } else if (Gseconds == 60) {
      console.log("seconds exceeded");
      Gseconds = 00;
      Gminutes++;

      if (Gminutes < 60) {
        $("#minute").html(Gminutes);
        $("#second").html(Gseconds);
        $("#hour").html(Ghours);
        $("#ampm").html(Gampm);
        console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
      } else if (Gminutes == 60) {
        console.log("minutes exceeded");
        Ghours++;
        Gminutes = 00;
        
        if(Gampm=="AM"){
          if(Ghours<12){
            console.log("hours<12 and Am")
            $("#minute").html(Gminutes);
            $("#second").html(Gseconds);
            $("#hour").html(Ghours);
            $("#ampm").html(Gampm);
            console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
          }
          else if(Ghours==12){
            console.log("hours=12 and Am")
            Gampm="PM"
            $("#minute").html(Gminutes);
            $("#second").html(Gseconds);
            $("#hour").html(Ghours);
            $("#ampm").html(Gampm);
            console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
          }
          else if(Ghours>12){
            console.log("hours>12 and Am")
            Ghours=1;
            Gampm="PM"
            $("#minute").html(Gminutes);
            $("#second").html(Gseconds);
            $("#hour").html(Ghours);
            $("#ampm").html(Gampm);
            console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
          }
        }
        else if(Gampm=="PM"){
          if(Ghours<12){
            console.log("hours<12 and pm")
            $("#minute").html(Gminutes);
            $("#second").html(Gseconds);
            $("#hour").html(Ghours);
            $("#ampm").html(Gampm);
            console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
          }
          else if(Ghours==12){
            console.log("hours=12 and pm")
            if(Gdat<$daysInMonth(Gmonth,Gyear)){

              Gdat++;
             }
             else if(Gdat==$daysInMonth(Gmonth,Gyear)){
              if(Gmonth<12){
              Gmonth++;
              Gdat=1;
               newDate=new Date(Gmonth+"/"+Gdat+"/"+Gyear)
               console.log(newDate)
               Gday=$days[newDate.getDay()];
               GfullDate =  Gday+ " " + Gdat + " " + Gmonth + " " + Gyear;
               $("#date").html(GfullDate);
               console.log("fulldate--",GfullDate)
              }
              else if(Gmonth==12){
                Gdat=1;
                Gmonth=1;
                Gyear++;
                newDate=new Date(Gmonth+"/"+Gdat+"/"+Gyear)
                console.log(newDate)
                console.log(newDate.getDay())
                Gday=$days[newDate.getDay()];
                GfullDate =  Gday+ " " + Gdat + " " + Gmonth + " " + Gyear;
                $("#date").html(GfullDate);
                console.log("fulldate--",GfullDate)
              }
              }
            Gampm="AM"
            $("#minute").html(Gminutes);
            $("#second").html(Gseconds);
            $("#hour").html(Ghours);
            $("#ampm").html(Gampm);
            console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
          }

          else if(Ghours>12){
            console.log("hours>12 and pm")
            Ghours=1;
            Gampm="AM"
            $("#minute").html(Gminutes);
            $("#second").html(Gseconds);
            $("#hour").html(Ghours);
            $("#ampm").html(Gampm);
            console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
          }

        }
      }
    }
  }

$("#btnStopwatch").click(function(){
  $stopwatchClick++;
  if($stopwatchClick%2!=0){
    $("#btnStopwatch").text("Stop");
    intervalStopwatch=setInterval($updateStopwatch,10);
   
  }
  else{
    $("#btnStopwatch").text("Start");
    clearInterval(intervalStopwatch)
  }

})
function $updateStopwatch(){
 

    if ($count < 99) {
      $count++;
  }
  else {
      $count = 0;
      if ($sec < 59) {
          $sec++;
      } else {
          $sec = 0;
          if ($min < 59) {
              $min++;
          } else {
              $min = 0;
              if ($hr < 59) {
                  $hr++;
              }
          }
      }
  }
  $("#stopHour").html($hr)
  $("#stopMinute").html($min)
  $("#stopSecond").html($sec)
  $("#stopMilisecond").html($count)
  
}

});
