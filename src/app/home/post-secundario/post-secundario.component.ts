import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service';
import { Post } from 'src/app/models/post.models';

@Component({
  selector: 'app-post-secundario',
  templateUrl: './post-secundario.component.html',
  styleUrls: ['./post-secundario.component.css'],
})
export class PostSecundarioComponent implements OnInit {

  post : Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.post = this.postService.buscarTodos();
  }

}
