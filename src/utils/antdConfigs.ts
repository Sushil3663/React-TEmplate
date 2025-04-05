import type { ThemeConfig } from "antd";
const AntdConfig: ThemeConfig = {
  token: {
    fontFamily: "Hanken Grotesk Variable",
    colorPrimary: "rgb(31, 31, 31)",
    colorError: "#ee1d25",
  },
  components: {
    Radio: {
      colorPrimary: "rgb(0, 132, 61)",
      radioSize: 16,
      dotSize: 8,
      wireframe: true,
    },
    Button: {
      borderRadius: 2,
      paddingInline: 20,
      controlHeight: 42,
      lineHeight: 1.8,
      fontSize: 16,

      colorPrimary: "rgb(252, 227, 0)",
      primaryColor: "#161616",
      colorPrimaryHover: "rgb(0, 0, 0)",
      colorPrimaryActive: "rgb(0, 0, 0)",
      primaryShadow:
        "0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 8px 10px -6px rgba(0, 0, 0, 0.10)",

      defaultBg: "rgb(22, 22, 22)",
      defaultBorderColor: "rgb(125, 130, 135)",
      defaultColor: "rgb(255, 255, 255)",
      defaultActiveBg: "rgba(0,0,0,.8)",
      defaultActiveColor: "#ffffff",
      defaultHoverColor: "#ffffff",
      defaultHoverBg: "rgb(51, 51, 51)",
      defaultHoverBorderColor: "rgb(51, 51, 51)",

      colorLink: "#ee1d25",
      colorLinkActive: "#ee1d25",
    },
    Input: {
      borderRadius: 2,
      controlHeight: 40,
      fontSize: 16,
    },
    Tag: {
      borderRadiusSM: 2,
      fontSize: 16,
      colorWarning: "rgb(232, 111, 37)",
      colorWarningBorder: "#FFBB96",
      colorWarningBg: "rgb(254, 241, 225)",

      colorInfo: "rgb(44, 92, 197)",
      colorInfoBorder: "rgb(44, 92, 197)",
      colorInfoBg: "rgb(229, 242, 253)",
    },
    Table: {
      borderRadius: 0,
      borderRadiusLG: 0,
      colorBgContainer: "#ffffff",
      fontWeightStrong: 500,
      paddingContentVertical: 14,
      colorBorderSecondary: "#DFE0E2",
      colorText: "rgba(0, 0, 0, 0.65)",
      cellPaddingBlock: 10,
      cellFontSize: 14,
      headerBg: "rgb(0, 132, 61)",
      headerColor: "#FFFFFF",
      headerSortHoverBg: "#00833C",
      headerSortActiveBg: "#00833C",

      headerSplitColor: "rgb(0, 132, 61)",
      // "rowHoverBg": "rgb(82, 196, 26)",
    },
    Menu: {
      borderRadius: 0,
      radiusItem: 0,
      // dropdownWidth: 160,
      itemBorderRadius: 2,
      radiusSubMenuItem: 0,
      subMenuItemBorderRadius: 0,
      itemColor: "rgba(0, 0, 0, 0.85)",
      itemSelectedColor: "#1890FF",
      margin: 0,
      fontSize: 14,
      itemHeight: 45,

      // colorBgContainer: "#ffffff",
    },
    Cascader: {
      controlItemBgActive: "#e6f4ff",
      borderRadiusSM: 2,
      fontSizeIcon: 12,
    },
    Checkbox: {
      colorPrimaryTextHover: "#1890FF",
    },
    Collapse: {
      headerBg: "rgba(255, 255, 255, 0.02)",
      colorText: "rgb(97, 97, 97)",
      colorTextHeading: "rgb(51, 51, 51)",
      colorBorder: "rgba(0,0,0,0)",
    },
    Slider: {
      trackBg: "rgb(236, 33, 39)",
      railBg: "rgb(255, 255, 255)",
      railHoverBg: "rgb(255, 255, 255)",
      colorBgElevated: "rgb(25,135,84)",
      handleColor: "rgb(255, 255, 255)",
      handleActiveColor: "rgb(255, 255, 255)",
      trackHoverBg: "rgb(236, 33, 39)",
      dotActiveBorderColor: "rgb(255, 255, 255)",
      colorPrimaryBorderHover: "rgb(255, 255, 255)",
    },

    InputNumber: {
      borderRadius: 0,
      borderRadiusLG: 0,
      borderRadiusSM: 0,
      // hoverBg: "rgba(255, 255, 255, 0)",
      handleHoverColor: "rgba(22, 119, 255, 0)",
      activeBorderColor: "rgb(217, 217, 217)",
      hoverBorderColor: "rgb(217, 217, 217)",
      colorPrimary: "rgb(217, 217, 217)",
      addonBg: "rgb(255, 255, 255)",
    },
    Select: {
      borderRadius: 0,
      colorPrimary: "rgb(51, 51, 51)",
      colorPrimaryHover: "rgba(51, 51, 51, 0.7)",
      controlOutline: "rgba(51, 51, 51, 0.1)",
      controlOutlineWidth: 0,
      singleItemHeightLG: 42,
      borderRadiusLG: 0,
      borderRadiusSM: 0,
      borderRadiusXS: 0,
      colorTextPlaceholder: "rgb(51,51,51)",
      optionSelectedColor: "rgb(255, 255, 255)",
      colorText: "rgb(25,135,84)",
      optionSelectedBg: "rgb(25, 135, 84)",
      controlHeight: 38,
    },
  },
};

export default AntdConfig;
