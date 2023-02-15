(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

getData()


function getData() {
    // use the get() shorthand method to request a resource
    console.log("getting data")
    $.get("http://localhost:3000/", successFn);
    
    // the load() shorthand method performs the common task of retrieving HTML content
    // and inserts the returned content into the specified element. 
    //$("#content").load("testdata.html");
    
    // you can also specify a portion of the content to load
    //$("#content").load("testdata.html #p2");
}

function successFn(result) {
    console.log("Setting result");
    // $("#ajaxContent").append(result);
}





// $(document).ready(function () {
//     $("h1").css("color", "#0088ff");
// });


},{}]},{},[1]);
