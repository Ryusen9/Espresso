import PropTypes from 'prop-types'
import { createContext } from "react"
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider