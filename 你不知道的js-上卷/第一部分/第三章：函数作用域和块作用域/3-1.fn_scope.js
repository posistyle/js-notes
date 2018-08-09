1.规避冲突（同名标识符之间的冲突）

	（1）全局命名空间

	（2）模块管理

2.函数声明/函数表达式

	（1）区分函数声明和和函数表达式的方法是看function关键字出现在声明中的位置；（）

			函数声明：声明中的第一个词

			函数表达式：不是声明中的第一个词

	（2）函数声明和函数表达式最重要的区别是它们的标识符将会绑定在何处	

3.匿名和具名

	（1）匿名函数：没有名称标识符的函数；

		匿名函数缺点：

			1.匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难

			2.引用自身时只能使用 arguments.callee 引用

			3.匿名函数没有描述性的标识符，对代码可读性及理解性有影响

	（2） 具名函数：有名称标识符的函数表达式

4.立即执行函数表达式：IIFE

	（1）IIFE最常见的是使用一个匿名函数表达式

		(function () {
			var a = 3;
			console.log(a);
		})();

	（2）进阶用法：将立即执行函数表达式当作函数调用并传递参数进去；

		var a = 2;
		(function(global) {
			var a = 3;
			console.log(a);
			console.log(global.a);
		})(window)

	（3）倒置代码的运行顺序

		(function(def) {
			def(window);
		})(function def(global){
			var a = 3;
			console.log(a);
			console.log(global.a);
		})




	