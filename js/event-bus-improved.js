class EventBus {
    constructor() {
        this.listeners = {}; // name->handler[]
        this.listenerToWrap = new WeakMap(); // handler => wrapper
    }

    on(name, handler) {
        if (!this.listeners[name]) this.listeners[name] = [];
        this.listeners[name].push(handler);
    }

    once(name, handler) {
        const wrap = (data) => {
            handler(data);
            this.off(name, wrap);
        };

        this.on(name, wrap);
        this.listenerToWrap.set(handler, wrap);
    }

    off(name, handler) {
        if (!this.listeners[name]) return;
        const wrapper = this.listenerToWrap.get(handler);
        this.listeners[name] = this.listeners[name].filter(
            (x) => x !== handler && x !== wrapper
        );
    }

    emit(name, data) {
        if (!this.listeners[name]) return;
        for (let handler of this.listeners[name]) handler(data);
    }
}

const eventBus = new EventBus();

const logData = (data) => console.log(data);

// eventBus.on('event1', logData);
eventBus.once('event1', logData);
eventBus.off('event1', logData);
eventBus.emit('event1', 'Hello');
// eventBus.off('event1', logData);
eventBus.emit('event1', 'Hello');
