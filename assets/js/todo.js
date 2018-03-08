//Check off specific tasks by clicking
function checkTask() {
  $("ul").on("click", "li", function() {
    $(this).toggleClass("done");
  });
}

//Make X buttons remove the corresponding <li> from the html after 400 ms when clicked
function removeTask() {
  $("ul").on("click", "span", function(e) {
    $(this)
      .parent()
      .fadeOut(400, function() {
        $(this).remove();
      });
    e.stopPropagation();
  });
}

checkTask();
removeTask();

//Add event listener to <input> for adding new <li> when hitting "Enter" if its value !===""
$("input[type = 'text']").keypress(function(e) {
  if (e.key === "Enter") {
    //grabbing the new task name
    let taskName = $(this).val();
    $(this).val("");
    //creating a new <li> if the value is not empty
    if (taskName !== "") {
      $("ul").append(
        `<li><span><i class="far fa-trash-alt"></i></span> ${taskName}</li>`
      );
    }
  }
});

//Add event listener to the + icon to show/hide <input>
$("#fa-plus").on("click", function() {
  $("input[type = 'text']").fadeToggle();
});
