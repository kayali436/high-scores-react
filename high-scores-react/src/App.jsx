
import allCountryScores from "./scores";


function App() {
  return (
    <div
      style={{
        border: "solid black 2px",
      }}
    >
      <h1>All Country Scores</h1>
      <div>{Getname(allCountryScores)}</div>
    </div>
  );
}

function Getname(scores) {
  const sortedCountries = scores.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      {sortedCountries.map((country, index) => (
        <div
          style={{
            border: "solid green 3px",
            padding: "20px",
            margin: "12px",
          }}
          key={index}
        >
          <h2>High Scores: {country.name}:</h2>
          <div>
            {country.scores.map((score, scoreIndex) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  border: "solid white 1px",
                }}
                key={scoreIndex}
              >
                {score.n}: {score.s}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}


export default App;