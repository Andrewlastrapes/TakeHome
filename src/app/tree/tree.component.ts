import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  total: number = 5
  index: number = 1;
 
  branch: any = {}

  tree: any = [
    this.branch = {
      layer: 0,
      result: 5,
      cssLayer: 0,
      color: "green"
    }
  ]
 
  constructor() { }

  cssFunLayer(t){
    return (t.cssLayer * 3) + 'px'
  }

  addNode(num, i, result){
    this.total = result + this.total;
    let prevTreeColor;
    let color;

    if(this.index === 0){
        prevTreeColor= "red";
    } else {
        prevTreeColor = this.tree[this.index - 1].color;
    }
    color = prevTreeColor === "red" ? "green" : "red";
    let numToAdd = color === "green" ? 2 : 1;  
    let branch = Object.assign({}, this.branch);
    branch.color = color;
    branch.result = result + numToAdd;
    branch.layer = branch.layer + num;
    branch.cssLayer = branch.layer;
    this.index++
    this.tree.push(branch);
    
  }

  ngOnInit() {
  
  }

}
