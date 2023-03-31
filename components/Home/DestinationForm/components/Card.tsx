'use client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import Form from './Form';

export default function Card() {
  return (
    <div className="shadow-md rounded-lg w-[700px] mt-9 m-auto p-3">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form />
      </LocalizationProvider>
    </div>
  );
}
