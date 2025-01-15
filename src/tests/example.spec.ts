import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import HelloWorld from "@/components/HelloWorld.vue" // Ajusta la ruta según tu estructura

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Hello, Vitest!"
    const wrapper = mount(HelloWorld, {
      props: { msg },
    })

    // Verifica que el mensaje se renderice correctamente
    expect(wrapper.text()).toContain(msg)
  })
})
