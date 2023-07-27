const logo = document.getElementById("logo");
const title = document.getElementById("title");
const svg = document.getElementById("svg");
const help = document.getElementById("Help");
const ware = document.getElementById("ware");
const AIM = document.getElementById("AIM");
const MoneyReward = document.getElementById("MoneyReward");
const mate = document.getElementById("mate");
const titletext = document.getElementById("titletext");
const fisttitle = document.getElementById("fistTitle");
const connect = document.getElementById("connect");
const login = document.getElementById("login");
const newMan = document.getElementById("new");
const follow = document.getElementById("follow");
const follows = document.getElementById("followS");
const memory = document.getElementById("memory");
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
            if (checkElement(title)) title.style.height = parseInt(windowHeight * 0.069) + "px";
            if (checkElement(logo)) logo.style.height = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.width = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.marginTop = parseInt(windowHeight * 0.015) + "px";
            if (checkElement(titletext)) titletext.style.marginTop = parseInt(windowHeight * 0.015) + "px";
            if (checkElement(titletext)) titletext.style.fontSize = parseInt(windowHeight * 0.028) + "px";
        } else {
            if (checkElement(title)) title.style.height = parseInt(windowHeight * 0.09) + "px";
            if (checkElement(fisttitle)) fisttitle.style.height = parseInt(windowHeight * 0.06) + "px";
            if (checkElement(logo)) logo.style.marginLeft = "20%";
            if (checkElement(logo)) logo.style.height = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.width = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.marginTop = parseInt(windowHeight * 0.01) + "px";
            if (checkElement(titletext)) titletext.style.marginTop = parseInt(windowHeight * 0.021) + "px";
            if (checkElement(titletext)) titletext.style.fontSize = parseInt(windowHeight * 0.039) + "px";
            if (checkElement(help)) help.style.marginTop = parseInt(windowHeight * 0.035) + "px";
            if (checkElement(help)) help.style.fontSize = parseInt(windowHeight * 0.018) + "px";
            if (checkElement(help)) help.style.marginLeft = "6%";
            if (checkElement(MoneyReward)) MoneyReward.style.marginTop = parseInt(windowHeight * 0.035) + "px";
            if (checkElement(MoneyReward)) MoneyReward.style.fontSize = parseInt(windowHeight * 0.018) + "px";
            if (checkElement(AIM)) AIM.style.marginTop = parseInt(windowHeight * 0.035) + "px";
            if (checkElement(AIM)) AIM.style.fontSize = parseInt(windowHeight * 0.018) + "px";
            if (checkElement(mate)) mate.style.marginTop = parseInt(windowHeight * 0.035) + "px";
            if (checkElement(mate)) mate.style.fontSize = parseInt(windowHeight * 0.018) + "px";
            if (checkElement(ware)) ware.style.marginTop = parseInt(windowHeight * 0.035) + "px";
            if (checkElement(ware)) ware.style.fontSize = parseInt(windowHeight * 0.018) + "px";
            if (checkElement(svg)) svg.style.marginTop = parseInt(windowHeight * 0.03) + "px";
            if (checkElement(login)) login.style.marginTop = parseInt(windowHeight * 0.02) + "px";
            if (checkElement(login)) login.style.fontSize = parseInt(windowHeight * 0.0155) + "px";
            if (checkElement(login)) login.style.marginLeft = "3%";
            if (checkElement(svg)) svg.style.marginLeft = "0.3%";
            if (checkElement(connect)) connect.style.marginTop = parseInt(windowHeight * 0.02) + "px";
            if (checkElement(connect)) connect.style.fontSize = parseInt(windowHeight * 0.0155) + "px";
            if (checkElement(connect)) connect.style.marginLeft = "65.5%";
            if (checkElement(newMan)) newMan.style.marginTop = parseInt(windowHeight * 0.035) + "px";
            if (checkElement(newMan)) newMan.style.fontSize = parseInt(windowHeight * 0.018) + "px";
            if (checkElement(memory)) memory.style.marginTop = parseInt(windowHeight * 0.035) + "px";
            if (checkElement(memory)) memory.style.fontSize = parseInt(windowHeight * 0.018) + "px";
            if (checkElement(follow)) follow.style.marginTop = parseInt(windowHeight * 0.029) + "px";
            if (checkElement(follow)) follow.style.fontSize = parseInt(windowHeight * 0.018) + "px";
            if (checkElement(follow)) follow.style.marginLeft = "6%";
            if (checkElement(follow)) follow.style.width = parseInt(windowWidth * 0.001 * 69.9) + "px";
            if (checkElement(follow)) follow.style.lineHeight = parseInt(windowWidth * 0.001 * 20.9) + "px";
            if (checkElement(follows)) follows.style.fontSize = parseInt(windowHeight * 0.018) + "px";
        }
    }
    if (checkElement(windowHeight) && checkElement(windowWidth) && isPhone) {
        if (windowWidth < windowHeight) {
            if (checkElement(logo)) logo.style.marginLeft = "34.999999999999%";
            if (checkElement(title)) title.style.height = parseInt(windowHeight * 0.13) + "px";
            if (checkElement(logo)) logo.style.height = parseInt(windowWidth * 0.12) + "px";
            if (checkElement(logo)) logo.style.width = parseInt(windowWidth * 0.12) + "px";
            if (checkElement(logo)) logo.style.marginTop = parseInt(windowHeight * 0.03) + "px";
            if (checkElement(titletext)) titletext.style.marginTop = parseInt(windowHeight * 0.03) + "px";
            if (checkElement(titletext)) titletext.style.fontSize = parseInt(windowWidth * 0.0058) + "em";
        } else {
            if (checkElement(logo)) logo.style.marginLeft = "10%";
            if (checkElement(title)) title.style.height = parseInt(windowHeight * 0.2) + "px";
            if (checkElement(logo)) logo.style.height = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.width = parseInt(windowWidth * 0.04) + "px";
            if (checkElement(logo)) logo.style.marginTop = parseInt(windowHeight * 0.045) + "px";
            if (checkElement(titletext)) titletext.style.marginTop = parseInt(windowHeight * 0.035) + "px";
            if (checkElement(titletext)) titletext.style.fontSize = parseInt(windowWidth * 0.003) + "em";
        }
    }
}
autoTable(windowHeight, windowWidth);

if (checkElement(follows)) follows.onmouseover=()=>{follows.innerHTML = "下载&nbsp;▲";};

if (checkElement(follows)) follows.onmouseout=()=>{follows.innerHTML = "下载&nbsp;▼";};

if (checkElement(login)) login.onmouseover=()=>{login.style.marginTop = parseInt(windowHeight * 0.015) + "px";};

if (checkElement(login)) login.onmouseout=()=>{login.style.marginTop = parseInt(windowHeight * 0.02) + "px";};


if (checkElement(connect)) connect.onmouseover=()=>{connect.style.marginTop = parseInt(windowHeight * 0.015) + "px";};

if (checkElement(connect)) connect.onmouseout=()=>{connect.style.marginTop = parseInt(windowHeight * 0.02) + "px";};

window.addEventListener('resize', () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    autoTable(windowHeight, windowWidth);
    console.log(isPhone, windowHeight, windowWidth);
});
