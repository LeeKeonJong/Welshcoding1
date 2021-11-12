



            $('.L').click(function () {
                $('.vi li:last').prependTo('.vi')
                $('.vi').css('margin-left', -0)
                $('.vi').stop().alimate({ marginLeft: 0 }, 800)
            });
            $('.R').click(function () {
                $('.vi li:first').appendTo('.vi');
                $('.vi').css({ marginLeft: 0 });
                $('.vi').stop().animate({ marginLeft: -0 }, 800, function () {
                });
            });
