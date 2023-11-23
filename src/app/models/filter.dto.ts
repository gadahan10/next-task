import { PaginationFilter } from "./pagination-filter";

export class FiltersDto {
    freeSearch: string = '';
    pagination?: PaginationFilter = new PaginationFilter();
}