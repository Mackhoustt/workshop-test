import React from 'react'
import {mount} from 'enzyme'
import {AppRouter} from '../../routers/AppRouter'
import { AuthContext } from '../../auth/AuthContext'
describe('pruebas en <AppRouter/>',()=>{

    test('Mostrar login si no está auntenticado', ()=>{
        const contextValue={
            dispatch:jest.fn(),
            user:{
                logged:true,
                name:'Mack'
            }
        }
        const wrapper=mount(
            <AuthContext.Provider value={contextValue}>
            <AppRouter/></AuthContext.Provider>
        )
        console.log(wrapper)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
})