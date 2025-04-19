export interface IVoucher {
    id: number;
    code: string;
    discount: number;
    discount_type: "fixed" | "percent";
    max_discount: number | null;
    min_order_value: number;
    quantity: number;
    used: number;
    max_usage_per_user: number;
    valid_from: string; 
    valid_to: string; 
    del_flg: number
    status: number;
  }
  