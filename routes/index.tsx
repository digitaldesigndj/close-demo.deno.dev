import { Head } from "$fresh/runtime.ts";
import ColorButton from "@/islands/ColorButton.jsx";
import ColorsList from "@/islands/ColorsList.jsx";
// import { selected_colors } from "@/utils/selected_colors.js";

const List = ({ items }) => (
  <>
    <ColorsList />
    <ul className="List">
      {items.map((item, index) => <ColorButton item={item} index={index} />)}
    </ul>
  </>
);

export default function Home() {
  const sizes = ["tiny", "small", "medium", "large", "huge"];
  const colors = [
    "navy",
    "blue",
    "aqua",
    "teal",
    "olive",
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "maroon",
    "fuchsia",
    "purple",
    "silver",
    "gray",
    "black",
  ];
  const fruits = [
    "apple",
    "banana",
    "watermelon",
    "orange",
    "peach",
    "tangerine",
    "pear",
    "kiwi",
    "mango",
    "pineapple",
  ];

  const items = sizes.reduce(
    (items, size) => [
      ...items,
      ...fruits.reduce(
        (acc, fruit) => [
          ...acc,
          ...colors.reduce(
            (acc, color) => [
              ...acc,
              {
                name: `${size} ${color} ${fruit}`,
                color,
              },
            ],
            [],
          ),
        ],
        [],
      ),
    ],
    [],
  );

  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <List items={items} />
      </div>
    </>
  );
}
