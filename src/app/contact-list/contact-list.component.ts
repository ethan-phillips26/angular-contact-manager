import { Component, computed, inject, signal } from '@angular/core';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { ContactDataService } from '../contact-data.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  imports: [ContactCardComponent, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  contactService = inject(ContactDataService);
  contacts = computed(() => this.contactService.contactList());

  searchTerm = signal('');


  filteredContacts = computed(() =>
    this.contacts().filter(contact =>
      `${contact.fname} ${contact.lname}`.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );
}
