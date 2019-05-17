import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../AuthenticationService/authentication-service.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    path: ActivatedRouteSnapshot[]; 
    route: ActivatedRouteSnapshot;
    constructor(private router: Router, private authService: AuthenticationService){

    }

    CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
