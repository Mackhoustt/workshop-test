import React from 'react'
import {mount} from 'enzyme'
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import {AuthContext} from '../../auth/AuthContext'
import {MemoryRouter} from 'react-router'
import '@testing-library/jest-dom'
import { describe } from 'yargs'
import { Navbar } from '../../components/ui/Navbar'

describe('Validar componente <DashboardRoutes/>', ()=>{
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
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
   
        test('Validar usuario',()=>{
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe('Mack')

   })
       
    })
    test('Llamar Logout',()=>{
        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenNthCalledWith()
    })

    
})
describe('Componente <Navbar>',()=>{
    const historyMock={
        push:jest.fn(),
        replace:jest.fn(),
        listen:jest.fn(),
        createHref:jest.fn(),
        location:{}
    }
    const wrapper=mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    expect(historyMock.replace).toHaveBeenCalledWith('/login')
})