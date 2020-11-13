import styled from 'styled-components';

export default styled.div`
  height: 60px;
  box-shadow: 0 2.5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-flow: flex-start;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  min-width: 250px;
  .logo-container {
    flex: 1;
  }
  .profile-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
`;
