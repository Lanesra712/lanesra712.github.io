var APP_ID = 'A7CN7MI4nyi6qNu1MBIIht6O-gzGzoHsz';
var APP_KEY = 'e77zroLgUwNhWOb6QB0EfDGy';
AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});
// 显示次数
function showTime(Counter) {
	var query = new AV.Query(Counter);
	$(".leancloud_visitors").each(function() {
		var url = $(this).attr("id").trim();
		query.equalTo("words", url);
		query.count().then(function (number) {
			// There are number instances of MyClass where words equals url.
			console.log('统计计数:'+number);
			$(document.getElementById(url)).text(number?  number : '0');
		}, function (error) {
			console.log(error);
		})
	});
}
//追加PV统计
function addCount(Counter) {
	var url = $(".leancloud_visitors").length > 0 ? $(".leancloud_visitors").attr('id').trim() : 'lanesra712.github.io';
	var Counter = AV.Object.extend("Counter");
	var query = new Counter;
	query.save({
		words: url
	}).then(function (object) {

	})
}

$(function () {
	var Counter = AV.Object.extend("Counter");
	addCount(Counter);
	showTime(Counter);
});