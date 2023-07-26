import { Injectable } from '@angular/core';
import { Post } from 'src/app/components/interfaces/post.interfaces';
//Injectable (decoratore) => specifica che questa classe puo' essere iniettata in un constructor
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'https://dummyjson.com/posts';
  posts: Post[] = [];
  constructor() {}

  getPosts() {
    //ritorniamo un valore di tipo Promise per permetterci di eseguire azioni solo alla fine di questa funzione
    return fetch(this.url)
      .then((res) => res.json())
      .then((json) => {
        this.posts = json.posts;
      })
      .catch((err) => console.error(err));
    //console.error segna l'errore in rosso in console, niente di strano :D
  }
}
