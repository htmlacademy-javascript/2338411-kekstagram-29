
const miniPhotoTemplate = document.querySelector('#picture').content;
const miniPhotoList = document.querySelector('.pictures');
const addMiniPhotos = (miniPhotos) => {

  const miniPhotoListFragment = document.createDocumentFragment();
  miniPhotos.forEach(({url, description, likes, comments}) => {
    const miniPhotoCopyTemplate = miniPhotoTemplate.cloneNode(true);
    miniPhotoCopyTemplate.querySelector('.picture__img').src = url;
    miniPhotoCopyTemplate.querySelector('.picture__img').alt = description;
    miniPhotoCopyTemplate.querySelector('.picture__likes').textContent = likes;
    miniPhotoCopyTemplate.querySelector('.picture__comments').textContent = comments.length;
    miniPhotoListFragment.append(miniPhotoCopyTemplate);
  });
  miniPhotoList.appendChild(miniPhotoListFragment);
};
export {addMiniPhotos};
/*
На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

Адрес изображения url подставьте как атрибут src изображения.
Описание изображения description подставьте в атрибут alt изображения.
Количество лайков likes выведите в блок .picture__likes.
Количество комментариев comments выведите в блок .picture__comments.
Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

Подключите модуль в проект.
*/
