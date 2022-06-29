// export interface ContentCommon {
//     id: number;
//     title: string;

import { AssetFile } from "./assets";

// }

export interface Content {
    id: number;
    author: string;
    title: string;
    banner: string;
    sorting: number;
    category: Category;
}

export interface ContentDetails extends Content {
    description: string;
    recordedAt: Date,
    recordedLocation: string,
    runningTime: number,
    length: number,
    assets: AssetFile[],
    tags: string[],
    colors: any
}

export interface Category {
    id: number;
    name: string;
    sorting: number;
}