$(function(){
    $('.menu').mouseover(function(){
        $(this).parent().addClass('on');
        $(this).next().slideDown()
    });
    $('.gnb-item').mouseleave(function(){
        $(this).removeClass('on');
        $(this).find('ul').slideUp()
    });
    


/*맨위로 scrolling*/


    var defaultTop=parseInt($("#top").css("top"));   //top값
    //parseInt정수값을 리턴시키거나 텍스트로 된 값을 숫자로 구현할때 쓰는 함수
    $(window).on("scroll",function(){
        var scv=$(window).scrollTop();  //스크롤링할때 그 값을 담을 변수 설정
        $("#top").stop().animate({top:scv+defaultTop+"px"},500);        
    });

});


/*map*/
   function initMap() {
        var uluru = {lat:37.458544, lng:126.706552};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom:16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }