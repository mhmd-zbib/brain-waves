import { ProfilePicture } from "../../core/components/ui/ProfilePicture";

export default function ProfileSide() {
  return (
    <div className=" items-center flex flex-col">
      <div className="flex flex-col gap-4  items-center">
        <ProfilePicture
          size="lg"
          image="https://i.pinimg.com/originals/8d/94/f9/8d94f9e0b98cdcf57aefee15837c705b.png"
        />
        <p className="text-xl">The Batman</p>
      </div>
    </div>
  );
}
