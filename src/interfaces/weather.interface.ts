export interface Weather {
    id: number;
    city: string;
    hour: string;
    temperature: Temperature;
    infos: Infos;
}

export interface Temperature {
    current: number;
    min: number;
    max: number;
    humidity: number;
    pressure: number;
}

export interface Infos {
    main: string;
    description: string;
    icon: string;
}
