const EventEmitter = require('events')

// class Logger extends EventEmitter {
//     log(message) {
//         this.emit('message', `${message} ${Date.now()}`)
//     }
// }

// const logger = new Logger()

// logger.on('message', data => {
//     console.log(data)
// })

// logger.log('First')
// logger.log('Second')
// logger.log('Third')

class Maxim extends EventEmitter {
    age = 20
    getAge() {
        console.log(this.age)
    }
}

const max = new Maxim()
max.getAge()