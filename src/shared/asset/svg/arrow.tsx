interface ArrowProps {
  isOpen: boolean;
}

export default function Arrow({ isOpen }: ArrowProps) {
  return (
    <svg
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
    >
      <path
        d="M1 1L10 10L19 1"
        stroke="#C8C8C8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
