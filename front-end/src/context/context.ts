
import { createContext } from 'react';
import { IUserContext } from '../interfaces';
const AppContext = createContext<IUserContext>({username: '', admin: false, setAdmin: (e:boolean) => e, setUsername: (e: string) => e});

export default AppContext;