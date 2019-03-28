const fs = require('fs')

module.exports = dn()

const dn = function (input) {
    fs.access(input, fs.constants.F_OK, (err) => {
        if (err) throw err

        if (input instanceof String) dn = path.basename(input)
        return dn
    })
}