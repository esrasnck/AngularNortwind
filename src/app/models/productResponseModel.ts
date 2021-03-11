// product yanıtı gelecek bana

import { Product } from "./product";
import { ResponseModel } from "./responseModel";
// response modeli içeren iki arkadaşı da içerir. miras verme gibi sanırım. extends inheritance demek.

export interface ProductResponseModel extends ResponseModel{ // bana gelecek datayı karşılayacak bir array oluşturuyorum bana product array gelecek 1

    data: Product[]  // apidan geldiği gibi yazmalııyım. data geliyor success bilgisi ve mesaj bilgisi geliyor. string o da
    
}