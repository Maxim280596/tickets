export type TicketsProps = {
  price: string;
  origin: string;
  destination: string;
  destinationBack: string;
  originBack: string;
  stops: number;
  stopsBack: number;
  stopsCity: string;
  stopsCityBack: string;
  departureDate: string;
  duration: number;
  departureDateBack: string;
  durationBack: number;
};

export type TicketsMap = {
  price: string;
  segments: [
    {
      stops: [];
      origin: string;
      destination: string;
      date: string;
      duration: number;
    },
    {
      stops: [];
      origin: string;
      destination: string;
      date: string;
      duration: number;
    }
  ];
};

export type Checkbox = {
  id: number;
  path: string;
  value: string;
  checked: boolean;
  length: number;
};

export interface RootState {
  isLoaded: boolean;
  data: [];
  renderTickets: [];
  error: string;
}

export interface RootStates {
  mainReducer: {
    isLoaded: boolean;
    data: [];
    renderTickets: [];
    error: string;
  };
}

export type SearchInputProps = {
  toggleCheckbox: (option: { id: number }) => void;
  name: String;
  options: Checkbox[];
}
