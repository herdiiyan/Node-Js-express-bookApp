'use strict';

var response = require('./../response/response');
var connection = require('./../connection');


exports.books = function (req, res) {
    connection.query('SELECT * FROM buku', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findbyid = function (req, res) {

    var id = req.params.id;

    connection.query('SELECT * FROM buku WHERE id = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows[0], res)
        }
    });
};

exports.createBook = function (req, res) {

    var id = req.body.id;
    var judul = req.body.judul;
    var penerbit = req.body.penerbit;
    var denda = req.body.denda;
    var stok = req.body.stok;

    connection.query('INSERT INTO buku (id, judul, penerbit, denda, stok) values (?,?,?,?,?)',
        [id, judul, penerbit, denda, stok],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Succes!", res)
            }
        });
};

exports.updateBook = function (req, res) {

    var id = req.params.id;
    var judul = req.body.judul;
    var penerbit = req.body.penerbit;
    var denda = req.body.denda;
    var stok = req.body.stok;

    connection.query('UPDATE buku SET judul = ?, penerbit = ?, denda = ?, stok = ? WHERE id = ?',
        [judul, penerbit, denda, stok, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(req.body, res)
            }
        });
};

exports.deleteBook = function (req, res) {

    var id = req.params.id;

    connection.query('DELETE FROM buku WHERE id = ?',
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Success!", res)
            }
        });
};

exports.index = function (req, res) {
    response.ok("Wellcome to my project!", res)
};