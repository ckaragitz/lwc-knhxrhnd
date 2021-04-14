import { LightningElement, api, track } from "lwc";

export default class Child extends LightningElement {

  @track list = [];

  @api
  get todos(){
    return this.list;
  }

  set todos(value){
    this.list = value;
  }
}
