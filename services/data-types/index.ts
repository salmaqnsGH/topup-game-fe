export interface Category {
	_id: string;
	name: string;
	__v: number;
}

export interface GameItemTypes {
	_id: string;
	status: string;
	name: string;
	thumbnail: string;
	category: Category;
}

export interface NominalTypes {
	_id: string;
	coinQuantity: number;
	coinName: string;
	price: number;
}

export interface BankTypes {
	_id: string;
	name: string;
	noRekening: string;
	bankName: string;
}

export interface PaymentTypes {
	_id: string;
	type: string;
	status: string;
	banks: [BankTypes];
}

export interface LoginTypes {
	email: string;
	password: string;
}

export interface UserTypes {
	id: string;
	username: string;
	email: string;
	name: string;
	phoneNumber: string;
	avatar: string;
}

export interface JWTPayloadTypes {
	player: UserTypes;
	iat: number;
}

export interface CheckoutTypes {
	voucher: string;
	nominal: string;
	payment: string;
	bank: string;
	name: string;
	accountUser: string;
}

export interface HistoryVoucherTopupTypes {
	gameName: string;
	category: string;
	thumbnail: string;
	coinName: string;
	coinQuantity: string;
	price: number;
}

export interface HistoryTransactionTypes {
	_id: string;
	value: number;
	status: string;
	historyVoucherTopup: HistoryVoucherTopupTypes;
}

export interface TopupCategoryTypes {
	_id: string;
	value: number;
	name: string;
}
