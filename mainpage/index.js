// 서비스소개 페이지
$(document).ready(function(){
    if(matchMedia("screen and (min-width: 769px)").matches){
    $('.clickCon1>dt').click(function(){
        $('.clickCon1>dt.on').removeClass('on')
        $(this).addClass('on')
    })
    $('.clickCon2>dt').click(function(){
        $('.clickCon2>dt.on').removeClass('on')
        $(this).addClass('on')

        $('.clickCon2>dd').removeClass('on');
        $(this).next().addClass('on');
    })
    $('.clickCon3>dt').click(function(){
        $('.clickCon3>dt.on').removeClass('on')
        $(this).addClass('on')
    })
}

if(matchMedia("screen and (max-width: 768px)").matches){
    let menuS = false;
    //swiper 
    //왜 아래에 동그라미들이 안나오는 걸까요..?
    let swiper2 = new Swiper(".bubu", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
    
//왜 안될까요
    $('#m').click(function(){

        if (menuS == false){
            $(this).next().addClass('on');
            menuS = true;
        } else {
            $(this).next().removeClass('on');
            menuS= false;
        }
    })
    }
    
})



//구매 페이지
$(document).ready(function(){
    $('#table').click(function(e){
        e.preventDefault()
    })
    if(matchMedia("screen and (min-width: 769px)").matches){
    // $('#table>dt>a>img').click(function(){alert('gd')})

    $('#table>dt').click(function(){
        let idx = $(this).index();
        console.log(idx/2);
        $(".flag>h2").removeClass("on3");
        $(".flag>h2").eq(idx/2).addClass("on3")

        $('#table>dt').removeClass('on')
        $(this).addClass('on')

        $('#table>dd').removeClass('on');
        $(this).next().addClass('on');
    })

      

      //지구본 위에 있는 국기들을 클릭해도 옆에 있는 dd가 변할 수 없는건가?

    $('.flag>a>img').click(function(){
        $('#table>dt.on').removeClass('on')
        $(this).addClass('on')

        $('#table>dd').removeClass('on');
        $(this).next().addClass('on');
    })
    
    //모바일 버전에서도 span태그를 클릭해서
    $('.content_purchase .flag>h2.sB').click(function(){
        $('.content_purchase #table>dt.on').removeClass('on')
        $(this).addClass('on')

        $('.content_purchase #table>dd.on').removeClass('on')
        $(this).next().addClass('on');

    })
}
    if(matchMedia("screen and (max-width: 768px)").matches){
        $(".flag>h2").click(function(){
            let idx = ($(this).index()-1)/2;
            console.log(idx)


            $(".flag>h2").removeClass('on3');
            $(this).addClass('on3')

            $('#table>dt').removeClass('on')
            $('#table>dt').eq(idx).addClass('on')
    
            $('#table>dd').removeClass('on');
            $('#table>dt').eq(idx).next().addClass('on');
        
        let a =$('#table>dd').eq(idx).find("ul").height();
            $("#table").height(a)
        

        console.log(a)
        })
}
})

//고객지원 서비스
$(document).ready(function(){
    if(matchMedia("screen and (min-width: 769px)").matches){

        let swiper = new Swiper(".babo", {
            navigation: {
              nextEl: ".right",
              prevEl: ".left",
            },
          });


        $(".jd").click(function(){
            // alert("ㅎㅇ")
        })
        $('.jd').on('mousewheel DOMMouseScroll',function(event){
            let E = event.originalEvent;
            let delta = 0;
            if(E.detail){
                delta = E.detail * -40;
            }else{
                delta = E.wheelDelta;
            }
            $('html,body').clearQueue();
            if(delta>0){
                //마우스 휠을 올렸을 때 
                let posDown = $(this).prev().offset().top;
                $('html,body').animate({scrollTop:posDown},800)
        return false;
            }else{
                //마우스 휠을 내렸을 때 
                let posTop = $(this).next().offset().top;
                $('html,body').stop().animate({scrollTop:posTop},800)
            }
    
        });
    
    
        $('.gd').on('mousewheel DOMMouseScroll',function(event){
            let E = event.originalEvent;
            let delta = 0;
            if(E.detail){
                delta = E.detail * -40;
            }else{
                delta = E.wheelDelta;
            }
            $('html,body').clearQueue();
            if(delta>0){
                //마우스 휠을 올렸을 때 
                let posDown2 = $('.con2').scrollTop(0);
                $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
        return false;
            }else{
                //마우스 휠을 내렸을 때 
                let posTop = $(this).next().offset().top;
                $('html,body').stop().animate({scrollTop:posTop},800)
            }
    
        });
    
    
    
        //진짜 머리가 안돌아가요 선생님... 가까이 오기라도 한걸까요..흑..
        // $('.flag>.point').click(function(){
        //     let i = -1;
        //     if (i < 3) {
        //         i++;
        //         return i;
        //     } else {
        //         return false;
        //     }
        //     // let al = $(this).index();
        //     // alert(al) //2,4,6
        //     let next = $('.flag').next();
        //     let child = next.children('dt').eq(i)
        //     let child2 = next.children('dd').eq(i)
    
        //     console.log(child) //dt를 제대로 찾아냄
        //     console.log(child2) 
        //     console.log(next) //dl#table로 출력
    
        //     child.removeClass('on')
        //     $(this).addClass('on')
    
        //     child2.removeClass('on')
        //     $(this).next().addClass('on');
        // });
    
        $('.flag>.point').click(function(){
            let idx = $(this).attr("dataNumber")
            console.log(idx);
    
            $(".flag>h2").removeClass("on3");
            $(".flag>h2").eq(idx).addClass("on3")
    
            $('#table>dt').removeClass('on')
            $('#table>dt').eq(idx).addClass('on')
    
            $('#table>dd').removeClass('on');
            $('#table>dt').eq(idx).next().addClass('on');
        });
    }

})


//메인페이지
$(document).ready(function(){
    if(matchMedia("screen and (min-width: 769px)").matches){
    $('.contentsWrap').on('mousewheel DOMMouseScroll',function(event){
        let E = event.originalEvent;
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        }
        $('html,body').clearQueue();
        if(delta>0){
            //마우스 휠을 올렸을 때 
           
        }else{
            //마우스 휠을 내렸을 때 
            let posTop = $(this).next().offset().top;
            
            $('html,body').stop().animate({scrollTop:posTop},800)
        }

    });
    $('.content>div').on('mousewheel DOMMouseScroll',function(event){
        console.log(event);
        let E = event.originalEvent;
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        }
        $('html,body').clearQueue();
        if(delta>0){
            //마우스 휠을 올렸을 때 
            if($(this).attr("class")=="c1 gd on"){
                $('html,body').stop().animate({scrollTop:0},800)
            }else{
                let posTop = $(this).prev().offset().top;
                $('html,body').stop().animate({scrollTop:posTop},800)
            }
            
        }else{
            //마우스 휠을 내렸을 때 
            let posTop = $(this).next().offset().top;
            console.log(posTop)
            $('html,body').stop().animate({scrollTop:posTop},800)
        }

    });
}

})

