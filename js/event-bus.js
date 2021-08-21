class EventEmitter {
    constructor() {
        this.events = {}; // key=>listeners Array
    }

    emit(event, ...args) {
        if (!this.events[event]) {
            console.error('event not reg');
            return;
        }
        const arr = this.events[event];
        for (const listener of arr) {
            listener.apply(this, args);
        }
    }

    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(cb);
    }

    once(event, cb) {
        const fn = (...args) => {
            this.off(event, fn);
            cb.apply(this, args);
        };
        this.on(event, fn);
    }

    off(event, cb) {
        if (!this.events[event]) {
            console.log('error not reg');
            return;
        }
        if (!cb) {
            this.events[event] = [];
            return;
        }

        this.events[event] = this.events[event].filter((item) => item !== cb);
    }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
const ev = new EventEmitter();

// ev.on('add', add);
// ev.on('log', log);
// ev.emit('add', 1, 2);
// ev.emit('log', 'hi~');
// ev.off('add');
// ev.emit('add', 1, 2); // error
// ev.once('once', add);
// ev.emit('once', 1, 2); // 3
// ev.emit('once', 1, 2);

ev.once('log', log);
ev.emit('log',111)
ev.emit('log',222)