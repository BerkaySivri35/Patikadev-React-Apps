import { useFormik } from 'formik';
import validations from './validation';

function Signup() {
    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues:{
          email: '',
          password:'',
          confirmPassword:''
        },
        onSubmit:values =>{
          console.log(values)
        },
        validationSchema: validations
      })
      return (
        <div className="App">
                <form onSubmit={handleSubmit}>
                 
                  <br />
                  <label htmlFor="email">Email</label>
                  <input
                    value={values.email}
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                  <br />
                  <br />
    
                  <label htmlFor="email">Password</label>
                  <input
                    value={values.password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                    {errors.password && touched.password && <div className='error'>{errors.password}</div>}      
                  
                  <br />
                  <br />
    
                  <label htmlFor="email">Confirm Password</label>
                  <input
                    value={values.confirmPassword}
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                    {errors.confirmPassword && touched.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}

                  <br />
                  <button type="submit">Submit</button>
    
                  <br />
                  <br />
                  <code>{JSON.stringify(values)}</code>
                </form>
    
          
        </div>
      );
}

export default Signup