import {getRandomArrayElement, getRandomInteger} from './util.js';

const PHOTO_COUNT = 25;

const MAX_COMMENT_COUNT = 30;

//массив описания фото
const DESCRIPTIONPHOTO = [
  'Лето',
  'Вкуснятина',
  'Огонь',
  'Carpe Diem!',
  'Моменты'
];
//массив сообщений
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
//массив имен
const NAMES = [
  'Евгений',
  'Дмитрий',
  'Александр',
  'Леонард',
  'Елисей',
  'Геннадий',
  'Вадим',
  'Борис',
  'Анна',
  'Жанна',
  'Лидия',
  'Галина',
  'Даниил',
  'Влад',
  'Олег',
  'Мария',
  'Слава',
  'Майя',
  'Людмила',
  'Любовь',
  'Татьяна',
  'Антон',
  'Михаил',
  'Анастасия',
  'Денис',
  'Клавдия'
];

//создаем комментарий
const createComment = () => ({
  id: getRandomInteger(1, 26),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

//массив комментариев
const createComments = (count) => Array.from ({length: count}, createComment);

//массив фотографий
const createPhoto = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONPHOTO),
  likes: getRandomInteger(15,200),
  comments: createComments(getRandomInteger(0, MAX_COMMENT_COUNT))
});
const createPhotos = () => Array.from({length:PHOTO_COUNT}, createPhoto);

export {createPhotos};
export {createComments};
