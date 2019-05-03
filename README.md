AJAX
=========

自己封装的ajax方法，支持在对象中回调和链式回调（解决回调地狱）

使用方法：

```
ajax({
	url: "test.php",//地址
	type: "GET",//方法  GET  POST
	data: {},//数据  json格式
	success: function(data){},//成功后调用的方法
	error: function(status){},//失败后调用的方法
	complete: function(){},//无论如何会调用的方法
});
```

或

```
ajax({
	url: "test.php",//地址
	type: "GET",//方法  GET  POST
	data: {}//数据  json格式
}).then((data) => {//成功后调用的方法
	...
}, (status) => {//失败后调用的方法
	...
}).finally(() => {//无论如何会调用的方法
	...
});
```
