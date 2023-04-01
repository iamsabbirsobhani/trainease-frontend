import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Station } from './Form';
import { CircularProgress } from '@mui/material';

interface Props {
  typingFrom: boolean;
  citiesFrom: Station[];
  selectedIndex: number;
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => void;
  cityLoading: boolean;
  notFound: boolean;
  notFoundMessage: string;
}

export default function CityList({
  typingFrom,
  citiesFrom,
  selectedIndex,
  handleListItemClick,
  cityLoading,
  notFound,
  notFoundMessage,
}: Props) {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'absolute',
          zIndex: 1000,
          top: '100%',
          overflow: 'auto',
          maxHeight: 300,
        }}
      >
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          {typingFrom && citiesFrom
            ? citiesFrom.map((city: Station, index: number) => (
                <ListItemButton
                  key={index}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  <ListItemText primary={city.name} />
                </ListItemButton>
              ))
            : notFound === true && (
                <ListItemButton>
                  <ListItemText primary={notFoundMessage} />
                </ListItemButton>
              )}
          {cityLoading && (
            <CircularProgress
              sx={{
                position: 'relative',
                left: '45%',
                right: '50%',
              }}
            />
          )}
        </List>
      </Box>
    </>
  );
}
