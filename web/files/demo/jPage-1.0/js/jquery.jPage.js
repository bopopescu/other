/*! jQuery jPage plugin v0.0.1 | github.com/Krinkle/jquery-jPage */
(function($) {
	$.fn.JPage = function(data) {
		var p=$(this),
			allPage = data.allPage,
			numList = data.numList,
			page = data.page,
			isJump = data.isJump,
			pgLeft = 1,
			pgRight = 1,
			rangelist = [];
		if (numList % 2 == 0) {pgLeft = numList / 2;pgRight = pgLeft}
		else {pgLeft = (numList - 1) / 2;pgRight = (numList + 1) / 2}
		if (allPage > numList) {
			if (page < (numList + 1) / 2) for (var i = 1; i < numList + 1; i++) rangelist.push(i);
			else {
				var rbegin = page - pgLeft;
				var rend = page + pgRight;
				if (rend > allPage) {
					rend = allPage + 1;
					rbegin = rend - numList
				}
				for (var i = rbegin; i < rend; i++) rangelist.push(i)
			}
		}
		else for (var i = 1; i < allPage + 1; i++) rangelist.push(i);
		var prevPage = page - 1,nextPage = page + 1;
		if (prevPage < 1) prevPage = 1;
		if (nextPage > allPage) nextPage = allPage;
		var htmlpage = '<ul><li class="first" page="1">首页</li><li page="' + prevPage + '">上一页</li>';
		for (var i = 0; i < rangelist.length; i++) {
			var j = rangelist[i];
			if (page == j) htmlpage += '<li page="' + j + '" class="range active">' + j + '</li>';
			else htmlpage += '<li page="' + j + '" class="range">' + j + '</li>';
		}
		htmlpage += '<li page="' + nextPage + '">下一页</li><li class="last" page="' + allPage + '">尾页</li>';
		if (isJump) htmlpage += '<div class="pgjump"><span class="ele">第</span><input type="text" class="one ele" value="'+page+'" /><span class="ele">/ '+allPage+' 页</span> <input class="two ele" type="button" value="跳转" /></div>';
		htmlpage += '</ul>';
		p.html(htmlpage);
		p.find('>ul>li').click(function() {
			var pg = parseInt($(this).attr('page'));
			if (pg) {
				data.getPageData(pg);
				data.page = pg;
				p.JPage(data)
			}
		})
		if (isJump) {
			var jumpPage = function(value) {
				if (value) {
					pg = parseInt(value);
					if (pg < 1) pg = 1;
					else if (pg > allPage) pg = allPage;
					data.getPageData(pg);
					data.page = pg;
					p.JPage(data)
				}
			}
			$('.pgjump>.two').click(function() {
				jumpPage($(this).parent().find('input').val())
			})
			$('.pgjump>input').keypress(function(e) {
				if (e.which == 13) jumpPage($(this).val())
			})
		}
	}
})(jQuery);