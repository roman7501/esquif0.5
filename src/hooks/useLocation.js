import { useState, useEffect } from "react";

const useLocation = (position) => {
  const location = position;
  const [lat1, setLat1] = useState(null);
  const [long1, setLong1] = useState(null);
  const lat2 = location.latitude;
  const long2 = location.longitude;

  const [distance, setDistance] = useState(null);

  // ** Definition des fonctions

  // * Get data location
  const getCoordinates = (position) => {
    setLat1(position.coords.latitude);
    setLong1(position.coords.longitude);
  };

  // * Errors for location

  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("ton esquif n'est pas autorisé a utilisé le radar");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Actuellement, le port est introuvable");
        break;
      case error.TIMEOUT:
        alert("Actuellement, le port est introuvable");
        break;
      case error.UNKNOWN_ERROR:
        alert("Actuellement, le port est introuvable");
        break;
      default:
        alert("Actuellement, le port est introuvable");
    }
  };

  // *Format numbers **
  // const numberWithSpaces = (x) => {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // };
  // * Calcul distance
  const measure = (la1, lo1, la2, lo2) => {
    // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    console.log(la1, lo1, la2, lo2);
    var dLat = (la2 * Math.PI) / 180 - (la1 * Math.PI) / 180;
    var dLon = (lo2 * Math.PI) / 180 - (lo1 * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((la1 * Math.PI) / 180) *
        Math.cos((la2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    const result = d * 1000;
    setTimeout(() => {
      setDistance(result);
    }, 1000);
  };

  // 1. Vérification si navigateur géolocalise

  const getLocation = () => {
    console.log("searching location...");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        handleLocationError
      );
    } else {
      alert("ton esquif n'est pas autorisé a utilisé son radar");
    }
  };
  // 2/ Get distance

  useEffect(() => {
    if (lat1) {
      measure(lat1, long1, lat2, long2);
    }

    // eslint-disable-next-line
  }, [lat1, long1, lat2, long2]);

  return {
    lat1,
    long1,
    lat2,
    long2,
    getLocation,
    distance,
    location,
  };
};

export default useLocation;
