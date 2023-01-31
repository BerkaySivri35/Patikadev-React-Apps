import logo from './logo.svg';
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'
import { useState, useEffect } from 'react';

const messages = {
  "tr-TR":{
    title: "Merhaba Dünya",
    desc: "{count} Yeni mesajınız var"
  },
  "en-US":{
    title: "Hello World",
    desc: "You have {count} new messages"
  }
}

function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.language
  
  const [locale,setLocale] = useState(defaultLocale);
  //console.log(defaultLocale)
  useEffect(() =>{
    localStorage.setItem('locale',locale)
  },[locale])
  return (
    <div className="App">
      <IntlProvider
      locale={locale}
      messages={messages[locale]}>
        <h1><FormattedMessage id="title"/></h1>
        <br /><br />
        <h3><FormattedMessage id="desc" values={{count:3}}/></h3>
        <br /><br />
        <button onClick={ () => setLocale('tr-TR') }>TR</button>
        <button onClick={ () => setLocale('en-US') } >EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
