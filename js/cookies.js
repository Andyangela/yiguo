;
(function() {
    var cookie = {
        getCookies: function(name) {
            var cookieName = name + "="
            var cookies = document.cookie.split("; ")
            for (var i = 0; i < cookies.length; i++) {
                if (cookies[i].indexOf(cookieName == 0)) {
                    return cookies[i].slice(cookieName.length)
                }
            }
            return ""
        },
        setCookies: function(name, value, options) {
            var options = options || {};
            var expires = options.expires || {}
            var path = options.path ? ";path=" + options.path : ""
            var domain = options.domain ? ";Domain=" + options.domain : ""
            if (expires) {
                var date = new Date(Date.now() + expires).toUTCString();
                expires = "; expires=" + date;
            }
            document.cookie = name + "=" + value + expires + path + domain
        },
        removeCookies: function(name, options) {
            var options = options || {};
            var path = options.path ? ";path=" + options.path : ""
            var domain = options.domain ? ";Domain=" + options.domain : ""
            var date = new Date(1000).toUTCString();
            var expires = "; expires=" + date;
            document.cookie = name + "=1" + expires + path + domain
        }
    }
    window.cookie = cookie
}())