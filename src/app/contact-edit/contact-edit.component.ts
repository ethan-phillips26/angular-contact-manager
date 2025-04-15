import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactDataService } from '../contact-data.service';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-edit',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css',
  standalone: true
})
export class ContactEditComponent {
  contactService = inject(ContactDataService);
  route = inject(ActivatedRoute);

  id: number = 0;
  fname: string = '';
  lname: string = '';
  phone: string = '';
  email: string = '';

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const contact = this.contactService.getContactById(this.id);
    if (contact) {
      this.fname = contact.fname;
      this.lname = contact.lname;
      this.phone = contact.phone;
      this.email = contact.email;
    }
  }

  editContact() {
    const updatedContact: Contact = {
      id: this.id,
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
      email: this.email,
    };

    this.contactService.updateContact(updatedContact);
  }
}
