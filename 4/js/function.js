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
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
    return true;
  }
}
console.log(isPalindrom('топот'));
console.log(isPalindrom('довОд'));
console.log(isPalindrom('Кекс'));
console.log(isPalindrom('Лёша на полке клопа нашёл'));

//Время указывается в виде строки в формате часы:минуты
const getTime = (stringTime) => {
  const [hours, minutes] = stringTime.split(':').map(Number);
  return hours + minutes;
};
//функция, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.
const isWorkHours = (startTime, endTime, meetingStart, meetingContinueInMinutes) => {
  const meetingEnd = getTime(meetingStart) + meetingContinueInMinutes;
  const overTime = getTime(endTime);

  if (meetingEnd <= overTime && getTimeInMinutes(meetingStart) >= getTimeInMinutes(startTime)) {
    return true;
  }
  return false;
};

isWorkHours('08:00', '17:30', '14:00', 90); // true
isWorkHours('8:0', '10:0', '8:0', 120); // true
isWorkHours('08:00', '14:30', '14:00', 90); // false
isWorkHours('14:00', '17:30', '08:0', 90); // false
isWorkHours('8:00', '17:30', '08:00', 900); // false
