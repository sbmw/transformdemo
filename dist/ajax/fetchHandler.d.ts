import { ApiResponseViewModel } from "me/viewModels/apiResponseViewModel";
export declare class FetchHandler {
    get(url: string): Promise<ApiResponseViewModel>;
}
