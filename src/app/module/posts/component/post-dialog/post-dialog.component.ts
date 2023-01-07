import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Posts } from '../../models/data.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent {
  message: string = '';
  addForm!: FormGroup;
  public errorMessage: string | null = null;
  showSpinner = false;

  postsForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  })

  constructor(private postsService: PostsService, private fb: FormBuilder, private dialogRef: MatDialogRef<PostDialogComponent>) { }

  getTitleerrorMessage() {
    const errors = this.postsForm.controls['title'].errors;
    if (!errors) {
      return
    }
    return 'Mandatory field';
  }

  getBodyErrorMessage() {
    const errors = this.postsForm.controls['body'].errors;
    if (!errors) {
      return;
    }
    return 'Mandatory field'
  }

  onSubmit() {
    this.showSpinner = true;
    const reqObj = {
      title: this.postsForm.value.title,
      body: this.postsForm.value.body,
    } as Posts

    this.postsService.createPost(reqObj).subscribe({
      next: (res) => {
        alert('Posts added successfully!');
        this.postsForm.reset();
        this.dialogRef.close(res)
      }, error: (error) => {
        this.errorMessage = error;
      }
    })
  }

}

