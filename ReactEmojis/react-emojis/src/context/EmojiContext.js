import { createContext,useContext,useEffect,useState } from "react";

import emojisList from '../components/Data/emojiList.json'


const EmojiContext = createContext()

export const EmojiProvider = ({children}) =>{
    const [emojis, setEmojis] = useState(emojisList)
    const [searchText, setSearchText] = useState('')
    console.log(emojis.length)
    const values = {
        emojis,
        searchText,
        setSearchText,
    }

    const EmojiFilter = () =>{
        searchText === "" ? setEmojis(emojisList): setEmojis(
            emojis.filter(emoji => {
                if(emoji.title.toLowerCase().includes(searchText.toLowerCase())){
                    console.log(emojis)
                    return true;
                }
                if (emoji.keywords.toLowerCase().includes(searchText.toLowerCase())){
                    return true;
                }
                return false;
            })
        )
    }

    useEffect(()=>{
        EmojiFilter()
    },[searchText])


    return (<EmojiContext.Provider value={values}>{children}</EmojiContext.Provider>);
};

export const useEmojis = () => useContext(EmojiContext);