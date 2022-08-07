import API from "../api"

const login = (formData) => {
    return API.post('/v1/auth/login', formData)
}

const logout = () => {
    return API.delete('/v1/auth/logout')
}

const AuthService = {
    login,
    logout
}

export default AuthService