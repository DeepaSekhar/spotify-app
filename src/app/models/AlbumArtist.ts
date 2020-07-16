import { ExternalUrls } from '../models/ExternalUrls'
import { ID } from '../models/ID'
import { Name } from '../models/Name'
import { Type } from '../models/Type'
import { URI } from '../models/URI'

export interface AlbumArtist {
    external_urls: ExternalUrls;
    href: string;
    id: ID;
    name: Name;
    type: Type;
    uri: URI;
}
