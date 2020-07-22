import { ArtistDetails } from '../../models/album/ArtistDetails'
import { Copyright } from "../../models/album/Copyright"
import { ExternalIDS } from "../../models/album/ExternalIDS"
import { ExternalUrls } from '../ExternalUrls'
import { Image } from '../Image'
import { Tracks } from '../album/Tracks'
export interface AlbumDetails {
    album_type: string;
    artists: ArtistDetails[];
    available_markets: string[];
    copyrights: Copyright[];
    external_ids: ExternalIDS;
    external_urls: ExternalUrls;
    genres: any[];
    href: string;
    id: string;
    images: Image[];
    label: string;
    name: string;
    popularity: number;
    release_date: Date;
    release_date_precision: string;
    total_tracks: number;
    tracks: Tracks;
    type: string;
    uri: string;
}