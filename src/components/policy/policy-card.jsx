import { Card, Col, Row } from "antd";
import { Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
export default function PolicyCard({ title, description, img }) {
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={img} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={title}
          description={description}
        />
      </Card>
    </>
  );
}
