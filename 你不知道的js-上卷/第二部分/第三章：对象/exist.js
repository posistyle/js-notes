1.存在性

	（1）

		var obj = {
			a:1
		}	
		'a' in obj //true
		'b' in obj //false

		in 操作符会检查是否在对象及其 [[prototype]] 原型链中

		hasOwnProperty(..)只会检查属性是否在obj对象中

	（2）枚举

		
