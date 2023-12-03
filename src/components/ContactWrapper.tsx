import { TbHeartRateMonitor } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { Fragment } from "react";

export function ContactWrapper() {
  return (
    <Fragment>
      <section className="flex h-full flex-col items-center justify-center space-y-10 overflow-auto p-3 lg:flex-row lg:space-y-0 ">
        <div className="flex w-full justify-items-center space-x-4">
          <div className="flex items-center">
            <TbHeartRateMonitor className="text-5xl lg:text-9xl" />
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <span className="text-xs font-thin lg:text-2xl">
              https://github.com/onepunch-tk
            </span>
            <span className="text-xs font-thin lg:text-2xl">
              86tkstar@gmail.com
            </span>
          </div>
        </div>
        <div className="flex w-full justify-items-center space-x-4">
          <div className="flex items-center justify-center">
            <BsTelephone className="text-5xl lg:text-9xl" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs font-thin lg:text-2xl">+10-6287-2629</span>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center pb-2 lg:pb-10">
        <h2 className="text-3xl font-semibold lg:text-7xl">감사합니다!</h2>
      </div>
    </Fragment>
  );
}
