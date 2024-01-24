import axios from "axios"

export const loginByToken = async (token) => {
  const res = await axios.get('/api/users/index', {
    headers: {
      Authorization:`Bearer ${token}`
    }
  })

  console.log(res)
  return res

} 