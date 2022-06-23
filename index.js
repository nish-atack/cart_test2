var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        var time1 = $('input[name="Total"]').val();
       // var num1 = $('input[name="num1"]').val();
      //  var breed = $('input[name="breed"]').val();
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});
   
       
        
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
    var msg = `ご注文内容：\n${breed} \n${num1} \n${Total} \n${reasons}`;
        sendText(msg);

        return false;
    });
});



