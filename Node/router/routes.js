'use strict';

module.exports = function (app) {
    var todoList = require('../controller/bukuController');

    app.route('/')
        .get(todoList.index);

    app.route('/book')
        .get(todoList.books);

    app.route('/book/:id')
        .get(todoList.findbyid);

    app.route('/book')
        .post(todoList.createBook);

    app.route('/book/:id')
        .put(todoList.updateBook);

    app.route('/book/:id')
        .delete(todoList.deleteBook);
};