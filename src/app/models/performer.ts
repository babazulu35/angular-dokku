import  { Firm } from './firm';

export class Performer {
	Id: number;
	Name: string;
	Type: string;
	IsActive: boolean;
	Images: string;
	StaticPageUrl: string;
	FacebookUrl: string;
	TwitterUrl: string;
	YoutubeUrl: string;
	FirmId: number;
	Firm: Firm;
}