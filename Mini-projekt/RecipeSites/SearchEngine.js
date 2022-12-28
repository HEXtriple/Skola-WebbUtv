// Search bar functionality
$(document).ready(function () {
  $("#search-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".recipe").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Sorting functionality
$(document).ready(function () {
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
$(document).ready(function () {
  $(".favorite-button").click(function () {
    var recipe = $(this).parent(".recipe");
    $(recipe).clone().appendTo(".favorite-container");
    $(recipe).hide();
  });
});

$(document).ready(function () {
  $("#search-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".recipe").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
