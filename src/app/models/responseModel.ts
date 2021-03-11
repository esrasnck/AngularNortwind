// product response modele karşılık gelen succes ve message her yerde olduğu için biraz daha genelleyecez sanırım. her seferinde success ve 
// message yazmamak için buraya bunları koyduk. product datası ile ayırdık.

export interface ResponseModel{

    // burası benim bir nevi base im
    success:boolean,
    message:string
}