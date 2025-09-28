import type { LucideIcon } from "lucide-react";

export interface Url {
    url: string;
    setUrl: (val: string) => void;
}


export interface ScreenTypes {
    id: number,
    type: string;
    icon: LucideIcon;
    width: number;
    height: number
}