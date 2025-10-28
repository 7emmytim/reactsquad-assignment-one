import { UserProfile } from "@/features";
import { withLayout, withPrivate } from "@/hocs";
import { compose } from "ramda";

export default compose(withPrivate, withLayout)(UserProfile);
