import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`
    // templateUrl: './template.component.html''
})
export class AppComponent {
    name = 'Angular';
}