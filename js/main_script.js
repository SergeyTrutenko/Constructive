$(document).ready(function () {
    // hamburger
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.menu-wrap').fadeToggle(300);
        $('html').toggleClass('no-scroll');
    });


    // collapse
    $('.accordion .list button').click(function () {
        $(this).closest('.list').siblings().find('.content').fadeOut(300);
        $(this).next('.content').fadeToggle(300);
        $(this).closest('.list').siblings().find('button').removeClass('show');
        $(this).toggleClass('show');
    });

    // for popular
    $('.accordion .toggle').click(function () {
        $(this).closest('.item').siblings().find('.content').slideUp(300);
        $(this).next('.content').slideToggle(300);
        $(this).closest('.item').siblings().find('.toggle').removeClass('opened');
        $(this).toggleClass('opened');
        if ($(this).hasClass('opened') == true) {
            $(this).closest('.item').siblings().removeClass('toggled');
            $(this).closest('.item').addClass('toggled');
        } else {
            $(this).closest('.item').removeClass('toggled');
        }
    });

    // readmore
    $('.js-read-more').on('click', function () {
        $('.js_hidden_block').fadeIn();
        $('.js_hidden_section').fadeIn();
        $(this).fadeOut(100);
        return false;
    })


    //Hover menu
    $('.menu-wrap .menu a').mouseover(function () {
        let text = $(this).text();
        $(this).closest('.menu-wrap').find('.hover-text').text(text);
    });

    $('.menu-wrap .menu').mouseleave(function () {
        $(this).closest('.menu-wrap').find('.hover-text').text('');
    });


    // drop&drag

    function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var htmlPreview =
                    //'<img width="200" src="' + e.target.result + '" />' +
                    '<p>' + input.files[0].name + '</p>';
                var wrapperZone = $(input).parent();
                var previewZone = $(input).parent().parent().find('.preview-zone');
                var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');

                wrapperZone.removeClass('dragover');
                previewZone.removeClass('hidden');
                boxZone.empty();
                boxZone.append(htmlPreview);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    function reset(e) {
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    $(".dropzone").change(function () {
        readFile(this);
    });

    $('.dropzone-wrapper').on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('dragover');
    });

    $('.dropzone-wrapper').on('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass('dragover');
    });

    $('.remove-preview').on('click', function () {
        var boxZone = $(this).parents('.preview-zone').find('.box-body');
        var previewZone = $(this).parents('.preview-zone');
        var dropzone = $(this).parents('.form-group').find('.dropzone');
        boxZone.empty();
        previewZone.addClass('hidden');
        reset(dropzone);
    });

    $('.product-list-form .btn-load').on('click', function () {
        $('.dropzone').trigger('click');
        return false;
    });


    // btn-filter
    $('.btn_filter-block').hide();

    $('.btn_filter').click(function () {
        $(this).toggleClass('active');
        $('.btn_filter-block').fadeToggle();
        return false;
    });

    //btn-sorting
    $('.btn_sorting-block').hide();

    $('.btn_sorting').click(function () {
        $(this).toggleClass('active');
        $('.btn_sorting-block').fadeToggle();
        return false;
    });

    // count
    $(document).on('click', '.plus', function () {
        var count = Number($(this).parent().find('span').text());
        count = count + 1;
        $(this).parent().find('span').text(count);
        $(this).parent().find('input[name="quantity"]').val(count);
    });

    $(document).on('click', '.minus', function () {
        var count = Number($(this).parent().find('span').text());
        if (count > 1) {
            count = count - 1;
            $(this).parent().find('span').text(count);
            $(this).parent().find('input[name="quantity"]').val(count);
        }
    });

    // sliders
    $('.related-products__items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/related-prev.png" alt="" /></button>',
        nextArrow: '<button class="next"><img src="img/related-prev.png" alt="" /></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        $('.related-products__items').slick('setPosition');
    })

    // back-to-top
    $(".back-to-top").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // .product__items > .btn-green
    if ($(window).width() < 576) {
        $('.product__items .item .btn_block a:first-child').addClass('btn-bordered').removeClass('btn-green');
    } else {
        $('.product__items .item .btn_block a:first-child').removeClass('btn-bordered').addClass('btn-green');
    }

});

$(window).resize(function () {

    // .product__items > .btn-green
    if ($(window).width() < 576) {
        $('.product__items .item .btn_block a:first-child').addClass('btn-bordered').removeClass('btn-green');
    } else {
        $('.product__items .item .btn_block a:first-child').removeClass('btn-bordered').addClass('btn-green');
    }

});

