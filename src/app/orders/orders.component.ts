import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  //   $(document).ready( ()=> {
  //     $("#myInput").on("keyup",  ()=> {
  //         var value = $(this).val().toLowerCase();
  //         $("#myTable tr").filter( () => {
  //             $(this).toggle($(this).text().toLowerCase().indexOf(value) => -1)
  //         });
  //     });
  // });
  }
}
