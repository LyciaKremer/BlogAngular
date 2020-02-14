import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service';
import { Post } from 'src/app/models/post.models';

@Component({
  selector: 'app-post-principal',
  templateUrl: './post-principal.component.html',
  styleUrls: ['./post-principal.component.css'],
  providers: [PostService]
})
export class PostPrincipalComponent implements OnInit {
  post : Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.post = this.postService.buscarUm();
  }


}
