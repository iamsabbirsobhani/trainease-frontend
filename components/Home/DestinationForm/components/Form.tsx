export default function Form() {
  return (
    <div className="">
      <form action="">
        <div className=" flex justify-between">
          <div className="from flex flex-col w-[200px]">
            <label htmlFor="from">From</label>
            <input className=" outline-none rounded-sm p-2 border-[1px] border-gray-500" type="text" name="from" id="from" />
          </div>

          <div className="to flex flex-col w-[200px]">
            <label htmlFor="to">To</label>
            <input className=" outline-none rounded-sm p-2 border-[1px] border-gray-500" type="text" name="to" id="to" />
          </div>
        </div>

        <div className="date flex flex-col w-[200px] mt-2">
          <label htmlFor="date">Date</label>
          <input className="outline-none rounded-sm p-2 border-[1px] border-gray-500" type="date" name="date" id="date" />
        </div>
      </form>
    </div>
  );
}
