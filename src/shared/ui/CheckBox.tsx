interface CheckBoxProps {
  isActive?: boolean;
}
export default function CheckBox({ isActive = false }: CheckBoxProps) {
  return (
    <>
      {isActive ? (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="16" height="16" rx="1.5" fill="#A7A7A7" stroke="#A7A7A7" />
          <path
            d="M4 7.73913L7.78378 12L14 5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="16" height="16" rx="1.5" stroke="#A7A7A7" />
        </svg>
      )}
    </>
  );
}
