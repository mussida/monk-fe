import { Component, model } from '@angular/core';

@Component({
    selector: 'app-title',
    imports: [],
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
})
export class TitleComponent {
  title = model<string>('');
}
