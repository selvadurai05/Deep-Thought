export enum AssetType {
  VIDEO = 'video',
  THREAD = 'thread',
  ARTICLE = 'article',
  INPUT = 'input'
}

export interface Asset {
  id: string;
  title: string;
  description: string;
  type: AssetType;
  content?: string; // URL for video, or text content
}

export interface ProjectTask {
  title: string;
  description: string;
  assets: Asset[];
}