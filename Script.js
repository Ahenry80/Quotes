$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  $("#getMessage").on("click", function() {
    $.getJSON(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&",
      function(input) {
        var quote = input[0].content;
        var author = "- " + input[0].title;
        var reaQuote = quote.replace("<p>", "");
        var realQuote = reaQuote.replace("</p>", "");
        var paste = realQuote + author;
        $(".message").hide().html(quote).fadeIn("slow"); // Creates fade in for dramatic effect
        $(".credit").hide().html(author).fadeIn("slow");
        $(".twitter-share-button")
          .attr("href", "https://twitter.com/intent/tweet?text=" + paste)
          .attr("target", "_blank");
      }
    );
  });
});
