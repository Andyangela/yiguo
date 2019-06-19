;(function(){
    var cookie={
        getCookievalue:function(name){   //name是cookie名
            var cookieName = name+"=";
            var cookies = document.cookie.split("; ");
            for (var i = 0; i < cookies.length; i++) {
                if (cookies[i].indexOf(cookieName)!=-1) {
                   return cookies[i].slice(cookieName.length);
                }
            }
            return ""
        },
        setCookie:function(name,value,options){
            var options = options || {};
            var expires = options.expires || "";
            var path = options.path ? ";path=" + options.path : "";
            var domain = options.domain ? ";domain=" + options.domain : "";
            if (expires) {
                var date = new Date(Date.now() + expires*24 * 60 * 60 * 1000).toUTCString(); //过期时间
                expires=";expires="+date;
            }
            document.cookie=name+"="+value+expires+path+domain;
        },
        removeCookie:function(name,options){
            var options=options||{};
            var path=options.path?";path"+options.path:"";
            var domain=options.domain?";domain"+options.domain:"";
            var date=new Date(1).toUTCString();
            expires=";expires="+date;
            document.cookie=name+"=1"+expires+path+domain;
        }
    }
    window.cookie=cookie;
}())