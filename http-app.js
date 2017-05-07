var request = require("request")

var url = "http://localhost:9060/?url=http://tekno.kompas.com/read/2017/04/17/10400087/pengguna.snapchat.di.india.ramai-ramai.hapus.aplikasi.apa.sebabnya."

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    } else {
        console.log("error");
    }
})