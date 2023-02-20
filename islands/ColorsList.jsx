import { selected_colors } from "@/utils/selected_colors.js";
// import { effect } from "@preact/signals-core";

export default function ColorsList() {
  // effect(() => console.log("Value", selected_colors.value));
  return (
    <>
      <pre>{JSON.stringify(selected_colors.value, null, 2)}</pre>
    </>
  );
}
