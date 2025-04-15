import { Routes } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';

export const routes: Routes = [
    {
        path:"",
        component: ContactListComponent,
        title: "Contact Manager"
    },
    {
        path:"edit/:id",
        component: ContactEditComponent,
        title: "Edit Contact"
    },
    {
        path:"add",
        component: ContactAddComponent,
        title: "Add Contact"
    }
];
