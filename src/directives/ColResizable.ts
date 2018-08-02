declare var $: any;

import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[colResizable]'
})
export class ColumnResizableDirective {
    constructor(private el: ElementRef) { }
    ngAfterViewInit() {
        $(this.el.nativeElement).colResizable();
    }
}