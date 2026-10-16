import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src="/profile.jpg"
      alt="Portrait of Hydriss Tshwala Mangala"
      width={853}
      height={1280}
      sizes="164px"
      priority
      className="h-full w-full object-cover object-[50%_25%]"
    />
  );
}
