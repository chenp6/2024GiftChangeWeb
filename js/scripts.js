function signJump(){
    window.location.href="/signUp.html";
}

async function login(){
    const url = 'https://2024-gift-change-web.vercel.app' + '/getUserSelect';
    const res = await fetch(url, {
        method: 'GET',
    })
    const personData = await res.json()
    console.log(personData);
    // window.location.href="/home.html";
}

function go(){
    window.alert("尚未到抽獎時間！");
}

function save(){
    window.alert("保存成功！");
}

function build(){
    window.alert("註冊成功！");
}