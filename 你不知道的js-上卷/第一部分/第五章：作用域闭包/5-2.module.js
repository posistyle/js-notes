1.
	function coolModule() {
		var another = [1, 2, 3];
		var something = 'cool';
		function doSomething() {
			console.log(something);
		}
		function doAnother() {
			console.log(another.join('!'));
		}
		return {
			doSomething:doSomething,
			doAnother:doAnother
		}
	}
	var foo = coolModule();
	foo.doAnother();//  1!2!3
	foo.doSomething();//  cool

	分析：
		(1)coolModule()只是一个函数，必须调用才能创建模块实例
		(2)coolModule()返回一个对象字面量，其中包含内部函数的引用
		(3)保持内部数据变量是隐藏且私有的状态
		(4)可以将这个对象类型的返回值看作是本质上是模块的公用API
		(5)doSomething(), doAnother()函数具有涵盖模块实例内部作用域的闭包

2.模块模式需要具备的俩个必要条件：

	（1）必须有外部的封闭函数，该函数必须至少被调用一次
	（2）封闭函数必须至少返回一个内部函数，这样内部函数才能有在私有作用域中形成闭包，并且可以访问访问或修改私有的状态

3.
	var foo = (function(id){
		function change() {
			publicApi.identify = identify2
		}
		function identify1() {
			console.log(id)
		}
		function identify2() {
			console.log( id.toUpperCase() );
		}
		var publicApi = {
			change:change,
			identify:identify1
		}
		return publicApi;
	})('foo module');

	foo.identify();
	foo.change();
	foo.identify();

	分析：
		（1）模块模式另一个简单强大用法是命名将要作为公用API返回的对像

4.现代模块机制
	var MyMoudele = (function() {
		var modules = {};
		function define(name, deps, impl){
			var len = deps.length
			console.log(deps)
			for(var i=0; i<len; i++){
				deps[i] = modules[deps[i]]
			}
			modules[name] = impl.apply(impl, deps);
			console.log(modules,impl)
		}
		function get(name) {
			return modules[name]
		}
		return {
			define:define,
			get:get
		}
	})()

	MyMoudele.define('bar', [], function(){
		function hello (who){
			return who
		}
		function jump (who) {
			return who + 'jump'
		}
		return {
			hello:hello,
			jump:jump
		}
	})

	MyMoudele.define('test', ['bar'], function(fn){
		function longjump() {
			console.log( fn.jump('yxq') + '2m')
		}
		function driver(car) {
			return car
		}
		return {
			longjump:longjump,
			driver:driver
		}
	})	

	MyMoudele.define('foo', ['bar', 'test'], function(fn){
		console.log(fn)
		var len = fn.length;
		for(var i=0; i<len; i++){
			console.log(i)
		}
		var name = 'qrq';
		function awesome() {
			console.log( fn.hello(name).toUpperCase() );
		}
		function whoDriver() {
			console.log( fn.driver('奔驰') )
		}
		return {
			awesome:awesome,
			whoDriver:whoDriver
		}
	})





