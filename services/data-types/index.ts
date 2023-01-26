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
