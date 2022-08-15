import {SyncBailHook} from 'tapable';

class Hook {
    constructor() {
        this.hooks = new SyncBailHook(['name']);
    }
    tap() {
        this.hooks.tap('p1', (name) => {
            console.log('p1', name);
            return 1; // 非undefined值，中断后续的执行
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
