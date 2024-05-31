import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
        <div class="layout-footer">
            <img src="layout/images/{{layoutService.config().colorScheme === 'light' ? 'logo-dark' : 'logo-white'}}.svg" alt="Logo" height="20" class="mr-2"/>
                by
                <span class="font-medium ml-2 font-italic">ZKOF soft</span>
        </div>
    `
})
export class AppFooterComponent {

    constructor(
        public layoutService: LayoutService
    ) { }

}
