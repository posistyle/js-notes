1.包括变量和函数在内的所有声明都会在任何代码执行前首先处理

2.提升：先有声明后有赋值（只有声明会被提升，而赋值或其他运行逻辑会留在原地）

3.函数声明可以提升，但是函数表达式不能被提升；

	foo();
	function foo() {
		consloe.log(a); //  underfind
		var a = 2;
	}

	foo() //  TypeError
	var foo = function() {
		consloe.log(a); //  underfind
		var a = 2;
	}

4.函数优先：函数声明和变量声明都会被提升（函数被首先提升，然后才是变量）

    foo(); //1
    var foo;
    function foo() {
        console.log(1);
    }
    foo = function () {
        console.log(2);
    }
