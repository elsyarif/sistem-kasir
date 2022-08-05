import API from "./api"

const login = (formData) => {
    return API.post('/v1/auth/login', values)
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((err) => {
            console.log(err)
        })
}

const logout = () => {}

const AuthService = {
    login
}

export default AuthService