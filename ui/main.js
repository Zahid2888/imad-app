var button = document.getElementById('counter');

var counter = 0;
button.onClick = function() {
    counter = counter + 1;
    var span = document.getElementById('count')
    span.innerHtml = counter.toString();
}

var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onClick = function() {
    var interval = setInterval(moveRight,100);
    
};
