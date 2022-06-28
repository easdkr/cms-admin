
export interface Content {
    author: string;
    banner: string;
    category: Category;
    id: number;
    sorting: number;
    title: string;
}

export interface Category {
    id: number;
    name: string;
    sorting: number;
}