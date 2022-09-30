

interface ResponsInterface{
    generateResponse(status:number, data:string):void
}


class ResponseData implements ResponsInterface{
    

   generateResponse(status: number, data: string): void {
       console.log(status + data);
   }
}

let code:number = 0;
let data:string = "";
export default new ResponseData().generateResponse(code, data);

