(function(){
    'use strict';
    function onSubscribeEvent () {
        alert('Thank you for your interest! ');
    }
    window.app  = {
        onSubscribe: onSubscribeEvent
    }
}());