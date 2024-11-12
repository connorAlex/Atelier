const getLocationData = async (searchString) => {
    let req = `https://nominatim.openstreetmap.org/search?q=${searchString}&format=json`
    try {
        const response = await fetch(req)

        if (!response.ok) {
            alert("Error: Failed to retrieve data from Nominatim API")
            throw new Error("Failed to fetch data from Nominatim API")
        }

        const data = await response.json()

        if (data.length > 0) {
            const {lat, lon} = data[0]
            return { lat: parseFloat(lat), lng: parseFloat(lon) }
        } else {
            alert("Location not found")
            
        }
    } catch (error) {
        console.error("Error fetching location data: ", error)
        throw error
    }
}

export default getLocationData