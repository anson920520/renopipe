import axios from "axios"

// let jwt = localStorage.getItem('jwt')
// // console.log(jwt)
// axios.defaults.headers.common['Authorization'] = jwt? jwt: "null";  //所有請求帶上tokan
axios.interceptors.request.use(config => {
    
    let jwt = localStorage.getItem('jwt')
    console.log(jwt)
    config.headers['Authorization'] = jwt? jwt: "null"
    return config
})

axios.interceptors.response.use(res => {
    console.log(res,123)
    if (res.data.Message == 'cannot get authorization token') {
        alert("登錄異常,請重新登錄")
    }
    return res
})

export default axios