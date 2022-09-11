import { ICoordinate } from "../../interfaces/coordinates";

export interface IDistanceRequest {
	startPoint: ICoordinate;
	endPoint: ICoordinate;
}
export interface IDistanceResponse {
	distanceInMetters: number;
}
export interface IDistance {
	execute(req: IDistanceRequest): Promise<IDistanceResponse>;
}
