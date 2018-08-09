/**
 * @auth czt
 */

exports.check = function () {
    
    //ture 本地数据， false 远程服务器数据
    return false;
};

exports.mockData = function () {
    
    return {"code":0,"msg":"查询成功","success":true,"testinfo":{"isDel":false,"isPay":false,"plat":0,"isTrue":false,"isBug":true,"isEnv":false,"isSelf":true}};
};
