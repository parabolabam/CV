(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5212d816ecd12fee6f61":function(e,n,t){var u=t("8af190b70a6bc55c6f1b");function r(e){return"function"!==typeof matchMedia?null:matchMedia(e)}function a(e){return e?{media:e.media,matches:e.matches}:null}function c(e){var n=u.useState((function(){return a(r(e))})),t=n[1],c=u.useCallback((function(e){return t(a(e))}),[t]);return u.useEffect((function(){var n=r(e);return c(n),n.addListener(c),function(){return n.removeListener(c)}}),[c,e]),n[0]}e.exports={useMedia:c,useMediaPredicate:function(e){var n=c(e);return n&&n.matches||!1}}}}]);