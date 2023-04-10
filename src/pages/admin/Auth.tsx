import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, fontSizes } from "../../config/style.config";
import useAuth from "../../zustand/useAuth";

const Auth = () => {
  const { user, setUser, loading } = useAuth((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };

    setUser(payload);
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    navigate("/admin");
  }, [user]);

  return (
    <AuthWrapper>
      <div className="container">
        <div className="auth">
          <div className="form">
            <input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>
              {!loading ? "Log In" : "Loading..."}
            </button>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Auth;

const AuthWrapper = styled.div`
  width: 100vw;
  background-color: ${colors.stormy_night};

  .auth {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    max-width: 400px;
    width: 100%;
    padding: 2rem 1rem;
    background-color: ${colors.gun_metal};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      height: 45px;
      outline: none;
      border: 1px solid transparent;
      border-radius: 8px;
      background-color: ${colors.forest_stone};
      padding-left: 1rem;
      color: ${colors.pearl_mist};
      font-size: ${fontSizes.base};
    }

    button {
      height: 45px;
      border: 1px solid transparent;
      background-color: ${colors.golden_sun};
      border-radius: 8px;
      font-weight: 600;
    }
  }
`;
