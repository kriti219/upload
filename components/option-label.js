import { memo } from "react";

const OptionLabel = memo(() => {
  return (
    <section className="w-[824px] flex flex-col items-center justify-start gap-[26px]">
      <footer className="self-stretch rounded-lg bg-grey-01 flex flex-row items-center justify-center p-8 text-center text-sm text-grey-05 font-sf-pro-display">
        <div className="flex-1 rounded-3xl flex flex-row items-center justify-center py-[132px] px-[30px] border-[2px] border-dashed border-grey-03">
          <div className="flex-1 relative opacity-[0.5]">
            <p className="m-0">{`Click to browse or `}</p>
            <p className="m-0">drag and drop your files</p>
          </div>
        </div>
      </footer>
      <div className="w-[248px] flex flex-row items-start justify-start py-0 pr-0 pl-[30px] box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
          <button className="cursor-pointer p-3 bg-white flex-1 rounded flex flex-row items-center justify-center border-[1px] border-solid border-iris-100">
            <div className="relative text-base leading-[100%] font-label-small text-iris-100 text-left">
              Cancel
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-3 bg-iris-100 flex-1 rounded flex flex-row items-center justify-center">
            <div className="relative text-base leading-[100%] font-label-small text-blue-gray-50 text-left">
              Submit
            </div>
          </button>
        </div>
      </div>
    </section>
  );
});

export default OptionLabel;
