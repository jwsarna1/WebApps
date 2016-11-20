import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, 
        FormControl, 
        FormGroup, 
        Validators, 
        AbstractControl} from '@angular/forms';
import { WikiService } from '../wiki-service/wiki-service';
import { WikiImageService } from '../wiki-service/wiki-image-service';
import 'rxjs/add/operator/map';
import 'chart.js/src/chart';
import {Subject} from 'rxjs/Subject';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  navs = [
    {url:"route-test", content:"Route-Test"}
  ];

  myForm: FormGroup;
  submitted: boolean = false;
  searchField:string;
  searchFor:string;
  term$ = new Subject<string>();
  items:Array<string>;
  images$:any;

  barChartLabels:string[] = [];
  barChartType:string = "bar";
  barChartLegend:boolean = true;
  barChartOptions:any = {
    scaleShowVerticalLines : false,
    responsive : true
  };
  barChartData:any[] = [
    {data: [], label: ''}
  ];

  constructor(fb: FormBuilder, 
    private wikiService:WikiService, 
    private imageService:WikiImageService,
    private router:Router ) { 
    this.myForm = fb.group({
      // 'firstName': ['', Validators.required],
      // 'lastName': ['', Validators.required],
      'searchField': ['', Validators.compose([Validators.required])],
      'searchFor':['', Validators.compose([Validators.required])]
    });

  }

  search(term:string) {
    this.wikiService.search(term).subscribe(results=> {
      this.items = results;
      //console.log(results);
      let findCount = [];

      // look for searchFor in results
      //

      // chart the length of the top 10 search response descriptions from wiki
      for (let i = 0; i < results[2].length; i++) {
        this.barChartLabels[i] = results[1][i]; // label for each bar

        let desc:string = results[2][i];
        let match = desc.match(new RegExp(this.searchFor, "gi"));
        //console.log(match);

        if (match !== null && match.length > 0) {
          findCount.push(match.length);
        }
        else
        {
          findCount.push(0);
        }

        //console.log(findCount);
        //console.log(results);
      }

      this.barChartData = [{data: findCount, label: 'Word count in description'}];
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    this.submitted = true;
    this.search(this.searchField);
  }

  chartClick(event) {
    let selection = event['active'][0];
    if (selection !== undefined) {
      //console.log(selection._model.label);

      let navigationExtras: NavigationExtras = {
        queryParams: { 'searchTerm': selection._model.label },
      };

      // Navigate to the login page with extras
      this.router.navigate(['route-test'], navigationExtras);

    }
  }
}

