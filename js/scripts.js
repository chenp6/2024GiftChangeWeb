function signJump(){
    window.location.href="/signUp.html";
}

async function login(){
    const { MongoClient } = require("mongodb");
    window.location.href="/home.html";
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