import { lazy } from "react";
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";

export const RouteList = [
  {
    path: "/",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Dashboard",
    icon: UploadOutlined,
  },
  {
    path: "/media",
    pathname: "Media",
    icon: VideoCameraOutlined,
    children: [
      {
        path: "/media/videos",
        component: lazy(() => import("../pages/All/Video")),
        pathname: "Videos",
        icon: VideoCameraOutlined,
        exact: true,
      },
      {
        path: "/media/images",
        component: lazy(() => import("../pages/All/Image")),
        pathname: "Images",
        icon: UploadOutlined,
        exact: true,
      },
    ],
  },
];
