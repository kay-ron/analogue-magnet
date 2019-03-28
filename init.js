var arl = require('./arl.js')
const fs = require('fs')
const path = require('path')

module.exports = Magnet()
module.exports = fromMagnet()

function Magnet(file) {
    if (!(this instanceof Magnet)) return new Magnet(obj)

    obj = {}

    this.dn = new dn(file)
    this.xl = new xl(file)
    this.xt = new xt(file)

    function dn(input) {
        fs.access(input, fs.constants.F_OK, (err) => {
            if (err) throw err

            if (input instanceof String) obj.dn = path.basename(input)
            return obj.dn
        })
    }
    function xl(input) {
        size = (fs.statSync(input))["size"]
        return size
    }
    function xt() {

    }

    obj = Object.assign({}, obj)

    let result = 'mag:?'
    Object.keys(obj) // Makes array from given properties
        // Makes sure properties are only two bits long
        .filter(key => key.length === 2)
        .forEach((key, i) => {
            const values = Array.isArray(obj[key]) ? obj[key] : [ obj[key] ]
            values.forEach((val, j) => {
                if ((i > 0 || j > 0) && (j === 0)) result += '&'

                if (key === 'dn') val = encodeURIComponent(val).replace(/%20/g, '+')

                else result += `${key}=${val}`
            })
        })

    return result
}

function fromMagnet() {

}