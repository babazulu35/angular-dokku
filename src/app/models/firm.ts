import  { FirmType} from './firm-type.enum';

export class Firm {
	Id: number;
	CreateDate: Date;
	UpdateDate: Date;
	CreateUserName: string;
	UpdateUserName: string;
	ParentId: number;
	Code: string;
	Type: FirmType;
	Logo: string;
	MobilePhone: string;
	WebPageUrl: string;
	Images: string;
	Videos: string;
	Vat: number;
	IsActive: boolean;
	IsSeatSelectionEnabled: boolean;
	IdentityNumber: number;
	EArchiveUser: string;
	EArchivePassword: string;
	ApiKey: string;
	CrmMemberId: number;
	Parent: Firm;
}