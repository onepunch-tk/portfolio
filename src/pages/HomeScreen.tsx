import { cls } from "@utils/helpers.ts";

export function HomeScreen() {
  return (
    <>
      <h1 className="flex font-serif">hello world!!</h1>
      <h2
        className={cls(
          "fixed top-5 flex h-5 w-5 bg-violet-400 font-semibold text-red-600"
        )}
      >
        my portfolio
      </h2>
    </>
  );
}
