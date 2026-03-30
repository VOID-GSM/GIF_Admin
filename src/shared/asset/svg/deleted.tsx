interface DeletedProps {
  className?: string;
  onClick: () => void;
}

export default function Deleted({ className, onClick }: DeletedProps) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path d="M0.696136 0.5L10.5001 10.5" stroke="black" strokeLinecap="round" />
      <path d="M10.3039 0.5L0.500003 10.5" stroke="black" strokeLinecap="round" />
    </svg>
  );
}
