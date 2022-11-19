//判断字符串是否为空
export function isEmpty(value) {
  if (value == null || trim(value) == "" || value == undefined) {
    return true;
  }
  return false;
}

//判断一个字符串是否为非空串
export function isNotEmpty(value) {

  return !isEmpty(value);
}

//判断字符串是否为空
export function nullToStr(value) {
  if (isEmpty(value)) {
    return "-";
  }
  return value;
}

//空格截取
export function trim(value) {
  if (value == null) {
    return "";
  }
  return value.toString().replace(/(^\s*)|(\s*$)|\r|\n/g, "");
}

//比较两个字符串（大小写敏感）
export function equals(str, that) {

  return str == that;
}

//比较两个字符串（大小写不敏感）
export function equalsIgnoreCase(str, that) {

  return String(str).toUpperCase() === String(that).toUpperCase();
}

export function cardFormatter(card) {
  if(isEmpty(card)){
    return "";
  }
  if(equals(card.length, 15)){
    let birthday = card.substring(4, 12);
    return card.replace(birthday,"******");
  }
  if(equals(card.length, 18)){
    let birthday = card.substring(4, 14);
    return card.replace(birthday,"******");
  }
}
