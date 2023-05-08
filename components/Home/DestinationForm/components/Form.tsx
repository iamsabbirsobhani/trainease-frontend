'use client';
import React, { useState, useEffect } from 'react';
import stationData from '@/public/stations.json';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';
import debounce from 'lodash/debounce';
import CityList from './CityList';
import axios from 'axios';
import { API } from '@/api';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '@/store';
import {
  selectRoute,
  setFrom,
  setTo,
} from '@/features/activities/activitiesSlice';
import { startOfToday, addDays } from 'date-fns';

export interface Station {
  id: number;
  name: string;
  info?: string;
}

export default function Form() {
  const now = startOfToday();
  const future = addDays(now, 5);

  const stations: Station[] = stationData.map((station: any) => ({
    id: station.id,
    name: station.name,
    info: station.info,
  }));

  const selectedRoutes = useSelector(
    (state: RootState) => state.activities.selectedRoutes,
  );
  const selectedTo = useSelector((state: RootState) => state.activities.to);

  const dispatch = useDispatch();

  const [selectedFromCities, setSelectedFromCities] = useState<Station[]>();
  const [selectedToCities, setSelectedToCities] = useState<Station[]>();
  const [citiesFrom, setCitiesFrom] = useState(stations);
  const [citiesTypingLetter, setcitiesTypingLetter] = useState('');
  const [cityloading, setCityLoading] = useState(false);
  const [citiesTo, setCitiesTo] = useState(stations);
  const [date, setDate] = useState<any>();
  const [typingFrom, setTypingFrom] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const [isSelected, setisSelected] = useState<boolean>(false);

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

  const handleFromQuery = (e: any): any => {
    const value = e.target.value;

    if (value === '') {
      setTypingFrom(false);
      setcitiesTypingLetter('');
      setCityLoading(false);
      setNotFound(false);
      return value;
    } else {
      setTypingFrom(true);
    }

    const filteredCities = stations.filter((city) => {
      return city.name.toLowerCase().includes(value.toLowerCase());
    });

    if (filteredCities.length === 0) {
      setcitiesTypingLetter(value);
      setNotFound(true);
      setTypingFrom(false);
    } else {
      setcitiesTypingLetter(value);
      setCitiesFrom(filteredCities);
    }

    setCityLoading(false);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTo(event.target.value));
  };

  const getSelectedStationsRoute = async (fromStation: string) => {
    try {
      const stations = await axios.get(
        API + `/getselectedstationsroute/fromstation/${fromStation}`,
      );
      if (stations.data) setisSelected(true);
      dispatch(selectRoute(stations.data));
      dispatch(setFrom(fromStation));
    } catch (error) {
      console.log(error);
      setisSelected(false);
    }
  };

  const handleListItemClick = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setcitiesTypingLetter(citiesFrom[index].name);
    // console.log(citiesFrom[index]);
    await getSelectedStationsRoute(citiesFrom[index].name);
    setTypingFrom(false);
    setNotFound(false);
  };

  const query = debounce((e) => handleFromQuery(e), 2000);
  const loadingQuery = debounce((e) => setCityLoading(true), 1000);

  const handleFrom = (e: any) => {
    setcitiesTypingLetter(e.target.value);
    if (citiesTypingLetter) setisSelected(false);
    loadingQuery(e);
    query(e);
  };

  return (
    <div className=" ">
      <form action="">
        <div className=" flex justify-between items-center">
          <div className="from flex flex-col w-[300px] mb-2 relative">
            <label
              htmlFor="from"
              className=" text-md font-semibold mb-2 text-gray-500"
            >
              From
            </label>

            <input
              type="text"
              required
              id="outlined-required"
              placeholder="Origin station"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent"
              value={citiesTypingLetter}
              onChange={(e) => handleFrom(e)}
              autoComplete="off"
            />

            {typingFrom ? (
              <CityList
                typingFrom={typingFrom}
                citiesFrom={citiesFrom}
                cityLoading={cityloading}
                selectedIndex={selectedIndex}
                notFound={notFound}
                notFoundMessage={`No station found for "${citiesTypingLetter}"`}
                handleListItemClick={handleListItemClick}
              />
            ) : notFound ? (
              <CityList
                typingFrom={typingFrom}
                citiesFrom={citiesFrom}
                cityLoading={cityloading}
                selectedIndex={selectedIndex}
                notFound={notFound}
                notFoundMessage={`No station found for "${citiesTypingLetter}"`}
                handleListItemClick={handleListItemClick}
              />
            ) : null}
          </div>

          <div className="flex justify-center items-center relative bg-sky-700 rounded-full w-[35px] h-[35px] text-white mt-3 shadow-md">
            <SwapHorizIcon />
          </div>

          <div className="to flex flex-col w-[300px] mb-2">
            <label
              htmlFor="to"
              className="text-md font-semibold mb-2 text-gray-500"
            >
              To
            </label>
            {isSelected ? (
              <select
                onChange={handleSelectChange}
                id="stations"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent appearance-none"
              >
                <option value="">Select a station</option>
                {selectedRoutes.stations.map(
                  (station: {
                    id: React.Key | null | undefined;
                    stationName:
                      | string
                      | number
                      | readonly string[]
                      | undefined;
                  }) => (
                    <option key={station.id} value={station.stationName}>
                      {station.stationName}
                    </option>
                  ),
                )}
              </select>
            ) : (
              <select
                id="stations"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent appearance-none"
                disabled
              >
                <option value="">Select a station</option>
              </select>
            )}
          </div>
        </div>

        <div className="date flex flex-col w-[300px] mt-2 mb-2">
          <label
            htmlFor="date"
            className="text-md font-semibold mb-2 text-gray-500"
          >
            Date
          </label>
          <StyledDatePicker maxDate={future} minDate={now} />
        </div>

        <div className=" text-center mt-3">
          <StyledButton type="submit">Get times & tickets</StyledButton>
        </div>
      </form>
    </div>
  );
}
