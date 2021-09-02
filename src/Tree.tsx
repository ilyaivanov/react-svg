import * as React from "react";

type Item = {
  title: string;
  children?: Item[];
};

const root: Item = {
  title: "Home",
  children: [
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
  ],
};

export default function Tree() {
  return (
    <svg viewBox="0 0 500 500" width="500px" height="500px">
      <Circle x={20} y={20} />
      <Circle x={20} y={120} />
      <Circle x={220} y={120} />
      <Circle x={250} y={140} />
    </svg>
  );
}

const Circle = ({ x, y }: { x: number; y: number }) => {
  const [r, setR] = React.useState(10);

  const onClick = () => setR((v) => v + 1);
  return <circle cx={x} cy={y} r={r} onClick={onClick} />;
};
