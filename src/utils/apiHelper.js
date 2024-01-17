import Axios from "axios";

export const getAllPlaces = async () => {
  try {
    const response = await Axios.get("/places");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPlace = async (id) => {
  try {
    const response = await Axios.get(`/places/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createBooking = async (data) => {
  try {
    const response = await Axios.post(
      "http://localhost:8081/dev/bookings",
      data
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllTourPackages = async (tourpackageId) => {
  try {
    const response = await Axios.get(`/tourpackages/${tourpackageId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllArticle = async () => {
  try {
    const response = await Axios.get("/article");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createArticle = async (data) => {
  try {
    const response = await Axios.post("http://localhost:8081/dev/article/create-article",data);
    return response.data;
  } catch (error) {
    return error;
  }
};


export const getSingleArticle = async(id) => {
  try {
    const response = await Axios.get(`/article/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};


export const createSubscriber = async(data) => {
  try {
    const response = await Axios.post("/subscriber/create-subscriber",data);
    return response.data;
  } catch (error) {
    return error;
  }
};