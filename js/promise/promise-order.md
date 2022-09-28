## promise 执行顺序原理

https://www.youtube.com/watch?v=Lum0R6Ng6R8

当promise被resolve且then被调用的时候会往微任务队列里面放入一个callback。

先then后resolve，则then先排队，等到resolve了立即放入队列