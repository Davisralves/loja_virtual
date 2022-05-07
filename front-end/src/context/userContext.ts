import React, { useState, createContext } from "react"
export interface user {
    username: string,
    admin: boolean,
}

export interface userContext extends user {
  setUsername: Function,
  setAdmin: Function,
}

export function UseUserContext(defaultValue: user = {username: 'davi', admin: false}) {
  const [username, setUsername] = useState(defaultValue.username)
  const [admin, setAdmin] = useState(defaultValue.admin)
  const value: userContext = {username, setUsername, admin, setAdmin}
  return {UserContext: createContext<userContext>(value), value};
   };

