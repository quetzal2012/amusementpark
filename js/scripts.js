var height = parseInt(prompt("How tall are you in inches?"));

$(document).ready(function() {
  if (height >= 60) {
    $(".ridesover").show();
  } else {
    $(".ridesunder").show();
  }
});
