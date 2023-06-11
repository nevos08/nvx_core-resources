import axios from 'axios'

export async function emit<T = any>(eventName: string, payload: any = {}, cb?: (data: T) => void) {
  const response = await axios.post(`https://nvx_inventory/${eventName}`, JSON.stringify(payload))

  if (cb && response.data) {
    cb(response.data)
  }
}
