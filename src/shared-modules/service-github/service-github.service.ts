import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/forkJoin'
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class ServiceGithubService {

  constructor(private http: HttpClient) { }

  private getNames(projUsers) {
    let dataUsers = []
    projUsers.forEach(element => {
      dataUsers.push({name:element.login,url:element.html_url,avatar:element.avatar_url})
    });

    return dataUsers;
  }

  getUsers() {
    return this.getProjects().map(
      result => {
        let repos = result as Array<any>;
        let contributors$: Observable<any>[] = [];
        debugger;
        repos.forEach(repo => {
          contributors$.push(this.http.get(repo.contributors_url));
        });

        return Observable.forkJoin(contributors$).mergeMap(
          res => {
            let users =  res.map(proj => this.getNames(proj));
            debugger;
            return Observable.of(users);
          },
          err => { return err }
        );


      },
      err => Observable.throw(err)
    )

    //return this.http.get('https://api.github.com/v3/users/:Chechuline');
  }

  getProjects() {
    return this.http.get('https://api.github.com/orgs/madrid-ngLabs/repos').map(
      result => { return result },
      error => { return error }
    );
  }

}
