import React, {useState, useEffect} from "react";
import { Form, Segment, Header, Button } from "semantic-ui-react";
import {saveToSalesforce} from '../lib/moreUtils';

const Applicant = ({applicantDetails, title}) => {

    const [applicantFormData, setFormData] = useState(applicantDetails);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...applicantFormData, [name]: value });
      };

      useEffect(() => {
        const data = localStorage.getItem('applicantFormData');
        if (data) {
          setFormData(JSON.parse(data))
        }       
      }, [])
    
      useEffect(() => {
        localStorage.setItem('applicantFormData', JSON.stringify(applicantFormData))
        
      })
      const {salutation, firstName, middleName, secondName, maidenName, otherNames, birthDate, mobileNum, homeNum } = applicantFormData
  return (
    <Segment clearing>
          <Header>{title}</Header>
          <Form>
          <Form.Field>
              <label htmlFor="salutation">Salutation</label>
              <input
                onChange={handleInputChange}
                placeholder="Salutation"
                name="salutation"
                value={salutation}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={handleInputChange}
                placeholder="First Name"
                name="firstName"
                value={firstName}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="middleName">Middle Name</label>
              <input
                onChange={handleInputChange}
                placeholder="Middle Name"
                name="middleName"
                value={middleName}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="secondName">Second Name</label>
              <input
                onChange={handleInputChange}
                placeholder="Second Name"
                name="secondName"
                value={secondName}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="maidenName">Maiden Name</label>
              <input
                onChange={handleInputChange}
                placeholder="Maiden Name"
                name="maidenName"
                value={maidenName}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="otherNames">Other Names</label>
              <input
                onChange={handleInputChange}
                placeholder="Other Names"
                name="otherNames"
                value={otherNames}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="birthDate">Birth Date</label>
              <input
                onChange={handleInputChange}
                placeholder="Birth Date"
                name="birthDate"
                value={birthDate}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="mobileNum">Mobile Number</label>
              <input
                onChange={handleInputChange}
                placeholder="Mobile Number"
                name="mobileNum"
                value={mobileNum}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="homeNum">Home Number</label>
              <input
                onChange={handleInputChange}
                placeholder="Home Number"
                name="homeNum"
                value={homeNum}
              />
            </Form.Field>
            <Button content="Save" onClick={() => saveToSalesforce(applicantFormData)} />
          </Form>
        </Segment>
  );
};

export default Applicant;
