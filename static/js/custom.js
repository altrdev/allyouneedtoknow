/**
 * Created by altrdev on 07/03/20.
 */

document.addEventListener("DOMContentLoaded", function(event) {
    language();
});

function language() {
    let lang;
    if (!getCookie("lang")) {
        lang = navigator.language.slice(0, 2);
        setCookie("lang", lang, 7);
    }

    lang = getCookie("lang");
    if(lang !== document.getElementsByTagName("html")[0].lang) {
        location.href = document.getElementById("translate_page_" + lang).href;;
    }
}

function setCookie(name, value, days) {
    let d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function getCookie(name) {
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function setLanguage(lang) {
    setCookie("lang", lang, 7);
    location.href = document.getElementById("translate_page_" + lang).href;
}
