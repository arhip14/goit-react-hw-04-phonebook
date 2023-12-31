import styled from 'styled-components';

export const ContactListContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 15px;
    background-color: #f7f7f7;
    border-radius: 10px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
      transform: translateY(-3px);
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .contact-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .contact-number {
    font-size: 14px;
    color: #555;
  }

  .delete-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }
`;
