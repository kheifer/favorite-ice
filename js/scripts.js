$(document).ready(function() {
  $("#flavors").submit(function(event) {
    event.preventDefault();
    var flavors = ["first", "second", "third", "fourth"]

    flavors.forEach(function(flavor) {
      alert($("#" + flavor).val());
      var result = $("#" + flavor).val();

      $("#output").show();

      $(".answer").append("<li>"+ result + "</li>");
    });

  });
});
