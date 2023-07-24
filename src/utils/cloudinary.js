const fs_extra = require("fs-extra");
const cloudinary = require("cloudinary").v2;
const ClientError = require("./errors");

const { CLOUD_NAME, API_KEY, API_SECRET } = require("../config/env.js");

const cloudiconfig = () => {
  cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    secure: true,
  });
};
const loadPhoto = async (path, type, name) => {
  let folder = "";

  if (type === "User") folder = `User/${name}`;

  const savePhoto = await cloudinary.uploader.upload(
    path,
    {
      folder: `Matching/${folder}`,
    },
    (error, result) => {
      if (error) {
        console.error("Error al subir la imagen a Cloudinary", error);
        throw new ClientError("Error al subir la imagen", 500);
      } else {
        console.log("Imagen subida a Cloudinary", result);
        return { public_id: result.public_id, url: result.secure_url };
      }
    }
  );

  await fs_extra.unlink(path);
  return savePhoto;
};
const DeletePhoto = async (idImg) => {
  return await cloudinary.uploader.destroy(idImg);
};

module.exports = { cloudiconfig, loadPhoto, DeletePhoto };
