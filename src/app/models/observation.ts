interface Imperial {
    temp: number;
    heatIndex: number;
    dewpt: number;
    windChill: number;
    windSpeed: number;
    windGust: number;
    pressure: number;
    precipRate: number;
    precipTotal: number;
    elev: number;
}
  
interface Observation {
    stationID: string;
    obsTimeUtc: string;
    obsTimeLocal: string;
    neighborhood: string;
    softwareType: string;
    country: string;
    solarRadiation: number;
    lon: number;
    realtimeFrequency: number;
    epoch: number;
    lat: number;
    uv: number;
    winddir: number;
    humidity: number;
    qcStatus: number;
    imperial: Imperial;
}

export { Observation, Imperial };
  