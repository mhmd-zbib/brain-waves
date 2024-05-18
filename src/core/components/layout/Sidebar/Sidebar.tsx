import NavOptions from "../../../../test/Layout/NavOptions";
import ProfileSide from "../../../../test/Layout/ProfileSide";
import { Card } from "../../ui/Cards";

export default function Sidebar() {
  return (
    <div className="md:col-span-3 lg:block hidden relative bg ">
      <div className="rounded-md sticky top-0">
        <Card disabled className="gap-5 flex">
          <ProfileSide />
          <NavOptions />
        </Card>
      </div>
    </div>
  );
}
