/**
 * проверяет строку на количество символов
 * @param {string} string
 * @param {int} length
 * @returns {boolean}
 */
const checkStringLength = (string, length = 10) => string.length <= length;
checkStringLength('наконец-то я сделала это', 5);
checkStringLength('наконец-то я сделала это');
/**
 * Проверка строки на палиндром
 * @param {string} rawString - строка для проверки
 * @returns {Boolean} истинна если палиндром, ложь если нет
 */
function isPalindrom(rawString) {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] != string[string.length - i - 1]) {
      return false;
    }
    return true;
  }
}
console.log(isPalindrom('топот'));
console.log(isPalindrom('довОд'));
console.log(isPalindrom('Кекс'));
console.log(isPalindrom('Лёша на полке клопа нашёл'));
