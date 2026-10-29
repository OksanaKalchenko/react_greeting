export default function Greeting() {
  const hour = new Date().getHours();
  let greeting;
  let timesOfDay;

  if (hour < 12) {
    greeting = "Доброе утро!";
    timesOfDay = 'morning'
  } else if (hour < 18) {
    greeting = "Добрый день!";
    timesOfDay = 'day'
  } else {
    greeting = "Добрый вечер!";
    timesOfDay = 'evening'
  }

  return (
    <div className="greeting">
        <p className={`greeting__${timesOfDay}`}>{greeting}</p>
    </div>
  )
}
