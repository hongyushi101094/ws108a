// export一个改变<p>元素颜色的方法
export function pColor (color) {
  const p = document.querySelector('p');
  p.style.color = color;
}
