import { AxiosPromise } from "axios";
import axiosInstance from "../config";

import {
  GroupBuyCategoriesValues,
  GroupBuyCategoryShareValues,
  GroupBuyPreviewType,
  GroupBuySortValues,
  GroupBuyStatusValues,
} from "@/types/groupBuy.types";

export interface getGroupBuyListByFilterRequest {
  page?: number;
  size?: number;
  category?: GroupBuyCategoriesValues;
  category_share?: GroupBuyCategoryShareValues;
  category_status?: GroupBuyStatusValues;
  sort?: GroupBuySortValues;
  address?: string;
}

export interface getGroupBuyListByFilterResponse {
  groupBuyingResponseDtoList: GroupBuyPreviewType[];
  len: number;
}

const getGroupBuyListByFilter = (
  args: getGroupBuyListByFilterRequest,
): AxiosPromise<getGroupBuyListByFilterResponse> =>
  axiosInstance.get("/group-buying/login", {
    params: {
      page: 1,
      size: 10,
      ...args,
    },
  });

export default getGroupBuyListByFilter;