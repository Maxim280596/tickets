export const getTimeToString = (
  date: string | number | Date,
  duration: number
) => {
  let dateStart = new Date(date);
  let dateEnd = new Date(dateStart.getTime() + duration * 60 * 1000);
  return (
    dateStart.toTimeString().slice(0, 5) +
    ' - ' +
    dateEnd.toTimeString().slice(0, 5)
  );
};

export const getDurationToString = (duration: number) => {
  return Math.floor(duration / 60).toString() + 'ч ' + (duration % 60) + 'м';
};

export const sortByPrice = (arr: []) => {
  return arr.sort(
    (bigItemPrice: { price: number }, smallItemPrice: { price: number }) =>
      bigItemPrice.price - smallItemPrice.price
  );
};

export const sortByDuration = (arr: []) => {
  return arr.sort(
    (
      sortItemSmall: { segments: [{ duration: number }] },
      sortItemBig: { segments: [{ duration: number }] }
    ) => sortItemSmall.segments[0].duration - sortItemBig.segments[0].duration
  );
};


export const filterByStops = (checkboxArr:[],filterArr:never[], filteredArray:[] ) => {
  checkboxArr.map((item: { checked: Boolean; length: Number }) => {
    if (item.checked) {
      filterArr = filteredArray.filter(
        (a: any) =>
          a.segments[0].stops.length === item.length &&
          a.segments[1].stops.length === item.length
      );
    }
    if (item.checked && item.length === 10) {
      filterArr = filteredArray;
    }
    return filterArr;
  });
  return filterArr
}