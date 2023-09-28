for (var i = 0; i < 2; i++) {
    var h1Element = document.createElement('h1');
    h1Element.textContent = 'Hello World ' + (i + 1);
    document.getElementById('container').appendChild(h1Element);
}
