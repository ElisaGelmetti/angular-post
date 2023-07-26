import { Component } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/components/interfaces/post.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  [x: string]: any;
  pippo: Post[] = [];
  constructor(private postSrv: PostService) {
    //per assicurarmi di assegnare la variabile solo DOPO il completamento di getPosts, utilizzo un .then (vedi => commento dentro .getPosts :D)
    //per assicurarmi di assegnare la variabile solo DOPO il completamento di getPosts, utilizzo un .then (vedi => commento dentro .getPosts :D)
    this.postSrv['getPosts']().then((_) => {
      this.pippo = this.postSrv.posts;
    });
  }
}
