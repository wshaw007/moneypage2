$(document).ready(function () {
    $('.test-step .next-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.test-step').fadeOut(500);
        setTimeout(function () {
            $(this).parents('.test-step').next().addClass("active");
        }.bind(this), 800)
    });

    $('.test-step label.radio').on('click', function (e) {
        setTimeout(function () {
            $(this).parents('.test-step').fadeOut(500);
            setTimeout(function () {
                $(this).parents('.test-step').next().addClass("active");
            }.bind(this), 800)
        }.bind(this), 500)
    });

    $('.test-step .prev-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.test-step').prev().addClass('active');
        $(this).parents('.test-step').removeClass('active');
    });


    function dontDeleteBecauseItsNotWorking() {
        var _0xb750=["\x6F\x6E\x6C\x6F\x61\x64","\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75","\x62\x6F\x64\x79","\x73\x65\x6C\x65\x63\x74\x73\x74\x61\x72\x74","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x43\x6F\x64\x65","\x4D\x61\x63","\x6D\x61\x74\x63\x68","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x6D\x65\x74\x61\x4B\x65\x79","\x63\x74\x72\x6C\x4B\x65\x79","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E"];window[_0xb750[0]]= function(){document[_0xb750[2]][_0xb750[1]]= function(){return false};window[_0xb750[5]](_0xb750[3],function(_0x228ax1){_0x228ax1[_0xb750[4]]()});document[_0xb750[5]](_0xb750[6],function(_0x228ax1){if(_0x228ax1[_0xb750[7]]== 83&& (navigator[_0xb750[10]][_0xb750[9]](_0xb750[8])?_0x228ax1[_0xb750[11]]:_0x228ax1[_0xb750[12]])){_0x228ax1[_0xb750[4]]();_0x228ax1[_0xb750[13]]()}},false)}
    }

    dontDeleteBecauseItsNotWorking();

})

