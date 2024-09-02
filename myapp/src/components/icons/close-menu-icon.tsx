import { SVGProps } from "react";

export default function CloseMenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"
      >
        <animate
          fill="freeze"
          attributeName="d"
          dur="0.4s"
          values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"
        />
      </path>
    </svg>
  );
}
