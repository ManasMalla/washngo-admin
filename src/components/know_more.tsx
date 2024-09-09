import Link from "next/link";

export default function KnowMore(props: { id: string }) {
  return (
    <Link
      href={"/services/" + props.id}
      className="mt-2 text-sm uppercase font-medium"
    >
      Know more
    </Link>
  );
}
