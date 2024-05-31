import { Component, input, signal } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
    selector: 'app-config',
    standalone: true,
    templateUrl: './app.config.component.html',
    imports: [
        SidebarModule,
        RadioButtonModule,
        FormsModule,
        ButtonModule,
        SelectButtonModule,
        InputSwitchModule
    ]
})
export class AppConfigComponent {

    minimal = input<boolean>(false);
    currentTheme: string = "lara-light-blue";
    themeStateOptions: any[] = [
        { label: 'Clair', value: 'lara-light-blue' },
        { label: 'Sombre', value: 'lara-dark-blue' }
    ];

    scales: number[] = [12, 13, 14, 15, 16];

    constructor(
        private layoutService: LayoutService
    ) { }

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }
    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }

    get scale(): number {
        return this.layoutService.config().scale;
    }
    set scale(_val: number) {
        this.layoutService.config.update((config) => ({
            ...config,
            scale: _val,
        }));
    }

    get menuMode(): string {
        return this.layoutService.config().menuMode;
    }
    set menuMode(_val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            menuMode: _val,
        }));
    }

    get inputStyle(): string {
        return this.layoutService.config().inputStyle;
    }
    set inputStyle(_val: string) {
        this.layoutService.config().inputStyle = _val;
    }

    get ripple(): boolean {
        return this.layoutService.config().ripple;
    }
    set ripple(_val: boolean) {
        this.layoutService.config.update((config) => ({
            ...config,
            ripple: _val,
        }));
    }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    onThemeChange(){
        if(this.currentTheme === "lara-light-blue"){
            this.theme = "lara-light-blue";
            this.colorScheme = "light";
        }else{
            this.theme = "lara-dark-blue";
            this.colorScheme = "dark";
        }
    }

    changeTheme(theme: string, colorScheme: string) {
        this.theme = theme;
        this.colorScheme = colorScheme;
    }

    decrementScale() {
        this.scale--;
    }

    incrementScale() {
        this.scale++;
    }

}
