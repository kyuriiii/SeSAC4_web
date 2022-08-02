const fs = require("fs").promises;

exports.get_user = async function(){
    var data = await fs.readFile("./public/info.txt");
    data = data.toString();

    var info = data.split("//");
    return info;
};