import { Component } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html"
})
export class PostCreateComponent {
  newPost = "no content";
  onAddPost(postInput: HTMLTextAreaElement) {
    console.dir(postInput);
    this.newPost = postInput.value;
  }
}
