import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

interface CustomDropdownProps {
  title: string;
  items: MenuProps["items"];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ title, items }) => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <span>{title}</span>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default CustomDropdown;
