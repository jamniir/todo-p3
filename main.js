$(function()
{
  $("#lista").keydown(function(evt) {
    if (evt.which == 13) {
      var aktiviteetti = $("#lista").val();
      if (aktiviteetti.length < 2) { return false; }
      var html = "<li><span class='poista'>" + aktiviteetti + "</span></li>";
      $(html).insertAfter("#lista");
      $("#lista").val("");
    }
  });

  $(document).on('click', '.poista', function()
    {
      $(this).remove();
    });
});
