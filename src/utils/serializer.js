function serializer(user) {
    const { dataValues: userInfo } = user
      const { 
        name,
        adress, 
        city, 
        state, 
        postal_code, 
        country, 
        ...rest  } = userInfo.Location.dataValues
      const userLocation = {
        name,
        adress,
        city,
        state,
        postal_code,
        country,
      }
      const userResponse = {...userInfo, Location: userLocation}
    return userResponse
}

module.exports = serializer;