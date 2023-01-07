import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { Posts } from '../../models/data.model';
import { PostsService } from '../../services/posts.service';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'body',];
  postDataSource: MatTableDataSource<Posts> = new MatTableDataSource()
  public errorMessage: string | null = null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private postsService: PostsService, private utilityService: UtilityService) { }


  ngOnInit() {
    this.getPosts()
  }

  ngAfterViewInit(): void {
    this.postDataSource.paginator = this.paginator;
  }

  getPosts() {
    this.postsService.getPosts().subscribe({
      next: (data) => {
        this.postDataSource.data = data
      }, error: (error) => {
        this.errorMessage = error;
      }
    })
  }

  openDialogForm() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      minHeight: "350px",
      minWidth: "500px",
      maxHeight: "70vh",
      maxWidth: "50vw"
    })

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getPosts();
      }
    })
  }
}
