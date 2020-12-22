import originJsonp from "jsonp";

export default function jsonp(url, data, option) {
  // 如果没有?号 则拼个?号，否则拼&   因为param(data) 已经去除了&号，而发送给后端数据需?id=xx&age=xx
  url += (url.indexOf("?") < 0 ? "?" : "&") + param(data);

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

function param(data) {
  let url = "";
  for (const key in data) {
    let value = data[key] !== undefined ? data[key] : "";
    url += `&${key}=${encodeURIComponent(value)}`;
  }
  // 去除&
  return url ? url.substring(1) : "";
}
