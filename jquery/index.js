$(function(){

    // header 표출 & 숨김
    $('header').mouseover(function(){
        $(this).addClass('hov');
    })
    
    $('header').mouseleave(function(){
        $(this).removeClass('hov');
    })

    // gnb 하위 메뉴 표출 & 숨김
    $('.gnb > ul .depth1').mouseover(function(){
        $('.gnb > ul .depth1').removeClass('on');
        $(this).addClass('on');
    })
    
    $('.gnb > ul .depth1').mouseleave(function(){
        $('.gnb > ul .depth1').removeClass('on');
    })

    // 사이트맵 표출 
    $('.icon_menu').click(function(e){
        e.preventDefault();
        $('.all_menu').addClass('on')
    })
    
    // 사이트맵 숨김
    $('.btn_close').click(function(e){
        e.preventDefault();
        $('.all_menu').removeClass('on')
    })

    // 검색하기 
    $('.icon_src').click(function(e){
        e.preventDefault();
        $('.src_menu').addClass('on');
    })

    // 검색창 사라짐
    $('.src_menu').mouseleave(function(){
        $(this).removeClass('on');
    })

    // 스크롤바가 맨위를 찍을 때 gnb bg 투명하게 바뀌기 & 사라지기
    $(window).scroll(function(){

        curr = $(this).scrollTop();

        sc_info = $('.sc_info').offset().top + 250;

        sc_introduce = $('.sc_introduce').offset().top - 300;

        if(curr > 150){
            $('header').addClass('hov');
        }else{
            $('header').removeClass('hov');
        }

    // 위로가기 버튼 위치 멈추기 
        if(curr > sc_info){
            $('.fixed_btn_area').addClass('absol');
        }else{
            $('.fixed_btn_area').removeClass('absol');
        }
    // 스크롤바가 맨 위를 찍을 때 메뉴 gnb 표출    
        if (curr < 1){
            $('header').removeClass('hide');
        }

        if(curr > sc_introduce){
            $('.fixed_btn_area').addClass('show');
        }else{
            $('.fixed_btn_area').removeClass('show');
        }

    });

    // 스크롤 방향에 따라 헤더 표출 & 숨김
    $(window).on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        
        if(wheel>0){
        //스크롤 올릴때
            $('header').removeClass('hide');
        } else {
        //스크롤 내릴때
            $('header').addClass('hide');
        }
    });

    // top 클릭시 브라우저 최상단으로 
    $('.go_top').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},500);
    }); 

    // 텍스트 올라오기
    txt_up = gsap.timeline({})
    
    txt_up.fromTo(".main_vis .slogan_area .over_txt span",{
        yPercent:100,
        opacity:0,
    },{
        yPercent:0,
        opacity:1,
        delay:0.7,
        // stagger:0.3,
        duration:1.3,
    });

    txt_up.to(".main_vis .bg_opacity",{
        opacity: 0.5,
    })


   // sc_main_item swiper 
    var swiper = new Swiper(".main_item_slide", {

    pagination: {
        el: ".sc_main_item .nav",
        clickable: true,
    },

    navigation: {
        nextEl: ".main_item_slide .next",
        prevEl: ".main_item_slide .prev",
    },

    on:{
        slideChange:function(){
            idx = this.realIndex+1;
            $('.main_item_slide .curr').text(idx);
        },
    },
    });

    main_itemCnt = $('.main_item_slide .swiper-slide').length;
        
    $('.main_item_slide .total').text(main_itemCnt);


    // sc_awards swiper    
    var swiper = new Swiper(".awards_slide", {

    pagination: {
        el: ".awards_slide .num",
        type: "fraction",
    },

    navigation: {
        nextEl: ".awards_slide .next",
        prevEl: ".awards_slide .prev",
    },

    on:{
        slideChange:function(){
            idx = this.realIndex+1;
            $('.awards_slide .curr').text(idx);
        },
    },
    });

    introCnt = $('.awards_slide .swiper-slide').length;
        
    $('.awards_slide .total').text(introCnt);

    // sc_innovation swiper
    menu_arr = ['GENESIS X CONCEPT','MINT CONCEPT','ESSENTIA CONCEPT',]
    
    var swiper = new Swiper(".innovation_slide", { 

    pagination: {
        el: ".sc_innovation .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">'+'<a href="">' + menu_arr[index] + '</a></span>';
        },
    },

    });


})//지우지말것!!









