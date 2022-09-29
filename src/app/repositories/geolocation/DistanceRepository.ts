import { Coordinate } from "../../interfaces/Coordinates";

export interface IDistanceRequest {
	startPoint: Coordinate;
	endPoint: Coordinate;
}

export interface IDistanceResponse {
	distanceInMetters: number;
}

export interface IDistance {
	execute(req: IDistanceRequest): Promise<IDistanceResponse>;
}
