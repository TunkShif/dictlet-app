import { createContainer } from "unstated-next";
import useCurrentLanguage from "../hooks/useCurrentLanguage";

const CurrentLanguage = createContainer(useCurrentLanguage)

export default CurrentLanguage
