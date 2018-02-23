$(document).ready(function(){
    
    
    /* gnb */
    $(".gnb-item ul,.nav_bg").slideUp(0)
    $(".gnb-item").hover(function(){
        $(".gnb-item ul,.nav_bg").stop().slideDown("fast");
        $(this).find("span").stop().animate({width:"100%", left:0, opacity:1},200)
    }, function(){
        $(".gnb-item ul,.nav_bg").stop().slideUp("fast");
        $(this).find("span").stop().animate({width:0, left:80, opacity:0},200)
    })
    
    
    /* language tab */
    $(".lang-tap a").click(function(){
        $(this).next().toggle();
    })
    
    
    
    
    /* 예약하기 hover*/
    $(".btn-order").on('mouseover',function(){
        $(".btn-order").hide();
        $(".btn-order-hover").show();
    });
    $(".btn-order-hover").on('mouseout',function(){
        $(".btn-order-hover").hide();
        $(".btn-order").show();
    });
    
    
    
    /* sub-menu-coffee 더보기 버튼 */
    
    var li_height = $(".coffee-imgs li:first").height() + 8;
    var li_height_f = $(".coffee-imgs li:first").height()*2 + 16;
    var max_height = li_height * 3;
    $(".coffee-imgs ul").css({height:li_height_f});
    $(".slide_more").click(function(){
        var ul_height = $(".coffee-imgs ul").height() + li_height;
        if(ul_height >= max_height){
            ul_height = max_height
        }
        $(".coffee-imgs ul").animate({height:ul_height}, "fast")
        
    });
    
    /* sub-menu-dessert 더보기 버튼 */
    
    var li_height_de = $(".dessert-imgs li:first").height() + 8;
    var li_height_de_f = $(".dessert-imgs li:first").height()*2 + 16;
    var max_height_de = li_height_de * 4;
    $(".dessert-imgs ul").css({height:li_height_de_f});
    $(".slide_more").click(function(){
        var ul_height_de = $(".dessert-imgs ul").height() + li_height_de;
        if(ul_height_de >= max_height_de){
            ul_height_de = max_height_de
        }
        $(".dessert-imgs ul").animate({height:ul_height_de}, "fast")
        
    });
    
    
    /* sub-menu-md 더보기 버튼 */
    
    var li_height_md = $(".md-imgs li:first").height() + 8;
    var li_height_md_f = $(".md-imgs li:first").height()*2 + 16;
    var max_height_md = li_height_md * 3;
    $(".md-imgs ul").css({height:li_height_md_f});
    $(".slide_more").click(function(){
        var ul_height_md = $(".md-imgs ul").height() + li_height_md;
        if(ul_height_md >= max_height_md){
            ul_height_md = max_height_md
        }
        $(".md-imgs ul").animate({height:ul_height_md}, "fast")
        
    });
    
    
    /* sub-stor-sch map */
    
    $("map .city01").on('mouseover', function(){
       $(".city_layer01").stop().show(); 
    });
    $("map .city01").on('mouseout', function(){
       $(".city_layer01").hide();
    });
    
    $("map .city02").on('mouseover', function(){
       $(".city_layer02").stop().show(); 
    });
    $("map .city02").on('mouseout', function(){
       $(".city_layer02").hide();
    });
    
    $("map .city03").on('mouseover', function(){
       $(".city_layer03").stop().show(); 
    });
    $("map .city03").on('mouseout', function(){
       $(".city_layer03").hide();
    });
    
    $("map .city04").on('mouseover', function(){
       $(".city_layer04").stop().show(); 
    });
    $("map .city04").on('mouseout', function(){
       $(".city_layer04").hide();
    });
    
    $("map .city05").on('mouseover', function(){
       $(".city_layer05").stop().show(); 
    });
    $("map .city05").on('mouseout', function(){
       $(".city_layer05").hide();
    });
    
    $("map .city06").on('mouseover', function(){
       $(".city_layer06").stop().show();
    });
    $("map .city06").on('mouseout', function(){
       $(".city_layer06").hide();
    });
    
    $("map .city07").on('mouseover', function(){
       $(".city_layer07").stop().show();
    });
    $("map .city07").on('mouseout', function(){
       $(".city_layer07").hide();
    });
    
    $("map .city08").on('mouseover', function(){
       $(".city_layer08").stop().show();
    });
    $("map .city08").on('mouseout', function(){
       $(".city_layer08").hide();
    });
    
    $("map .city09").on('mouseover', function(){
       $(".city_layer09").stop().show();
    });
    $("map .city09").on('mouseout', function(){
       $(".city_layer09").hide();
    });
    
    $("map .city10").on('mouseover', function(){
       $(".city_layer10").stop().show();
    });
    $("map .city10").on('mouseout', function(){
       $(".city_layer10").hide();
    });
    
    $("map .city11").on('mouseover', function(){
       $(".city_layer11").stop().show();
    });
    $("map .city11").on('mouseout', function(){
       $(".city_layer11").hide();
    });
    
    $("map .city12").on('mouseover', function(){
       $(".city_layer12").stop().show();
    });
    $("map .city12").on('mouseout', function(){
       $(".city_layer12").hide();
    });
    
    $("map .city13").on('mouseover', function(){
       $(".city_layer13").stop().show();
    });
    $("map .city13").on('mouseout', function(){
       $(".city_layer13").hide();
    });
    
    $("map .city14").on('mouseover', function(){
       $(".city_layer14").stop().show();
    });
    $("map .city14").on('mouseout', function(){
       $(".city_layer14").hide();
    });
    
    $("map .city15").on('mouseover', function(){
       $(".city_layer15").stop().show();
    });
    $("map .city15").on('mouseout', function(){
       $(".city_layer15").hide();
    });
    
    /* sub-store-sch 더보기 버튼*/
    
   
    var height_f = $(".ss_contents2-tb").height();
    var max_height_1 = 600;
    $(".ss_contents2-tb").css({height:height_f});
    $(".ss_content2_more_btn").click(function(){
        var add_height = $(".ss_contents2-tb").height()+ 200;
        if(add_height >= max_height_1){
            add_height = max_height_1;
        }
        $(".ss_contents2-tb").animate({height:add_height}, "fast");
        
    });
    
    /* sub-FAQ 아코디언 */
    $(".ck1_q").on('click', function(){
        $(this).next().slideToggle();
        
    });
    
    

    
    /* join2.html 약관동의 체크 */
        $(".j1_ok").on("click",function(){
            var chk1_Ag = document.getElementById("agm-chk");
        
            if(chk1_Ag.checked == false){
                alert("서비스 동의약관에 동의해주세요.");
                return;
            }else{
                location.href = "sub-join_3.html";
            }
            
        });
        
        
   
    /* 투썸app */
    var defaultTop=parseInt($(".app-img").css("top"));   //top값
    //parseInt정수값을 리턴시키거나 텍스트로 된 값을 숫자로 구현할때 쓰는 함수
    $(window).on("scroll",function(){
        var scv=$(window).scrollTop();  //스크롤링할때 그 값을 담을 변수 설정
        $(".app-img").stop().animate({top:scv+defaultTop+"px"},800);        
    });
    
    /* 온라인예약 로그인 해주세요. */ 
    $(".order-c1-btn1").on("click",function(){
        alert("로그인 해주세요.");
        $(location).attr('href', 'sub-login.html');
        return;
    });
     $(".order-c1-btn2").on("click",function(){
        alert("로그인 해주세요.");
        $(location).attr('href', 'sub-login.html');
        return;
    });
    
    /* 회원가입 비밀번호 일치 */
    
    var $pwd = $("input[name=pwd]");
    var $pwd1 = $("input[name=pwd1]"); 
    
    $form = $("form");
    $(".info_submit").click(function(){
        if($pwd.val()!=$pwd1.val()){
            alert("비밀번호가 일치하지 않습니다.");
            $("input[name=pwd]").val("").focus();
            return;
        }
        $forn.attr("action","signup.do");
        $form.submit();
        
    });
    
    /* 회원가입 이메일 형식 */
    $(".info_submit").on("click",function(){
        var txt = $("#info_email").val();
    if(txt.indexOf("@")<1){
        alert("이메일 형식으로 입력해주세요");
        $("#info_email").val("").focus();
        }
    });
    
    /* 회원가입 아이디 입력 */
        $(".info_submit").on("click",function(){
        if ($("#info_id").val() == "") {
                 alert("아이디를 꼭 입력하세요!");
                 $("#info_id").focus();
        }
        });
    
    
    
    /* footer 계열사 바로가기 클릭 */
    $(".CJ_btn").children("a").on("click", function(){
        $(".CJ_open").toggle();
        $(".CJ_btn").children("a").children("span").attr("background-position","23px -120px");
        
        
    });
    
    
    
});













