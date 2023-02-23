import { createContext } from "react";
import { IContext } from "../interfaces/IContext";

const Context = createContext<IContext>({} as IContext);

export default Context;