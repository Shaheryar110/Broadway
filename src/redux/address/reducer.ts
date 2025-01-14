import { PayloadAction } from "@reduxjs/toolkit";
import { AddressesSliceType } from "./slice";

type stateType = AddressesSliceType;
type actionType = PayloadAction<Partial<AddressesSliceType>>;

export const setAddresses = (state: stateType, action: actionType) => {
  const { city, addressType, area, outlet, tax } = action.payload;

  state.city = city !== undefined ? city : state.city;
  state.addressType =
    addressType !== undefined ? addressType : state.addressType;
  state.area = area !== undefined ? area : state.area;
  state.outlet = outlet !== undefined ? outlet : state.outlet;
  state.tax = tax !== undefined ? tax : state.tax;
};
