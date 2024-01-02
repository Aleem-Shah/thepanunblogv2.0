import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="grid h-[100vh] items-center place-content-center align-middle justify-center">

      <SignUp />
    </div>
  );
}

