import './App.css';


function App() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 3) + 1;
  }

  const setWiner = () => {
    const winer = getRandomNumber()
    const doors = [{ name: 1, win:false, open: false }, { name: 2,  win:false, open: false }, { name: 3,  win:false, open: false }]
    doors[winer -1].win = true
    return doors
  }
  const firstDecision = () => {
    const doors = setWiner()
    const chouse = getRandomNumber()
    const openedDoor = doors.find(door => !door.win && door.name !== chouse).name
    doors[openedDoor -1].open = true
    return {doors, chouse}
  }
  // const secondDecidion = () => {
  //   const result = firstDecision()
  //   const chouse = result.chouse
  //   const winOrNot = result.doors.find(door => !door.open && door.name !== chouse).win
  //   return winOrNot
  // }
  const secondDecidion = () => {
    const result = firstDecision()
    const chouse = result.chouse
    const winOrNot = result.doors.find(door => door.name === chouse).win
    return winOrNot
  }
  const counter = () => {
    const result = {
      wins: 0,
      lost: 0
    }
    for (let i = 0; i < 10000; i++) {
      if (secondDecidion()) {
        result.wins++
      } else
      result.lost++

    }

    return result
  }

  console.log(counter()) 
  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
