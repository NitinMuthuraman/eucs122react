import '../Assets/style.css';
import {ArrowBigRight} from 'lucide-react';
export const Form=()=>{
    const Fun=()=>{
        
            alert(
                "Submitted Succesfully"
            )
    }
    return (
            <div className="divison">
            <h1>
                <b>Registration Form</b>
            </h1>
            <form onSubmit={Fun}>
                <input type="textfield" className="phno" placeholder='Name'></input><br/>
                <input type="textfield" className="phno" placeholder='Email Id'></input><br/>
               <input type="number" className="phno" placeholder='Contact Number'></input><br/>
                <input type="textfield" className="phno" placeholder='Username'></input><br/>
                <input type="password" className="phno" placeholder='Password'></input><br/><br/>
                 {/* <input type="submit" value="submit" className="button"></input> */}
            <button type="submit" value="Submit" className="button-28"><ArrowBigRight/>Submit</button>
            </form>
            </div>

    )
}