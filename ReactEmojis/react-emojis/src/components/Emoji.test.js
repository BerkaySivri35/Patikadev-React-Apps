import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { render,screen, fireEvent } from '@testing-library/react';
import App from '../App'


describe('Emoji Testleri', () =>{
    //let input;

    beforeEach(()=>{
         render(<App/>)

        //input = screen.getByLabelText("/Ara.../i")
     });

    test("Header render ediliyor mu?", () =>{
        const header = screen.getByText(/Emoji Search/i)
        expect(header).toBeInTheDocument();
    });

    test("Emoji List Render Ediliyor mu ?", ()=>{

        const emojiList = screen.getByText(/100/i)
        expect(emojiList).toBeInTheDocument();

    })

    test("filtreleme işlemi yapıldığında, emoji listesi bu filtreye uygun şekilde yeniden render oluyor mu ?",()=>{
        const search = "Beer";
        const input = screen.getByLabelText("Ara...");
        fireEvent.change(input, { target: { value: search } });
    })

    // test("emojiye tıklandığında kopyalama işlemi yapılıyor mu?", ()=>{
    //     let list = screen.getByText(/grimacing/i);
    //     let text = "Grimacing";
    //     userEvent.click(list);
      
    //     expect(list).toHaveTextContent(text);
    // })


});