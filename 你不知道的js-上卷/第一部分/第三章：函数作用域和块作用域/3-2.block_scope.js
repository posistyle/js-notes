1.块作用域
	
	1.with（用with创建的作用域仅在with声明中有效）

	2.try/catch（其声明的变量仅在catch内部有效）

		try {
			undefined();//执行非法操作强制制造异常
		}
		catch (err) {
			console.log(err);
		}
		console.log(err);//ReferenceError: err is not defined

	3.let（let 关键字将变量绑定到所在的任意作用域中-->通常是{ .. }内部）

	4.
