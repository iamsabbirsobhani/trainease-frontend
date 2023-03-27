export default function Form() {
  return (
    <div>
      <form action="">
        <div className="from">
          <label htmlFor="from">From</label>
          <input type="text" name="from" id="from" />
        </div>

        <div className="to">
          <label htmlFor="to">To</label>
          <input type="text" name="to" id="to" />
        </div>

        <div className="date">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
        </div>
      </form>
    </div>
  );
}
