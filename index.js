const http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var qs = require('querystring');

const port = 3000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test123!",
    database: "members"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var htmlFile, endFile, cssFile, js_clock, js_limit, js_game, js_click, js_change, js_main;

fs.readFile('./res/soju.css', function(err, data) {
    if (err) throw err;
    cssFile = data;
});

fs.readFile('./res/clock.js', function(err, data) {
    if (err) throw err;
    js_clock = data;
});

fs.readFile('./res/limit.js', function(err, data) {
    if (err) throw err;
    js_limit = data;
});

fs.readFile('./res/game.js', function(err, data) {
    if (err) throw err;
    js_game = data;
});

fs.readFile('./res/change.js', function(err, data) {
    if (err) throw err;
    js_change = data;
});

fs.readFile('./res/main.js', function(err, data) {
    if (err) throw err;
    js_main = data;
});

fs.readFile('./res/index.html', function(err, data) {
    if (err) throw err;
    htmlFile = data;
});

fs.readFile('./res/end.html', function(err, data) {
    if (err) throw err;
    endFile = data;
});

var server = http.createServer((req, res) => {
    // console.log(req.method);
    if (req.method == 'POST') {
        switch (req.url) {
            case '/save': //INSERT
                req.on('data', function(chunk) {
                    var data = qs.parse(chunk.toString());
                    res.writeHeader(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.write('<h1>Saved!!</h1>');
                    res.write('<h3>' + data.form + '</h3>');
                    res.end();

                    var sql = "INSERT INTO user (name, birth, alcohol) VALUES ('" + data.form + "', '" + data.birthday + "', '" + data.limit + "')";
                    con.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("1 record inserted");
                    });
                });
                break;

            case '/check':
                req.on('data', function(chunk) {
                    var data = qs.parse(chunk.toString());
                    var sql = "SELECT * FROM user";
                    var objChecked;
                    var checker = 0;
                    con.query(sql, function(err, result) {
                        if (err) throw err;

                        res.writeHeader(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.write(htmlFile);
                        console.log("data: " + data.form + ", " + data.birthday);
                        result.forEach(object => {
                            if (object.name == data.form && object.birth.toString() == data.birthday.toString()) {
                                objChecked = object;
                                checker = 1;
                            }
                        });
                        if (checker) {
                            console.log('Exist');
                            res.write('<script>isExist(' + objChecked.alcohol + ');</script>');
                            objChecked
                        } else {
                            console.log('Go saving');
                            res.write('<script>isExist(' + data.limit + ');</script>');
                            res.end();

                            var sql = "INSERT INTO user (name, birth, alcohol) VALUES ('" + data.form + "', '" + data.birthday + "', '" + data.limit + "')";
                            con.query(sql, function(err, result) {
                                if (err) throw err;
                                console.log("1 record inserted");
                            });
                        }
                        res.end(endFile);
                    });
                });
                break;
        }
    } else {
        switch (req.url) {
            case '/soju.css':
                res.writeHeader(200, { 'Content-Type': 'text/css' });
                res.write(cssFile);
                res.end();
                break;

            case '/clock.js':
                res.writeHeader(200, { 'Content-Type': 'text/javascript' });
                res.write(js_clock);
                res.end();
                break;

            case '/limit.js':
                res.writeHeader(200, { 'Content-Type': 'text/javascript' });
                res.write(js_limit);
                res.end();
                break;

            case '/game.js':
                res.writeHeader(200, { 'Content-Type': 'text/javascript' });
                res.write(js_game);
                res.end();
                break;

            case '/click.js':
                res.writeHeader(200, { 'Content-Type': 'text/javascript' });
                res.write(js_click);
                res.end();
                break;

            case '/change.js':
                res.writeHeader(200, { 'Content-Type': 'text/javascript' });
                res.write(js_change);
                res.end();
                break;

            case '/main.js':
                res.writeHeader(200, { 'Content-Type': 'text/javascript' });
                res.write(js_main);
                res.end();
                break;

            case '/': //select

                var sql = "SELECT * FROM user";
                con.query(sql, function(err, result) {
                    if (err) throw err;
                    res.writeHeader(200, { 'Content-Type': 'text/html' });
                    res.write(htmlFile);
                    result.forEach(object => {
                        console.log(object.name.toString());
                    });
                    res.end();
                });
                break;

            default:
                res.writeHeader(200, { 'Content-Type': 'text/html' });
                res.write('<h1>404 Not Found</h1> \
							<h3>Error 404: Can not find anything.<br> \
							It caused terrible problem.<br> \
							Please return to main page.</h3>');
                res.end();
        }
    }
});

server.listen(port, () => {
    console.log('Server is running at ' + port);
});