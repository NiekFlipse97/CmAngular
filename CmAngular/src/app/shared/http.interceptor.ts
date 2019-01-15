import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from "../components/auth/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const copiedReq = req.clone({
            headers: req.headers.set('Authorization', this.authService.getToken().toString())
                .set('Content-Type', 'application/json')
        });

        return next.handle(copiedReq);
    }
}