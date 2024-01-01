import '../../styles/portfolio.scss'

const PortFolio = () => {
  return (
    <>
			<h1 style={{marginTop: "130px", }} className="hello_kitty">My Works</h1>
      <div className="col">
        <div className="side row">
          <a title={'click'} href="https://gryffindo.github.io/Agency/">
            <img src="/img/boot.png" alt="" />
          </a>
        </div>
				<div className="row">
          <a title={'click'} href="https://gryffindo.github.io/Food/">
            <img src="/img/fod.png" alt="" />
          </a>
        </div>
        <div className="row">
          <a title={'click'} href="http://talk-with-sakib.herokuapp.com/">
            <img src="/img/chat.png" alt="" />
          </a>
        </div>
        
      </div>

      <div class="col">
        <div className="side row">
          <a title={'click'} href="https://gryffindo.github.io/Analog-Clock/">
            <img src="/img/clock.png" alt="" />
          </a>
        </div>
        <div className="row">
          <a title={'click'} href="https://gryffindo.github.io/Brigate/">
            <img src="/img/brigate.png" alt="" />
          </a>
        </div>
        <div className="row">
          <a title={'click'} href="https://gryffindo.github.io/Calculator/">
            <img src="/img/calculator.jpg" alt="" />
          </a>
        </div>
      </div>

      <div className="col">
        <div className="side row">
          <a title={'click'} href="https://gryffindo.github.io/Card-UI/">
            <img src="/img/card.png" alt="" />
          </a>
        </div>
        <div className="row">
          <a title={'click'} href="https://gryffindo.github.io/Decimal-To-Binary/">
            <img src="/img/dtobi.png" alt="" />
          </a>
        </div>
        <div className="row">
          <a title={'click'} href="https://gryffindo.github.io/Get-List/">
            <img src="/img/controller.jpg" alt="" />
          </a>
        </div>
      </div>

      <div class="col">
        <div className="side row">
          <a title={'click'} href="https://gryffindo.github.io/flex_magic/">
            <img src="/img/flex.png" alt="" />
          </a>
        </div>
        <div className="row">
          <a title={'click'} href="https://gryffindo.github.io/Parralax-2/">
            <img src="/img/2.5D.png" alt="" />
          </a>
        </div>
        <div className="row">
          <a title={'click'} href="https://gryffindo.github.io/Parallax-1/">
            <img src="/img/moon.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default PortFolio;
