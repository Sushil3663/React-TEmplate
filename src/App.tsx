import { ConfigProvider } from "antd";
import All from "./component/Layout";
import AntdConfig from "./utils/antdConfigs";

function App() {
  return (
    <>
      <ConfigProvider theme={AntdConfig}>
        <All />
      </ConfigProvider>
    </>
  );
}

export default App;
