//start-code1
$({ countNum: $('.code1').html() }).animate({ countNum: 2000 }, {
            duration: 8000,
            easing: 'linear',
            step: function () {
            $('.code1').html(Math.floor(this.countNum) + "+");
        },
        complete: function () {
            $('.code1').html(this.countNum + "+");
            //alert('finished');
        }
        });
//end-code1
//start-code2
 $({ countNum: $('.code2').html() }).animate({ countNum: 3600 }, {
            duration: 8000,
            easing: 'linear',
            step: function () {
            $('.code2').html(Math.floor(this.countNum) + "+");
        },
        complete: function () {
            $('.code2').html(this.countNum + "+");
            //alert('finished');
        }
        });
//end-code2
//start-code3
 $({ countNum: $('.code3').html() }).animate({ countNum: 1200 }, {
            duration: 8000,
            easing: 'linear',
            step: function () {
            $('.code3').html(Math.floor(this.countNum) + "+");
        },
        complete: function () {
            $('.code3').html(this.countNum + "+");
            //alert('finished');
        }
        });
//end-code3