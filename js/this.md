## 指出问题并fix
```js
const coder = {
    name: 'coder',
    skill: ['css', 'js', 'html'],
    say: function () {
        for (var i = 0; i < 3; i++) {
            setTimeout(function () {
                console.log(this.skill[i]);
            }, 1000);
        }
    },
};

coder.say();
```

%

```js
// var i
// this
const coder = {
    name: 'coder',
    skill: ['css', 'js', 'html'],
    say: function () {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                console.log(this.skill[i]);
            }, 1000);
        }
    },
};

coder.say();
```