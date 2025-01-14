import data from './data.json'
import { Filters, PaginatedData } from './types'

const DEFAULT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 10;

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    age: number
}

export type UsersFilters = Filters<User>;

/**
 * Mock Fetch BE API Database Data 
 */
export async function fetchUsers(): Promise<PaginatedData<User>> {


    return (
        {
            result: [],
            rowCount: 0
        }
    )
}