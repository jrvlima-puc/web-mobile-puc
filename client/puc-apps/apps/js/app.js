$(function() {

  $.ajax({

    url: "/api/users",

    success: function( result ) {

      var source   = $("#list-users-template").html(),
          template = Handlebars.compile(source),
          users,
          html;

      context = { users: result };

      html    = template(context);

      $("#content").append(html);


    }
  });

});
