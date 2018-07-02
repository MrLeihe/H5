$(function () {

    const isDebug = false;
    let domain = 'https://wxapi.benpaobao.com';
    if (isDebug) {
        domain = 'https://wxapi.benpaobao.com';
    } else {
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
        if (r != null) {
            return unescape(r[2])
        }
        return null
    }

    let driver_id = getQueryString('driver_id');
    //TODO
    if (!driver_id) {
        driver_id = 1;
    }

    /**
     * 请求奖品数量
     */
    $.ajax({
        url: domain + prizeCountUrl,
        type: 'POST',
        dataType: "json",
        data: {
            driver_id: driver_id
        },
        success: function (res) {
            console.log(res);
            //设置剩余数量
            let surplus_count = res.data.surplus_count;
            $('#remain-count').text(surplus_count || 0);
            if (Number(surplus_count) > 0){
                $('.water-get-container').show();
                $('.finish-container').hide();
            }else {
                $('.water-get-container').hide();
                $('.finish-container').show();
            }
        }
    });

    /**
     * 获取活动验证码
     */
    $('.btn-free-click').click(function () {
        let phoneNumber = $('.water-input-tel').val();
        if (!phoneNumber) {
            layer.open({
                title: '提示',
                type: 1,
                content: '请输入手机号码'
            });
            return;
        }
        if (phoneNumber.length != 11 || phoneNumber.substr(0, 1) != 1) {
            layer.open({
                title: '提示',
                type: 1,
                content: '请输入正确的手机号'
            });
            return;
        }
        $.ajax({
            url: domain + verify_code_url,
            type: 'POST',
            dataType: "json",
            data: {
                phone_no: phoneNumber,
                driver_id: driver_id
            },
            success: function (res) {
            }
        });
    });

    /**
     * 提交信息领取奖励
     */
    $('.btn-free-get').click(function () {
        let phoneNumber = $('.water-input-tel').val();
        let vifiryCode = $('.water-input-code').val();
        if (!vifiryCode) {
            layer.open({
                title: '提示',
                type: 1,
                content: '请输入验证码'
            });
            return;
        }
        $.ajax({
            url: domain + pull_down_prize_url,
            type: 'POST',
            dataType: "json",
            data: {
                phone_no: phoneNumber,
                driver_id: driver_id,
                verify_code: verifyCode
            },
            success: function (res) {

            }
        });
    });


});