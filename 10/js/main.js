import { createPhotos } from './data.js';
import { addThumbnails } from './thumbnails.js';
import './modal.js';

const thumbnails = createPhotos();
addThumbnails(thumbnails);
