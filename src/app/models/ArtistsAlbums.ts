import { AlbumItem } from '../models/AlbumItem'
export interface ArtistsAlbums {
    href: string;
    items: AlbumItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}