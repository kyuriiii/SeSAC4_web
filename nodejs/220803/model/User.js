const fs = require("fs").promises;

exports.post_user = function( data ){
    const { id, pw, name, age } = data;
    fs.appendFile("./info.txt", `${id}//${pw}//${name}//${age}\n`);
}

exports.get_user = async function(){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}