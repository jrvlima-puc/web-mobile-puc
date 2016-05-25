$(function() {

  $.ajax({
    url: "/api/users",

    success: function( result ) {
      var source   = $("#list-users-template").html(),
          template = Handlebars.compile(source),
          html;

      html    = template(JSON.parse(result));
      console.dir(result);


      $("#content").append(html);


    }
  });

});
