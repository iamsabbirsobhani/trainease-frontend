'use client';

import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import React, { useState } from 'react';
import stationData from '@/public/stations.json';
import { Calendar } from 'primereact/calendar';

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

  const handleFromCities = (e: MultiSelectChangeEvent) => {
    setSelectedFromCities(e.value);

    if (e.value && e.value.length > 0) {
      const filteredCities = stations.filter(
        (city) => (city && city.name) !== (e.value && e.value[0].name),
      );
      setCitiesTo(filteredCities);
    } else {
      setCitiesTo(stations);
    }
  };

  const handleToCities = (e: MultiSelectChangeEvent) => {
    setSelectedToCities(e.value);

    if (e.value && e.value.length > 0) {
      const filteredCities = stations.filter(
        (city) => (city && city.name) !== (e.value && e.value[0].name),
      );
      setCitiesFrom(filteredCities);
    } else {
      setCitiesFrom(stations);
    }
  };

  const handleDate = (e: any) => {
    setDate(e.value);
    console.log(e.value);
  };

  return (
    <div className="">
      <form action="">
        <div className=" flex justify-between">
          <div className="from flex flex-col w-[300px]">
            <label htmlFor="from" className=" text-lg font-semibold">
              From
            </label>
            <MultiSelect
              name="from"
              value={selectedFromCities}
              onChange={(e) => handleFromCities(e)}
              options={citiesFrom}
              optionLabel="name"
              filter
              placeholder="Select Cities"
              maxSelectedLabels={1}
              selectionLimit={1}
              className="w-full md:w-20rem"
            />
          </div>

          <div className="to flex flex-col w-[300px]">
            <label htmlFor="to" className="text-lg font-semibold">
              To
            </label>
            <MultiSelect
              name="to"
              value={selectedToCities}
              onChange={(e) => handleToCities(e)}
              options={citiesTo}
              optionLabel="name"
              filter
              placeholder="Select Cities"
              maxSelectedLabels={1}
              selectionLimit={1}
              className="w-full md:w-20rem"
            />
          </div>
        </div>

        <div className="date flex flex-col w-full mt-2">
          <label htmlFor="date" className="text-lg font-semibold">
            Date
          </label>
          <Calendar
            name="date"
            value={date}
            onChange={(e) => handleDate(e)}
            showIcon
            icon="pi pi-calendar"
            className=" h-[40px]"
          />
        </div>

        <div className=' text-center mt-3'>
          <button className=' font-bold bg-blue-600 w-[200px] p-2 text-white rounded-sm shadow-sm'>Get times & tickets</button>
        </div>
      </form>
    </div>
  );
}
