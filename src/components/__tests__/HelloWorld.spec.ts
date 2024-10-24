import { describe, it, expect,beforeEach } from 'vitest'

import { mount, VueWrapper } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import CustomComponent from '../CustomComponent.vue'
import CustomComponentWithProps from '../CustomComponentWithProps.vue'

describe('HelloWorld', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' }})
  });

  it('h1タグのテキストがpropsの値であることをテストしよう', () => {
    expect(wrapper.find("h1").text()).toEqual('Hello Vitest')
  })

  it("aタグのhrefがhttps://vite.dev/であることをテストしよう", () => {
    expect(wrapper.find("a").attributes("href")).toEqual("https://vite.dev/")
  })

  it("Incrementボタンをクリックすると表示されているcountが1増えることをテストしよう",async () => {
    expect(wrapper.find("p").text()).toEqual("0")
    await wrapper.findAll("button")[0].trigger("click")
    expect(wrapper.find("p").text()).toEqual("1")
  })

  it("Decrementボタンをクリックするとcountが1減ることをテストしよう",async () => {
    expect(wrapper.find("p").text()).toEqual("0")
    await wrapper.findAll("button")[1].trigger("click")
    expect(wrapper.find("p").text()).toEqual("-1")
  })

  it("CustomComponentが表示されていることをテストしよう",()=>{
    expect(wrapper.findComponent(CustomComponent).exists()).toBeTruthy()
  })

  it("CustomComponentWithPropsがmsgのpropsに「hoge」を渡して表示されていることをテストしよう", () =>{
    expect(wrapper.findComponent(CustomComponentWithProps).props("msg")).toEqual("hoge")
  })
})
