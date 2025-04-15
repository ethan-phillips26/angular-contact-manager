import { Injectable, signal } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
    contactList = signal<Contact[]>([
    { id: 0, fname: 'Alice', lname: 'Smith', phone: '123-456-7890', email: 'alice@example.com' },
    { id: 1, fname: 'Bob', lname: 'Bobert', phone: '987-654-3210', email: 'bob@example.com' },
  ]);


  addContact(contact: Contact) {
     const currentList = this.contactList();
     let newId: number = 0;
     if ((currentList.length > 0)) {
      newId = currentList[currentList.length -1].id + 1;
     }
    const updated = [...this.contactList(), { ...contact, id: newId}];
    this.contactList.set(updated);
  }

  deleteContact(id: number) {
    const updated = this.contactList().filter(c => c.id !== id);
    this.contactList.set(updated);
  }

  updateContact(updatedContact: Contact) {
    const updated = this.contactList().map(c =>
      c.id === updatedContact.id ? updatedContact : c
    );
    this.contactList.set(updated);
  }

  getContactById(id: number): Contact | undefined {
    return this.contactList().find(c => c.id === id);
  }
}
