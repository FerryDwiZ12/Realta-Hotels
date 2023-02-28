import axios from "../../../config/http-common";

// Photos
const getRestoPhoto = async () => {
  try {
    const result: any = await axios.get("resto-menus-photos");
    return result;
  } catch (error: any) {
    return error.message;
  }
};

//photos create
const createPhoto = async (data: any) => {
  try {
    const result = await axios.post("resto-menus-photos", data);
    return result;
  } catch (error: any) {
    return error.message;
  }
};

// Photos delete
const removePhoto = async (id: number) => {
  try {
    const result = axios.delete(`/resto-menus-photos/${id}`);
  } catch (error: any) {
    return error.message;
  }
};

// photos update
const updatePhotos = async (data: any) => {
  const id = parseInt(data.remeId);
  try {
    const result = axios.put(`/resto-menus-photos/${id}`);
  } catch (error: any) {}
};

// Cart
const getCardClient = async () => {
  try {
    const result: any = await axios.get("/restoMenus");
    return result;
  } catch (error: any) {
    return error.message;
  }
};

const getAll = async () => {
  try {
    const result: any = await axios.get("/resto");
    return result;
  } catch (error: any) {
    return error.message;
  }
};

const getId = async (id: number) => {
  try {
    const result: any = await axios.get(`/resto/${id}`);
    return result;
  } catch (error: any) {
    return error.message;
  }
};

const create = async (data: any) => {
  try {
    const result: any = await axios.post("/resto", data);
    return result;
  } catch (error: any) {
    return error.message;
  }
};

const update = async (data: any) => {
  const id = parseInt(data.remeId);
  try {
    const result: any = await axios.put(`/resto/${id}`, data);
    return result;
  } catch (error: any) {
    return error.message;
  }
};

const remove = async (id: number) => {
  try {
    const result: any = axios.delete(`/resto/${id}`);
    return result;
  } catch (error: any) {
    return error.message;
  }
};

const ReduceMenusRestoService: any = {
  getRestoPhoto,
  createPhoto,
  updatePhotos,
  removePhoto,
  getAll,
  getId,
  create,
  remove,
  update,
  getCardClient,
};

export default ReduceMenusRestoService;
