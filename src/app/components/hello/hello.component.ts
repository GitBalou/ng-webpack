import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    //template: `<h1>Hello {{name}}</h1>`
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent {
    name = 'Angular';
}