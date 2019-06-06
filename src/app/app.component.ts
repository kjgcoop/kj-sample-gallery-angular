import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    placeholder = "Click an image to see a larger version";

    showImage(event) {
        var parts = event.target.src.split("/");
        var img = parts[parts.length - 1];
        var full = document.getElementById('full');
        full.innerHTML = '<img src="assets/lg/' + img + '">';
    }
}
