import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faMoon, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faRegMoon } from "@fortawesome/free-regular-svg-icons";

export default function useFontawesome() {
  library.add(
    faMoon,
    faCode,
    faArrowLeft,
    faRegMoon
    // more icons go here
  );
}

useFontawesome();
