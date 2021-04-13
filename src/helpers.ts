export const getTimeToString = (date:string|number|Date, duration:number) => {
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