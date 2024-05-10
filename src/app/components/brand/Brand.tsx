import Link from "next/link";

export const Brand = () => {
  return (
    <div className={`flex flex-col items-center p-2`}>
      <Link href={'/'}>
        <span
          className={`text-5xl border-b-4 border-t-4 border-yellow-400 text-center text-gray-800 block sm:text-center p-2`}
        >
          Handcrafted Haven
        </span>
      </Link>
    </div>
  );
};
