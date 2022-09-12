type Location = {
    latitude: number
    longitude: number
    zoom: number
};

type City = {
    name: string;
    location: Location;
};

export type { City };