//고객지원 서비스
$(document).ready(function(){
    if(matchMedia("screen and (min-width: 769px)").matches){
    $('.support').on('mousewheel DOMMouseScroll',function(event){
        let E = event.originalEvent;
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        }

        if(delta>0){
            //마우스 휠을 올렸을 때 
            let posDown2 = $('.support>.down').scrollTop(0);
            $( 'html, body' ).animate( { scrollTop : posDown2 }, 800 );
        }else{
            //마우스 휠을 내렸을 때 
            let posTop = $(this).next().offset().top;
            $('html,body').stop().animate({scrollTop:posTop},800)
        }

    });
}
})


//모바일 메뉴 뜨게하기
//분명 됐는데 왜 안될까 ㅠ
// $(document).ready(function(){

//     let status = 'hidden';

//     $('#m').click(function(){
//         if (status == 'hidden') {
//             $('#m').next().animate({width:'250px'},800)
//             status = 'show';
//         } else {
//             $('#m').next().animate({width:'0px'},800)
//             status = 'hidden';
//         }

//     })
// })


//스크롤 애니메이션 

$(window).scroll(function(){
    if(matchMedia("screen and (min-width: 769px)").matches){

        let windowHight = $(window).height()*0.5
        let scrolltop = $(window).scrollTop()
        // let tagTop = $(".con1").offset().top
        console.log(scrolltop)

        
        $(".c1,.c2,.c3").each(function(){
            if(scrolltop+windowHight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    }

    })

    $(window).scroll(function(){
        if(matchMedia("screen and (min-width: 769px)").matches){
            
        let windowHight = $(window).height()*0.8
        let scrolltop = $(window).scrollTop()

        
        $(".con2,.con3").each(function(){
            if(scrolltop+windowHight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
        }

    $('.pageEnd').click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
    })

    })

