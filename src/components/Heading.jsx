function Heading() {
  const date = new Date();
  const time = date.getHours();

  let day;
  const customStyle = {
    color: ""
  }

  if(time < 12){
    day = "Good Morning";
    customStyle.color = "red"
  }
  else if(time < 18){
    day = "Good Afternoon";
    customStyle.color = "green"
  }
  else{
    day = "Good Evening";
    customStyle.color = "blue"
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 style = {customStyle}>{day}</h1>
      </header>
    </div>
  );
}

export default Heading;
