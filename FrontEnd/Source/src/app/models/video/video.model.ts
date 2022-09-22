export enum types{
    movie = '1',
    episode = '2',
    music = '3'
};
export class Video {
    id?: any;
    video_name?: string;
    description?: string;
    type?: types;
    rating?: number;
    reales_year?: number;
    watch_count?: number;
    thumbnail_path?: string;
    video_path?: string;
};