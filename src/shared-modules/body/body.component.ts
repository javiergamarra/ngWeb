import { Component, OnInit } from '@angular/core';
import { ServiceGithubService } from '../service-github/service-github.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private gs:ServiceGithubService) { }

  ngOnInit() {
    let proj = this.gs.getUsers();
    
    proj.subscribe(
      resp => {
        debugger;
      },
      err => {
        debugger;
      }
    )
    //this.gs.getUsers();
  }

}
