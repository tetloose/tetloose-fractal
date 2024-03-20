export type ObjectToStringProps = {
    [key: string]: string
}

export type LoadingProps = {
    animation?: string
    duration: number
}

export type MotionOptionsProps = {
    observed: boolean,
    scrollListener: () => void,
    property: string
}

export type RequestProps = Array<{
    [key: string]: {
        [key: string]: string | number
    }
}>

export type ResponseProps<T = Record<string, unknown>> = {
    [key: string]: T
}

export type MockParams = {
    status?: number;
    statusText?: string;
    url?: string;
    headers?: object;
}

export type FetchParamsProps = {
    (input?: string | Request, init?: RequestInit): Promise<Response>;
    mockResponse(body: string, init?: MockParams): FetchParamsProps;
    mockResponseOnce(body: string, init?: MockParams): FetchParamsProps;
    resetMocks(): void;
}

export type HTMLIFrame = HTMLIFrameElement | null
export type HTMLProps = HTMLElement | null
export type InputProps = HTMLInputElement | null
export type HTMLNodeProps = NodeListOf<HTMLElement> | null
export type ButtonProps = HTMLButtonElement | null
export type HTMLVideoProps = HTMLVideoElement | null

export type StateProps = string | boolean | number | HTMLElement | HTMLVideoElement | HTMLButtonElement | MotionOptionsProps | LoadingProps | null
