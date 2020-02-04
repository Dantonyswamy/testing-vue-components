import TestComponent from '@/test'
import List from '@/list'
import {mount} from '@vue/test-utils'

test('mount a vue component', () => {
    const wrapper = mount(TestComponent,{propsData:{
        value:'Vue-Jest'
    }
})
    expect(wrapper).toMatchSnapshot()
})

test('ListComponent', () =>{
    const wrapper = mount(List)
    const movies = wrapper.vm.marvelMovies
    wrapper.setData({marvelMovies:[...movies,'EndGame']})
    expect(wrapper).toMatchSnapshot()
    // added below to get updated snapshot list as per comment on the video tutorial
    const vm =wrapper.vm
    vm.$nextTick(()=>{
        expect(wrapper).toMatchSnapshot();
        })
    
})