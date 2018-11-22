//tab选项卡
var newNav = document.getElementsByClassName("title-right")[0].getElementsByTagName("li"),
    newCnt = document.getElementsByClassName("new-list"),
    proCity = document.getElementsByClassName("pro-city")[0].getElementsByTagName("li"),
    list = document.getElementsByClassName("list-hid");
//传参顺序：选项按钮集合，内容盒子集合，触发事件
tabs(proCity,list,"click");
tabs(newNav,newCnt,"mouseover");
function tabs(ele,cnt,eve){
    var len = cnt.length;
    for(var i=0;i<len;i++){
        (function(i){
            ele[i]["on"+eve] = function(){
                for(var j=0;j<len;j++){
                    ele[j].className = "";
                    cnt[j].style.display = "none";
                }
                ele[i].className = "select";
                cnt[i].style.display = "block";
            }
        })(i)
    }
}
//轮播图
var img = document.getElementsByClassName("img-li"),
    text = document.getElementsByClassName("word-li"),
    line = document.getElementsByClassName("red-line")[0],
    textWidth = text[0].clientWidth,
    firstLeft = text[0].offsetLeft,
    imgNum = img.length-1,
    imgIndex = 0,
    timer;

initcarousel();
function initcarousel(){
    setTimer();
    initEvent();
}
function initEvent(){
    var textBox = document.getElementsByClassName("banner-title")[0],
        box = document.getElementsByClassName("banner-cnt")[0],
        next = document.getElementsByClassName("next")[0],
        prev = document.getElementsByClassName("prev")[0];
    next.onclick = function(){
        nextImg(1);
    };
    prev.onclick = function(){
        nextImg(0);
    };
    textBox.onmouseover = function(e){
        var target = e.target;
        var left = target.offsetLeft;
        imgIndex = parseInt((left-firstLeft)/textWidth);
        for(var i=0; i<=imgNum; i++){
            text[i].className = "word-li";
            img[i].className = "img-li";
        }
        target.className = "word-li select";
        img[imgIndex].className = "img-li on";    
        line.style.left = left +"px";
    };
    box.onmouseover = function(){
        clearInterval(timer);
    };
    box.onmouseout = setTimer;
}
function nextImg(key){
    img[imgIndex].className = "img-li";
    text[imgIndex].className = "word-li";
    if(key){
        imgIndex = ++imgIndex>imgNum?0:imgIndex;
    }else{
        imgIndex = --imgIndex<0?imgNum:imgIndex;
    }
    img[imgIndex].className = "img-li on";
    text[imgIndex].className = "word-li select";
    line.style.left = firstLeft+ textWidth*imgIndex +"px";
}
function setTimer(){
    timer = setInterval(function(){
        nextImg(1);
    },3000)
}
//导航栏的显示动画
navAnimation();
function navAnimation(){
    var nav = document.getElementsByTagName("nav")[0],
    navTop = nav.offsetTop + nav.clientHeight,
    navKey = true;
    document.addEventListener("scroll",function(){
        var scroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(scroll>navTop && navKey){
            nav.className = "sc-top";
            navKey = false;
        }else if(scroll<navTop && !navKey){
            nav.className = "";
            navKey = true;
        }
    })
}
//顶部地址栏的显示
addressShow();
function addressShow(){
    var city = document.getElementsByClassName("top-city")[0],
        hid = document.getElementsByClassName("hid-address")[0],
        close = document.getElementsByClassName("close-btn")[0];
    city.onclick = function(){
        hid.style.display = "block";
        this.className = "top-city click";
        close.onclick = function(){
            hid.style.display = "none";
            city.className = "top-city";    
        }
    }
}
//右侧边栏 账号登录
var login = document.getElementsByClassName("login-wrap")[0];
asideEvent();
function asideEvent(){
    var box = document.getElementsByClassName("aside-ct")[0],
        accTop = box.offsetTop;
    document.getElementsByClassName("zhang")[0].onmouseenter = function(){
        login.style.top = accTop + "px";
        login.style.right = 36 +"px";
    }
    document.getElementsByTagName("aside")[0].onmouseleave = hidden;
    document.getElementsByClassName("login-close")[0].onclick = hidden;
    window.addEventListener("resize",function(){
        accTop = box.offsetTop;
    });
}
function hidden(){
    login.style.right = -276 +"px";
}
//左侧边栏 滚动
leftAside();
function leftAside(){
    var leftBar = document.getElementsByClassName("hd-position")[0],
        barTop = leftBar.offsetParent.offsetTop-80,
        barKey = true;
    window.addEventListener("scroll",function(){
        var scroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(scroll>=barTop && barKey){
            setTimeout(function(){
                leftBar.className = "hd-position fixed";            
            },150);
            barKey = false;
        }else if(scroll<(barTop-180) && !barKey){
            setTimeout(function(){
                leftBar.className = "hd-position";  
            },150)
            barKey = true;      
        }
    })
}