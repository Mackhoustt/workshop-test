import {PrivateRoute} from '../../routers/PrivateRoute'
import React from 'react'
import {mount} from 'enzyme'

import { MemoryRouter } from 'react-router'

describe('Validar las rutas privadas',()=>{
    Storage.prototype.setItem=jest.fn()
    const props={
        location:{
                pathname:'/marvel'
        }
    }
    test('mostrar el componente si el usuario está autenticado', ()=>{

    const wrapper=mount(
        <MemoryRouter>
        <PrivateRoute
        isAuthenticated={true}
        component={()=><span>Componente</span>}
        {...props}
        />
       </MemoryRouter>
    )
    console.log("xxxx"+wrapper.html()+"xxxx")
    console.log(wrapper.find('span').exists()).toBe(false)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
})
})