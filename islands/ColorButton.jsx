import { selected_colors } from "@/utils/selected_colors.js";
import { useState } from "preact/hooks";

export default function ColorButton(props) {
  const { item, index } = props;
  const [selected, setSelected] = useState(false);
  return (
    <li
      onClick={() => {
        setSelected((val) => !val);
        const idx = selected_colors.value.indexOf(item.name);
        if (idx === -1) {
          selected_colors.value = [...selected_colors.value, item.name];
        } else {
          selected_colors.value.splice(idx, 1);
          selected_colors.value = [...selected_colors.value];
        }
      }}
      key={index}
      className={`List__item List__item--${item.color} ${
        selected ? "selected" : ""
      }`}
    >
      {item.name}
    </li>
  );
}
