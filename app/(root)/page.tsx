import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1 className="head-text text-left  ">
        Home
        {/* <UserButton afterSignOutUrl="/"/> */}
      </h1>
    </>
  )
}