const fs = require('fs')
const path = require('path')

module.exports = dn()

const dn = function (input) {
    if (input !== null && typeof String) new isOneFile(input)
    if (input !== null && typeof Object) new isMultipleFiles(input)

    const isOneFile = function (data) {
        let cp = Array.from(data).forEach(function(val, i) {
            Number(i)
            
            switch(val) {
                case val !== `/\/`:
                    i++
                break
                case val === `/\/`:
                    val = `\\`
                break
            }
        })

        data = cp.join('')

        fs.access(data, fs.constants.F_OK, (err) => {
            if (err) throw err
    
            dn = path.basename(input)
            return dn
        })
    }

    const isMultipleFiles = function (data) {
        if (data instanceof Object) write(
            ream(data, (Object.values(data)).length)
        )

        const ream = (dataobj, pi) => {
            new Number(pi)
            
            let {i = [], k = 0}

            while(i.length < pi.length) {
                parameter = dataobj.values()

                i.push(parameter[k])
                k++
            }

            return i
        }

        const write = (array) => {
            if (array instanceof Array) {
                let k = 0

                // Accessing each filename string in array
                array.forEach(function(val) {
                    // Accessing individual characters of filename
                    let cp = Array.from(val).forEach((key, l) => {
                        Number(l)
                        
                        switch(key) {
                            case key !== `/\/`:
                                l++
                            break
                            case key === `/\/`:
                                key = `\\`
                            break
                        }
                    })

                array[k] = cp.join('')
                k++

                })

                if (k === array.length) k = 0 

                array.forEach((val) => {
                    fs.access(val, fs.constants.F_OK, (err) => {
                        if (err) throw err
                
                        array[k] = path.basename(val)
                        k++
                    })
                })

                return array
            }
        }
    }
}