import { Home } from "@/features";
import { withLayout, withPublic } from "@/hocs";
import { compose } from "ramda";

export default compose(withPublic, withLayout)(Home);
