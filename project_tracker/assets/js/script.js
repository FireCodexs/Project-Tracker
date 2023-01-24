//this function will take care of the date and time request
setInterval(
    function()
    {
    $("#currentDay").text(moment().format("MMMM Do YYYY, H:mm:ss"))
})
//this will save into localstorage the string text from the textarea on the left

for(i=0;i<=8;i++){
  if(i<3) {
  $(".container").append(
      `<div class="row">
      <div class="hour col-lg-2">
      ${i+9}AM
      </div>
      <textarea id=${i+9} class="description col-lg-8" data-hour=${i+9}></textarea>
      <button id=${i} class="saveBtn col-lg-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
      <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
      </svg>
      </button>
      </div>`
      )
  } else {
    $(".container").append(
      `<div class="row">
      <div class="hour col-lg-2">
      ${i+9}PM
      </div>
      <textarea id=${i+9} class="description col-lg-8" data-hour=${i+9}></textarea>
      <button id=${i} class="saveBtn col-lg-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
      <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
      </svg>
      </button>
      </div>`
      )
    }
    //this will display the localStorage data into the textarea (AKA keep the text)
window.onload = function() {
  $("#9").text(localStorage.getItem("9"))
  $("#0").on("click", function() {
    localStorage.setItem("9", $("#9").val())
    })

  $("#10").text(localStorage.getItem("10"))
  $("#1").on("click", function() {
    localStorage.setItem("10", $("#10").val())
    })

  $("#11").text(localStorage.getItem("11"))
  $("#2").on("click", function() {
    localStorage.setItem("11", $("#11").val())
    })

  $("#12").text(localStorage.getItem("12"))
  $("#3").on("click", function() {
    localStorage.setItem("12", $("#12").val())
    })

  $("#13").text(localStorage.getItem("13"))
  $("#4").on("click", function() {
    localStorage.setItem("13", $("#13").val())
    })

  $("#14").text(localStorage.getItem("14"))
  $("#5").on("click", function() {
    localStorage.setItem("14", $("#14").val())
    })

  $("#15").text(localStorage.getItem("15"))
  $("#6").on("click", function() {
    localStorage.setItem("15", $("#15").val())
    })

  $("#16").text(localStorage.getItem("16"))
  $("#7").on("click", function() {
    localStorage.setItem("16", $("#16").val())
    })

  $("#17").text(localStorage.getItem("17"))
  $("#8").on("click", function() {
    localStorage.setItem("17", $("#10").val())
    })

}


    //using + sign we transform the string into a integer
    currentTextareaHour = +$("textarea").eq(i).attr("data-hour")
    currentTime = +moment().format("H")
    
  //this if statement will give the color based on what time of the day it is
if(currentTextareaHour === currentTime) {
  $("textarea").eq(i).addClass("present")
} else if(currentTextareaHour < currentTime) {
  $("textarea").eq(i).addClass("past")
} else if(currentTextareaHour > currentTime) {
   $("textarea").eq(i).addClass("future")
}
}

