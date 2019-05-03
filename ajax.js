let ajax = (
	para = {
		url: null,//地址
		type: "GET",//方法  GET  POST
		data: {},//数据  json格式
		success: null,//成功后调用的方法
		error: null,//失败后调用的方法
		complete: null//无论如何会调用的方法
	}) => {
	if (!para.url) {
		return;
	}
	let promise = new Promise((resolve, reject) => {//异步执行
		let xhr = new XMLHttpRequest();
		xhr.onload = function () {//成功
			if (para.success) {
				para.success(this.responseText);
				if (para.complete) {
					para.complete();
				}
			} else {
				resolve(this.responseText);
			}
		};
		xhr.onerror = function () {//失败
			if (para.error) {
				para.error(this.status);
				if (para.complete) {
					para.complete();
				}
			} else {
				reject(this.status);
			}
		};
		if (para.type === "POST") {
			xhr.open("POST", para.url, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(formatParams(para.data));//发送数据
		} else {
			xhr.open("GET", para.url + "?" + formatParams(para.data), true);
			xhr.send();
		}
	});

	return promise;
};

//格式化参数
let formatParams = (data) => {
	let arr = [];
	for (let key of Object.keys(data)) {
		arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	}
	return arr.join('&');
};

