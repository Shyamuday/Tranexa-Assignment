import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostDialogComponent } from './component/post-dialog/post-dialog.component';
import { PostsService } from './services/posts.service';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './component/posts/posts.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    PostsComponent,
    PostDialogComponent,

  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [
    PostsService
  ]

})
export class PostsModule { }
