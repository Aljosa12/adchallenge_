const $ = jQuery;

$(document).ready(function () {
  console.log("ready!");
  $("#block-adchallenge-content > h2").append("<hr>");

  // Navigation
  $(".menu-item > a").click(function (event) {
    const text = $(this).text().split(" ").join("");
    let scrollBlock = "";

    $(".menu-item > a").css("border-bottom", "none");
    $(this).css("border-bottom", "solid 2px #0097A7");

    if (text === "News") {
      scrollBlock = "#block-adchallenge-content";
    } else if (text === "Event") {
      scrollBlock = "#challenge-event";
    } else if (text === "About") {
      scrollBlock = "#block-about-me";
    } else if (text === "Home") {
      $("html, body").animate(
        {
          scrollTop: $("#block-top-content-header").offset().top,
        },
        1000
      );
    }
    if (text != "Home") {
      let height = 0;
      if (text === "Event") height = 300;
      $("html, body").animate(
        {
          scrollTop: $(scrollBlock).offset().top - height,
        },
        1000
      );
    }
    // Change site brand text
    $(".site-slogan").each(function () {
      const t = $(this).text();
      const halfIndex = 5;
      let newText = "";
      for (let i = 0; i < t.length; i++) {
        if (i == halfIndex) {
          newText += "<span style='font-weight: 200;'>";
        }
        newText += t[i];
      }
      newText += "</span>";
      $(this).html(newText);
    });
  });

  // read more hover
  $(function () {
    $(".node__links").hover(
      function () {
        console.log($(this).index());
        $(this)
          .next()
          .css({ border: "solid #ff5252", "border-width": "0 3px 3px 0" });
      },
      function () {
        $(".arrow-right").css({
          border: "solid #0097a7",
          "border-width": "0 3px 3px 0",
        });
      }
    );
  });
});
