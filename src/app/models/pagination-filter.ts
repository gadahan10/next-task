export class PaginationFilter {
    pageSize: number = 10;
    pageIndex: number = 1;
    previousPageIndex: number = 0;
    totalResults: number = 0;

    public reset(): void {
        this.pageIndex = 1;
        this.previousPageIndex = 0;
    }
}