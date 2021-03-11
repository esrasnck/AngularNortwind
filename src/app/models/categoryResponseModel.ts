import { Category } from "./category";
import { ResponseModel } from "./responseModel";

// bir interface diğer interface'i inherit eder. implement etmez. implement etmek içini doldurmak demek. içini doldurmuyoruz.
// özelliklerini kullanıyoruz. o yüzden inherit ediyoruz.

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
}