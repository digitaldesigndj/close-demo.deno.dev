import { Head } from "$fresh/runtime.ts";
import ColorButton from "@/islands/ColorButton.jsx";
import ColorsList from "@/islands/ColorsList.jsx";

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
        <title>Close Demo App</title>
      </Head>
      <div>
        <p>
          It takes a couple seconds to load the JS (Hydrate the islands?) on
          Deno.Dev free hosting. Self hosted and local first load is way faster
          than on this free stuff.
        </p>
        <p>
          <a href="https://github.com/digitaldesigndj/close-demo.deno.dev">
            Source Code
          </a>
        </p>
        <List items={items} />
      </div>
    </>
  );
}
