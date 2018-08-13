1.绑定规则：

	（1）默认绑定：this 指向全局对象

		最常用的函数调用类型：独立函数调用

	（2）隐式绑定：当函数引用上下文对象时，隐式绑定规则会把函数调用种的 this 绑定到这个上下文对象

		function foo() {
			console.log(this.a);
		}	
		var obj2 = { 
			a: 42,
			foo: foo
		} 
		var obj1 = {
			a: 2,
			obj2: obj2
		}
		obj1.obj2.foo(); //42

		--隐式丢失：隐式绑定的函数会丢失绑定对象，也就是说会应用默认绑定

			function foo() {
				console.log(this.a);
			}	
			var obj2 = { 
				a: 42,
				foo: foo
			} 
			var bar = obj2.foo;
			var a = 'global';
			bar(obj2.a); //global

			解析	：虽然 bar 是 obj2.foo的一个引用，但是实际是引用的是 foo 函数本身，此时的 bar() 其实是一个不带有任何修饰的函数调用

			function foo() {
				console.log(this.a);
			}

			function doFoo(fn) {
				fn();
			}	
			var obj2 = { 
				a: 42,
				foo: foo
			} 
			var a = 'global';
			doFoo(obj2.foo);//global

	（3）显示绑定

		1.硬绑定：call(), apply()

			function foo(something) {
				console.log(this.a, something);
				return this.a + something;
			}	
			function bind(fn, obj) {
				return function() {
					return fn.apply(obj,arguments);
				}
			}
			var obj = {
				a: 2
			}
			var bar = bind(foo, obj);
			var b = bar(3);
			console.log(b);

		2.API调用的‘上下文’：第三方函数及js语言和宿主环境中许多内置函数，提过可选参数，通常称为‘上下文（context）’;

			function foo(el) {
				console.log(el, this.id);
			}
			var obj = {
				id: 'waesome'
			}
			var arr = [1, 2, 3];
			arr.forEach(foo,obj);

	（4）new 绑定

		使用new来调用函数或者说发生构造函数调用时，执行以下步骤

			1.创建（或者说构造）一个全新的对象

			2.这个新对象会被执行->[[Prototype]]连接

			3.这个新对象会绑定到函数调用的this

			4.如果函数没有返回其他对象，那么 new 表达式中的函数调用会返回这个新对象

			function foo(a) {
				this.a = a;
			}
			var bar = new foo(2);
			console.log(bar);

2.this 词法

	（1）箭头函数无法使用之前的4条规则，而是根据外层（函数或全局）作用域来决定this

		function foo() {
			return (a) =>{
				//this 继承foo();
				console.log(this.a);
			}
		}
		var obj = { 
			a: 2
		}
		var obj2 = {
			a: 3
		}
		var bar = foo.call(obj1);
		bar.call(obj2);//2

	（2）箭头函数常用于回调函数中

		function foo(){
			setTimeout(()=>{
				console.log(this.a);
			},100)
		}
		var obj = {
			a: 2
		}
		foo.call(obj);//2









