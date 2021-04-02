import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl= "https://localhost:44331/api/Auth/";

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){

    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+ "Login",loginModel);
 // datam token model. ama response um mesaj ve bool değer içersin diyorum. o yüzden single response
 // default olarak observable döner.
  }

 isAuthenticated(){
   if (localStorage.getItem("token")) {
     return true;
   }
   else{
     return false;
   }
 }

}

//https://localhost:44331/api/Auth/Login

// http unutkan bir servistir. dolayısıyla tarayıcı yenilendiğinde, bize gelen tüm response vs. iptal olur. biz de bu token ı local storage
// da tutacaz.

// local storage; js in içinde hazır bir fonksiyon