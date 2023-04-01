import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Station } from './Form';

interface Props {
  typingFrom: boolean;
  citiesFrom: Station[];
  selectedIndex: number;
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => void;
}

export default function CityList({
  typingFrom,
  citiesFrom,
  selectedIndex,
  handleListItemClick,
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
          {typingFrom &&
            citiesFrom.map((city: Station, index: number) => (
              <ListItemButton
                key={index}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemText primary={city.name} />
              </ListItemButton>
            ))}
        </List>
      </Box>
    </>
  );
}
