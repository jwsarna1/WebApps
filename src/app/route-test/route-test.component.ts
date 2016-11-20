import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {WikiImageService} from "../wiki-service/wiki-image-service";
import {WikiService} from "../wiki-service/wiki-service";

@Component({
  templateUrl: './route-test.component.html'
})
export class RouteTestComponent {
    navs = [
        {url:'', content:"Return to search page"}
    ];

    input:string;
    images$:any;
    firstImage:string;
    description:string;
    link:string;

    constructor(private route:ActivatedRoute, 
                private imageService:WikiImageService,
                private wikiService:WikiService) {

        this.route.queryParams.subscribe(res =>  {
            this.input = res['searchTerm'];
            this.SearchImages(this.input);
            this.SearchWiki(this.input);
        });
    }

    SearchImages(term) {
      this.imageService.searchImages(term).subscribe(res => {
        this.images$ = res.query.allimages;
        console.log(this.images$);
        if (this.images$ !== undefined && this.images$ !== null) {
            this.firstImage = this.images$[0]['url'];
        }
      })
    }

    SearchWiki(term) {
        let res = this.wikiService.search(term).subscribe(res => {
            this.description = res[2][0];
            this.link = res[3][0];
            console.log(res);
        });
    }
}