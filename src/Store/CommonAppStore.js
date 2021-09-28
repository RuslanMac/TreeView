import { action, makeObservable, observable } from "mobx";
import TreeNode from '../Classes/Node';

class CommonAppStore {
    initialState = [
        new TreeNode("Хлеб", [
          new TreeNode("Соль", [new TreeNode("Макароны", []), new TreeNode("Морковь", [])]),
          new TreeNode("Грибы", []),
        ]),
      ];
  data = [];
  selectedNode = null;
  selectedValue = "";
  constructor() {
    makeObservable(this, {
      data: observable,
      selectedValue: observable, 
      selectedNode: observable,
      GetNode: action,
    });
  }

  async GetNode() {
    this.data = [
      new TreeNode("Конфеты", [
        new TreeNode("Карамель", [new TreeNode("Какое", []), new TreeNode("Сахар", [])]), 
        new TreeNode("Мармелад", []),
      ]),
    ];
  }


}
export default new CommonAppStore();
