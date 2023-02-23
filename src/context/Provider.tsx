import Context from "./Context";
import { ICreatedUser, IUser } from '../interfaces/IUser';

const Provider = ({ children }: any) => {
  const createUser = (data: IUser): ICreatedUser => {
    const emptyUser = {
      name: '',
      email: '',
      image: '',
      description: ''
    }
    const info = {...emptyUser, ...data}
    localStorage.setItem('user', JSON.stringify(info))
    return info;
  }

  const contextValue = {
    createUser
  }

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}

export default Provider;