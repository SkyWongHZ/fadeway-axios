interface GetParams {
    [key: string]: any;
}
interface GetConfig {
    signal?: AbortSignal;
}
interface PostParams {
    [propName: string]: any;
}
interface PostConfig {
    signal?: AbortSignal;
}
declare const _default: {
    get(url: string, params?: GetParams, config?: GetConfig): Promise<any>;
    post(url: string, params?: PostParams, config?: PostConfig): Promise<any>;
};
export default _default;
