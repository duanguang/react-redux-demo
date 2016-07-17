"use strict";
(function (ApiStateEnum) {
    ApiStateEnum[ApiStateEnum["Success"] = 1] = "Success";
    ApiStateEnum[ApiStateEnum["Empty"] = 0] = "Empty";
    ApiStateEnum[ApiStateEnum["Error"] = -1] = "Error";
})(exports.ApiStateEnum || (exports.ApiStateEnum = {}));
var ApiStateEnum = exports.ApiStateEnum;
var ResponseModel = (function () {
    function ResponseModel() {
    }
    // public static getEmptyResponseModel(errMessage:string) {
    //     let responseModel = new ResponseModel();
    //     responseModel.Result = {Message: errMessage};
    //     responseModel.State = ApiStateEnum.Empty;
    //     return responseModel;
    // }
    ResponseModel.getSuccessResponseModel = function (content) {
        var responseModel = new ResponseModel();
        responseModel.Result = content;
        responseModel.State = ApiStateEnum.Success;
        return responseModel;
    };
    return ResponseModel;
}());
exports.ResponseModel = ResponseModel;
