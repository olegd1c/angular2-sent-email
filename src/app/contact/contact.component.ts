
import {Component, OnInit} from '@angular/core';
import {Http}    from '@angular/http';
import {ContactService}    from './contact.service';
import {Email}             from '../interfaces/Email';

@Component({
    selector:'app-contact',
    templateUrl: '../contact/contact.component.html',
    styleUrls: ['../contact/contact.component.css'],
    providers: [Http]
})
//ContactService

//providers: [Http, ContactService]

export class ContactComponent implements OnInit {
    
    
    constructor(private _contactService : ContactService)     
    { }
    ngOnInit() { }

    public message: Email = {name: '', email: '', message: ''};

    onSubmit() {
      console.log('onSubmit');
      
      this._contactService.postEmail(this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
      
      
    }

    handleResponse(response){
       console.log(`msg is: {response.status}`);

      if(response.status =='success'){
        this.message = {name: '', email: '', message: ''};
        alert('Danke für deine Nachricht');
      }

      if(response.status =='error'){
        alert('Leider konnten wir deine Nachricht nicht versenden. Probier es nochmals oder sende die email direkt. Danke');
      }
      
    }
}