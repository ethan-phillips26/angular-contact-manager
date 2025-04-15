import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactDataService } from '../contact-data.service';
import { Contact } from '../contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-add.component.html',
  styleUrl: './contact-add.component.css'
})
export class ContactAddComponent {
  contactService = inject(ContactDataService);
  fname = '';
  lname = '';
  phone = '';
  email = '';
  

  addContact() {
    const newContact: Contact = {
      id: Date.now(),
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
      email: this.email,
    };
    
    this.contactService.addContact(newContact);
  }

}
