import {
  Button,
  Checkbox,
  Drawer,
  Dropdown,
  Flex,
  Form,
  Input,
  MenuProps,
  Modal,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  Spin,
  Table,
  Upload,
} from "antd";
import {
  BarChartOutlined,
  DotChartOutlined,
  DownOutlined,
  LineChartOutlined,
  PieChartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 250,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 250,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 300,
  },
];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
const Dashboard = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Flex gap={50}>
        <div>
          <Button>Button</Button>
        </div>
        <div>
          <Radio.Group
            onChange={onChange}
            value={value}
            options={[
              {
                value: 1,
                label: (
                  <Flex gap="small" justify="center" align="center" vertical>
                    <LineChartOutlined style={{ fontSize: 18 }} />
                    LineChart
                  </Flex>
                ),
              },
              {
                value: 2,
                label: (
                  <Flex gap="small" justify="center" align="center" vertical>
                    <DotChartOutlined style={{ fontSize: 18 }} />
                    DotChart
                  </Flex>
                ),
              },
              {
                value: 3,
                label: (
                  <Flex gap="small" justify="center" align="center" vertical>
                    <BarChartOutlined style={{ fontSize: 18 }} />
                    BarChart
                  </Flex>
                ),
              },
              {
                value: 4,
                label: (
                  <Flex gap="small" justify="center" align="center" vertical>
                    <PieChartOutlined style={{ fontSize: 18 }} />
                    PieChart
                  </Flex>
                ),
              },
            ]}
          />
        </div>
        <div>
          <Form>
            <Form.Item>
              <Input placeholder="Enter"></Input>
              <Select placeholder={"Select"}>
                {" "}
                <Select.Option value="sample">Sample</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
        <>
          <Spin></Spin>
        </>

        <>
          <Upload>
            <Button>Upload</Button>
          </Upload>
        </>
        <>
          <Checkbox>Checkbox</Checkbox>
        </>
      </Flex>
      <Flex gap={50}>
        <>
          {" "}
          <Input.Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            loading
          />
        </>
        <>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{ width: "10rem" }}>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </>
        <Table dataSource={dataSource} columns={columns} />;
      </Flex>

      <Flex gap={50}>
        <>
          {" "}
          <>
            <Button type="primary" onClick={showDrawer}>
              Open Drawer
            </Button>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </>
        </>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Flex>
    </>
  );
};

export default Dashboard;
