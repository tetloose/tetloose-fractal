export type StateProps = string | boolean | number | HTMLElement | null

export type ObjectToStringProps = {
    [key: string]: string
}

export type RequestProps = Array<{
    [key: string]: {
        [key: string]: string | number
    }
}>

export type ResponseProps = {
    [key: string]: RequestProps
}

export type MockParams = {
    status?: number;
    statusText?: string;
    url?: string;
    headers?: object;
}

export type FetchParams = {
    (input?: string | Request, init?: RequestInit): Promise<Response>;
    mockResponse(body: string, init?: MockParams): FetchParams;
    mockResponseOnce(body: string, init?: MockParams): FetchParams;
    resetMocks(): void;
}
