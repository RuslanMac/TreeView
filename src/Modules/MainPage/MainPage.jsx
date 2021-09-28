import useStyles from "./styles";
import Node from "../../Components/Node";
import CommonAppStore from "../../Store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import TreeNode from "../../Classes/Node";
import Button from "../../Components/Button";
import { stepAdd, stepEdit, stepRemove } from "./logic";

const MainPage = () => {
  const c = useStyles();

  useEffect(() => {
    CommonAppStore.GetNode();
  }, []);

  const [word, setWord] = useState(true);
  const [value, setValue] = useState();
  const [selected, setSelected] = useState(true);

  function HandleAddClick(e) {
    if (isSelectedNode() && checkValue()) {
      let indexes = CommonAppStore.selectedNode.toString().split("/");
      stepAdd(CommonAppStore.data, indexes, value);
      setWord(true);
    }
  }

  function UpdateValue() {
    if (isSelectedNode() && checkValue()) {
      let indexes = CommonAppStore.selectedNode.toString().split("/");
      stepEdit(CommonAppStore.data, indexes, value);
      setWord(true);
    }
  }

  function Clear() {
    if (isSelectedNode()) {
      let indexes = CommonAppStore.selectedNode.toString().split("/");
      stepRemove(CommonAppStore.data, indexes);
    }
  }

  function Reset() {
    CommonAppStore.data = CommonAppStore.initialState;
  }

  function AddToTheRoot() {
    if (checkValue()) {
      CommonAppStore.data.push(new TreeNode(value, []));
      setWord(true);
    }
  }

  function checkValue() {
    if (value === undefined) {
      setWord(false);
      return false;
    }
    return true;
  }

  function isSelectedNode() {
    if (CommonAppStore.selectedNode == null) {
      return false;
    }

    return true;
  }

  return (
    <div className={c.main}>
      <div>
        {
          CommonAppStore.data.map((a, i = 0) => (
            <Node
              data={a.data}
              childs={a.childs}
              key={i}
              index={i}
              onClick={() => {}}
            />
          ))}
      </div>
      <div>
        <div style={{ textAlign: "center" }}>
          <span>
            <strong>
              Выбрано:
              {CommonAppStore.selectedValue
                ? CommonAppStore.selectedValue
                : "Выберите узел"}
            </strong>
          </span>
        </div>
        <div className={c.controls}>
          <Button name="Add to the Root" color="#34C211" onClick={AddToTheRoot} />
          <Button name="Add child" color="#22D677" onClick={HandleAddClick} />
          <Button name="Edit" color="orange" onClick={UpdateValue} />
          <Button name="Remove" color="coral" onClick={Clear} />
          <Button name="Reset" color="green" onClick={Reset} />
        </div>
        <div className={c.editField}>
          <span style={{ color: !word ? "red" : "black" }}>
            Введите значение:{" "}
          </span>
          <input
            type="text"
            onInput={(e) => {
              setValue(e.target.value);
            }}
            style={{
              border: "1px solid grey",
              height: "30px",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default observer(MainPage);
