module.exports = async function (context) {
        const stringBody = JSON.stringify(context.request.body);
        const body = JSON.parse(stringBody);
        var n1 = parseInt(JSON.stringify(body.numbers[0].number));
        var n2 = parseInt(JSON.stringify(body.numbers[1].number));
        var result = { "result": n1 + n2 };
        return {
                status: 200,
                body: result
        }
}