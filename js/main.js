import { getPhotos } from "./data.js";
import { renderCards } from "./render.js";

const pictures = getPhotos();
renderCards (pictures)
