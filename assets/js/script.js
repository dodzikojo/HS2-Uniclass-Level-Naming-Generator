
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

