/*
 * @Description: axios
 * @Author: k
 * @Date: 2021-12-09 21:19:39
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { EventEmitter } from 'events';

// 封装axios请求
const http: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://mon.tcl.com/display/',
  timeout: 10000, // 请求超时时间
  withCredentials: true, // 允许携带cookie
});

interface HttpResponse {
  data: any;
  headers: any;
}

class Request extends EventEmitter {
  constructor() {
    super();
    this.interceptors();
  }

  private interceptors(): void {
    // 请求拦截器
    http.interceptors.request.use(
      // 发送请求之前
      (config) => {
        console.log(config);
        // 可以在这里对config进行处理，例如添加headers等
        return config;
      },
      (error) => {
        // 请求错误
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    http.interceptors.response.use(
      (response: AxiosResponse) => {
        const code: number = response.status;
        // 根据自己的业务代码进行响应拦截
        if ((code >= 200 && code < 300) || code === 304) {
          const res = response.data;
          const headers = response.headers;
          // 成功的事件回调
          this.emit('Success', { data: res, headers: headers });
          // return Promise.resolve({ data: res, headers: headers });
          return response; // 直接返回原始响应
        } else {
          console.log(response);
          // 响应错误逻辑处理
          this.emit('Error', response);
          // return Promise.reject(response);
          return response; // 直接返回原始响应
        }
      },
      (error) => {
        this.emit('Error');
        return Promise.reject(error);
      }
    );
  }

  public get(url: string, params?: any, customConfig: AxiosRequestConfig = {}): Promise<HttpResponse> {
    return http.get(url, { params, ...customConfig });
  }

  public post(url: string, data?: any, customConfig: AxiosRequestConfig = {}): Promise<HttpResponse> {
    return http.post(url, data, customConfig);
  }

  public delete(url: string, data?: any, customConfig: AxiosRequestConfig = {}): Promise<HttpResponse> {
    return http.delete(url, { data, ...customConfig });
  }

  public put(url: string, data?: any, customConfig: AxiosRequestConfig = {}): Promise<HttpResponse> {
    return http.put(url, data, customConfig);
  }

  public patch(url: string, data?: any, customConfig: AxiosRequestConfig = {}): Promise<HttpResponse> {
    return http.patch(url, data, customConfig);
  }
}

const dialogMessage = (message?: string): void => {
  if (!message) {
    console.error(message);
    return;
  }
};

const request: Request = new Request();

request.on('Success', function ({ data, headers }: { data: any; headers: any }) {
  // 在这里处理成功的响应数据和响应头
  return Promise.resolve({ data: data, headers: headers });
});

request.on('Error', function (data: any) {
  // 在这里处理错误
  dialogMessage(`请求失败${data}，请检查网络或联系管理员`);
});

export default request;
