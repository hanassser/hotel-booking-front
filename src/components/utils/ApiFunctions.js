import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:9192",
})


export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add/new-room", formData)
    if (response.status === 201) {
        return true
    } else {
        return false
    }
}


export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room/types")
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}

export async function getAllRooms(){
    try{
        const response = await api.get("/rooms/all-rooms")
        return response.data
    } catch(e){
        throw new Error("Error fetching rooms")
    }
}

export async function deleteRoom(roomId){
    try{
        const response = await api.delete(`/rooms/delete/${roomId}`, {headers: getHeader()})
        return response.data
    } catch(e){
        throw new Error(`Error deleting room ${e.message}`);
    }
}

