export interface Invoice {
    id: number;
    invoice_date: Date;
    invoice_number: string;
    status: string;
    total: number;
}