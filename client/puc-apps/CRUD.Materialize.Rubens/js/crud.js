$(function() {

    var CrudUser = function() {

        },
        crudUser;

    /**
     * @method renderUserList
     *
     * Essse método é responsável por:
     *
     * - selectionar a tag script com o template handlebars, que se encontra em index.html/index-material.html,
     * - compilar o template
     * - declarar o metódo para renderizar o template na template
     * - declarar o metódo para logar possível erro na requisição ajax
     * - chamar o método responsável por requisições ajax
     *
     */
    CrudUser.prototype.renderUserList = function() {
        var source = $("#list-users-template").html(),
            template = Handlebars.compile(source),
            html;

        $("#navTitulo").text("Lista de Usuários");

        /**
         * @callback render
         */
        var render = function(data) {
            context = {
                users: data
            };
            html = template(context);
            $("#content").append(html);
            registryEvents();
        };

        /**
         * @callback error
         */
        var error = function(data) {
            console.dir(data);
        };

        var registryEvents = function() {
            $("#add-user").on('click', this.render_addUser());
            $("#delete-user").on('click', this.deleteUser());
            $("#show-user").on('click', this.showUser());
            $("#edit-user").on('click', this.render_editUser());
        };

        this.makeAjaxRequest('GET', render, error);
    };


    /**
     * Implementar método para mostrar um usuário específico
     */
    CrudUser.prototype.showUser = function(id) {

        var source = $("#modalShow-template").html(),
          template = Handlebars.compile(source),
          html;

      /**
       * @callback render
       */
      var render = function(data) {
          context = {
              _id:  data['_id'],
              name: data['name'],
              email:  data['email'],
              gender:  data['gender']
          };
          //console.dir("cont" + context);
          //console.dir(data);
          html = template(context);
          $("#modalShowContent").append(html);
          registryEvents();
      };

      /**
       * @callback error
       */
      var error = function(data) {
          console.dir(data);
      };

      this.makeAjaxRequest('GET', render, error, id);

      $('#modalShow').openModal();

    };

    /**
     * Implementar método para mostrar um usuário
     */
    CrudUser.prototype.renderUser = function(id) {

    };



    /**
     * Implementar método para editar um usuário
     */
    CrudUser.prototype.render_editUser = function(id) {

        console.log("edit");

        //var source = $("#modalShow-template").html(),
        var source = $("#modalEdit-template").html(),
          template = Handlebars.compile(source),
          html;

        /**
         * @callback render
         */
        var render = function(data) {
            context = {
                _id:  data['_id'],
                name: data['name'],
                email:  data['email'],
                gender:  data['gender']
            };
            //console.dir("cont" + context);
            //console.dir(data);
            html = template(context);
            $("#modalEditContent").append(html);
            registryEvents();
        };

        /**
         * @callback error
         */
        var error = function(data) {
            console.dir(data);
        };

        this.makeAjaxRequest('GET', render, error, id);

        $('#modaledit').openModal();

    };


    /**
     * Implementar método para renderizar form
     */
    CrudUser.prototype.render_addUser = function (id) {

        console.log("edit");

        //var source = $("#modalShow-template").html(),
        var source = $("#modalAdd-template").html(),
          template = Handlebars.compile(source),
          html;

        /**
         * @callback render
         */
        var render = function (data) {
            context = {
                _id: data['_id'],
                name: data['name'],
                email: data['email'],
                gender: data['gender']
            };
            //console.dir("cont" + context);
            //console.dir(data);
            html = template(context);
            $("#modalAddContent").append(html);
            registryEvents();
        };

        /**
         * @callback error
         */
        var error = function (data) {
            console.dir(data);
        };

        this.makeAjaxRequest('GET', render, error, id);

        $('#modaladd').openModal();

    };


    /**
     * Implementar método para salvar um usuário, action do button submit
     */
    CrudUser.prototype.saveUser = function() {

    };

    /**
     * Implementar método para renderizar um usuário a ser excluído
     */
    CrudUser.prototype.renderDeleteUser = function(id) {
      var source = $("#modalDelete-template").html(),
          template = Handlebars.compile(source),
          html;

      /**
       * @callback render
       */
      var render = function(data) {
          context = {
              _id:  data['_id'],
              name: data['name']
          };
          //console.dir("render delete" + context);
          //console.dir(data);
          html = template(context);
          $("#modalDelete").append(html);
          //registryEvents();
      };

      /**
       * @callback error
       */
      var error = function(data) {
          console.dir(data);
      };

      $('#modalDelete').openModal();

      this.makeAjaxRequest('GET', render, error, id);

      /*$("#modalDelete").on("click", "#delete-sim", function(id) {
        this.deleteUser(id);
      });*/

    };

    /**
     * Implementar método para remover um usuário, action do link delete
     */
    CrudUser.prototype.deleteUser = function(id) {
      //console.log("delete");
      $('#modalDelete').closeModal();

      var source = $("#modalWarn-template").html(),
          template = Handlebars.compile(source),
          html;

      /**
       * @callback render
       */
      var render = function(data) {
          context = {
              titulo:   "Informação",
              conteudo: "Usuário excluído com sucesso"
          };
          //console.dir("del sucesso" + context);
          //console.dir(data);
          html = template(context);
          $("#modalWarnContent").append(html);

      };

      /**
       * @callback error
       */
      var error = function(data) {
          context = {
              titulo:   "Informação",
              conteudo: "Falha ao excluir o usuário"
          };
          //console.dir("del erro" + context);
          //console.dir(data);
          html = template(context);
          $("#modalWarnContent").append(html);

      };
      
      $('#modalWarn').openModal();

      this.makeAjaxRequest('DELETE', render, error, id, "");

      $("#content").empty();

      this.renderUserList();

    };


    CrudUser.prototype.addUser = function () {
        //console.log("delete");
        $('#modaladd').closeModal();

        var source = $("#modalAdd-template").html(),
            template = Handlebars.compile(source),
            html;

        var render = function (data) {
            context = {
                _id: data['_id'],
                name: data['name'],
                email: data['email'],
                gender: data['gender']
            };
        };


        /**
         * @callback render
         */
        var render = function (data) {
            context = {
                titulo: "Informação",
                conteudo: "Usuário incluído com sucesso"
            };
 
        };

        /**
         * @callback error
         */
        var error = function (data) {
            context = {
                titulo: "Informação",
                conteudo: "Falha ao incluir o usuário"
            };
 
        };

        dados = JSON.stringify({
            _id:    "",
            gender: $("#add_sexo").val(),
            email:  $("#add_email").val(),
            name:   $("#add_name").val()
        });

        this.makeAjaxRequest('POST', render, error, "", dados);

        $("#content").empty();

        this.renderUserList();
    };


    CrudUser.prototype.editUser = function () {
        //console.log("delete");
        $('#modaledit').closeModal();

        var source = $("#modalAdd-template").html(),
            template = Handlebars.compile(source),
            html;

        var render = function (data) {
            context = {
                _id: data['_id'],
                name: data['name'],
                email: data['email'],
                gender: data['gender']
            };
        };


        /**
         * @callback render
         */
        var render = function (data) {
            context = {
                titulo: "Informação",
                conteudo: "Usuário alterado com sucesso"
            };

        };

        /**
         * @callback error
         */
        var error = function (data) {
            context = {
                titulo: "Informação",
                conteudo: "Falha ao alterar o usuário"
            };

        };

        dados = JSON.stringify({
            id: $("#edit_id").attr("value"),
            gender: $("#edit_sexo").val(),
            email: $("#edit_email").val(),
            name: $("#edit_name").val()
        });

        this.makeAjaxRequest('PUT', render, error, "" , dados);


        $("#content").empty();

        this.renderUserList();
    };





    /**
     * Esse método é utilizado para executar as requisição ajax
     *
     * @param {string} method - envia uma string com o método HTTP - eg: 'GET', 'POST'
     * @param {render} render
     * @param {error} error
     * @param {string} params - Request parameters - eg: /users/9823498273
     *
     */
    CrudUser.prototype.makeAjaxRequest = function(method, render, error, params, bindData) {
        $.ajax({

            type: method,
            url: "/api/users" + (params ? ("/" + params) : ""),
            data: bindData,
            success: function(data) { render(data); },
            contentType: "application/json",
            dataType: 'json'
        });


    }

    /**
     * Esse método é chamado para inicializar a página
     * HOME que no nosso caso é a lista de usuários
     */
    CrudUser.prototype.init = function() {
        this.renderUserList();
    }

    crudUser = new CrudUser();

    crudUser.init();

    $(document).on("click", "#show-user", function() {
      //console.log($(this).attr("data-id"));
      $("#modalShowContent").empty();

      crudUser.showUser($(this).attr("data-id"));
    });

    $(document).on("click", "#delete-user", function() {
      //console.log($(this).attr("data-id"));
      $("#modalDelete").empty();

      crudUser.renderDeleteUser($(this).attr("data-id"));
    });


    $(document).on("click", "#edit-user", function() {
      //console.log($(this).attr("data-id"));
      $("#modalEditContent").empty();
      $('.modal-trigger').leanModal();
      crudUser.render_editUser($(this).attr("data-id"));
    });

    $(document).on("click", "#add-user", function () {
        //console.log($(this).attr("data-id"));
        $("#modalAddContent").empty();
        $('.modal-trigger').leanModal();
        crudUser.render_addUser();
    });


    $(document).on("click", "#saveAdd", function () {
        crudUser.addUser();
    });

    $(document).on("click", "#saveEdit", function () {
        crudUser.editUser();
    });


    $("#modalDelete").on("click", "#delete-sim", function () {
        crudUser.deleteUser($(this).attr("data-id"));
    });



    $(document).on("click", "#modalFechar", function() {
      //console.log("fechar");
      $("#modalDelete").closeModal();
      //console.log("fechar??????");
    });


    

    $('.modal-trigger').leanModal();

});

/*$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
*/
