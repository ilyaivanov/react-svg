export type Item = {
  title: string;
  children?: Item[];
};

const listOfItems = (titlePrefix: string, count: number): Item[] =>
  Array.from(new Array(count)).map((_, index) => ({
    title: titlePrefix + ` ${index}`,
  }));

export const root: Item = {
  title: "Home",
  children: [
    {
      title: "cluster",
      children: [
        { title: "cluster child 1" },
        {
          title: "cluster child 2",
          children: listOfItems("cluster child 2 ", 20),
        },
        { title: "cluster child 3" },
        { title: "cluster child 4" },
        { title: "cluster child 5" },
      ],
    },
    { title: "Second", children: listOfItems("Second", 20) },
    { title: "Third" },
    { title: "Fourth" },
  ],
};
