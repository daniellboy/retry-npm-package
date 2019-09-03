const axios = require('axios')
const moment = require('moment');


exports.printMsg = function () {
    console.log("This is a message from the demo package");
}

exports.CommonFunction = {
    addHourToDatetime: function (datetime, addition) {
        var real_date = moment(datetime).add(addition, 'h').format('YYYY-MM-DD HH:mm:ss')
        return (real_date.toString())
    }
}

exports.ApiFunction = {

    getAPIFunction: function (path, header) {
        return axios({
            method: 'GET',
            url: path,
            headers: header,
        })
            .then(({ status, data: { data } }) => { return { status, data } })
            .catch(({ response: { status, statusText, data } }) => { return { status, statusText, data } })
    },

    postApiFunction: function (path, data, header) {
        return axios({
            method: 'POST',
            url: path,
            headers: header,
            data: data
        })
            .then(({ status, data: { data } }) => { return { status, data } })
            .catch(({ response: { status, statusText, data } }) => { return { status, statusText, data } })
    },

    putApiFunction: function (path, data, header) {
        return axios({
            method: 'PUT',
            url: path,
            headers: header,
            data: data
        })
            .then(({ status, data: { data } }) => { return { status, data } })
            .catch(({ response: { status, statusText, data } }) => { return { status, statusText, data } })
    }
}


