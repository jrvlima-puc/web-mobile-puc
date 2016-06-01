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
            $("#add-user").on('click', this.renderCreateUser());
            $("#delete-user").on('click', this.deleteUser());
            $("#show-user").on('click', this.showUser());
        };

        this.makeAjaxRequest('GET', render, error);
    };


    /**
     * Implementar método para mostrar um usuário
     */
    CrudUser.prototype.renderUser = function() {

    };

    /**
     * Implementar método para renderizar form
     */
    CrudUser.prototype.renderCreateUser = function() {

    };

    /**
     * Implementar método para salvar um usuário, action do button submit
     */
    CrudUser.prototype.saveUser = function() {

    };

    /**
     * Implementar método para remover um usuário, action do link delete
     */
    CrudUser.prototype.deleteUser = function() {

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
    CrudUser.prototype.makeAjaxRequest = function(method, render, error, params) {
        $.ajax({
            url: "/api/users" + (params? ("/" + params): ""),
            method: method,
            success: function(data) {
                render(data);
            },
            error: function(data) {
                error(data);
            }
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

});
