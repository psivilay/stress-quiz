$(document).ready(function() {
  $("form#stress-questions").submit(function(event) {
    event.preventDefault();

    $("#warning-results").hide();
    $("#symptom-results").hide();
    $("#coping-results").hide();

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warning = $(this).val();
      $("#warning-results").append(warning + "<br>");
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var health = $(this).val();
      $("#symptom-results").append(health + "<br>");
    });

    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var coping = $(this).val();
      $("#coping-results").append(coping + "<br>");
    });


    $("#warning-results").show();
    $("#symptom-results").show();
    $("#coping-results").show();

  });
});
