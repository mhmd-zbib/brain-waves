import { Card } from "../../core/components/ui/Cards";

export default function Sidebar() {
  return (
    <div className="md:col-span-3 lg:block hidden relative bg ">
      <div className="rounded-md sticky top-0">
        <Card disabled className="gap-5 flex">
          <p>Home</p>
        </Card>
      </div>
    </div>
  );
}
