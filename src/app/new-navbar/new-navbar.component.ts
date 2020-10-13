import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ready } from 'jquery';


@Component({
  selector: 'app-new-navbar',
  templateUrl: './new-navbar.component.html',
  styleUrls: ['./new-navbar.component.css']
})
export class NewNavbarComponent implements OnInit {

  constructor() { }


  ngOnInit(): void{
    // $(document).ready(() => {
    //   $('#open-menu').click(() => {
    //     if ($('#page-container').hasClass('show-menu')) {
    //       $('#page-container').removeClass('show-menu');
    //     }

    //     else {
    //       $('#page-container').addClass('show-menu');
    //     }
    //   });



    }
  }
