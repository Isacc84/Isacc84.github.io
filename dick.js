const logo = document.getElementById("logo");
const title = document.getElementById("title");
const titletext = document.getElementById("titletext");
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const isPhone = /mobile/i.test(navigator.userAgent);

function checkElement(Ele) {
    return Ele == null || Ele == undefined ? false : true;
}

function autoTable(windowHeight, windowWidth) {
    if (checkElement(windowHeight) && checkElement(windowWidth) && !isPhone) {
        if (windowWidth < windowHeight) {
            if (checkElement(logo)) logo.style.marginLeft = "45%";
            if (checkElement(title)) title.style.height = parseInt(windowWidth * 0.06) + "px";
            if (checkElement(logo)) logo.style.height = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.width = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.marginTop = parseInt(windowHeight * 0.015) + "px";
            if (checkElement(titletext)) titletext.style.marginTop = parseInt(windowHeight * 0.015) + "px";
        } else {
            if (checkElement(title)) title.style.height = parseInt(windowWidth * 0.041) + "px";
            if (checkElement(logo)) logo.style.marginLeft = "5%";
            if (checkElement(logo)) logo.style.height = parseInt(windowWidth * 0.02) + "px";
            if (checkElement(logo)) logo.style.width = parseInt(windowWidth * 0.02) + "px";
            if (checkElement(logo)) logo.style.marginTop = parseInt(windowHeight * 0.03) + "px";
            if (checkElement(titletext)) titletext.style.marginTop = parseInt(windowHeight * 0.03) + "px";
        }
    }
    if (checkElement(windowHeight) && checkElement(windowWidth) && isPhone) {
        if (windowWidth < windowHeight) {
            if (checkElement(logo)) logo.style.marginLeft = "40%";
            if (checkElement(title)) title.style.height = parseInt(windowWidth * 0.12) + "px";
            if (checkElement(logo)) logo.style.height = parseInt(windowWidth * 0.07) + "px";
            if (checkElement(logo)) logo.style.width = parseInt(windowWidth * 0.07) + "px";
            if (checkElement(logo)) logo.style.marginTop = parseInt(windowHeight * 0.015) + "px";
            if (checkElement(titletext)) titletext.style.marginTop = parseInt(windowHeight * 0.015) + "px";
            if (checkElement(titletext)) titletext.style.fontSize = parseInt(windowWidth * 0.004) + "em";
        } else {
            if (checkElement(logo)) logo.style.marginLeft = "5%";
            if (checkElement(title)) title.style.height = parseInt(windowWidth * 0.06) + "px";
            if (checkElement(logo)) logo.style.height = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.width = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.marginTop = parseInt(windowHeight * 0.02) + "px";
            if (checkElement(titletext)) titletext.style.marginTop = parseInt(windowHeight * 0.015) + "px";
            if (checkElement(titletext)) titletext.style.fontSize = parseInt(windowWidth * 0.003) + "em";
        }
    }
}
autoTable(windowHeight, windowWidth);

window.addEventListener('resize', () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    autoTable(windowHeight, windowWidth);
    console.log(isPhone, windowHeight, windowWidth);
});
