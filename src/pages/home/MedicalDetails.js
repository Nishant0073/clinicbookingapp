export default function Detail(props) {
  let {data} = props;
  
  return (
    <section className='box'>
    <h2 className='title medical'>Medical Details</h2>
    <div className='med-info'>
    {/*Symptoms of patient*/}
      <p className="line">&#10147; Symptoms</p>
      <ul>
      {/*rendering each symptom of patient or print No any symptoms if there the symptoms array is empty*/}
      {data.symptoms?data.symptoms.map((item,i)=>{
        return (
          <li key={i} className="symptoms">
          {item}
          </li>
        );
      }):"No any Symptoms."}
      </ul>
      {/*Is patient first timing visiting the hospital?*/}
      <p className="line">&#10147; First Time Visit?</p>
      <ul><p>{data['first-time']}</p></ul>
      {/*Appointment date of patient with doctor*/}
      <p className="line">&#10147; Appointment Date:</p>
      <ul><p>{data.appointment}</p></ul>
    </div>
    </section>
  );
}

