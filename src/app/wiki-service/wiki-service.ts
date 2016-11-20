import { Injectable } from "@angular/core";
import {Jsonp, URLSearchParams, Http} from "@angular/http";

@Injectable()
export class WikiService {
    constructor(private jsonp: Jsonp, private http: Http) {} 

    search (term:string) {
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();
        params.set('action', 'opensearch');
        params.set('search', term);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        let response = this.jsonp.get(wikiUrl, {search:params});
        return response.map(response=>response.json());
    }

    getPage (term:string) {
        let wikiUrl = 'https://en.wikipedia.org/wiki/' + term;
        return this.http.get(wikiUrl).map(res => console.log('Success'));
    }
}