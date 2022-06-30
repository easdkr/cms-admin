export interface AssetFile {
    id: string; //GUID
    contentType: string;
    name: string;
    length: number;
    purpose: string | string[];
    location: string;
    origin: string;
}