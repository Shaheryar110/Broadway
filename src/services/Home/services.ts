import { AxiosGet, AxiosPost } from "../../utils/api-methods";
import { BASE_URL_BROADWAY_API, configDataType } from "../config";
import {
  GetMenuResponse,
  MenuItemResponse,
  WelcomePopupResponse,
} from "./types";

const setErrorMessage = (message: string) => ({
  title: "Address Service",
  message,
});

const GetMenu_api = () =>
  `${BASE_URL_BROADWAY_API}/BroadwayAPI.aspx?Method=GetMenu`;
const GetMenuImage_api = () =>
  `${BASE_URL_BROADWAY_API}/BroadwayAPI.aspx?Method=GetMenuImagesWeb`;

const getOptions_api = (Id: string) =>
  `${BASE_URL_BROADWAY_API}/BroadwayAPI.aspx?Method=GetOptions&ItemID=${Id}`;
const getBanner_api = (city: string) =>
  `${BASE_URL_BROADWAY_API}/BroadwayAPI.aspx?Method=GetBanners&City=${city}`;

const welcomePopup_api = () =>
  `${BASE_URL_BROADWAY_API}/BroadwayAPI.aspx?Method=GetPopUpImage`;

export const getMenu = (configData: configDataType) =>
  AxiosGet<GetMenuResponse>(
    GetMenu_api(),
    configData,
    setErrorMessage("getMenu method")
  );
export const getOptions = (Id: string, configData: configDataType) =>
  AxiosGet<MenuItemResponse>(
    getOptions_api(Id),
    configData,
    setErrorMessage("getOptions Error")
  );
export const getBanners = (city: string, configData: configDataType) =>
  AxiosGet<string[]>(
    getBanner_api(city),
    configData,
    setErrorMessage("getCities Error")
  );
export const getMenuImage = (configData: configDataType) =>
  AxiosGet<string[]>(
    GetMenuImage_api(),
    configData,
    setErrorMessage("getMenuImage Error")
  );
export const getWelcomePopup = (configData: configDataType) =>
  AxiosGet<WelcomePopupResponse>(
    welcomePopup_api(),
    configData,
    setErrorMessage("getWelcomePopup Error")
  );
