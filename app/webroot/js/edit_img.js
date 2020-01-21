$(function () {
	/* 画像を押す */
	$('.delete_btn').click(function(){
		var	index = $(this).closest('div').index('.img');
		//alert(JSON.stringify($(this).closest('div').children('img').attr('src')));
		//alert($(this).closest('div').children('img').attr('src'));
		array = $(this).closest('div').children('img').attr('src').split('/');
		//alert(array);
		//削除した要素を消す
		$('.delete_btn').closest('div').eq(index).remove();
		//入力値をセット
		var param = {delete_post_id: array[3],delete_img_num: index};
		//alert(JSON.stringify(param));
		var send_url = "/posts/img_delete";
		$.ajax({
			type: "post",
			data: param,
			url: send_url,
			dataType: "json",
			success: function (res) {
				if(res!==null){
					alert(JSON.stringify(res)+'を削除しました。');
				}else{
					alert("not exist");
				}
			},
			error: function (res, status, errors) {
				alert(res + ', ' + status + ', ' + errors);
				alert(JSON.stringify(res));
			}
		});
		return false;
	});
});
