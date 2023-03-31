'use client';
import React, { useState } from 'react';
import stationData from '@/public/stations.json';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';

// interface for the station also can be null
interface Station {
  id: number;
  name: string;
  info?: string;
}

export default function Form() {
  const stations: Station[] = stationData.map((station: any) => ({
    id: station.id,
    name: station.name,
    info: station.info,
  }));

  const [selectedFromCities, setSelectedFromCities] = useState<Station[]>();
  const [selectedToCities, setSelectedToCities] = useState<Station[]>();
  const [citiesFrom, setCitiesFrom] = useState(stations);
  const [citiesTo, setCitiesTo] = useState(stations);
  const [date, setDate] = useState<any>();

  const StyledButton = styled(Button)`
    &.MuiButton-root {
      background-color: #075985;
      color: #f9fafb;
      font-weight: 600;
      padding: 10px;
      margin-top: 10px;
      box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
    }
    &:hover {
      color: #f9fafb;
      background-color: #075985;
    }
    &:active {
      background-color: #075985;
    }
    &:focus {
      background-color: #075985;
    }
  `;

  const StyledTextField = styled(TextField)`
    .MuiInputBase-root {
      color: #0284c7;
      fieldset {
        border-color: #0284c7;
      }
      &:hover fieldset {
        border-color: #0284c7;
      }
      &.Mui-focused fieldset {
        border-color: #0369a1;
      }
    }
    .MuiInputLabel-root {
      color: #0284c7;
    }

    .MuiFormLabel-root.Mui-focused {
      color: #0369a1;
    }
  `;

  const StyledDatePicker = styled(DatePicker)`
    .MuiInputBase-root {
      fieldset {
        border-color: #0284c7;
      }
      &:hover fieldset {
        border-color: #0284c7;
      }
      &.Mui-focused fieldset {
        border-color: #0369a1;
      }
      & .MuiOutlinedInput-input {
        color: #0284c7;
        opacity: 1;
      }
      & .MuiSvgIcon-root {
        color: #0284c7;
      }
    }
  `;

  return (
    <div className="">
      <form action="">
        <div className=" flex justify-between items-center">
          <div className="from flex flex-col w-[300px]">
            <label htmlFor="from" className=" text-lg font-semibold">
              From
            </label>
            <StyledTextField
              required
              id="outlined-required"
              label="Origin station"
              defaultValue=""
            />
          </div>

          <div className="flex justify-center items-center relative bg-sky-700 rounded-full w-[35px] h-[35px] text-white mt-3 shadow-md">
            <SwapHorizIcon />
          </div>

          <div className="to flex flex-col w-[300px]">
            <label htmlFor="to" className="text-lg font-semibold">
              To
            </label>
            <StyledTextField
              required
              id="outlined-required"
              label="Destination station"
              defaultValue=""
            />
          </div>
        </div>

        <div className="date flex flex-col w-[300px] mt-2">
          <label htmlFor="date" className="text-lg font-semibold">
            Date
          </label>
          <StyledDatePicker />
        </div>

        <div className=" text-center mt-3">
          <StyledButton>Get times & tickets</StyledButton>
        </div>
      </form>
    </div>
  );
}
