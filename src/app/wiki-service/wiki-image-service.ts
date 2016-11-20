import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

const CALLBACK = 'callback=JSONP_CALLBACK';
const WIKIPEDIA = 'https://en.wikipedia.org/w/api.php';
const QUERY = 'action=query';
const JSON = 'format=json';
const ALLIMAGES = 'list=allimages';
const IMAGEINFO = 'prop=imageinfo';
const API = `${WIKIPEDIA}?${QUERY}&${JSON}&${CALLBACK}&${ALLIMAGES}`;
const PROP_URL = 'iiprop=url';

@Injectable()
export class WikiImageService{
    api:string = 'https://en.wikipedia.org/w/api.php?action=query&format=json&callback=JSONP_CALLBACK&list=allimages';

    constructor(private _jsonp:Jsonp){}
    
    searchImages (term:string) {
        return this._jsonp.get(`${this.api}&aifrom=${term}`)
            .map(res => res.json());
    } 
}