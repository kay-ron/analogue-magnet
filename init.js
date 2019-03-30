var arl = require('./arl.js')
const fs = require('fs')
const path = require('path')

module.exports = Magnet()
module.exports = fromMagnet()

class Magnet {
    constructor(file) {
    if (!(this instanceof Magnet)) return new Magnet(file)

    if (!file) file = {}

    // Revise this
    if (!file.dn) file.dn = this.dn = new dn(file)
    if (!file.xl) file.xl = this.xl = new xl(this.dn)
    if (!file.xt) file.xt = this.xt = new xt(this.dn)

    obj = Object.assign({}, obj)

    let result = 'iso:?'
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

    dn(input) {
        fs.access(input, fs.constants.F_OK, (err) => {
            if (err) throw err

            if (input instanceof String) obj.dn = path.basename(input)
            return obj.dn
        })
    }
    xl(input) {
        size = (fs.statSync(input))["size"]
        obj.xl = size

        return obj.xl
    }
    xt(input) {

    }
}

class fromMagnet {

}