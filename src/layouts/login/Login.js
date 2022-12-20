import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleCallbackResponse(response) {
    var user = jwtDecode(response.credential);
    if (user) {
      navigate("/overview");
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "560471253139-phseuj0vsdsr6kkfgla3pdaqdbg6h78c.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [handleCallbackResponse]);

  return (
    <section className="login-section">
      <div className="content">
        <div className="login">
          <h3>MAD BOOKS</h3>
          <h1>THE PLACE WHERE YOU'LL GET LOST </h1>
          <p>
            Aeque aeterno sanctus qui ei. Tollit vocent quo ex. Voluptatum
            scripserit his ex, populo ridens ea quo. Quidam imperdiet ius eu,
            pri utroque assueverit id. Aeque aeterno sanctus qui ei. Tollit
            vocent quo ex. Voluptatum scripserit his ex, populo ridens ea quo.
            Quidam imperdiet ius eu, pri utroque assueverit id.
          </p>
          <div id="signInDiv"></div>
        </div>
      </div>
      <div className="login-img">
        <div className="login-img-effect"></div>
      </div>
    </section>
  );
}

export default Login;

//client secret: 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
//clientId: 560471253139-phseuj0vsdsr6kkfgla3pdaqdbg6h78c.apps.googleusercontent.com
