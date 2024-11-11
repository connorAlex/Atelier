const calculateProximity = (point1, point2) => {
    // console.log(point1)
    // console.log(point2)
    const R = 6371; // Earth's radius in kilometers
  
    const lat1 = point1.lat * (Math.PI / 180);
    const lat2 = point2.lat * (Math.PI / 180);
    const deltaLat = (point2.lat - point1.lat) * (Math.PI / 180);
    const deltaLng = (point2.lng - point1.lng) * (Math.PI / 180);
    
    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in kilometers
  }

  const filterLocationsWithinRadius = (center, locations, radius) =>{

    return locations.filter((location) => {
      const distance = calculateProximity(center, location.location);
      return distance <= radius;
    });
  }


  export {filterLocationsWithinRadius}