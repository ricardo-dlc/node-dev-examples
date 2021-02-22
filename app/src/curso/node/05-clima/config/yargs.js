const argv = require('yargs')
    .options({
        ciudad: {
            alias: 'c',
            desc: 'Ciudad a localizar',
            demmand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}