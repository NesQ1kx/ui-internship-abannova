const collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    album: 'ABBA Gold',
  },
};

export const updateRecords = (id, prop, value) => {
  const tracksProp = 'tracks';
  const item = collection[id];

  if (value === '') {
    delete item[prop];
  } else if (prop === tracksProp) {
    const tracks = item[prop];
    item[prop] = tracks ? [...tracks, value] : [value];
  } else {
    item[prop] = value;
  }

  return collection;
};
