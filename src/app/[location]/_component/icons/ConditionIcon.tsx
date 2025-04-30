import Image from "next/image";

export default function ConditionIcon({ url, size, name }: { url: string, size: 32 | 64 | 128, name: string}) {
    const sizedUrl = url.replace("//", "https://").replace('64x64', `${size}x${size}`);

    return (
        <Image
            src={sizedUrl}
            alt={name}
            width={size}
            height={size}
        />
    )
}
  