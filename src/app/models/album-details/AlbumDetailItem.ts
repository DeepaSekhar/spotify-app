import { ArtistDetails } from '../../models/album-details/ArtistDetails'
import { ExternalUrls } from '../ExternalUrls'
import { ItemType } from '../album-details/ItemType'
export interface AlbumDetailItem {
    artists: ArtistDetails[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: ItemType;
    uri: string;
}