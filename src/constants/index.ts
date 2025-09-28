import {
  Laptop,
  MonitorSmartphone,
  RectangleHorizontal,
  Smartphone,
} from "lucide-react";
import type { ScreenTypes } from "../types";

export const Screens: ScreenTypes[] = [
  {
    id: 1,
    type: "Mobile",
    icon: Smartphone,
    width: 375,
    height: 667,
  },
  {
    id: 2,
    type: "Tablet",
    icon: RectangleHorizontal,
    width: 768,
    height: 1024,
  },
  {
    id: 3,
    type: "Desktop",
    icon: Laptop,
    width: 1440,
    height: 900,
  },
  {
    id: 4,
    type: "Custom",
    icon: MonitorSmartphone,
    width: 434,
    height: 667,
  },
];
