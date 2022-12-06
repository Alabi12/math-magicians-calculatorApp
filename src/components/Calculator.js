import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="c-wrapper">
          <div className="ctc c-screen">
            <div className="c-history-answer">
              <i className="fa-solid fa-clock" />
            </div>
            <div className="c-answer" />
          </div>

          <div className="ctc c-compute">
            <div className="number">0</div>
          </div>

          <div className="c-grid">
            <button type="button" className="top-btn" value="ac">
              ac
            </button>
            <button type="button" className="top-btn" value="pm">
              &plusmn;
            </button>
            <button type="button" className="top-btn" value="%">
              %
            </button>
            <button type="button" className="top-btn special" value="/">
              /
            </button>

            <button type="button" className="normal" value="7">
              7
            </button>
            <button type="button" className="normal" value="8">
              8
            </button>
            <button type="button" className="normal" value="9">
              9
            </button>

            <button type="button" className="special" value="*">
              x
            </button>
            <button type="button" className="normal" value="4">
              4
            </button>
            <button type="button" className="normal" value="5">
              5
            </button>
            <button type="button" className="normal" value="6">
              6
            </button>

            <button type="button" className="special" value="-">
              -
            </button>
            <button type="button" className="normal" value="1">
              1
            </button>
            <button type="button" className="normal" value="2">
              2
            </button>
            <button type="button" className="normal" value="3">
              3
            </button>
            <button type="button" className="special" value="+">
              +
            </button>

            <button type="button" className="span-two normal" value="0">
              0
            </button>
            <button type="button" className="normal" value=".">
              .
            </button>
            <button type="button" className="special" value="=">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
