"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// const dataUrl = process.env.NODE_ENV === 'development' ? `/apps` : '';
const dataUrl = 'https://api.cenguigui.cn/api/music';
const instance = axios_1.default.create({
    withCredentials: false,
    transformResponse: [
        function (data) {
            try {
                return JSON.parse(data);
            }
            catch (e) {
                return data;
            }
        },
    ],
});
instance.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem('token');
    }
    
    return config;
}, (error) => {
    return Promise.reject(error);
});
instance.interceptors.response.use((response) => {
    if (response.data.code && response.data.code !== 200) {
        
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});
exports.default = {
    get(url, params = {}, config = {}) {
        
        return instance.get(dataUrl + url, Object.assign(Object.assign({}, config), { params }))
            .then(response => response.data)
            .catch(error => {
            
            return Promise.reject(error);
        });
    },
    post(url, params = {}, config = { signal: undefined }) {
        return instance.post(dataUrl + url, params, Object.assign(Object.assign({}, config), { signal: config.signal }))
            .then(response => response.data)
            .catch(error => {
            
            return Promise.reject(error);
        });
    },
};


