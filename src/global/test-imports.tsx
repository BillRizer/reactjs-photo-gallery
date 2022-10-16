import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import { MockTheme } from "./utils/test-wrap-theme";

export { React, render, screen,fireEvent };

export const MountEnv =(children:any):JSX.Element=>{
    return <MockTheme>{children}</MockTheme>
}