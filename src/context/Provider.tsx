import Context from "./Context";
import { ICreatedUser, IUser } from '../interfaces/IUser';
import { useState } from "react";

const Provider = ({ children }: any) => {
  const emptyUser = {
    name: '',
    email: '',
    image: '',
    description: ''
  }

  const [user, setUser] = useState<ICreatedUser>(emptyUser);

  const createUser = (data: IUser): ICreatedUser => {
    const info = {...emptyUser, ...data}
    localStorage.setItem('user', JSON.stringify(info))
    setUser(info)
    return info;
  }

  const contextValue = {
    createUser,
    user
  }

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}

export default Provider;