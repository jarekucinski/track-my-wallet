import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipsArrayTypes = { single: 'single', multi: 'multi' };

export default function ChipsArray({ initialData = [], type = ChipsArrayTypes.single, onChange, ...otherProps }) {
  const [chipData] = useState(initialData);
  const [selected, setSelected] = useState([]);

  const handleClick = (e, chip) => {
    setSelected(prev => {
      let selected = [];
      if (type === ChipsArrayTypes.multi) {
        if (prev.find(item => item.key === chip.key)) {
          selected = prev.filter(item => item.key !== chip.key);
        } else {
          selected = [...prev, chip];
        }
      } else {
        if (prev.length && prev[0].key === chip.key) {
          selected = [];
        }
        selected = [chip];
      }

      if (onChange) {
        onChange(selected);
      }

      return selected;
    })
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
      {...otherProps}
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              clickable
              onClick={e => handleClick(e, data)}
              color={selected.find(item => item.key === data.key) ? 'primary' : 'default'}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
