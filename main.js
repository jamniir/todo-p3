$(function()
{
  $("#lista").keydown(function(evt) { // Functio kun nappia painaa
    if (evt.which == 13) { // Nappi nr. 13 = enter
      var aktiviteetti = $("#lista").val(); // Input kentän arvo aktiviteetti-muuttujaan
      if (aktiviteetti.length < 2) { return false; } // Jos 0-2 kirjainta, mitään ei tapahdu
      var html = "<li><span class='poista'>" + aktiviteetti + "</span></li>"; // Muuttujaan html tehdään listaus missä aktiviteetti mukana
      $(html).insertAfter("#lista"); // Lisätään edellä tehty input-kentän perään
      $("#lista").val(""); // Nollataan arvo
    }
  });

  $(document).on('click', '.poista', function() // Poisto klikkaamalla
    {
      $(this).remove();
    });
});
