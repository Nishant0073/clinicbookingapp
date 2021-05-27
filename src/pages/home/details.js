export default function Detail(props) {
    let { data } = props;
  
    //array of fields used in Personal details
    let toShow = [
      ['UserId', 'userid'],
      ['Age', 'age'],
      ['Gender', 'gender'],
      ['Contact No', 'phone'],
      ['City', 'city'],
      ['State', 'state'],
    ]
  
  
  
    return (
      <section className='box'>
        <h2 className="title personal">Personal Details</h2>
        <div className='info'>
          {/*Map function to render all fields*/}
          {toShow.map((item, index) => {
            {/*Each line of field*/ }
            return (
              <div className='line' key={index}>
                <p>&#10147; {item[0]}:</p>
                <p>{data[item[1]]}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }