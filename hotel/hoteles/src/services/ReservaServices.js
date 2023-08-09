import axios from "axios";

async function getAll(params = {}) {
  const result = await axios.get("http://localhost:3001/reservas", {
    params: params
  })
  return result
}

async function create(body) {
  const result = await axios.post("http://localhost:3001/reservas", body)
  return result
}

async function remove(id) {
  const result = await axios.delete(`http://localhost:3001/reservas/${id}`)
  return result
}

async function update(id, data) {
  const result = await axios.patch(`http://localhost:3001/reservas/${id}`, data)
  return result
}

export {
  getAll,
  create,
  remove,
  update
}