import { ArtistType } from '../../models/album-details/ArtistType'
import { ExternalUrls } from "../ExternalUrls"
export interface ArtistDetails {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: ArtistType;
    uri: string;
}