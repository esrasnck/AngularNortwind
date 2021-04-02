import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

     let token= localStorage.getItem("token");
     let newRequest: HttpRequest<any>;
     newRequest = request.clone({
       headers: request.headers.set("Authorization","Bearer "+token)
     })
    return next.handle(newRequest);
  }
}

//Error handle için interceptorlar da yazabiliriz.
// request : ürün eklemek için ürün isteklerini yazıp basmak
// next: sen dur. ben pakete bişey koyup göndercem. bu requestin içine bir header koyarsam, tüm headerlara authorization kouymuş olcam
