import * as React from "react";
import { colors, spacings } from "./constants";
import { root, Item } from "./data";

type ItemNode = {
  title: string;
  globalIndex: number;
  parent?: ItemNode;
  children?: ItemNode[];
};

let index = 0;
const mapItem = (item: Item): ItemNode => {
  const globalIndex = ++index;
  const result: ItemNode = {
    title: item.title,
    globalIndex,
  };
  const children = item.children ? item.children.map(mapItem) : undefined;
  if (children) {
    children.forEach((child) => (child.parent = result));
    result.children = children;
  }
  return result;
};

const rootNode: ItemNode = mapItem(root);

const isRoot = (item: ItemNode) => !item.parent;

export default function Tree() {
  return (
    <svg
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <ItemView item={rootNode} />
    </svg>
  );
}

const ItemView = ({ item }: { item: ItemNode }) => {
  return (
    <g transform={`translate(${localOffset(item).join(", ")})`}>
      {itemPath(item)}
      <circle
        r={spacings.circleRadius}
        fill={colors.circle}
        data-testid={item.title + "-circle"}
      />
      <text
        x={spacings.distanceBetweenTextAndCircleCenter}
        fill={colors.text}
        dy="0.32em"
        data-testid={item.title + "-text"}
      >
        {item.title}
      </text>
      {item.children && (
        <g>
          {item.children.map((item, index) => (
            <ItemView key={item.title} item={item} />
          ))}
        </g>
      )}
    </g>
  );
};

const localOffset = (item: ItemNode): [number, number] => {
  if (isRoot(item))
    return [spacings.focusedNodeOffset, spacings.focusedNodeOffset];
  const x = spacings.nodeHorizontalDistance;
  const parentIndex = item.parent?.globalIndex || 0;
  const y = (item.globalIndex! - parentIndex) * spacings.nodeVerticalDistance;
  return [x, y];
};

const itemPath = (item: ItemNode): JSX.Element | undefined =>
  isRoot(item) ? undefined : (
    <path d={pathD(item)} fill={"none"} stroke={colors.path} />
  );

const pathD = (item: ItemNode): string =>
  item.parent
    ? `M0,0.5H-${spacings.nodeHorizontalDistance + 0.5}V-${
        (item.globalIndex - item.parent.globalIndex) *
          spacings.nodeVerticalDistance -
        spacings.circleRadius
      }`
    : "";
