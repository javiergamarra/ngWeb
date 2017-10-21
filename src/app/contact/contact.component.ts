import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  opened: boolean = false;
  size: string;

  noHeader: boolean = false;
  noFooter: boolean = false;
  directional: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  open(size?: string) {
    this.size = size;
    this.opened = !this.opened;
  }

  cancel() {
    this.opened = false;
  }
}