export enum ApiStateEnum{
    Success = 1,
    Empty = 0,
    Error = -1
}

export interface ErrorResponseInnerModel {
    Message:string;
    Code:string;
}


export class ResponseModel {
    public Result:string|ErrorResponseInnerModel;
    public State:ApiStateEnum;

    // public static getEmptyResponseModel(errMessage:string) {
    //     let responseModel = new ResponseModel();
    //     responseModel.Result = {Message: errMessage};
    //     responseModel.State = ApiStateEnum.Empty;
    //     return responseModel;
    // }

    public static getSuccessResponseModel(content:any) {
        let responseModel = new ResponseModel();
        responseModel.Result = content;
        responseModel.State = ApiStateEnum.Success;
        return responseModel;
    }

    // public static getErrorResponseModel(errMessage) {
    //     let responseModel = new ResponseModel();
    //     responseModel.Result = {Message: errMessage};
    //     responseModel.State = ApiStateEnum.Error;
    //     return responseModel;
    // }
}