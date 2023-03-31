import { Component } from '@angular/core';
import * as Editor from '../../ckeditor5/build/ckeditor';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  control = new FormControl();
  editor = Editor;
  isShowEditor: boolean = true;
}
