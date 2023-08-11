// Chatbot.js
import { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "botshot-main-widget");
    div.setAttribute("data-token", "3dcac9ba-f86f-4a7f-97d6-8fb03a2021a6");
    div.setAttribute(
      "data-config",
      "Wlt2hOt0fzk0UyPipkP6bcwpgu3yPjqXLuTUYV5ZI68lDjsu5QOF4gEz8tB0TexvY5wZO4zoV05Ubt2+fAPrx9PJisZ4o7LZdNJ2IsfLHUrbpqhQiBmLIRw6WtWf/An0y2yUUMs59Y9tHwwWGvmPJ13BBOGaOtUIYsI3LciKau5YqzkJKgoU+biioabplEMtjTjpEXUwIaCPYbDLgNCaB7vmZeqkMVe8QkyIF+EAIafaPrW7COyuoAf6N5KjwuYOB4LfkMY2yevS3yMmiU2rlq4oKgY62kh68qF+qKLwmKe8o9mx91pz42AlfhcFQmLrpMWu+RwQ3usItmXbN5pU9jPRtmzdrfsSeknGz88c8E/rmlKMl3sWnYHwaAUOriQhgse5htyM+sXasmSbw3a/qtjMWMTHZ4RPZuUZKAPNQH42+8h36ZwKTtwWgTz8I10o/jzaxQCgIxXO1Ee2BtnPOzozn6p7NGDJHeGK0TeX3Y4ExhernavviK0FqK55kRTtxbRaS8p4No4xkATKagGygZEO7NKbhKmVGd859dCXRlMtMK/4Y3/9/mxtJRMj0cdnEYioVwjWmIdWzvzJstiIT/ubHgscGEuTKryyoYoQ2etRfIYKqgQo6t3oh3eZTi7D"
    );
    document.body.appendChild(div);

    let link = document.createElement("link");
    link.href =
      "https://botshot-chatbot.s3.ap-south-1.amazonaws.com/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    let script = document.createElement("script");
    script.src =
      "https://botshot-chatbot.s3.ap-south-1.amazonaws.com/widget.js";
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(div);
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return null; // The component doesn't render anything
}

export default Chatbot;
