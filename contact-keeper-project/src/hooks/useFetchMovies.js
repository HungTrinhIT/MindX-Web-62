import React, { useState, useEffect } from "react";

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {}, []);

  return {
    movies,
    loading,
    error,
  };
};

export default useFetchMovies;
