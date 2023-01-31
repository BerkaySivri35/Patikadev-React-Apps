import PropTypes from 'prop-types';

function User(props){
    if(!props.isLoggedIn){
        return <div>Giriş Yapmadınız.</div>
    }
    return(
        <div>
            <h1>
                {props.isLoggedIn ? `${props.name} ${props.surname} Yaş: ${props.age}`:
                "Kayıtlı Değil!"}
            </h1>
            <h2>
                Adres: <br />
                {props.address.title} <br /> {props.address.zipCode}
            </h2>
            <h4> Array List <br></br>
                {
            props.Friends.map((friend,index) => (
                <li key={index}>
                   {index} - {friend}
                </li>
            ))
            }
            </h4>

            <h2>
                Object List
                { //Friends2 varsa props.Friends2 &&  props.Friends2.map....
                  props.Friends2 &&  props.Friends2.map((item, id)=>(
                        <div key={id}>
                            {item.id} - {item.name}
                        </div>
                    ))
                }
                
            </h2>
            
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired, //propun tipi string ve zorunlu alan.
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    age: PropTypes.oneOfType([PropTypes.number,PropTypes.string]), // oneOfType ile kabul edebileceğimiz değerleri giriyoruz.
    Friends: PropTypes.array,
    Friends2: PropTypes.object,
    address: PropTypes.shape({ //address objesinin alt başlıklarının türünü belirledik.
        title:PropTypes.string,
        zipCode: PropTypes.number,
    }),
};

//Varsayılan props değeri atama
User.defaultProps={
    name: 'Misafir',
    isLoggedIn:true,
};

export default User;