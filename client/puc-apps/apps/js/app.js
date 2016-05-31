$(function() {

    var CrudUser = function() {

        },
        crudUser;

    CrudUser.prototype.renderUserList = function() {
        var source = $("#list-users-template").html(),
            template = Handlebars.compile(source),
            html;

        var render = function(data) {
            context = {
                users: data
            };
            html = template(context);
            $("#content").append(html);
        };

        var error = function(data) {
            console.dir(data);
        };

        this.makeAjaxRequest('GET', render, error);
    };

    CrudUser.prototype.renderUser = function() {
        var source = $("#user-template").html(),
            template = Handlebars.compile(source),
            html;

        var render = function(data) {
            context = {
                users: data
            };
            html = template(context);
            $("#content").append(html);
        };

        var error = function(data) {
            console.dir(data);
        };

        this.makeAjaxRequest('GET', render, error);
    };

    CrudUser.prototype.renderCreateUser = function() {
        var source = $("#user-form-template").html(),
            template = Handlebars.compile(source),
            html;

        var render = function(data) {
            context = {
                users: data
            };
            html = template(context);
            $("#content").append(html);
        };

        var error = function(data) {
            console.dir(data);
        };

        this.makeAjaxRequest('GET', render, error);
    };

    CrudUser.prototype.craeteUser = function() {


    };

    CrudUser.prototype.registryEvents = function() {

        $("#add-user").on('click', this.renderCreateUser());
        $("#delete-user").on('click', this.deleteUser());
        $("#show-user").on('click', this.showUser());

    }


    CrudUser.prototype.makeAjaxRequest = function(method, render, error) {
        $.ajax({
            url: "/api/users",
            method: method,
            success: function(data) {
                render(data);
            },
            error: function(data) {
                error(data);
            }
        });
    }

    CrudUser.prototype.init = function() {
        this.renderUserList();
    }

    crudUser = new CrudUser();

    crudUser.init();

});
