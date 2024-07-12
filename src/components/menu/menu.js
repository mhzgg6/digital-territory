import { h } from "vue"

export default {
  name: "Menu",
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  render() {
    return h(
      "ul",
      { className: "menu-warp" },
      this.menu.map((item) => {
        return <li>{item}</li>
      }),
    )
  },
}
