export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <div
        className="w-full "
        style={{
          maskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      >
        <img
          className="h-96 w-full object-cover"
          src="https://www.carzspa.com/wp-content/uploads/2023/10/clear-paint-protection.webp"
        />
      </div>
      <h2 className="uppercase font-bold text-4xl px-12">
        {params.id.replaceAll("-", " ")}
      </h2>
    </div>
  );
}
