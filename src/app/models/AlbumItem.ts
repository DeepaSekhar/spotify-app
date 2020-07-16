import { AlbumGroup } from '../models/AlbumGroup'
import { AlbumArtist } from '../models/AlbumArtist'
import { ExternalUrls } from '../models/ExternalUrls'
import { Image } from "../models/Image"
import { ReleaseDatePrecision } from "../models/ReleaseDatePrecision"
export interface AlbumItem {
    album_group: AlbumGroup;
    album_type: AlbumGroup;
    artists: AlbumArtist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks: number;
    type: AlbumGroup;
    uri: string;
}
