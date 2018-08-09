/**
 * @auth czt
 */

exports.check = function () {
    
    //ture 本地数据， false 远程服务器数据
    return false;
};

exports.mockData = function () {
    
    return {"code":0,"list":[{"name":"Penguins.jpg","id":"44"},{"name":"lantern-installer.exe","id":"45"}],"msg":"查询成功","success":true};
};
