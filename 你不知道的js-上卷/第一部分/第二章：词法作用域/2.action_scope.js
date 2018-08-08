1.词法阶段

	词法作用域：定义在词法阶段的作用域（词法作用域就是由书写代码时将变量和块作用域的位置决定的）

	function foo(a) {
		var b = a * 2;
		function bar(c) {
			console.log(a, b, c);
		}
		bar(b*3);
 	}
 	foo(2);		