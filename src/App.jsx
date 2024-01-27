import './App.css'

function App() {


  return (
    <main className="App">
      <section className="card">
        {/* image */}
        <figure>
          <img src="/avatar-jessica.jpeg" alt="Jessica Randall" className="card__profile" />
        </figure>

        {/* user */}
        <div className="card__user">
          <h1 className="user__name">Jessica Randall</h1>

          <h2 className="user__location">London, United Kingdom</h2>
        </div>

        {/* bio */}
        <p className="card__bio">"Front-end developer and avid reader."</p>

        {/* links */}
        <div className="card__links">
          <a href="">Github</a>
          <a href="">Frontend Mentor</a>
          <a href="">Linkedln</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
      </section>
    </main>
  )
}

export default App
