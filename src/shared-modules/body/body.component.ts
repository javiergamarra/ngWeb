import { Component, OnInit } from '@angular/core';
import { ServiceGithubService } from '../service-github/service-github.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private gs: ServiceGithubService) {
  }

  ngOnInit() {
    const usersOfAProject = this.gs.getUsers();

    usersOfAProject.subscribe(
      resp => console.log(resp),
      err => console.log(err)
    )
  }

}
