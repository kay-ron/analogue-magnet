var level = require('level')

module.exports = LevelDAO

class LevelDAO {
    constructor(filepath) {
        this.db = level(filepath, function (err, db) {
            if (err instanceof level.errors.OpenError) {
                return console.log('ERR — Levelup instance failed to open')
            } else {
                console.log('New Levelup instance, connected!')
                return db
            }
        })

    
    }
}