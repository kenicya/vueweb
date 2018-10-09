/**
 * @auth czt
 */

exports.check = function () {
    
    //ture 本地数据， false 远程服务器数据
    return false;
};

exports.mockData = function () {
    
    return {"code":0,"data":{"name":"ltt.rp","vsersion":"1.0.0.0","projName":"test"},"msg":"查询成功"};
};
