import { Tag, Space } from "antd";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Month",
    dataIndex: "month",
    key: "month",
  },
  {
    title: "Body Weight",
    dataIndex: "bodywt",
    key: "bodywt",
  },

  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 8 ? "red" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    month: "January",
    bodywt: 60,
    tags: ["nice", "healthy"],
  },
  {
    key: "2",
    month: "Febuary",
    bodywt: 64,
    tags: ["not so good"],
  },
  {
    key: "3",
    month: "March",
    bodywt: 62,
    tags: ["cool", "better"],
  },
];

export { data, columns };
