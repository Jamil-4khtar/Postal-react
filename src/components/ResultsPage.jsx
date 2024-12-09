import { useLocation } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi";
import { useState, useEffect } from "react";
import "../styles/resultsPage.css"

function ResultsPage() {
  const location = useLocation();
  const {data} = location.state;
  const [filterValue, setfilterValue] = useState("");
  const [filteredData, setfilteredData] = useState(data.PostOffice)

  // console.log("Inside ResultsPage: ", data);   
  console.log(filterValue);
  
  useEffect(() => {
    let filteredResult = data.PostOffice.filter(item => item.Name.toLowerCase().includes(filterValue.trim().toLowerCase()))
    setfilteredData(filteredResult)
  }, [filterValue])
  


  return (
    <div id="container">
      <strong>Pincode: {data.PostOffice[0].Pincode}</strong>
      <p><strong>Message: </strong>{data.Message}</p>

      <div id="input-div">
        <BiSearchAlt2 id="span" />
        <input type="text" id="filter"
          placeholder="Filter"
          value={filterValue}
          onChange={(e) => setfilterValue(e.target.value)}
        />
      </div>

      <div id="results">
        {
          filteredData.map((item, i) => {
              return (
                <div className="res" key={i}>
                  <p>Name: {item.Name}</p>
                  <p>Branch Type: {item.BranchType}</p>
                  <p>Delivery Status: {item.DeliveryStatus}</p>
                  <p>District: {item.District}</p>
                  <p>Division: {item.Division}</p>
                  <p>State: {item.State}</p>
                </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default ResultsPage