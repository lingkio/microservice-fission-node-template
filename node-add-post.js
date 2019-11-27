module.exports = async function (context) {

        const stringBody = JSON.stringify(context.request.body);
        const body = JSON.parse(stringBody);
        const json = body.numbers;
        var n1 = parseInt(JSON.stringify(json[0].number1));
        var n2 = parseInt(JSON.stringify(json[1].number2));
        return {
                status: 200,
                body: "total : " + JSON.stringify(n1 + n2)
        };
}

