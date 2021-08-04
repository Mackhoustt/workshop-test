import React from 'react'
import { authReducer } from "../../auth/authReducer";
import { types } from '../../types/types';
import '@testing-library/jest-dom'
describe('Pruebas en <authReducer/>', () => {

  test('Debe retornar el estado por defecto ', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  })

  test('Debe autenticarse y colocar el nombre del usuario ', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Juan'
      }
    }
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'Juan' })
  })

  test('Debe borrar el nombre del usuario y logged debe ponerse en false ', () => {
    const action = {
      type: types.logout
    }
    const state = authReducer({ logged: true, name: 'Luis' }, action);
    expect(state).toEqual({ logged: false })
  })
  
})