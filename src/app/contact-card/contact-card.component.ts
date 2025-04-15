import { Component, computed, inject, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactDataService } from '../contact-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  imports: [RouterLink],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {

  @Input() contact!: Contact;
  contactService = inject(ContactDataService);


  delete() {
    this.contactService.deleteContact(this.contact.id);
  }

  edit() {

  }


}
