import { useFormik } from 'formik';
import './App.css';

function App() {
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      hobies: [],
      country: ''
    },
    onSubmit:values =>{
      console.log(values)
    }
  })
  return (
    <div className="App">
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" onChange={handleChange} />
              <br />
              <br />

              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" placeholder="Doe" onChange={handleChange} />
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <input


                name="email"
                placeholder="jane@acme.com"
                type="email"
                onChange={handleChange}
              />
              <br />
              <br />

              <span>Male</span>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={values.gender === "male"} />
              <br /><br />

              <span>Female</span>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={values.gender === "female"}
              />
              <br /><br />
              <div>
                Football
                <input type="checkbox" name='hobies' value="Football" onChange={handleChange}/>
              </div>
              <div>
                Movie
                <input type="checkbox" name='hobies' value="Movie" onChange={handleChange}/>
              </div>
              <div>
                  Video Games
                  <input type="checkbox" name='hobies' value="Video Games" onChange={handleChange}/>
              </div>

              <select name="country" onChange={handleChange}>
                <option value="tr">Turkey</option>
                <option value="en">English</option>
                <option value="fr">France</option>
              </select>
              
              

              <button type="submit">Submit</button>

              <br />
              <br />
              <code>{JSON.stringify(values)}</code>
            </form>

      
    </div>
  );
}

export default App;
