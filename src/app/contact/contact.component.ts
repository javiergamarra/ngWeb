import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  opened: boolean;
  size: string;

  noHeader: boolean;
  noFooter: boolean;
  directional: boolean;

  constructor() {
  }

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
