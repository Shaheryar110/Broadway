import { AxiosGet, AxiosPost } from "../../utils/api-methods";
import { BASE_URL_BROADWAY_API, configDataType } from "../config";
import { ChallengeDataType } from "./types";

const setErrorMessage = (message: string) => ({
  title: "Address Service",
  message,
});
const ProcessChallenge_api = () =>
  `${BASE_URL_BROADWAY_API}/BroadwayAPI.aspx?Method=ProcessChallenge`;

export const processChallange = (
  data: ChallengeDataType,
  configData: configDataType
) =>
  AxiosPost(
    ProcessChallenge_api(),
    configData,
    setErrorMessage("ProcessChallenge_api"),
    data
  );
