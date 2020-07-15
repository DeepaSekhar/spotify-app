import { ExternalUrls } from './ExternalUrls'
import { Followers } from './Followers'
import { Image } from './Images'


export interface Item {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}
