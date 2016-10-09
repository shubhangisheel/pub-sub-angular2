/**
 * Created by shubhangisheel on 2016-10-09.
 */
import {Component} from '@angular/core';

import {keyValues} from '../model/keyValues';

@Component({
    selector:'simple-get-post',
    templateUrl:'../html/simple-get-post.component.html',
    styleUrls:['../css/simple-get-post.component.css']
})
export class SimpleGetPostComponent{
    public thingName : string;
    public showPostResponse: boolean = false;
    public keyValues: keyValues[] = [{key:'',value:''}];

    addKey(){
        this.keyValues.push({key:'',value:''});
    }

    onPost(){
      console.log(this.keyValues);
    }
}
