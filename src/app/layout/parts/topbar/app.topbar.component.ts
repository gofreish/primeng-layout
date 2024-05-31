import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-topbar',
    standalone: true,
    templateUrl: './app.topbar.component.html',
    imports: [
        RouterModule
    ]
})
export class AppTopBarComponent implements OnInit {
    
    @ViewChild('menuButton') menuButton!: ElementRef;
    @ViewChild('topBarMenuButton') topBarMenuButton!: ElementRef;
    @ViewChild('topBarMenu') topBarMenu!: ElementRef;


    constructor(
        public layoutService: LayoutService
    ) { }

    ngOnInit(): void { }
}
