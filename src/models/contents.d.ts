// export interface ContentCommon {
//     id: number;
//     title: string;

import { AssetFile } from './assets'

// }

export interface Content {
  id: number
  author: string
  title: string
  banner: string
  sorting: number
  category: Category
}

export interface ContentDetailsData extends Content {
  description: string
  recorded_at: Date
  recorded_location: string
  running_time: number
  length: number
  assets: AssetFile[]
  tags: string[]
  colors: any
}

export interface ContentDetails {
  detail: ContentDetailsData
  response: string
}

export interface Category {
  id: number
  name: string
  sorting: number
}
