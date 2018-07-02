$(function(){

  const isDebug = false;
  let domain = 'https://wxapi.benpaobao.com';
  if(isDebug){
    domain = 'https://wxapi.benpaobao.com';
  }else{
    domain = 'http://192.168.1.142:8000';
  }
  // 查询奖品数量
  const prizeCountUrl = '/manager/query/prize_count';
  // 获取活动验证码
  const verify_code_url = '/manager/get/phone_verify_code';
  // 提交信息领取奖励
  const pull_down_prize_url = '/manager/commit/pull_down_prize';

  //获取参数
  function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) {
			return unescape(r[2])
		}
		return null
  }
  
  let driver_id = getQueryString('driver_id');
  //TODO
  if(!driver_id){
    driver_id = 1;
  }

  // 请求奖品数量
  $.ajax({
    url: domain + prizeCountUrl,
    type: 'POST',
    dataType: "json",
    data: {
      driver_id: driver_id
    },
    success: res =>{
      console.log(res);
      //设置剩余数量
      let surplus_count = res.data.surplus_count;
      $('#remain-count').text(surplus_count || 0);
    }
  });

  //获取活动验证码
  let phoneNumber = $('.water-input-tel').text();
  let vifiryCode = $('.water-input-code').text();

  $('btn-free-click').click(function(){
    if(phoneNumber){
      
    }
    $.ajax({
      url: domain + verify_code_url,
      type: 'POST',
      dataType: "json",
      data: {
        phone_no: phoneNumber,
        driver_id: driver_id
      },
      success: res =>{
        console.log(res);
        //设置剩余数量
        let surplus_count = res.data.surplus_count;
        $('#remain-count').text(surplus_count || 0);
      }
    });
  });
  
});