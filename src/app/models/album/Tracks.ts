import { AlbumDetailItem } from '../../models/album/AlbumDetail-Item'

export interface Tracks {
    href: string;
    items: AlbumDetailItem[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}