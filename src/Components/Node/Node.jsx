import { useState } from "react";
import CommonAppStore from "../../Store";
import { observer } from "mobx-react-lite";
import { BiCircle } from "react-icons/bi";

const Node = (props) => {
  const [selected, setSelected] = useState(props.isselected);

  function handleClick(event) {
    event.stopPropagation();
    // console.log(value);
    CommonAppStore.selectedNode = props.index;

    CommonAppStore.selectedValue = props.data;
    setSelected(true);
    // alert(CommonAppStore.selectedNode);
  }

  return (
    <div onClick={(e) => handleClick(e)} style  ={{ paddingLeft: "25px" }}>
      <BiCircle />
      <span
        value={props.data}
        style={{
          textDecorationLine: selected ? "underline" : "none",
          color: selected ? "green" : "", 
        }}
        onMouseEnter={() => {
          setSelected(true);
        }}
        onMouseLeave={() => {
          setSelected(false);
        }}
      >
        {props.data}
      </span>
      {props.childs &&
        props.childs.map((child, i = 0) => (
        
            <Node
              data={child.data}
              childs={child.childs}
              key={i}
              index={(child.index = props.index + "/" + i)}
              isselected={false}
            />
         
        ))}
    </div>
  );
};

export default observer(Node);
