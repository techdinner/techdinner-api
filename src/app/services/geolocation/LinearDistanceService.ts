import {
	IDistance,
	IDistanceRequest,
	IDistanceResponse,
} from "../../repositories/geolocation/DistanceRepository";

export class LinearDistanceService implements IDistance {
	execute({
		startPoint,
		endPoint,
	}: IDistanceRequest): Promise<IDistanceResponse> {
		return new Promise<IDistanceResponse>((resolve, reject) => {
			const deg2rad = (deg: number) => deg * (Math.PI / 180),
				R = 6371,
				dLat = deg2rad(startPoint.lat - endPoint.lat),
				dLng = deg2rad(startPoint.lng - endPoint.lng),
				a =
					Math.sin(dLat / 2) * Math.sin(dLat / 2) +
					Math.cos(deg2rad(startPoint.lat)) *
						Math.cos(deg2rad(startPoint.lat)) *
						Math.sin(dLng / 2) *
						Math.sin(dLng / 2),
				c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			resolve({ distanceInMetters: R * c * 1000 });
		});
	}
}
