Es6

1.export 命令：用于规定模块的对外接口

	1.1:输出变量

	（1）第一种写法
		export var firstName = 'Michael';
		export var lastName = 'Jackson';
		export var year = 1958;

	（2）第二种写法（优先考虑）
		var firstName = 'Michael';
		var lastName = 'Jackson';
		var year = 1958;

		export{firstName, lastName, year}

	1.2:输出函数或类

	（1）第一种写法
		export function multiply(x, y) {
  			return x * y;
		};//对外输出一个函数multiply

	（2）第二种写法

		function multiply(argument) {
			// body...
		}

		export{multiply}

	1.3:as关键字重命名

		function v1() { ... }
		function v2() { ... }

		export {
		  v1 as streamV1,
		  v2 as streamV2,
		  v2 as streamLatestVersion
		};

	1.3:export语句输出的接口，与其对应的值是动态绑定关系

		export var foo = 'bar';
		setTimeout(() => foo = 'baz', 500);

2.import 命令：加载模块	

	1.1 import {firstName, lastName, year} from './profile.js';

	1.2 import { lastName as surname } from './profile.js';

3.模块的整体加载：

	// circle.js
	export function area(radius) {
	  return Math.PI * radius * radius;
	}

	export function circumference(radius) {
	  return 2 * Math.PI * radius;
	}

	// main.js
	import * as circle from './circle';

	console.log('圆面积：' + circle.area(4));
	console.log('圆周长：' + circle.circumference(14));

4.export default 命令：用于指定模块的默认输出

	// export-default.js
	export default function () {
	  console.log('foo');
	}

	// import-default.js
	import customName from './export-default';
	customName(); // 'foo'

	注：export default命令只能使用一次

5.export 与 import 的复合写法

	export { foo, bar } from 'my_module';

	// 可以简单理解为
	import { foo, bar } from 'my_module';
	export { foo, bar };

6.模块的继承：模块之间也可以继承。




	