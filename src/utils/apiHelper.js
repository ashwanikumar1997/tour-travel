import axiosInstance from "../App/AxiosInstance";

export const getAllPlaces = async () => {
  try {
    const response = await axiosInstance.get("/places");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPlace = async (id) => {
  try {
    const response = await axiosInstance.get(`/places/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getNearByPlace = async (id) => {
  try {
    const response = await axiosInstance.get(`/places/nearby-palace/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createBooking = async (data) => {
  try {
    const response = await axiosInstance.post(
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
    const response = await axiosInstance.get(`/tourpackages/${tourpackageId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllArticle = async () => {
  try {
    const response = await axiosInstance.get("/article");
    return response;
  } catch (error) {
    return {status:500,error};
  }
};

export const createArticle = async (data) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:8081/dev/article/create-article",
      data
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getSingleArticle = async (id) => {
  try {
    const response = await axiosInstance.get(`/article/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createSubscriber = async (data) => {
  try {
    const response = await axiosInstance.post("/subscriber/create-subscriber", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const filterTourPackages = async(data) => {
  try {
    // const response = await axiosInstance.get(``)
  } catch (error) {
    return console.log(error);
  }
};
