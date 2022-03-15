import styled from 'styled-components/macro';

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img{
    width: 13rem;
    margin-bottom: 2rem;
  }
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://spotify-myprofile.herokuapp.com/login';

const Login = () => (
  <StyledLoginContainer>
    <img src='https://links.papareact.com/9xl' alt='spotifylogo' />
    <StyledLoginButton href={LOGIN_URI}>
      Iniciar con Spotify
    </StyledLoginButton>
  </StyledLoginContainer>
);

export default Login;