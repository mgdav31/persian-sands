import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    map_ready: false,
  }
})

// @ts-ignore
window.initMap = function ready() {
	app.$set({ map_ready: true });
}

export default app
