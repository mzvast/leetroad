## 寄生式组合继承&原型式继承

%

```js
// 寄生式组合继承
function inheritPrototype(subType,superType){
	const proto = Object.create(superType.prototype); // 创建父类原型的副本
	proto.constructor = subType; // 增强对象，解决ctor丢失问题
	subType.prototype = proto; // 赋值对象
}
// 原型式继承
function myObjectCreate(o){
	function F(){}
	F.prototype = o;
	return new F();
}
```