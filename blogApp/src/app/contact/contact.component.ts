import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../dialogs/dialogs.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private dialog: MatDialog) {}

  onSubmit() {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push(this.contact);
    localStorage.setItem('messages', JSON.stringify(messages));
    
    this.contact = {
      name: '',
      email: '',
      message: ''
    };

    const dialogRef = this.dialog.open(DialogsComponent);

    setTimeout(() => {
      dialogRef.close();
    }, 3000);  // Fechar o dialog após 3 segundos
  }
}
