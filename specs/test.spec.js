import TestComponent from '@/test'
import List from '@/list'
import {mount} from '@vue/test-utils'

test('mount a vue component', () => {
    const wrapper = mount(TestComponent,{propsData:{
        value:'Vue-Jest'
    }
})
    expect(wrapper.html()).toMatchSnapshot()
})

test('ListComponent', () =>{
    const wrapper = mount(List)
    const movies = wrapper.vm.marvelMovies
    wrapper.setData({marvelMovies:[...movies,'EndGame']})
    expect(wrapper.html()).toMatchSnapshot()
    const vm =wrapper.vm
    vm.$nextTick(()=>{
        expect(wrapper).toMatchSnapshot();
        })
    
})