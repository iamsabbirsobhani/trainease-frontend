'use client';
import React, { useState } from 'react';
import stationData from '@/public/stations.json';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

  return (
    <div className="">
      <form action="">
        <div className=" flex justify-between items-center">
          <div className="from flex flex-col w-[300px]">
            <label htmlFor="from" className=" text-lg font-semibold">
              From
            </label>
            <TextField
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
            <TextField
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
          <DatePicker />
        </div>

        <div className=" text-center mt-3">
          <Button className="font-bold  w-[200px] p-2 shadow-sm bg-sky-700 text-white hover:bg-sky-900 rounded-md">
            Get times & tickets
          </Button>
        </div>
      </form>
    </div>
  );
}
