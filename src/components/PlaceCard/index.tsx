import Image from "next/image";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  content: string;
  updated_at: string;
}

export default function TouristCard({
  image,
  title,
  subtitle,
  content,
  updated_at,
}: Props) {
  return (
    <div className="cursor-pointer grid text-white bg-primary rounded hover:opacity-80 transition-opacity">
      <div className="relative w-[300px] h-[200px] overflow-hidden">
        <Image
          className="rounded-t w-full"
          src={image}
          width={300}
          height={200}
          alt={title}
        />
        <div className="absolute bottom-1 right-1 text-[8px] rounded bg-primary p-1">
          อัพเดท: {updated_at}
        </div>
      </div>

      <div className="grid p-3 relative">
        <div className="font-bold">{title}</div>
        <div className="font-semibold text-sm">{subtitle}</div>
        <div className="text-sm">{content}</div>
      </div>
    </div>
  );
}
