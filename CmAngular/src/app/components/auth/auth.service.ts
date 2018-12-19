import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { config } from "src/assets/config";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    signinUser(email: String, password: String) {
        this.logout();
        this.http.post<any>(`${config.apiUrl}/api/auth`, {
            email,
            password
        })
            .subscribe((response) => {
                localStorage.setItem("token", response.token);
                this.router.navigate(['/']);
            });
    }

    logout() {
        localStorage.clear();
    }
    
    isAuthenticated() {
        return localStorage.getItem('token') != null;
    }
    
    getToken(): String {
        return 'Bearer ' + localStorage.getItem('token');
    }
}