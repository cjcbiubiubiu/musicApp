// 操作dom的模块
export function addClass(el, className) {
  // 如果有className
  if (hasClass(el, className)) {
    return;
  }
  // 如果没有className 则将el.className用空格拆分
  let newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join(" ");
}

function hasClass(el, className) {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)"); // 正则判断是否有className
  return reg.test(el.className);
}
