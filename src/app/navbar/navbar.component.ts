import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    // tslint:disable-next-line: deprecation
    $(document).ready(() => {
        // tslint:disable-next-line: deprecation
        $('#open-menu').click(() => {
            if ($('#page-container').hasClass('show-menu')) {
              $('#page-container').removeClass('show-menu');
            }

            else {
              $('#page-container').addClass('show-menu');
            }
          });
      });
  }

}
