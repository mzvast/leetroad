class EventBus {
    constructor() {
        this.subscribers = {};
        this.wrappers = {}; // 为了保存once生成的包装器，以便off时候删除
    }

    on(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }

    off(event, callback) {
        if (this.subscribers[event]) {
            this.subscribers[event] = this.subscribers[event].filter(
                (cb) => cb !== callback
            );
        }
        if (this.wrappers[event]) {
            delete this.wrappers[event][callback];
        }
    }

    once(event, callback) {
        const wrapper = (data) => {
            callback(data);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
        if (!this.wrappers[event]) {
            this.wrappers[event] = {};
        }
        this.wrappers[event][callback] = wrapper;
    }

    emit(event, data) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach((callback) => callback(data));
        }
    }
}

const eventBus = new EventBus();

const logData = (data) => console.log(data);

eventBus.once('event1', logData);
eventBus.emit('event1', 'Hello');
