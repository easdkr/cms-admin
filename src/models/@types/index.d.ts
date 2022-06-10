
export declare type Category = {
    id: number;
    name: string;
    sorting: number;
    assets: AssetFile[],
}

export declare type AssetFile = {
    id: string; //GUID
    contentType: string;
    name: string;
    length: number;
    purposes: string | string[];
    location: string;
    origin: string;
}