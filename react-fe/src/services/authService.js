import API from "./api"

const login = (formData) => {
    return API.post('/v1/auth/login', formData)
}

const logout = () => {}

const AuthService = {
    login
}

export default AuthService