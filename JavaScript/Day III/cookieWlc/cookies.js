function setCookie(cookieName, cookieValue, days) {
    try {
        if (arguments.length == 0 || arguments.length < 2 || arguments.length > 3) {
            throw new RangeError("Wrong number of parameters!")
        } else if (Math.sign(days) == -1) {
            throw new Error("Days can't be negative!");
        } else if (isFinite(cookieName)) {
            throw new Error("Cookie name can only be of string stype!");
        }
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = cookieName + "=" + cookieValue + expires;
        
    } catch (e) {
        return e.message;
    }
}

function getCookie(cookieName) {
    try {
        if (arguments.length == 0) {
            throw new RangeError("Must enter a cookie name!");
        }

        var nameEQ = cookieName + "=";
        var split1 = document.cookie.split(';');
        for(var i = 0; i < split1.length; i++) {
            var split2 = split1[i].trim();
            if (split2.indexOf(nameEQ) == 0)
                return split2.substring(nameEQ.length,split2.length);
        }
        return null;
    } catch (e) {
        return e.message;
    }
}
function eraseCookie(cookieName) {
    try {
        if (arguments.length == 0) {
            throw new RangeError("Must enter a cookie name!");
        }
        document.cookie = cookieName +'=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    catch (e) {
        return e.message;
    }
}
function allCookieList() {
    var cookieAssoc = [];
    var splitCookie = document.cookie.split(";");
    for (i = 0; i < splitCookie.length; i++) {
        var cookieKey = splitCookie[i].split("=")[0];
        var cookieValue = splitCookie[i].split("=")[1];
        cookieAssoc[cookieKey.trim()] = cookieValue;
    }
    return cookieAssoc;
}

function cookieExists(cookieName) {
    try {
        if (arguments.length == 0) {
            throw new Error("Must enter a cookie name!");
        }
    return getCookie(cookieName) != null ? true : false;
    }
    catch (e) {
        return e.message;
    }
}