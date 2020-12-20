'use strict';
var container = document.querySelector(".container");
container.style.background = "brown";
container.style.width = "660px";
container.style.height = "660px";
container.style.paddingLeft = "60px";
container.style.paddingBottom = "60px";
container.style.margin = "0 auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";

function my_initiation() {
    var cell = document.createElement("div");
    cell.className = "cell";
    cont.append(cell);
    cell.style.width = "60px";
    cell.style.height = "60px";
    cell.style.margin = "0px";
    cell.style.padding = "0px";
    cell.style.fontSize = "40px";
    cell.style.fontWeight = "bold";
    cell.style.textAlign = "center";

}
window.onload = my_initiation;

for (var n = 0; (n != 121); n++) {
    window.onload = my_initiation();
};

var masCell = document.querySelectorAll(".cell");
for (var i = 0; (i < masCell.length); i++) {
    var c;
    if (i % 2 == 0) {
        c = "dimgrey";
    } else {
        c = "bisque";
    }
    masCell[i].style.background = c;
    if ((i > 33) && (i < 42)) {
        masCell[i].innerText = "П";
    };
    if ((i > 88) && (i < 97)) {
        masCell[i].innerText = "П";
    };

    masCell[23].innerText = "Л";
    masCell[24].innerText = "К";
    masCell[25].innerText = "С";
    masCell[26].innerText = "Ф";
    masCell[27].innerText = "К";
    masCell[28].innerText = "С";
    masCell[29].innerText = "К";
    masCell[30].innerText = "Л";

    masCell[100].innerText = "Л";
    masCell[101].innerText = "К";
    masCell[102].innerText = "С";
    masCell[103].innerText = "Ф";
    masCell[104].innerText = "К";
    masCell[105].innerText = "С";
    masCell[106].innerText = "К";
    masCell[107].innerText = "Л";

    for (var f = 89; (f < 108); f++) {
        masCell[f].style.color = "white";
    }
    for (var f = 0; (f < 22); f++) {
        masCell[f].style.background = "brown";
    }
    for (var f = 110; (f < 121); f++) {
        masCell[f].style.background = "brown";
    }

    masCell[22].style.background = "brown";
    masCell[33].style.background = "brown";
    masCell[44].style.background = "brown";
    masCell[55].style.background = "brown";
    masCell[66].style.background = "brown";
    masCell[77].style.background = "brown";
    masCell[88].style.background = "brown";
    masCell[99].style.background = "brown";
    masCell[31].style.background = "brown";
    masCell[32].style.background = "brown";
    masCell[42].style.background = "brown";
    masCell[43].style.background = "brown";
    masCell[53].style.background = "brown";
    masCell[54].style.background = "brown";
    masCell[64].style.background = "brown";
    masCell[65].style.background = "brown";
    masCell[75].style.background = "brown";
    masCell[76].style.background = "brown";
    masCell[86].style.background = "brown";
    masCell[87].style.background = "brown";
    masCell[97].style.background = "brown";
    masCell[98].style.background = "brown";
    masCell[108].style.background = "brown";
    masCell[109].style.background = "brown";

    masCell[12].innerText = "A";
    masCell[13].innerText = "B";
    masCell[14].innerText = "C";
    masCell[15].innerText = "D";
    masCell[16].innerText = "E";
    masCell[17].innerText = "F";
    masCell[18].innerText = "G";
    masCell[19].innerText = "H";

    masCell[97].style.color = "black";
    masCell[99].style.color = "black";

    masCell[22].innerText = "1";
    masCell[33].innerText = "2";
    masCell[44].innerText = "3";
    masCell[55].innerText = "4";
    masCell[66].innerText = "5";
    masCell[77].innerText = "6";
    masCell[88].innerText = "7";
    masCell[99].innerText = "8";

}