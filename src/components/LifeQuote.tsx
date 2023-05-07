import React, {useState, useEffect} from "react";
import Data from "../data/quotesData";
import "./LifeQuote.css"

const LifeQuote = () => {
  const [quotes, setQuotes] = useState({
    quote: "",
    author: "",
  });
  const [quoteBtn, setQuoteBtn] = useState(false);

  useEffect(() => {
    if (!quoteBtn) {
      return setQuoteBtn(true);
    }
    setQuoteBtn(false);
  }, [quotes]);

  const quoteHandler = () => {
    setQuotes((current) => {
      const newQuote = {...current};
      const randomIndex = Math.floor(Math.random() * (Data.length - 1));
      newQuote.quote = Data[randomIndex].quote;
      newQuote.author = Data[randomIndex].author;

      return newQuote;
    })
  };

  return (
    <div>
      <button onClick={quoteHandler}>{quoteBtn ? "글귀 보기" : "글귀 닫기"}</button>
      {!quoteBtn && <h3 className="quotes">{quotes.quote}</h3>}
      {!quoteBtn && <p className="author">{quotes.author}</p>}
    </div>
  );
}

export default LifeQuote;