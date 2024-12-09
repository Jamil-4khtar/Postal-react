import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/searchPage.css"

function SearchPage() {
    const navigate = useNavigate();
    const [searchValue, setsearchValue] = useState("");
    const [isInvalid, setisInvalid] = useState(false);
    // let errorMsg = null;
    const [errorMsg, seterrorMsg] = useState("")
    
    function handleInput() {
        isInvalid? setisInvalid(!isInvalid): ""
        seterrorMsg("")
    }

    async function handleChange(e) {
        e.preventDefault();
        console.log(searchValue);
        if (!searchValue || /^\s*$/.test(searchValue)) {
            seterrorMsg("Enter a pincode")
            !isInvalid? setisInvalid(!isInvalid):"";
            return
        }
        
        try {
            if (searchValue.length == 6) {
                
                const response = await axios.get(`https://api.postalpincode.in/pincode/${searchValue}`)
        
                const data = response.data[0];
                console.log("🚀 ~ handleChange ~ data:", data)

                if (data.Status == "Success") {
                    navigate(`/results?pincode=${searchValue}`, { state: {data: data}});
                } else {
                    console.error(data.Message);
                    // errorMsg = data.Message;
                    seterrorMsg(data.Message)
                    // console.log("🚀 ~ handleChange ~ errorMsg:", errorMsg)
                    
                    !isInvalid? setisInvalid(!isInvalid):"";
                }
        
                
            } else {
                console.error("Invalid Pincode");
                setisInvalid(!isInvalid)
                seterrorMsg("Invalid Pincode")
            }
            
        } catch (error) {
            console.log(`Error in fetching: ${error.message}`);
            seterrorMsg(`Error in fetching: ${error.message}`)
            !isInvalid? setisInvalid(!isInvalid):"";

        }

    }


    return (
        <form id='form' onSubmit={handleChange}>
            <h3>Enter Pincode</h3>
            <input
                type='text'
                placeholder="Pincode"
                onChange={(e) => setsearchValue(e.target.value)}
                onInput={handleInput}
            />
            <p id='error' style={{display: isInvalid? "block" : "none"}}> {errorMsg}</p>
            <button type='submit'>Lookup</button>
        </form>
    )
}

export default SearchPage