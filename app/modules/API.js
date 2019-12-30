const API_URL = process.env.API_URL

export default {
  async getThings () {
    try {
      const res = await fetch(`${API_URL}/things?per_page=12`)
      return res.json()
    } catch (error) {
      return { error }
    }
  },
  async getThing (id) {
    try {
      const res = await fetch(`${API_URL}/thing/${id}`)
      return res.json()
    } catch (error) {
      return { error }
    }
  },
}
