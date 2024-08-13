"use client";
export default function UserImage() {
  return (
    <img
      className="size-12 rounded-full object-cover"
      src={
        JSON.parse(
          localStorage.getItem("user") ??
            '{"image": "https://github.com/SampathBalivada.png"}'
        ).image
      }
    />
  );
}
