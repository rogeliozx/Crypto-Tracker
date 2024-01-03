import { useState } from "react";
import {
  Container,
  InlineContainer,
  InputCustom,
  Subtitle,
  Title,
} from "../components/styled";
import { Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const element = e.currentTarget as HTMLInputElement;
      const value = element.value.toUpperCase();
      setUser(value);
    }
  };
  return (
   
      <Container>
        {user ? (
          <>
            <Title className="typewriter">Bienvenido</Title>
            <Subtitle className="typewriter">{user}</Subtitle>
            <InlineContainer>
              <Button
                variant="contained"
                color="secondary"
                onClick={()=>navigate("/favorites", { state: { user } })}
                endIcon={<StarBorderIcon />}
              >
                Favoritos
              </Button>
              <Button
                onClick={()=>navigate("/trending", { state: { user } })}
                variant="contained"
                color="secondary"
                endIcon={<TrendingUpIcon />}
              >
                Trending
              </Button>
            </InlineContainer>
          </>
        ) : (
          <>
            <Title className="typewriter">Cyber Tracker</Title>
            <Subtitle className="typewriter-secundary">
              Introduce tu usario
            </Subtitle>
            <InputCustom type="text" onKeyDown={handleKeyDown} />
          </>
        )}
      </Container>
  );
}
