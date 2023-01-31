import userEvent from '@testing-library/user-event';
import Todo from './index';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react';

describe('Todo testleri', ()=>{
    let button, input;

    beforeEach(()=>{
        render(<Todo/>)

        button =screen.queryByText('Ekle');
        input = screen.getByLabelText('Text');
    });

    test("Varsayılan 3 nesne render edilmeli", ()=>{
        const items = screen.getAllByText(/Item/i);

        expect(items.length).toEqual(3);
    });

    test("Input ve button dokümanda bulunmalı", () =>{
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument();
    })

    test("Inputa string girilip butona basılınca listeye eklemeli", () =>{
        //inputu doldur
        const name = "Berkay";
        userEvent.type(input,name);

        //Butona tıkla
        userEvent.click(button);

        //Assertion
        expect(screen.getByText(name)).toBeInTheDocument();

    })
})