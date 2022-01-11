// 实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF'
function rgb2hex(rgb) {
  const reg = /^(rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
  const rgbValue = rgb.match(reg).slice(2, 5);
  const hex = rgbValue.reduce((prev, memo) => {
    prev = [...prev, ("0" + Number(memo).toString(16)).slice(-2)];
    return prev;
  }, []);
  return `#${hex.join("")}`;
}

rgb2hex("rgb(1, 1, 2)");
