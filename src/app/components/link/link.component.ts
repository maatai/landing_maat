import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  public numberLink: string;

  constructor( public router: Router) { }

  ngOnInit() {
  }
  close(numberLink) {
    console.log(numberLink);
    window.location.href =`https://maat-ia-development.appspot.com/ws/hp/sendDownloadlink?cel=${numberLink}`;
    this.router.navigate(['/']);

  }

  }