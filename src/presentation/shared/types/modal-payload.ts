import { MouseEventHandler } from "react"

export interface IFooterProps {
    type?:string
    label?:string
    formType?:"button" | "submit" | "reset"
    formId?:string
    callBackOnClick?:MouseEventHandler<HTMLButtonElement> 
  }
  interface IHeader{
    title:string;
    icon:any,
    description:string;
  }
  export interface IPayloadProps {
    header?:IHeader;
    body?:any;
    actionsFooter?:Array<IFooterProps>;
    disclaimer?:string;
  }
