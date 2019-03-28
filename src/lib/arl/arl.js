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
    this.port = [1776, 1791, 1865, 1964]
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

    opts.push('arl:')
    

}

module.exports = toARL()