const weekMap = {
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
  sun: 7,
};

const getGroupsMap = (arr) =>
  arr.reduce((groupsMap, { day, from, to }) => {
    const fullTime = `${from} - ${to}`;

    if (groupsMap.hasOwnProperty(fullTime)) {
      const groups = groupsMap[fullTime];
      const group = groups.find((_group) => weekMap[_group.endDay] + 1 === weekMap[day]);

      if (group) {
        // eslint-disable-next-line no-param-reassign
        group.endDay = day;
      } else {
        groups.push({
          startDay: day,
          endDay: day,
        });
      }
    } else {
      // eslint-disable-next-line no-param-reassign
      groupsMap[fullTime] = [
        {
          startDay: day,
          endDay: day,
        },
      ];
    }

    return groupsMap;
  }, {});

export const workingHours = (arr) => {
  const groupsMap = getGroupsMap(arr);

  return Object.entries(groupsMap)
    .map(([time, groups]) => groups.map((group) => ({ ...group, time })))
    .flat()
    .sort((a, b) => {
      if (a.startDay === b.statrDay) return weekMap[a.endDay] - weekMap[b.endDay];
      return weekMap[a.startDay] - weekMap[b.startDay];
    })
    .map(({ startDay, endDay, time }) => {
      const days = startDay === endDay ? startDay.toUpperCase() : `${startDay.toUpperCase()} - ${endDay.toUpperCase()}`;
      return `${days}: ${time}`;
    });
};
