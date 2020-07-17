import { AlbumDetailItem } from '../album-details/AlbumDetailItem'
export interface Tracks {
    href: string;
    items: AlbumDetailItem[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}