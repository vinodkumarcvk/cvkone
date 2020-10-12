import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-new-navbar',
  templateUrl: './new-navbar.component.html',
  styleUrls: ['./new-navbar.component.css']
})
export class NewNavbarComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit(){

   $(document).ready(() => {
   $('#open-menu').click(() => {
      if ($('#page-container').hasClass('show-menu')){
       $('#page-container').removeClass('show-menu');
    }

       else{
       $('#page-container').addClass('show-menu');
        }
      });
     });
  }

}
