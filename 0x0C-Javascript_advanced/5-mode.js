// Changing DOM with closure

function changeMode(size, weight, transform, background, color){
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
}

function main() {
    // Modes
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // create paragraph
    let p = document.createElement('p');
    let text = document.createTextNode('Welcome Holberton!');
    p.appendChild(text);
    document.body.appendChild(p);

    // Create Buttons
    function createBtn(btnName, id, mode) {
        let btn = document.createElement('button');
        btn.innerHTML = btnName;
        btn.id = id;
        document.body.appendChild(btn);
        document.getElementById(id).onclick = mode;
    }

    createBtn('Spooky', 'spookyId', spooky);
    createBtn('Dark Mode', 'darkModeId', darkMode);
    createBtn('Scream Mode', 'screamModeId', screamMode);
}

main();
