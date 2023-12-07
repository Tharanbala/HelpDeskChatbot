import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios";
// import FormContainer from 'react-hook-form-mui'
// import e from 'cors';
import AccountDetails from './AccountDetails';

// interface Details {
//   campusid: number|undefined;
//   email_address: string |undefined;
//   epanther: string|undefined;
//   first_name: string|undefined;
//   last_name: string|undefined;
//   } 

export default function NameForm(): JSX.Element {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [dob, setDOB] = useState<string>();
  const [userDetails, setUserDetails] = useState<any>("");

  const getdetails = (value: any) => {
    console.log(value);
    console.log(firstName, lastName, dob);
    const baseURL = "http://127.0.0.1:5000/get?FirstName=" + firstName + "&LastName=" + lastName + "&dob=" + dob;
    
    
    console.log(baseURL);
    axios.get(baseURL).then((response) => {
      console.log(response.data[0]);
      setUserDetails(response.data[0]);
    }
    )
  };
  return (
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
    >
      {/* <FormContainer onSuccess={onSubmit}> */}
      <TextField
        required
        id="outlined-required"
        label="First Name"
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Date Of Birth"
        onChange={e => setDOB(e.target.value)}
      />
    </Box>
    <p> {userDetails?.first_name}</p>
    <Button sx={{ m: 1, minWidth: 100 }} variant="outlined" onClick={(e: React.MouseEvent<HTMLElement>) => getdetails(e.target)}>Submit</Button>
    
    <div className='detailscard'> <AccountDetails campusid={userDetails.campusid} email_address={userDetails.email_address} epanther={userDetails.epanther} first_name={userDetails.first_name} last_name={userDetails.last_name} password_lastset={userDetails.password_lastset} password_expired={userDetails.password_expired}/> </div>
    </div>
  );
}