/*
* SpurtCommerce
* version 2.1
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Component, AfterViewInit, EventEmitter, Output, Input} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

    @Output() toggleSidebar = new EventEmitter<void>();
    @Input() userDetails: any;
    @Output() logout: EventEmitter<any> = new EventEmitter();
    public language: string;

    constructor(public translate: TranslateService) {
        // ---
    }

    ngAfterViewInit() {
        // ----
    }

}
