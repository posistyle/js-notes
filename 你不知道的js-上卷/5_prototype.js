--1
js中的对象有特殊的[[prototype]]内置属性	

var anotherObj = {
	a: 2
}
anotherObj.a; //2

var myObject = Object.create(anotherObj);
myObject.a; //2

//遍历任何可以通过原型链访问到且可枚举的属性
for(var k in myObject) {
	console,log(k);
}

1.1 Object.prototype

所有普通的[[prototype]]链最终都会指向内置的-->Object.prototype.

1.2属性设置和屏蔽

myObject.foo = 'bar';		

(1)myObject对象包含foo的普通数据访问属性，myObject.foo = 'bar';只会修改已有属性值		
var myObject = {
	foo: 'foo';
}		
(2)foo不直接存在于myObject,[[prototype]]链就会遍历，类似[[Get]]操作。如果原型链找不到foo,foo就会直接添加到myObject上;
var myObject = {};

(3)如果属性名foo既出现在myObject中，也出现在myObject的[[prototype]]链上层，那么就会发生屏蔽；
	






