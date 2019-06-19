// 隔离作用域，避免全局变量的污染
!(function(){
    function setHtmlFontSize(){
        // 1.获取手机屏幕宽度
        var w = document.documentElement.getBoundingClientRect().width; //如果用window.innerwidth的话，改变窗口大小，不能够及时获取窗口大小
        if(w>750){
            w = 750;
            document.documentElement.style.width=w+"px";
            document.documentElement.style.margin="0 auto";
        }
        // console.log(w);
        // 2.根据屏幕宽度计算html font-size大小, 7.5指的是设计稿的宽度为750，如果在公司中设计稿的尺寸为720，那么应该除以7.2
        var f = w/12.42;
        // 3.设置html 的font-szie
        document.documentElement.style.fontSize=f+"px";
    }
    setHtmlFontSize();
    var t;
    window.addEventListener("resize",function(){
        // setTimeout 是为了解决在苹果手机上的闪屏情况
        clearTimeout(t);
        t = setTimeout(function(){
            setHtmlFontSize();
        },300)
        
    })
})();