---
---

function toggleState(state){
  if(state === "none") {
    return "inline-flex";
  }
  if(state == "inline-flex"){
    return "none";
  }
}

$(document).ready(function(){
  $(".recipe-ingredient-substitutions").css("display","none");

  $(".recipe-ingredient-dangers").on("click", function() {
    target = $(this).siblings(".recipe-ingredient-substitutions");
    state = target.css("display");
    state = toggleState(state);
    target.css("display",state);
  })
})
