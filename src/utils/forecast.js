const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=151dd466f94d187ff8ca4e2cc1ed79b1&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        const location = body.current.weather_descriptions[0] + '. It is current ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.'

        if (error) {
            callback('Unable to connect to Weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, location)
        }
    })
}

module.exports = forecast