import { createContext } from "react";

export type MessageContext = {
  msg: string;
  setMsg: (msg: string) => void;
};

export const MsgContext = createContext<MessageContext>({} as MessageContext);
