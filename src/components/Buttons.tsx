export default function Buttons(){
    const timespans = ['Daily', 'Weekly', 'Monthly'];

    return (<div id="timespans">
    {timespans.map((timespan, key)=><button className='block mb-[16px] last:mb-0' key={key}>{timespan}</button>)}
  </div>);
}