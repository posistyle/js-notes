1.内容

	（1）存储在对象内部的这些属性的名称，它们就像指针（引用）一样，指向这些值的真正的存储位置

	（2）获取属性值：

		1.使用 . 操作符 称为：属性访问

		2.使用 [] 操作符 称为：键访问

		var obj = {
			a: 2,
			'super-fun' :'super'
		};
		obj.a //2
		obj['super-fun']//super

2.可计算属性名：

	var prefix = 'foo';

	var myobj = {
		[prefix + 'bar']: 'hello',
		[prefix + 'baz']: 'world'
	}

	myobj['foobar']; //'hello'
	myobj['foobaz']; //world

3.复制对象

	待参考资料
	
4.属性描述符
	
	（1）获取属性描述符
		var obj = {
			a: 2
		}
		Object.getOwnPropertyDescriptor(obj, 'a') //{value: 2, writable: true, enumerable: true, configurable: true}

	（2）设置属性特性

		var obj = {};
		Object.defineProperty(obj, 'a', {
			value: 2,
			writable: false, 
			enumerable: true, 
			configurable: true
		})
		obj.a //2

		1.writable （决定属性是否可以修改属性值）
			obj.a = 3; //2 静默失败(严格模式下会报错)

		2.configurable （决定属性是否可配置）

			configurable: false

				（1）不可使用 Object.defineProperty(..)修改属性描述符

				（2）禁止删除这个属性

				（3）仍然可以更改writable的状态（只能由true改为false）

		3.enumerable（决定属性的可枚举性）

5.不变性

	（1）对象常量 （结合 writable:false 和 configurable:false）
		var obj = {};
		Object.defineProperty(obj, 'a', {
			value:42,
			writable:false,
			configurable:false
		})

	（2）禁止扩展 （禁止一个对象添加新属性并且保留已有属性）可以使用 Object.preventExtensions(...);
		var obj = {
			a: 3
		};
		Object.preventExtensions(obj);
		obj.b = 3;
		obj.b; //undefind

	（3）密封 （禁止扩展，禁止配置）使用 Object.seal(...); 实际是调用Object.preventExtensions(...)和configurable: false;
		var obj = {
			a: 2
		}
		Object.seal(obj);

	（4）冻结（禁止扩展，禁止配置，不可写）使用 Object.freeze(..); 实际是调用 Object.seal(...)和writable: false;

6.[[Get]]

	obj.a是一次属性访问，而实际上是实现 [[Get]]操作。

	如果没有找到所需属性，按照[[Get]]算法会遍历可能存在的[[prototype]]链

7.[[Put]]

8.Getter和Setter

	（1）当一个属性定义gettere, setter，这个属性被定义为“访问描述符”

	（2）对于访问描述符，js会忽略value和writable特性，关注set和get

		var obj = {
			get a() {
				return 2
			}
		};
		Object.defineProperty(obj, 'b', {
			get:function() {
				return this.a * 2
			},
			enumerable:true
		});
		obj.a = 3;
		obj.a //2 （由于定义getter,所以对a进行设置时set操纵会忽略赋值操作）
		
	（3）通常getter和setter成对出现
		var myobj = {
			get a() {
				return this._a;
			},
			set a(val) {
				this._a = val * 2;
			}
		}
		myobj.a = 2;
		myobj.a; //4 

















