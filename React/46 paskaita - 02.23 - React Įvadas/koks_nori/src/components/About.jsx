const About = () => {
  return (
    <section id="about">
      <h1>About React</h1>
      <div>
        <div>
          <h3>Kas yra React?</h3>
          <p>
            React'as šiuo metu yra populiariausias JavaScript framework'as.
          </p>
        </div>
        <div>
          <h3>React'o nauda</h3>
          <ul>
            <li>Labai patogu ir lengva kurti svetaines.</li>
            <li>Lengva perprasti pagrindus.</li>
            <li>Kuriamos aplikacijos yra one-page'ai, kuriame yra atvaizduojamas atitinkamas turinys nuo vartotojo veiksmų.</li>
            <li>Galima kurti ne tik svetaines, bet ir mobiliąsias aplikacijas.</li>
            <li>...</li>
          </ul>
        </div>
        <div>
          <h3>Papildomos nuorodos</h3>
          <a href="https://legacy.reactjs.org/docs/getting-started.html">Legacy Documentation</a><br />
          <a href="https://react.dev/learn">Current Documentation</a><br />
        </div>
      </div>
      <iframe src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="React in 100 Seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
  );
}
 
export default About;