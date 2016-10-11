/**
 * Created by shubhangisheel on 2016-10-09.
 */
import {Component} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {keyValues} from '../model/keyValues';

@Component({
  selector:'simple-get-post',
  templateUrl:'../html/simple-get-post.component.html',
  styleUrls:['../css/simple-get-post.component.css']
})
export class SimpleGetPostComponent{
  public thingName : string;
  private headers = new Headers({'content-type' : 'application/json'});

  public postResponse: any;

  public showPostResponse: boolean = false;
  public showGetLatestResponse: boolean = false;
  public showGetAllResponse: boolean = false;



  private url = 'localhost:8080/api/${this.thingName}/add/';
  //private testUrl = `${this.test1}/${this.thingName}/${this.test2}`;

  public keyValues: keyValues[] = [{key:'',value:''}];

  constructor(private http: Http){}

  addKey(){
    this.keyValues.push({key:'',value:''});
  }

  onPost():void{
    const test1 = `https://localhost:8080/api/${this.thingName}/add`;

    console.log("Debug: thingName value" , this.thingName);
    console.log("Debug: in onPost() test1", test1);

    let params: URLSearchParams = new URLSearchParams();

    this.keyValues.forEach(item => {
      params.set(item.key,item.value);
    });

    console.log("Debug: params is ",params);

    this.http.get(test1, {search:params})
      .toPromise()
      .then(response => console.log(response.json()))
      .catch(this.handleError);

    this.showPostResponse = true;

  }

  onGetLatest(){
    this.showGetLatestResponse = true;
  }

  onGetAll(){
    this.showGetAllResponse = true;
  }

  handleError(error: any) : Promise<any>{
    console.log('An error occured' + error);
    return Promise.reject(error.message || error);
  }
}
