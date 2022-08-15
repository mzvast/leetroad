import {SyncHookLoop} from 'tapable';

class Hook {
    constructor() {
        this.hooks = new SyncHookLoop(['name']);
    }
    tap() {
        this.hooks.tap('p1', (name) => {
            console.log('p1', name);
        });
        this.hooks.tap('p2', (name) => {
            console.log('p2', name);
        });
    }
    start() {
        this.hooks.call('world');
    }
}

var hook = new Hook();
hook.tap();
hook.start();
