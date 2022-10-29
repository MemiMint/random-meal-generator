import axios, { AxiosRequestConfig, AxiosPromise } from "axios";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

const BASE_URL: string = "https://www.themealdb.com/api/json/v1/1";


const getAxios = async (endpoint: string, method: HTTPMethod, data: any = undefined, params: any = undefined): Promise<AxiosPromise> => {
    const options: AxiosRequestConfig = {
        method: method,
        baseURL: BASE_URL,
        params: {
            ...params
        },
        url: endpoint,
        data: data,
        timeout: 1000 * 40
    }

    console.log(`[HTTP] ${method} Request Sent at ${BASE_URL + endpoint}`);
    
    if(params) {
        console.log("Endpoint has been requested with the following params: ");
        console.log(params);
    }

    return axios(options);
}

axios.defaults.validateStatus = (status: number): boolean => {
    console.log(`[HTTP] STATUS-CODE: ${status}`);

    return status >= 200 && status < 400;
}

axios.interceptors.response.use(response => response, error => {
    console.log(`[HTTP] axios.interceptors.response call`);

    if (error.response.status) {
        const { status, data } = error.response;

        switch (status) {
            case 400:
                console.log("[HTTP] BAD REQUEST");
                break;
            case 401:
                console.log("[HTTP] UNAUTHORIZED");
                break;
            case 403:
                console.log("[HTTP] FORBIDDEN");
                break;
            case 404:
                console.log("[HTTP] NOT FOUND");
                break;
            case 502:
                console.log("[HTTP] BAD GATEAWAY")
                break;
        }

        return Promise.reject(error.response);
    }
}, {});

export { 
    getAxios,
};
