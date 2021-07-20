import { onCleanup } from "solid-js";

export default function clickOutside(el, accessor) {
  console.log(`el`, el)
  console.log(`accessor`, accessor)
  const onClick = (e) => {
    console.log(`clicked`)
    !el.contains(e.target) && accessor()?.();
  }
  document.body.addEventListener("click", onClick);
  console.log('added listener', document.body)

  onCleanup(() => document.body.removeEventListener("click", onClick));
}
