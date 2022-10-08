import axios from "axios"

const urlBase = "https://jsonplaceholder.typicode.com/"

const getAlbums = async (id) => {
    const resp = await axios.get(`${urlBase}users/${id}/albums`)
    return resp.data
}

const getPhotos = async (id) => {
    const resp = await axios.get(`${urlBase}albums/${id}/photos`)
    return resp.data
}

export {
    getAlbums,
    getPhotos
}