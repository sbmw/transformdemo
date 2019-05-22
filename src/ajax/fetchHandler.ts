import { ApiResponseViewModel } from "me/viewModels/apiResponseViewModel";

export class FetchHandler {

    public async get(url: string): Promise<ApiResponseViewModel> {
        let request = new Request(url, {
            method: "GET"
        });

        let response = await fetch(request);

        return new ApiResponseViewModel(await response.json());
    }
}
