
//массив фотографий
const photo = Array.from({length:PHOTO_COUNT}, createPhoto);
const PHOTO_COUNT = 25;
const createPhoto = () => ({
  id:getRandomInteger(1, 25),
  url:photo/getRandomInteger(1,25).jpg,
  description:getRandomArrayElement(DESCRIPTIONPHOTO),
  likes:getRandomInteger(15,200),
  comments:getRandomArrayElement(comment)
})
//массив описания фото
const DESCRIPTIONPHOTO = [
  'Лето',
  'Вкуснятина',
  'Огонь',
  'Carpe Diem!',
  'Моменты'
]
//массив комментариев
const comment = Array.from ({length: COMMENT_COUNT}, createComment);
const COMMENT_COUNT = 30;
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

//массив сообщений
const MESSAGE = [
  'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//функция по получению случайпного числа из диапазона
const getRandomInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//разделяй и властвуй
const getRandomArrayElement = (elements) => elements [getRandomInteger(0, elements.length - 1)];

//создаем комментарий
const createComment = () => {
  return {
    id:getRandomInteger(1, 26),
    avatar:img/avatar-getRandomInteger(1,6).svg,
    message:getRandomArrayElement(MESSAGE) + ' ',
    name:getRandomArrayElement(NAMES) + ' '
  };
};
console.log(
  createComment()
);
