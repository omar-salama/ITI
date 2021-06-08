function setColor() {
    var
        r = document.querySelector('#r'),
        g = document.querySelector('#g'),
        b = document.querySelector('#b');

    var color = `rgb(${r.value}, ${g.value}, ${b.value})`;

    document.getElementById('text').style.color = color;
}

r.addEventListener('input', setColor);
g.addEventListener('input', setColor);
b.addEventListener('input', setColor);