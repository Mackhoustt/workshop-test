import React from 'react'
import {shallow} from 'enzyme'
import {HeroCard} from '../../components/heroes/HeroCard'

 
describe('Pruebas <HeroCard/>', ()=>{

    test('Validar la infromacion de las tarjetas', ()=>{
        const id='dc-batman'
        const superhero= 'Batman'
        const alter_ego='Bruce Wayne'
        const first_appearance='Detective Comics #27'
        const characters='Bruce Wayne'
        
        const wrapper= shallow(<HeroCard
            id={id}
            const superhero= {superhero}
            const alter_ego={alter_ego}
            const first_appearance={first_appearance}
            const characters={characters}
            />)



        const textParrafo=wrapper.find('h5').text().trim()
        console.log(textParrafo)
        expect(wrapper).toMatchSnapshot()
        expect(textParrafo).toBe('Batman')
    })

})