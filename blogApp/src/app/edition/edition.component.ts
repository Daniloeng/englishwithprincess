import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent {
  newPost = {
    title: '',
    description: '',
    image: ''
  };
  selectedFile: File | null = null;

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.newPost.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.unshift(this.newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    this.router.navigate(['/news']);
  }
}
