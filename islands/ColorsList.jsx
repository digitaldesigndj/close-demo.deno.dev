import { selected_colors } from "@/utils/selected_colors.js";
// import { effect } from "@preact/signals-core";

export default function ColorsList() {
  return (
    <div className="selected-colors">
      <pre>{JSON.stringify(selected_colors.value, null, 2)}</pre>
    </div>
  );
}
