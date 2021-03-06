import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavbarService {
    private handset = new BehaviorSubject<boolean>(false);
    handset$ = this.handset.asObservable();

    private tablet = new BehaviorSubject<boolean>(false);
    tablet$ = this.tablet.asObservable();

    private hideNav = new BehaviorSubject<boolean>(false);
    hideNav$ = this.hideNav.asObservable();

    setHandset(value: boolean) {
        this.handset.next(value);
    }

    getHandset() {
        return this.handset.value;
    }

    setTablet(value: boolean) {
        this.tablet.next(value);
    }

    getTablet() {
        return this.tablet.value;
    }

    setHideNav(value: boolean) {
        this.hideNav.next(value);
    }

    getHideNav() {
        return this.hideNav.value;
    }
}
