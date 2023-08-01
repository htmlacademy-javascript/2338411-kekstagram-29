//загрузка изображения
// const uploadImg = document.querySelector('.img-upload').textContent.querySelector('.img-upload__overlay');
// uploadImg.classList.remove('hidden');
// document.querySelector('body').classList.add('modal-open');

// const uploadCopyTemplate = document.querySelector('#upload-file').content.querySelector('.img-upload__input');
// const addFile = (file) => {
//   const uploadFragment = document.createDocumentFragment();
//   const uploadTemplate = uploadCopyTemplate.cloneNode(true);
//   uploadTemplate.addEventListener('change', (evt) => {
//     evt.preventDefault();
//     uploadCopyTemplate.classList.remove('visually-hidden');
//     //addFile(file);??
//   });
//   uploadFragment.append(uploadTemplate);
// };

//хэштег
uploadTemplate.addEventListener('submit', () =>{
  if (hashtag = /^#[a-zа-яё0-9]{1,19}$/i){
  //success
  }else{
    //error
  }
});

// хэш-теги разделяются пробелами;
// один и тот же хэш-тег не может быть использован дважды;
// нельзя указать больше пяти хэш-тегов;
// хэш-теги необязательны;
// если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
// 2.4. Комментарий:
// комментарий не обязателен;
// длина комментария не может составлять больше 140 символов;
// если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
