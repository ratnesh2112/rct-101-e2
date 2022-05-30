import React from "react";

import styles from "./pro.module.css";

import {
  Button,
  ButtonGroup,
  Select,
  
} from '@chakra-ui/react'

const Pagination = () => {

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" className={styles.btn2}>First</Button>
      <Button data-cy="pagination-previous-button" className={styles.btn2}>Previous</Button>
      <Select data-cy="pagination-limit-select" className={styles.btn3}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" className={styles.btn2}>Next</Button>
      <Button data-cy="pagination-last-button" className={styles.btn2}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
