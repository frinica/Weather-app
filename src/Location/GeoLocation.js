import { useEffect, useState } from "react";
import { fetchSearchData } from "../API/api";

const useGeoLocation = (searchTerm) => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  const getSearchData = async () => {
    try {
      const res = await fetchSearchData({ searchTerm });
      setLocation({
        loaded: true,
        coordinates: {
          lat: res.data.coord.lat,
          lng: res.data.coord.lon,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation is not supported",
      });
    } else if (!searchTerm) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else if (searchTerm) {
      getSearchData();
    }
  }, [searchTerm]);

  return location;
};

export default useGeoLocation;
