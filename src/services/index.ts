import Taro from "@tarojs/taro";

export const getFile = async () =>
  await Taro.request({
    method: "GET",
    url: "https://github.com/145376/Album.git",
  });
