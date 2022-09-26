//全局参数

const setting = {
  //不经过token校验的路由
  routesWhiteList: ["/login", "/register", "/callback", "/404", "/403"],
  //语言类型zh、en 暂时未用
  i18n: "zh",
};

export default setting;
