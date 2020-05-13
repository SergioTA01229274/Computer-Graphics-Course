"use strict";

function changeMode(mode) {
    if (mode==1) {
        document.getElementById('editionB').disabled = true;
        document.getElementById('animationB').disabled = false;
        document.getElementById('animationBoard').style.display = 'none';
        document.getElementById('objectsTable').style.display = 'block';
        document.getElementById('propertiesBoard').style.display = 'flex';
    } else {
        document.getElementById('animationB').disabled = true;
        document.getElementById('editionB').disabled = false;
        document.getElementById('animationBoard').style.display = 'flex';
        document.getElementById('objectsTable').style.display = 'none';
        document.getElementById('propertiesBoard').style.display = 'none';
    }
}


function startMode() {
    changeMode(1);
}