var url = require('url');

module.exports = async function (context) {
    var url_parts = url.parse(context.request.url, true);
    var query = url_parts.query;
    var n1 = parseInt(query.number1);
    var n2 = parseInt(query.number2);
    var result = { "result": n1 + n2 };
    return {
        status: 200,
        body: result
    }
}

