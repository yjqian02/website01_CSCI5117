function myFunction() {
    console.log("loaded");
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(document.getElementById('fname').value));
    document.querySelector('ol').appendChild(node);
}