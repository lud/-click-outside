
import { render } from "solid-js/web";
import { createSignal, Show } from "solid-js";
import "./index.css";
import clickOutside from "./directives/click-outside";

console.log(`clickOutside`, clickOutside)

function App() {
  const [show, setShow] = createSignal(false);

  return (
    <Show
      when={show()}
      fallback={<button onClick={(e) => setShow(true)}>Open Modal</button>}
    >
      <div class="modal" use:clickOutside={() => setShow(false)}>
        Some Modal
      </div>
    </Show>
  );
}

render(() => <App />, document.getElementById("root"));
