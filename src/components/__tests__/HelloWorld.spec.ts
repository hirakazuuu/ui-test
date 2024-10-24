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
    // ここにテストコードを追加

  })

  it("aタグのhrefがhttps://vite.dev/であることをテストしよう", () => {
    // ここにテストコードを追加

  })

  it("Incrementボタンをクリックすると表示されているcountが1増えることをテストしよう",async () => {
    expect(wrapper.find("p").text()).toEqual("0")
    // ここにテストコードを追加

    expect(wrapper.find("p").text()).toEqual("1")
  })

  it("Decrementボタンをクリックするとcountが1減ることをテストしよう",async () => {
    expect(wrapper.find("p").text()).toEqual("0")
    // ここにテストコードを追加

    expect(wrapper.find("p").text()).toEqual("-1")
  })

  it("CustomComponentが表示されていることをテストしよう",()=>{
    // ここにテストコードを追加

  })

  it("CustomComponentWithPropsがmsgのpropsに「hoge」を渡して表示されていることをテストしよう", () =>{
    // ここにテストコードを追加

  })
})
