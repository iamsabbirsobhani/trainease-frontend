'use client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import Form from './Form';
import { TextField } from '@mui/material';

export default function Card() {
  return (
    <div className="shadow-md rounded-lg w-[700px] mt-9 m-auto p-3 absolute top-[100px] bg-gray-50 left-0 right-0">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form />
      </LocalizationProvider>
    </div>
  );
}
