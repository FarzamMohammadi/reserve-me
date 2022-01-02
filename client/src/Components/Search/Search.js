import React, { useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Search.css";

function Search() {

  let history = useHistory();
  const [postings, setPostings] = useState([]);
  const [filteredPostings, setfilteredPostings] = useState([]);
  const [searchInput, setsearchInput] = useState('');
  const [bookingService, setbookingService] = useState([]);

  // Retrieves all available postings and sets them to postings and filteredPostings as intial view
  useEffect(() => {
      getData();
      async function getData() {
        const response = await fetch("http://localhost:5000/service/getall");
        const data = await response.json();
        console.log(data);
        setPostings(data);
        setfilteredPostings(data);
      }
    }, []);

  // Set the user input
  const [searchValue, setSearchValue] = useState(),
        onInput = ({target:{value}}) => setSearchValue(value),
        onFormSubmit = e => {
          e.preventDefault()
          console.log(searchValue)
          setSearchValue()
        }
  // Handles filtering using the selected category
  function handleFiltering(e) {
          const filteredResults = postings.filter( (posting) => posting.Category.includes(e.target.value))
          setfilteredPostings(filteredResults);
      }
  // Handles filtering using the user input value from textbox (searchInput)
     function handleSearch() {
          const filteredResults = postings.filter( (posting) => posting.ServiceName.includes(searchInput))
          setfilteredPostings(filteredResults);
      }
    return(
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12 mb-4">
            <h1 className="mb-3 col-2 mx-auto">Search</h1>
            <div className="input-group mb-3 col-9 mx-auto">
            <Form>
               <Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Control style={{width: "810px"}}
                      className="mb-2"
                      value={searchInput} onInput={e => setsearchInput(e.target.value)}
                      placeholder="Heating and Cooling Technician"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="button" onClick={handleSearch} style={{width: "100px"}} className="mb-2">
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
            <h5 className="mb-2 col-9 mx-auto">Filter By Category: </h5>
            <div className="input-group mb-4 col-9 mx-auto">           
                    <select
                    style={{width: "200px"}}
                      onChange={handleFiltering}
                      >
                      <option value=""></option>
                      {postings.map((posting, index) => <option value={posting.Category} >{posting.Category}</option>)}
                    </select>
            </div>
          </div>
        {filteredPostings.map((item, index) =>(
              <div className="col-11 col-md-6 col-lg-9 mb-4 mx-0 mb" key={index} >
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <div className="card-header">
                    {item.ServiceProvider}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.ServiceName}</h5>
                    <p>{item.Description}</p>
                     <Button type="button" onClick={()=>history.push("/bookservice/" + item.ServiceName + "/" + item.ServiceProvider)} style={{width: "100px"}} className="mb-2 btn-secondary vertical-center">
                      Book
                    </Button>
                    <div className="card-footer text-muted">
                      {item.StartDate}
                    </div>
                  </div>
                </div>
              </div>
              ))
          }
        </div>
      </section>
    )
}

export default Search;