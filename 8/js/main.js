import { createPhotos } from './data.js';
import { addThumbnails } from './thumbnails.js';

const thumbnails = createPhotos();
addThumbnails(thumbnails);
