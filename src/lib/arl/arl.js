const crypto = require('crypto')
const fs = require('fs')

function toARL(xt) {
    if (!(xt instanceof Object)) throw Error
    if (!xt) throw Error
    /** Properties:
     * xt.namespace — Session ID of DNT and IP
     * xt.port — TCP ports to listen to
     * xt.filehash — SHA256 hash of the file
    ***/

    var opts = []
    
    this.namespace
    this.port = new portPicker(Math.floor(Math.random() * Math.floor(20)))
    this.filehash = new cryphas(xt, 'sha256')
    
    function cryphas(file, method) {
        const hash = crypto.createHash(method)

        const raw = fs.createReadStream(file)
        raw.on('readable', () => {
            const data = raw.read()
            if (data) hash.update(data)

            else { fin = hash.digest('hex') }
            return fin
        })
    }

    function portPicker(value) {
        const ports = [1770, 1771, 1773, 1794, 1797, 1839, 1840, 
        1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849,
        2351, 2352, 2353, 2354, 2355]

        return ports[value]
    }

    opts.push('arl:')
    

}

module.exports = toARL()