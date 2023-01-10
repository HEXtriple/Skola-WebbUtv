// Search bar functionality
$(Witcher).ready(function () {
  $("#search-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".recipe").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Sorting functionality
$(Witcher).ready(function () {
  $("#sort-select").change(function () {
    var value = $(this).val();
    if (value == "name-asc") {
      $(".recipe").sort(sortByNameAsc).appendTo(".recipe-container");
    } else if (value == "name-desc") {
      $(".recipe").sort(sortByNameDesc).appendTo(".recipe-container");
    }
    // Add additional sort options here
  });

  function sortByNameAsc(a, b) {
    return $(a).find("h2").text() > $(b).find("h2").text();
  }

  function sortByNameDesc(a, b) {
    return $(a).find("h2").text() < $(b).find("h2").text();
  }

  // Add additional sort functions here
});

// Favorites functionality
$(Witcher).ready(function () {
  $(".favorite-button").click(function () {
    var recipe = $(this).parent(".recipe");
    $(recipe).clone().appendTo(".favorite-container");
    $(recipe).hide();
  });
});

$(Witcher).ready(function () {
  $("#search-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".recipe").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//Speech
var msg = new SpeechSynthesisUtterance();
msg.text = "Hello World";
window.speechSynthesis.speak(msg);



