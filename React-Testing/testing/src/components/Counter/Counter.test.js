import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Counter from './index';
import '@testing-library/jest-dom'


describe('Counter Tests', ()=>{
    let increaseBtn,decreaseBtn,count;
    beforeEach(()=>{
        render(<Counter/>);
         count = screen.getByText(/0/);
         increaseBtn = screen.getByText("Increase");
         decreaseBtn = screen.getByText("Decrease");
    })

    beforeAll(()=>{
        console.log("İlk başta çalışacağım.")
    })

    afterEach(()=>{
        console.log("Her testten sonra bir kere çalışacağım.")
    })

    afterAll(()=>{
        console.log("En son bir kere çalışacağım.")
    })

    test(' increase btn ', () =>{ 
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1")
    });
    
    test(' decrease btn ', () =>{ 
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("0")
    });

})

