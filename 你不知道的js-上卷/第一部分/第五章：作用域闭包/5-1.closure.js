1.
	function foo() {
		var a = 2;
		function bar() {
			console.log(a);
		}
		return bar;
	}
	var baz = foo();
	baz();

	分析：
		(1).foo()执行后其内部作用域不会销毁，因为 bar()本身在使用；

		(2).bar()依然持有该作用域的引用，而这个引用就是闭包

		(3).闭包使得函数可以继续访问定义时的词法作用域。

2.
	function foo() {
		var a = 2;
		function baz() {
			console.log(a);
		}
		bar(baz);
	}	
	function bar(fn) {
		fn();
	}

	(1).无论使用何种方式对函数类型的值进行传递，当函数在别处被调用都可以观察到闭包

3.循环和闭包

	for(var i=0; i <= 5; i++) {
		setTimeout(function(){
			console.log(i);//每秒一次的频率输出五次6
		},i*1000)
	}

	分析：
		(1).尽管循环中的5个函数都是在各个迭代中分别定义的，但是它们都封闭在一个共享的全局作用域中，因此实际只有一个i

	for(var i=0; i <= 5; i++) {
		(function(i){
			setTimeout(function(){
				console.log(i);//
			},i*1000)
		})(i)
	}

	分析：
		(1).为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的作用域封闭在每个迭代的内部。

		(2).将i传递进去，每个迭代都会含有一个具有正确值的变量以供访问

4.重返块作用域

	for(let i =0; i<=5; i++){
		setTimeout(function(){
			console.log(i);//每秒一次的频率输出五次6
		},i*1000)		
	}

	


