
function functionH1() {
    var element = document.getElementById("heading");

    if (element.classList) { 
        element.classList.toggle("h1");
    } else {
        // For IE9
        var classes = element.className.split(" ");
        var i = classes.indexOf("h1");
    
        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("h1");
            element.className = classes.join(" "); 
    }
}

function functionH2() {
    var element = document.getElementById("heading");

    if (element.classList) { 
        element.classList.toggle("h2");
    } else {
        // For IE9
        var classes = element.className.split(" ");
        var i = classes.indexOf("h2");
    
        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("h2");
            element.className = classes.join(" "); 
    }
}

function functionH3() {
    var element = document.getElementById("heading");

    if (element.classList) { 
        element.classList.toggle("h3");
    } else {
        // For IE9
        var classes = element.className.split(" ");
        var i = classes.indexOf("h3");
    
        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("h3");
            element.className = classes.join(" "); 
    }
}
