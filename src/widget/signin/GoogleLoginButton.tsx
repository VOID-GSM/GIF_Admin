import GoogleLogo from '@/src/shared/asset/svg/GoogleLogo';

export default function GoogleLoginButton() {
  return (
    <button
      type="button"
      className="w-100 h-12.5 flex items-center border border-gray-60 rounded-[10px] py-2 pl-5 gap-15.5 cursor-pointer"
    >
      <GoogleLogo />
      <span className="font-medium text-2xl">Google로 시작하기</span>
    </button>
  );
}
