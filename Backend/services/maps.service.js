const axios = require('axios');

module.exports.getAddressesCoordinntes = async (address) => {
  try {
    const encodedAddress = encodeURIComponent(address);
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`
    );
    
    if (response.data.status === "OK") {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { success: true, coordinates: { lat, lng } };
    } else {
      return { success: false, error: "No results found" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports.getDistance=async (origin,destination)=>{
    if(!origin || !destination){
        return {success:false,error:'Origin and destination are required'};
    }

  const apiKey=process.env.GOOGLE_MAPS_API_KEY;

  try {
    const response=await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${apiKey}`);

    if(!response.data.rows.length){
      return {success:false,error:'No results found'};
    }

    if(response.data.status==='OK'){
      const distance=response.data.rows[0].elements[0].distance.text;
      return {success:true,distance};
    }
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}

module.exports.getSuggestion=async (input)=>{

    if(!input){
        return {success:false,error:'query is required'};
    }

    const apiKey=process.env.GOOGLE_MAPS_API_KEY;
    try {
        
        const response=await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=address&key=${apiKey}`);  

        if(!response.data.predictions.length){
            return {success:false,error:'No results found'};
        }
     return {success:true,suggestions:response.data.predictions};
    } catch (error) {
        return res.status(500).json({message:error.message});
    }

}