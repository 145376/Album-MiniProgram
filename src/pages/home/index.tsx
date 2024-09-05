import { View } from "@tarojs/components";

import { useEffect } from "react";
import { getFile } from "src/services";
import "./index.less";

const Index = () => {
  useEffect(() => {
    getFile().then((res) => {
      console.log("🚀 ~ getFile ~ res:", res);
    });
  }, []);
  return <View className="wrapper">Home</View>;
};

export default Index;
