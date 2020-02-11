import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
test('composeUrl', () =>{
    const { composeUrl } = GithubCard.methods
    expect(composeUrl(123)).toBe('https://api.github.com/users/123')    
    })

    test('fetchData', async () =>{
        const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA')
        window.fetch = jest.fn().mockResolvedValue({
            json:jsonMock
        })
        const wrapper = mount(GithubCard,{
            methods:{
                composeUrl:() => 'url' //this meant to be a string that will be passed to the API fetch
            }
        })
        //Call the function here to test out the expected results
        await wrapper.vm.fetchData()

        expect(window.fetch).toHaveBeenCalledWith('url')
        expect(jsonMock).toHaveBeenCalled()
        expect(wrapper.vm.data).toBe('GITHUB DATA')
    })
})
