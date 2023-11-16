export interface LoginFormData {
  username: string;
  password: string;
}

export interface SignupFormData {
  username: string;
  password: string;
  passwordCheck: string;
  phoneNumber: string;
  phoneAuthNumber: string;
}

export interface GroupBuyFormData {
  title: string;
  itemLink: string;
  price: number;
  maxUsers: number;
  description: string;
  location: Location | null;
  images: FileList;
  enumShare: "BUY" | "SHARE";
}
