import axios, { AxiosInstance } from "axios";

export class HttpClient {
    private readonly client: AxiosInstance;
    
    constructor(baseURL: string) {
        this.client = axios.create({
            baseURL,
        });
    }

    async post<T, D = unknown>(url: string, data: D): Promise<T> {
        const response = await this.client.post<T>(url, data);
        return response.data;
    }
}
