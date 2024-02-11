import { Dispatch, ReactNode, SetStateAction } from "react";

export interface modalDataSchema {
  setData: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder: string;
}

export interface columnsSchema {
    title: string,
    dataIndex?: string,
    key: string,
    render?: (_: any, string: any) => ReactNode
}