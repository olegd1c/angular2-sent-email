import {Injectable}               from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}               from 'rxjs/Observable';
import {Email}                    from '../interfaces/Email';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactService {
  constructor (private _http: Http)
  //constructor () 
  {}

  private _contactUrl = 'php/email.php';
  //private _contactUrl = 'app/contact/email.php';

  postEmail(newMail: Email): Observable<string>{
    console.log('start postEmail');
    //return Observable.throw('Server error 2');

    let body = `name=${newMail.name}&email=${newMail.email}&message=${newMail.message}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers , method: "post"});

    return this._http.post(this._contactUrl, body, options) 
                    .map(res => <string> res.json());
                    //.catch(this.handleError)
    //console.log('end postEmail');
                       
  }
  

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.log('Error in retrieving news: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }

  
}


