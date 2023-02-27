




import { Component,OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';
import {product} from '../model/products';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit{
  allproducts:product[]=[];
  isfetching:boolean=false;
  @ViewChild('productorm')form:NgForm;
  editmode:boolean=false;
ngOnInit(){
this.getproducts();
}
onproductfetch(){
  this.getproducts();
}
  constructor(private http:HttpClient){

  }
  onProductCreate(products:{name:string,price:number,quant:number}){
console.log(products);
const headers=new HttpHeaders({'myHeader':'seiyedheader'})
this.http.post<{name:string}>('https://angularbyseiyed-default-rtdb.firebaseio.com/products.json',products
,{headers:headers})
.subscribe((res)=>{
console.log(res);
});
  }
  private getproducts(){
    this.isfetching=true;
this.http.get('https://angularbyseiyed-default-rtdb.firebaseio.com/products.json')
.pipe(map((res:{[key:string]:product})=>{
  const products=[];
for(const key in res){
  if(res.hasOwnProperty(key)){
products.push({...res[key],id:key})
  }
}
return products;
}))
.subscribe((products)=>{
  console.log(products);
  this.allproducts=products;
  this.isfetching=false;
})
  }
  ondeleteproduct(id:string){
this.http.delete('https://angularbyseiyed-default-rtdb.firebaseio.com/products/'+id+'.json')
.subscribe();
  }
  deleteallproduct(){
    this.http.delete('https://angularbyseiyed-default-rtdb.firebaseio.com/products/.json')
.subscribe();
  }
  editproduct(id:string){
let currentproduct=this.allproducts.find((p)=>{return p.id === id})
console.log(currentproduct);
this.form.setValue({
name:currentproduct.name,
price:currentproduct.price,
quant:currentproduct.quant
});
this.editmode=true;

  }
  
}
