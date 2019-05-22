export class ApiResponseViewModel {
    public success: boolean = false;

    public constructor(init: Partial<ApiResponseViewModel>) {
        Object.assign(this, init);
    }
}
