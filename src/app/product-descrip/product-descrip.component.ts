import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-product-descrip',
  templateUrl: './product-descrip.component.html',
  styleUrls: ['./product-descrip.component.css']
})
export class ProductDescripComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    // const galleryThumbnail = document.querySelectorAll('.thumbnails-list li');
    // const galleryFeatured = document.querySelector('.product-gallery-featured img');
    // const src = (document.querySelectorAll('.src'));

    // galleryThumbnail.forEach((item) => {
    //   item.addEventListener('mouseover', () => {
    //     const image = item.children[0].src;
    //     galleryFeatured.src = image;
    //   });
    // });

    // $('.main-questions').popover('show');

  }
}
